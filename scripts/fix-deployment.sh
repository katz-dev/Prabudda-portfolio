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

# Check what's using port 80
echo "🔍 Checking what's using port 80..."
netstat -tulpn | grep :80 || echo "Port 80 appears to be free"

# Kill any process using port 80
echo "🔌 Freeing up port 80..."
sudo fuser -k 80/tcp 2>/dev/null || true
sudo pkill -f "nginx" 2>/dev/null || true
sudo pkill -f "apache" 2>/dev/null || true

# Stop system services that might use port 80
echo "🛑 Stopping system web servers..."
sudo systemctl stop nginx 2>/dev/null || true
sudo systemctl stop apache2 2>/dev/null || true
sudo systemctl stop httpd 2>/dev/null || true

echo "✅ Conflicts resolved! You can now run deployment again."
echo ""
echo "🚀 To deploy now, run:"
echo "cd /opt/prabudda-portfolio && docker-compose up -d --build"
