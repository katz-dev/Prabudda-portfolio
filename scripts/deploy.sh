#!/bin/bash

# Manual deployment script for Prabudda Portfolio
# Use this script to deploy manually or for initial setup

set -e

PROJECT_DIR="/opt/prabudda-portfolio"
CONTAINER_NAME="prabudda-portfolio"

echo "🚀 Starting deployment of Prabudda Portfolio..."

# Check if we're in the right directory
if [ ! -f "docker-compose.yml" ]; then
    echo "❌ docker-compose.yml not found. Make sure you're in the project directory."
    exit 1
fi

# Pull latest changes from git
echo "📥 Pulling latest changes..."
git pull origin main

# Stop existing containers
echo "🛑 Stopping existing containers..."
docker-compose down || true

# Remove old images to free up space
echo "🧹 Cleaning up old images..."
docker image prune -f

# Build and start new containers
echo "🔨 Building and starting containers..."
docker-compose up -d --build

# Wait for containers to be ready
echo "⏳ Waiting for containers to be ready..."
sleep 15

# Check if containers are running
if docker-compose ps | grep -q "Up"; then
    echo "✅ Deployment successful!"
    echo "🌐 Application is running at: http://$(curl -s ifconfig.me)"
    
    # Show container status
    echo ""
    echo "📊 Container status:"
    docker-compose ps
    
    # Show logs
    echo ""
    echo "📝 Recent logs:"
    docker-compose logs --tail=20
else
    echo "❌ Deployment failed!"
    echo "📝 Container logs:"
    docker-compose logs
    exit 1
fi

# Clean up unused Docker resources
echo "🧹 Final cleanup..."
docker system prune -f

echo ""
echo "🎉 Deployment completed successfully!"
echo "📱 You can now access your portfolio at your server's IP address."
