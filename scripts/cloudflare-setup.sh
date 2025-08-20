#!/bin/bash

# Cloudflare Setup Helper Script
# This script provides guidance and utilities for Cloudflare configuration

set -e

DOMAIN=$1
PROJECT_DIR="/opt/prabudda-portfolio"

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

echo -e "${GREEN}☁️  Cloudflare Setup Helper for Prabudda Portfolio${NC}"
echo "====================================================="

# Check if domain is provided
if [ -z "$DOMAIN" ]; then
    echo -e "${RED}❌ Error: Domain name is required${NC}"
    echo "Usage: $0 <domain>"
    echo "Example: $0 prabudda.dev"
    exit 1
fi

echo -e "${YELLOW}📋 Domain: $DOMAIN${NC}"
echo ""

# Function to check DNS propagation
check_dns() {
    echo -e "${BLUE}🔍 Checking DNS propagation for $DOMAIN...${NC}"
    
    # Get server IP
    SERVER_IP=$(curl -s ifconfig.me || echo "Unable to detect")
    echo "Server IP: $SERVER_IP"
    
    # Check A record
    DNS_IP=$(nslookup $DOMAIN | grep -A1 "Name:" | tail -1 | awk '{print $2}' 2>/dev/null || echo "Not found")
    echo "DNS A record points to: $DNS_IP"
    
    if [ "$SERVER_IP" = "$DNS_IP" ]; then
        echo -e "${GREEN}✅ DNS is correctly pointing to this server${NC}"
        return 0
    else
        echo -e "${RED}❌ DNS is not pointing to this server${NC}"
        return 1
    fi
}

# Function to test Cloudflare proxy status
check_cloudflare_proxy() {
    echo -e "${BLUE}🔍 Checking Cloudflare proxy status...${NC}"
    
    # Check if domain is behind Cloudflare
    CF_CHECK=$(curl -s -I "http://$DOMAIN" | grep -i "cf-ray" || echo "")
    
    if [ -n "$CF_CHECK" ]; then
        echo -e "${GREEN}✅ Domain is proxied through Cloudflare${NC}"
        
        # Get Cloudflare IP
        CF_IP=$(nslookup $DOMAIN | grep -A1 "Name:" | tail -1 | awk '{print $2}' 2>/dev/null || echo "Unknown")
        echo "Cloudflare IP: $CF_IP"
    else
        echo -e "${YELLOW}⚠️  Domain might not be proxied through Cloudflare${NC}"
        echo "This could be normal if you just set it up. Wait a few minutes and try again."
    fi
}

# Function to show Cloudflare configuration checklist
show_cloudflare_checklist() {
    echo -e "${BLUE}📋 Cloudflare Configuration Checklist:${NC}"
    echo ""
    echo "1. 🌐 DNS Records:"
    echo "   ✓ A record: @ → Your server IP"
    echo "   ✓ CNAME record: www → $DOMAIN"
    echo "   ✓ Both records should have orange cloud (proxied)"
    echo ""
    echo "2. 🔒 SSL/TLS Settings:"
    echo "   ✓ Encryption mode: Full (strict)"
    echo "   ✓ Always Use HTTPS: ON"
    echo "   ✓ HSTS: ON"
    echo "   ✓ Automatic HTTPS Rewrites: ON"
    echo ""
    echo "3. ⚡ Performance Settings:"
    echo "   ✓ Auto Minify: HTML, CSS, JS"
    echo "   ✓ Brotli: ON"
    echo "   ✓ Browser Cache TTL: 1 month"
    echo ""
    echo "4. 🛡️  Security Settings:"
    echo "   ✓ Security Level: Medium"
    echo "   ✓ Bot Fight Mode: ON"
    echo ""
}

# Function to test SSL configuration
test_ssl() {
    echo -e "${BLUE}🔒 Testing SSL configuration...${NC}"
    
    # Test HTTP redirect
    echo "Testing HTTP to HTTPS redirect..."
    HTTP_STATUS=$(curl -s -o /dev/null -w "%{http_code}" -L "http://$DOMAIN" 2>/dev/null || echo "failed")
    
    if [ "$HTTP_STATUS" = "200" ]; then
        echo -e "${GREEN}✅ HTTP redirect working${NC}"
    else
        echo -e "${RED}❌ HTTP redirect failed (Status: $HTTP_STATUS)${NC}"
    fi
    
    # Test HTTPS
    echo "Testing HTTPS connection..."
    HTTPS_STATUS=$(curl -s -o /dev/null -w "%{http_code}" "https://$DOMAIN" 2>/dev/null || echo "failed")
    
    if [ "$HTTPS_STATUS" = "200" ]; then
        echo -e "${GREEN}✅ HTTPS connection working${NC}"
    else
        echo -e "${RED}❌ HTTPS connection failed (Status: $HTTPS_STATUS)${NC}"
    fi
    
    # Check SSL certificate
    echo "Checking SSL certificate..."
    SSL_INFO=$(echo | openssl s_client -connect $DOMAIN:443 -servername $DOMAIN 2>/dev/null | openssl x509 -noout -issuer -subject 2>/dev/null || echo "Failed to get SSL info")
    
    if [[ $SSL_INFO == *"Let's Encrypt"* ]]; then
        echo -e "${GREEN}✅ Let's Encrypt SSL certificate detected${NC}"
    elif [[ $SSL_INFO == *"Cloudflare"* ]]; then
        echo -e "${GREEN}✅ Cloudflare SSL certificate detected${NC}"
    else
        echo -e "${YELLOW}⚠️  SSL certificate info: $SSL_INFO${NC}"
    fi
}

# Function to show useful commands
show_useful_commands() {
    echo -e "${BLUE}🛠️  Useful Commands:${NC}"
    echo ""
    echo "Check DNS propagation:"
    echo "  dig $DOMAIN"
    echo "  nslookup $DOMAIN"
    echo ""
    echo "Test SSL certificate:"
    echo "  curl -I https://$DOMAIN"
    echo "  openssl s_client -connect $DOMAIN:443 -servername $DOMAIN"
    echo ""
    echo "Online tools:"
    echo "  DNS: https://dnschecker.org/#A/$DOMAIN"
    echo "  SSL: https://www.ssllabs.com/ssltest/analyze.html?d=$DOMAIN"
    echo "  Cloudflare: https://www.cloudflare.com/diagnostic-center/"
    echo ""
}

# Main execution
echo -e "${YELLOW}🚀 Running Cloudflare setup checks...${NC}"
echo ""

# Check DNS
if check_dns; then
    DNS_OK=true
else
    DNS_OK=false
fi

echo ""

# Check Cloudflare proxy
check_cloudflare_proxy

echo ""

# Test SSL if DNS is working
if [ "$DNS_OK" = true ]; then
    test_ssl
else
    echo -e "${YELLOW}⏳ Skipping SSL tests - DNS not ready${NC}"
fi

echo ""

# Show checklist
show_cloudflare_checklist

echo ""

# Show useful commands
show_useful_commands

echo ""
echo -e "${GREEN}📋 Summary:${NC}"
if [ "$DNS_OK" = true ]; then
    echo -e "${GREEN}✅ DNS is configured correctly${NC}"
    echo -e "${BLUE}ℹ️  You can now run the SSL setup script:${NC}"
    echo "   sudo ./scripts/ssl-setup.sh $DOMAIN"
else
    echo -e "${RED}❌ DNS needs to be configured first${NC}"
    echo -e "${BLUE}ℹ️  Please check your Cloudflare DNS settings${NC}"
fi

echo ""
echo -e "${YELLOW}📞 Need help?${NC}"
echo "1. Check Cloudflare dashboard for DNS settings"
echo "2. Wait 5-10 minutes for DNS propagation"
echo "3. Ensure nameservers are updated at your domain registrar"
echo "4. Make sure Cloudflare proxy (orange cloud) is enabled"
