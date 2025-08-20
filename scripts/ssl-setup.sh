#!/bin/bash

# SSL Setup Script for Prabudda Portfolio with Cloudflare
# This script sets up SSL certificates and configures Nginx for HTTPS

set -e

DOMAIN=$1
EMAIL=${2:-"admin@$DOMAIN"}
PROJECT_DIR="/opt/prabudda-portfolio"

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

echo -e "${GREEN}🔒 SSL Setup Script for Prabudda Portfolio${NC}"
echo "=================================================="

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

# Stop the current application
echo -e "${YELLOW}🛑 Stopping current application...${NC}"
cd $PROJECT_DIR
docker-compose down 2>/dev/null || true

# Update system packages
echo -e "${YELLOW}📦 Updating system packages...${NC}"
apt update

# Install snapd if not already installed
echo -e "${YELLOW}📦 Installing snapd...${NC}"
apt install -y snapd

# Install certbot via snap
echo -e "${YELLOW}🔧 Installing Certbot...${NC}"
snap install core
snap refresh core
snap install --classic certbot

# Create symlink for certbot
ln -sf /snap/bin/certbot /usr/bin/certbot

# Generate SSL certificate
echo -e "${YELLOW}🔐 Generating SSL certificate for $DOMAIN...${NC}"
echo "This will use standalone mode, so make sure ports 80 and 443 are available."

# Kill any processes using port 80 or 443
fuser -k 80/tcp 2>/dev/null || true
fuser -k 443/tcp 2>/dev/null || true

# Generate certificate
certbot certonly --standalone \
    --non-interactive \
    --agree-tos \
    --email "$EMAIL" \
    -d "$DOMAIN" \
    -d "www.$DOMAIN"

if [ $? -ne 0 ]; then
    echo -e "${RED}❌ Certificate generation failed!${NC}"
    echo "Please check:"
    echo "1. Domain DNS is pointing to this server"
    echo "2. Ports 80 and 443 are accessible"
    echo "3. Cloudflare proxy is disabled temporarily during setup"
    exit 1
fi

echo -e "${GREEN}✅ SSL certificate generated successfully!${NC}"

# Create SSL-enabled Nginx configuration
echo -e "${YELLOW}🔧 Creating SSL-enabled Nginx configuration...${NC}"

cat > $PROJECT_DIR/default-ssl.conf << EOF
# HTTP server - redirect to HTTPS
server {
    listen 80;
    server_name $DOMAIN www.$DOMAIN;
    
    # Let's Encrypt challenge
    location /.well-known/acme-challenge/ {
        root /var/www/certbot;
    }
    
    # Redirect all HTTP traffic to HTTPS
    location / {
        return 301 https://\$server_name\$request_uri;
    }
}

# HTTPS server
server {
    listen 443 ssl http2;
    server_name $DOMAIN www.$DOMAIN;
    
    # SSL Configuration
    ssl_certificate /etc/letsencrypt/live/$DOMAIN/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/$DOMAIN/privkey.pem;
    
    # Modern SSL configuration
    ssl_protocols TLSv1.2 TLSv1.3;
    ssl_ciphers ECDHE-ECDSA-AES128-GCM-SHA256:ECDHE-RSA-AES128-GCM-SHA256:ECDHE-ECDSA-AES256-GCM-SHA384:ECDHE-RSA-AES256-GCM-SHA384:ECDHE-ECDSA-CHACHA20-POLY1305:ECDHE-RSA-CHACHA20-POLY1305:DHE-RSA-AES128-GCM-SHA256:DHE-RSA-AES256-GCM-SHA384;
    ssl_prefer_server_ciphers off;
    ssl_session_timeout 1d;
    ssl_session_cache shared:SSL:50m;
    ssl_stapling on;
    ssl_stapling_verify on;
    
    # Security headers
    add_header Strict-Transport-Security "max-age=31536000; includeSubDomains" always;
    add_header X-Frame-Options DENY always;
    add_header X-Content-Type-Options nosniff always;
    add_header X-XSS-Protection "1; mode=block" always;
    add_header Referrer-Policy "strict-origin-when-cross-origin" always;
    add_header Content-Security-Policy "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval'; style-src 'self' 'unsafe-inline'; img-src 'self' data: https:; font-src 'self' data:; connect-src 'self'; frame-ancestors 'none';" always;
    
    # Root directory
    root /usr/share/nginx/html;
    index index.html index.htm;
    
    # Handle Next.js static files
    location /_next/static {
        expires 1y;
        add_header Cache-Control "public, immutable";
    }
    
    # Handle static assets
    location /static {
        expires 1y;
        add_header Cache-Control "public, immutable";
    }
    
    # Handle images and other assets
    location ~* \.(jpg|jpeg|png|gif|ico|svg|webp|woff|woff2|ttf|eot)$ {
        expires 1y;
        add_header Cache-Control "public, immutable";
    }
    
    # Handle CSS and JS files
    location ~* \.(css|js)$ {
        expires 1y;
        add_header Cache-Control "public, immutable";
    }
    
    # Main location block
    location / {
        try_files \$uri \$uri/ \$uri.html /index.html;
        
        # Cache HTML files for shorter time
        location ~* \.html$ {
            expires 1h;
            add_header Cache-Control "public";
        }
    }
    
    # Handle API routes (if any)
    location /api {
        try_files \$uri \$uri/ =404;
    }
    
    # Security - deny access to sensitive files
    location ~ /\. {
        deny all;
        access_log off;
        log_not_found off;
    }
    
    # Deny access to backup files
    location ~* \.(bak|backup|swp|tmp)$ {
        deny all;
        access_log off;
        log_not_found off;
    }
}
EOF

# Update Docker Compose for SSL
echo -e "${YELLOW}🐳 Updating Docker Compose configuration...${NC}"

cat > $PROJECT_DIR/docker-compose-ssl.yml << EOF
services:
  prabudda-portfolio:
    build:
      context: .
      dockerfile: Dockerfile
    container_name: prabudda-portfolio
    ports:
      - "80:80"
      - "443:443"
    restart: unless-stopped
    environment:
      - NODE_ENV=production
    volumes:
      # Mount SSL certificates
      - /etc/letsencrypt/live/$DOMAIN:/etc/letsencrypt/live/$DOMAIN:ro
      - /etc/letsencrypt/archive/$DOMAIN:/etc/letsencrypt/archive/$DOMAIN:ro
      - ./default-ssl.conf:/etc/nginx/conf.d/default.conf:ro
      # Mount certbot webroot for renewals
      - ./certbot-webroot:/var/www/certbot:ro
    healthcheck:
      test: ["CMD", "wget", "--quiet", "--tries=1", "--spider", "https://localhost:443"]
      interval: 30s
      timeout: 10s
      retries: 3
      start_period: 30s
    networks:
      - portfolio-network

  # Certbot service for automatic renewal
  certbot:
    image: certbot/certbot:latest
    container_name: certbot
    volumes:
      - /etc/letsencrypt:/etc/letsencrypt
      - ./certbot-webroot:/var/www/certbot
    command: renew --webroot --webroot-path=/var/www/certbot --quiet
    depends_on:
      - prabudda-portfolio
    networks:
      - portfolio-network

networks:
  portfolio-network:
    driver: bridge
EOF

# Create certbot webroot directory
mkdir -p $PROJECT_DIR/certbot-webroot

# Backup original docker-compose.yml
cp $PROJECT_DIR/docker-compose.yml $PROJECT_DIR/docker-compose-backup.yml

# Replace docker-compose.yml with SSL version
cp $PROJECT_DIR/docker-compose-ssl.yml $PROJECT_DIR/docker-compose.yml

# Set up automatic certificate renewal
echo -e "${YELLOW}⏰ Setting up automatic certificate renewal...${NC}"

# Create renewal script
cat > /usr/local/bin/renew-ssl-prabudda.sh << EOF
#!/bin/bash
cd $PROJECT_DIR
docker-compose exec certbot certbot renew --quiet
if [ \$? -eq 0 ]; then
    docker-compose exec prabudda-portfolio nginx -s reload
fi
EOF

chmod +x /usr/local/bin/renew-ssl-prabudda.sh

# Add to crontab for automatic renewal (every 12 hours)
(crontab -l 2>/dev/null; echo "0 */12 * * * /usr/local/bin/renew-ssl-prabudda.sh") | crontab -

# Start the application with SSL
echo -e "${YELLOW}🚀 Starting application with SSL...${NC}"
cd $PROJECT_DIR
docker-compose up -d --build

# Wait for container to start
echo -e "${YELLOW}⏳ Waiting for application to start...${NC}"
sleep 30

# Test the SSL setup
echo -e "${YELLOW}🧪 Testing SSL configuration...${NC}"

# Test HTTP redirect
echo "Testing HTTP to HTTPS redirect..."
HTTP_RESPONSE=$(curl -s -o /dev/null -w "%{http_code}" http://$DOMAIN || echo "failed")
if [ "$HTTP_RESPONSE" = "301" ] || [ "$HTTP_RESPONSE" = "302" ]; then
    echo -e "${GREEN}✅ HTTP to HTTPS redirect working${NC}"
else
    echo -e "${YELLOW}⚠️  HTTP redirect status: $HTTP_RESPONSE${NC}"
fi

# Test HTTPS
echo "Testing HTTPS connection..."
HTTPS_RESPONSE=$(curl -s -o /dev/null -w "%{http_code}" https://$DOMAIN || echo "failed")
if [ "$HTTPS_RESPONSE" = "200" ]; then
    echo -e "${GREEN}✅ HTTPS connection working${NC}"
else
    echo -e "${RED}❌ HTTPS connection failed: $HTTPS_RESPONSE${NC}"
fi

echo ""
echo -e "${GREEN}🎉 SSL Setup Complete!${NC}"
echo "=================================================="
echo -e "${YELLOW}📋 Next Steps:${NC}"
echo ""
echo "1. 🌐 Update Cloudflare SSL settings:"
echo "   - Set SSL mode to 'Full (strict)'"
echo "   - Enable 'Always Use HTTPS'"
echo "   - Enable 'HSTS'"
echo ""
echo "2. 🔍 Test your site:"
echo "   - HTTP: http://$DOMAIN (should redirect to HTTPS)"
echo "   - HTTPS: https://$DOMAIN"
echo "   - SSL Test: https://www.ssllabs.com/ssltest/analyze.html?d=$DOMAIN"
echo ""
echo "3. 🔄 Certificate auto-renewal is set up via cron job"
echo "   - Runs every 12 hours"
echo "   - Test with: sudo /usr/local/bin/renew-ssl-prabudda.sh"
echo ""
echo "4. 📊 Monitor your application:"
echo "   - Logs: docker-compose logs -f"
echo "   - Status: docker-compose ps"
echo ""
echo -e "${GREEN}🚀 Your portfolio is now secured with SSL!${NC}"

# Show container status
echo -e "${YELLOW}📊 Container Status:${NC}"
docker-compose ps
