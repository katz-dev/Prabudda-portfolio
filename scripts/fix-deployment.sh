#!/bin/bash

# Quick fix script for deployment conflicts
# Run this on your server to resolve container name and network conflicts

set -e

echo "🔧 Fixing deployment conflicts..."

# Stop all containers
echo "🛑 Stopping all containers..."
docker stop $(docker ps -aq) 2>/dev/null || true

# Remove all containers
echo "🗑️ Removing all containers..."
docker rm $(docker ps -aq) 2>/dev/null || true

# Remove all networks
echo "🌐 Removing all networks..."
docker network prune -f 2>/dev/null || true

# Remove all images
echo "🖼️ Removing all images..."
docker image prune -a -f 2>/dev/null || true

# Clean up system
echo "🧹 Cleaning up Docker system..."
docker system prune -a -f 2>/dev/null || true

echo "✅ Conflicts resolved! You can now run deployment again."
echo ""
echo "🚀 To deploy now, run:"
echo "cd /opt/prabudda-portfolio && docker-compose up -d --build"
