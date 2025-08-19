#!/bin/bash

# GitHub Actions deployment script
# This script is designed to be more robust and handle signals properly

set -e

# Trap signals to ensure clean exit
trap 'echo "🛑 Deployment interrupted"; exit 130' INT TERM

# Set project directory
PROJECT_DIR="/opt/prabudda-portfolio"
REPO_URL="$1"  # Pass repository URL as argument

echo "🚀 Starting deployment..."

# Create project directory if it doesn't exist
if [ ! -d "$PROJECT_DIR" ]; then
  echo "📁 Creating project directory..."
  sudo mkdir -p "$PROJECT_DIR"
  sudo chown $USER:$USER "$PROJECT_DIR"
fi

# Navigate to project directory
cd "$PROJECT_DIR"

# Initialize git repository if needed
if [ ! -d ".git" ]; then
  echo "📥 Cloning repository..."
  git clone "$REPO_URL" .
else
  echo "📥 Pulling latest changes..."
  git fetch origin
  git reset --hard origin/main
fi

# Ensure we have the required files
if [ ! -f "docker-compose.yml" ]; then
  echo "❌ docker-compose.yml not found!"
  exit 1
fi

if [ ! -f "Dockerfile" ]; then
  echo "❌ Dockerfile not found!"
  exit 1
fi

# Stop existing containers gracefully
echo "🛑 Stopping existing containers..."
docker-compose down --timeout 30 2>/dev/null || true

# Force remove any containers with the same name
echo "🧹 Removing conflicting containers..."
docker rm -f prabudda-portfolio 2>/dev/null || true

# Remove conflicting networks
echo "🌐 Cleaning up networks..."
docker network rm prabudda-portfolio_portfolio-network 2>/dev/null || true
docker network prune -f 2>/dev/null || true

# Stop system services that might use port 80 (safer approach)
echo "🔌 Stopping system web services..."
sudo systemctl stop nginx 2>/dev/null || true
sudo systemctl stop apache2 2>/dev/null || true
sudo systemctl stop httpd 2>/dev/null || true

# Wait a moment for services to stop
sleep 2

# Check if port 80 is still in use
if command -v netstat >/dev/null && netstat -tulpn | grep -q ":80 "; then
  echo "⚠️  Port 80 still in use, checking processes..."
  netstat -tulpn | grep ":80 " || true
fi

# Remove old images to save space
echo "🧹 Cleaning up old images..."
docker image prune -f

# Build and start new container with timeout
echo "🔨 Building and starting containers..."
timeout 300 docker-compose up -d --build || {
  echo "❌ Build timeout or failed!"
  echo "📝 Showing logs:"
  docker-compose logs --tail=20
  exit 1
}

# Verify deployment with retries
echo "⏳ Verifying deployment..."
RETRY_COUNT=0
MAX_RETRIES=6

while [ $RETRY_COUNT -lt $MAX_RETRIES ]; do
  sleep 5
  if docker-compose ps | grep -q "Up"; then
    echo "✅ Deployment successful!"
    echo "📊 Container status:"
    docker-compose ps
    
    # Show recent logs
    echo "📝 Recent logs:"
    docker-compose logs --tail=10
    
    # Show port status
    echo "🌐 Port status:"
    docker-compose ps --format "table {{.Names}}\t{{.Ports}}"
    
    break
  else
    RETRY_COUNT=$((RETRY_COUNT + 1))
    echo "⏳ Attempt $RETRY_COUNT/$MAX_RETRIES - waiting for containers..."
    if [ $RETRY_COUNT -eq $MAX_RETRIES ]; then
      echo "❌ Deployment failed after $MAX_RETRIES attempts!"
      echo "📝 Container logs:"
      docker-compose logs
      echo "📊 Container status:"
      docker-compose ps
      exit 1
    fi
  fi
done

# Final cleanup
echo "🧹 Final cleanup..."
docker system prune -f

echo "🎉 Deployment completed successfully!"
