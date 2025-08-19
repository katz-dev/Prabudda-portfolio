#!/bin/bash

# Manual deployment script for testing on the server
# This script mimics what GitHub Actions does

set -e

# Configuration
PROJECT_DIR="/opt/prabudda-portfolio"
REPO_URL=""  # Will be set based on git remote

echo "🚀 Manual deployment script"
echo "=========================="

# Check if we're in a git repository
if [ -d ".git" ]; then
    REPO_URL=$(git remote get-url origin 2>/dev/null || echo "")
    echo "📍 Current repository: $REPO_URL"
else
    echo "❌ Not in a git repository. Please run this from your project directory."
    exit 1
fi

# Check if we have the required files
if [ ! -f "docker-compose.yml" ]; then
    echo "❌ docker-compose.yml not found!"
    exit 1
fi

if [ ! -f "Dockerfile" ]; then
    echo "❌ Dockerfile not found!"
    exit 1
fi

# Check if Docker is running
if ! docker info >/dev/null 2>&1; then
    echo "❌ Docker is not running. Please start Docker first."
    exit 1
fi

# Pull latest changes
echo "📥 Pulling latest changes..."
git pull origin main

# Stop existing containers
echo "🛑 Stopping existing containers..."
docker-compose down 2>/dev/null || true

# Remove old images to save space
echo "🧹 Cleaning up old images..."
docker image prune -f

# Build and start new container
echo "🔨 Building and starting containers..."
docker-compose up -d --build

# Verify deployment
echo "⏳ Verifying deployment..."
sleep 15

if docker-compose ps | grep -q "Up"; then
    echo "✅ Deployment successful!"
    echo ""
    echo "📊 Container status:"
    docker-compose ps
    echo ""
    echo "🌐 Application should be available at:"
    echo "   http://localhost (if running locally)"
    echo "   http://$(curl -s ifconfig.me 2>/dev/null || echo 'YOUR_SERVER_IP') (if running on server)"
    echo ""
    echo "📝 To view logs: docker-compose logs -f"
    echo "🛑 To stop: docker-compose down"
else
    echo "❌ Deployment failed!"
    echo ""
    echo "📝 Container logs:"
    docker-compose logs
    echo ""
    echo "🔍 Troubleshooting tips:"
    echo "1. Check if port 80 is available: sudo netstat -tulpn | grep :80"
    echo "2. Check Docker service: sudo systemctl status docker"
    echo "3. Check container logs: docker-compose logs"
    exit 1
fi

# Final cleanup
echo "🧹 Final cleanup..."
docker system prune -f

echo ""
echo "🎉 Manual deployment completed!"
