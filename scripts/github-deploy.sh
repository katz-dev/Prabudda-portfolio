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

# Stop existing containers
echo "🛑 Stopping existing containers..."
docker-compose down 2>/dev/null || true

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
