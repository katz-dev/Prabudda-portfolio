#!/bin/bash

# Server Cleanup Script for Prabudda Portfolio
# This script cleans up Docker containers, images, system files, and frees up disk space
# Can be run independently or as part of server maintenance

set -e

echo "🧹 Starting comprehensive server cleanup..."

# Function to show disk usage
show_disk_usage() {
    echo "💾 Current disk usage:"
    df -h / | grep -E "(Filesystem|/dev/)"
    echo ""
}

# Show initial disk usage
echo "📊 Before cleanup:"
show_disk_usage

# Stop and clean Docker if it exists
if command -v docker &> /dev/null; then
    echo "🐳 Cleaning up Docker..."
    
    # Stop all running containers
    echo "  🛑 Stopping all containers..."
    sudo docker stop $(sudo docker ps -aq) 2>/dev/null || true
    
    # Remove all containers
    echo "  🗑️ Removing all containers..."
    sudo docker rm $(sudo docker ps -aq) 2>/dev/null || true
    
    # Remove all images
    echo "  🖼️ Removing all images..."
    sudo docker rmi $(sudo docker images -q) 2>/dev/null || true
    
    # Remove all volumes
    echo "  📦 Removing all volumes..."
    sudo docker volume prune -f 2>/dev/null || true
    
    # Remove all networks
    echo "  🌐 Removing unused networks..."
    sudo docker network prune -f 2>/dev/null || true
    
    # Complete system cleanup
    echo "  🧹 Complete Docker system cleanup..."
    sudo docker system prune -a -f 2>/dev/null || true
    
    # Remove Docker build cache
    echo "  🏗️ Removing build cache..."
    sudo docker builder prune -a -f 2>/dev/null || true
else
    echo "🐳 Docker not found, skipping Docker cleanup"
fi

# Clean up package cache
echo "📦 Cleaning up package cache..."
sudo apt update
sudo apt autoremove -y
sudo apt autoclean
sudo apt clean

# Clean up logs
echo "📝 Cleaning up logs..."
# Clean systemd journal logs older than 7 days
sudo journalctl --vacuum-time=7d 2>/dev/null || true
# Clean old log files
sudo find /var/log -name "*.log" -type f -mtime +7 -delete 2>/dev/null || true
sudo find /var/log -name "*.log.*" -type f -mtime +7 -delete 2>/dev/null || true
# Clean rotated logs
sudo find /var/log -name "*.gz" -type f -mtime +7 -delete 2>/dev/null || true

# Clean up temporary files
echo "🗑️ Cleaning up temporary files..."
sudo rm -rf /tmp/*
sudo rm -rf /var/tmp/*
sudo rm -rf /var/cache/apt/archives/*.deb

# Clean up user cache (if safe)
echo "👤 Cleaning up user cache..."
rm -rf ~/.cache/* 2>/dev/null || true
rm -rf ~/.npm/_cacache 2>/dev/null || true
rm -rf ~/.yarn/cache 2>/dev/null || true

# Clean up old kernels (keep current and one previous)
echo "🔧 Cleaning up old kernels..."
sudo apt autoremove --purge -y 2>/dev/null || true

# Clean up snap packages cache (if snap is installed)
if command -v snap &> /dev/null; then
    echo "📱 Cleaning up snap cache..."
    sudo snap set system refresh.retain=2 2>/dev/null || true
fi

# Clean up pip cache (if pip is installed)
if command -v pip &> /dev/null; then
    echo "🐍 Cleaning up pip cache..."
    pip cache purge 2>/dev/null || true
fi
if command -v pip3 &> /dev/null; then
    echo "🐍 Cleaning up pip3 cache..."
    pip3 cache purge 2>/dev/null || true
fi

# Clean up npm cache (if npm is installed)
if command -v npm &> /dev/null; then
    echo "📦 Cleaning up npm cache..."
    npm cache clean --force 2>/dev/null || true
fi

# Stop conflicting services that might use port 80
echo "🛑 Stopping conflicting services..."
sudo systemctl stop apache2 2>/dev/null || true
sudo systemctl stop nginx 2>/dev/null || true
sudo fuser -k 80/tcp 2>/dev/null || true

# Clean up old project files if they exist
if [ -d "/opt/prabudda-portfolio" ]; then
    echo "📁 Found old project directory. Do you want to remove it? (y/N)"
    read -r response
    if [[ "$response" =~ ^([yY][eE][sS]|[yY])$ ]]; then
        echo "🗑️ Removing old project directory..."
        sudo rm -rf /opt/prabudda-portfolio
    else
        echo "📁 Keeping existing project directory"
    fi
fi

# Show final disk usage
echo ""
echo "📊 After cleanup:"
show_disk_usage

# Show cleanup summary
echo "✅ Cleanup completed successfully!"
echo ""
echo "📋 What was cleaned:"
echo "  🐳 Docker containers, images, volumes, and cache"
echo "  📦 Package cache and unused packages"
echo "  📝 Old log files (older than 7 days)"
echo "  🗑️ Temporary files"
echo "  👤 User cache files"
echo "  🔧 Old kernel versions"
echo "  🛑 Conflicting web services"
echo ""
echo "💡 Tips:"
echo "  - Run this script regularly to keep your server clean"
echo "  - Monitor disk usage with: df -h"
echo "  - Check Docker usage with: docker system df"
