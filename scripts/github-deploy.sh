#!/bin/bash

# Simple GitHub deployment script for Prabudda Portfolio
# This script is called by GitHub Actions

set -e

REPO_URL="$1"
PROJECT_DIR="/opt/prabudda-portfolio"

echo "🚀 Starting deployment from GitHub Actions"
echo "Repository: $REPO_URL"

# Create project directory if it doesn't exist
sudo mkdir -p "$PROJECT_DIR"
cd "$PROJECT_DIR"

# Clone or update repository
if [ -d ".git" ]; then
    echo "📥 Updating existing repository..."
    git pull origin main
else
    echo "📥 Cloning repository..."
    git clone "$REPO_URL" .
fi

# Stop existing containers more aggressively
echo "🛑 Stopping existing containers..."
# Stop any container using port 80
if docker ps -q --filter "publish=80" | grep -q .; then
    echo "Found containers using port 80, stopping them..."
    docker ps -q --filter "publish=80" | xargs -r docker stop
fi
# Stop any container with the same name
if docker ps -a -q --filter "name=prabudda-portfolio" | grep -q .; then
    echo "Found existing prabudda-portfolio container, stopping and removing..."
    docker stop prabudda-portfolio 2>/dev/null || true
    docker rm prabudda-portfolio 2>/dev/null || true
fi
# Stop docker-compose services
echo "Stopping docker-compose services..."
docker-compose down 2>/dev/null || true

# Wait a moment for ports to be released
echo "⏳ Waiting for ports to be released..."
sleep 5

# Verify port 80 is free
if netstat -tuln 2>/dev/null | grep -q ":80 "; then
    echo "⚠️  Port 80 is still in use, trying to free it..."
    # Try to kill any process using port 80
    sudo fuser -k 80/tcp 2>/dev/null || true
    sleep 3
fi

# Clean up old images
echo "🧹 Cleaning up old images..."
docker system prune -f

# Build and start containers
echo "🔨 Building and starting containers..."
docker-compose up -d --build

# Verify deployment
echo "⏳ Verifying deployment..."
sleep 10

if docker-compose ps | grep -q "Up"; then
    echo "✅ Deployment successful!"
else
    echo "❌ Deployment failed!"
    docker-compose logs
    exit 1
fi

echo "🎉 GitHub deployment completed!"
