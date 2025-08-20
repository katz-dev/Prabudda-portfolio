#!/bin/bash

# Quick SSL Setup Script for Prabudda Portfolio
# This script combines Cloudflare checks and SSL setup

set -e

DOMAIN=$1
EMAIL=${2:-"admin@$DOMAIN"}
PROJECT_DIR="/opt/prabudda-portfolio"

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

echo -e "${GREEN}🚀 Quick SSL Setup for Prabudda Portfolio${NC}"
echo "=============================================="

# Check if domain is provided
if [ -z "$DOMAIN" ]; then
    echo -e "${RED}❌ Error: Domain name is required${NC}"
    echo "Usage: $0 <domain> [email]"
    echo "Example: $0 prabudda.dev admin@prabudda.dev"
    exit 1
fi

echo -e "${YELLOW}📋 Configuration:${NC}"
echo "Domain: $DOMAIN"
echo "Email: $EMAIL"
echo "Project Directory: $PROJECT_DIR"
echo ""

# Check if running as root or with sudo
if [ "$EUID" -ne 0 ]; then
    echo -e "${RED}❌ Please run this script with sudo${NC}"
    exit 1
fi

# Step 1: Check Cloudflare configuration
echo -e "${BLUE}🔍 Step 1: Checking Cloudflare configuration...${NC}"
if [ -f "./scripts/cloudflare-setup.sh" ]; then
    chmod +x ./scripts/cloudflare-setup.sh
    ./scripts/cloudflare-setup.sh $DOMAIN
else
    echo -e "${YELLOW}⚠️  Cloudflare setup script not found, continuing...${NC}"
fi

echo ""
echo -e "${YELLOW}❓ Is your domain properly configured in Cloudflare?${NC}"
echo "   - DNS A record points to this server"
echo "   - Cloudflare proxy (orange cloud) is enabled"
echo "   - SSL mode is set to 'Full (strict)'"
echo ""
read -p "Continue with SSL setup? (y/N): " -n 1 -r
echo
if [[ ! $REPLY =~ ^[Yy]$ ]]; then
    echo -e "${YELLOW}⏹️  Setup cancelled. Please configure Cloudflare first.${NC}"
    echo ""
    echo "📋 Cloudflare Setup Checklist:"
    echo "1. Add your domain to Cloudflare"
    echo "2. Update nameservers at your domain registrar"
    echo "3. Set DNS A record: @ → Your server IP (with proxy enabled)"
    echo "4. Set CNAME record: www → your-domain.com (with proxy enabled)"
    echo "5. SSL/TLS → Overview → Set encryption mode to 'Full (strict)'"
    echo "6. SSL/TLS → Edge Certificates → Enable 'Always Use HTTPS'"
    exit 0
fi

# Step 2: Run SSL setup
echo -e "${BLUE}🔒 Step 2: Setting up SSL certificate...${NC}"
if [ -f "./scripts/ssl-setup.sh" ]; then
    chmod +x ./scripts/ssl-setup.sh
    ./scripts/ssl-setup.sh $DOMAIN $EMAIL
else
    echo -e "${RED}❌ SSL setup script not found!${NC}"
    exit 1
fi

# Step 3: Final verification
echo ""
echo -e "${BLUE}🧪 Step 3: Final verification...${NC}"
sleep 10  # Wait for services to start

# Test HTTP redirect
echo "Testing HTTP to HTTPS redirect..."
HTTP_STATUS=$(curl -s -o /dev/null -w "%{http_code}" -L "http://$DOMAIN" 2>/dev/null || echo "failed")
if [ "$HTTP_STATUS" = "200" ]; then
    echo -e "${GREEN}✅ HTTP redirect working${NC}"
else
    echo -e "${YELLOW}⚠️  HTTP redirect status: $HTTP_STATUS${NC}"
fi

# Test HTTPS
echo "Testing HTTPS connection..."
HTTPS_STATUS=$(curl -s -o /dev/null -w "%{http_code}" "https://$DOMAIN" 2>/dev/null || echo "failed")
if [ "$HTTPS_STATUS" = "200" ]; then
    echo -e "${GREEN}✅ HTTPS connection working${NC}"
else
    echo -e "${YELLOW}⚠️  HTTPS connection status: $HTTPS_STATUS${NC}"
fi

echo ""
echo -e "${GREEN}🎉 Quick SSL Setup Complete!${NC}"
echo "=============================================="
echo ""
echo -e "${YELLOW}🌐 Your website is now available at:${NC}"
echo "   https://$DOMAIN"
echo "   https://www.$DOMAIN"
echo ""
echo -e "${YELLOW}🔍 Test your setup:${NC}"
echo "   SSL Test: https://www.ssllabs.com/ssltest/analyze.html?d=$DOMAIN"
echo "   DNS Test: https://dnschecker.org/#A/$DOMAIN"
echo ""
echo -e "${YELLOW}📊 Monitor your application:${NC}"
echo "   cd $PROJECT_DIR"
echo "   docker-compose logs -f"
echo "   docker-compose ps"
echo ""
echo -e "${GREEN}🚀 Your Prabudda Portfolio is now secured with SSL!${NC}"
