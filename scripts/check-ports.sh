#!/bin/bash

# Port checking and troubleshooting script
# Use this to diagnose port conflicts before deployment

echo "🔍 Port Conflict Diagnostic Tool"
echo "================================="

# Check if port 80 is in use
echo ""
echo "📊 Checking port 80 usage..."
if netstat -tulpn | grep -q ":80 "; then
    echo "⚠️  Port 80 is in use:"
    netstat -tulpn | grep ":80 "
    echo ""
    
    # Try to identify the process
    echo "🔍 Process details:"
    sudo lsof -i :80 2>/dev/null || echo "Could not identify process"
    echo ""
    
    # Check common web servers
    echo "🌐 Checking common web servers..."
    
    if systemctl is-active --quiet nginx 2>/dev/null; then
        echo "  ❌ Nginx is running (system service)"
        echo "     To stop: sudo systemctl stop nginx"
    else
        echo "  ✅ Nginx system service is not running"
    fi
    
    if systemctl is-active --quiet apache2 2>/dev/null; then
        echo "  ❌ Apache2 is running (system service)"
        echo "     To stop: sudo systemctl stop apache2"
    else
        echo "  ✅ Apache2 system service is not running"
    fi
    
    if systemctl is-active --quiet httpd 2>/dev/null; then
        echo "  ❌ HTTPd is running (system service)"
        echo "     To stop: sudo systemctl stop httpd"
    else
        echo "  ✅ HTTPd system service is not running"
    fi
    
    # Check Docker containers
    echo ""
    echo "🐳 Checking Docker containers using port 80..."
    docker ps --format "table {{.Names}}\t{{.Ports}}" | grep ":80" || echo "  ✅ No Docker containers using port 80"
    
else
    echo "✅ Port 80 is available"
fi

# Check port 443 (HTTPS) as well
echo ""
echo "📊 Checking port 443 usage..."
if netstat -tulpn | grep -q ":443 "; then
    echo "⚠️  Port 443 is in use:"
    netstat -tulpn | grep ":443 "
else
    echo "✅ Port 443 is available"
fi

# Show all listening ports
echo ""
echo "📋 All listening ports:"
netstat -tulpn | grep LISTEN | head -10

echo ""
echo "🔧 Quick fixes:"
echo "1. Stop all web servers: sudo systemctl stop nginx apache2 httpd"
echo "2. Kill processes on port 80: sudo fuser -k 80/tcp"
echo "3. Run the fix script: ./scripts/fix-deployment.sh"
echo "4. Check Docker containers: docker ps"

echo ""
echo "💡 Alternative solutions:"
echo "1. Change Docker port mapping to 8080:80 in docker-compose.yml"
echo "2. Use different port like 3000:80 for testing"
