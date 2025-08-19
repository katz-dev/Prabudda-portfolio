#!/bin/bash

# Ubuntu Server Setup Script for Prabudda Portfolio
# This script sets up Docker, Docker Compose, and prepares the server for deployment

set -e

echo "🚀 Setting up Ubuntu server for Prabudda Portfolio deployment..."

# Update system packages
echo "📦 Updating system packages..."
sudo apt update && sudo apt upgrade -y

# Install required packages
echo "📦 Installing required packages..."
sudo apt install -y \
    apt-transport-https \
    ca-certificates \
    curl \
    gnupg \
    lsb-release \
    git \
    ufw \
    fail2ban

# Install Docker
echo "🐳 Installing Docker..."
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo gpg --dearmor -o /usr/share/keyrings/docker-archive-keyring.gpg

echo \
  "deb [arch=$(dpkg --print-architecture) signed-by=/usr/share/keyrings/docker-archive-keyring.gpg] https://download.docker.com/linux/ubuntu \
  $(lsb_release -cs) stable" | sudo tee /etc/apt/sources.list.d/docker.list > /dev/null

sudo apt update
sudo apt install -y docker-ce docker-ce-cli containerd.io docker-buildx-plugin docker-compose-plugin

# Add current user to docker group
sudo usermod -aG docker $USER

# Start and enable Docker
sudo systemctl start docker
sudo systemctl enable docker

# Install Docker Compose (standalone)
echo "🐳 Installing Docker Compose..."
DOCKER_COMPOSE_VERSION=$(curl -s https://api.github.com/repos/docker/compose/releases/latest | grep -Po '"tag_name": "\K.*?(?=")')
sudo curl -L "https://github.com/docker/compose/releases/download/${DOCKER_COMPOSE_VERSION}/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
sudo chmod +x /usr/local/bin/docker-compose

# Create project directory
echo "📁 Creating project directory..."
sudo mkdir -p /opt/prabudda-portfolio
sudo chown $USER:$USER /opt/prabudda-portfolio

# Clone the repository (you'll need to update this URL)
echo "📥 Cloning repository..."
cd /opt/prabudda-portfolio
# Replace with your actual GitHub repository URL
# git clone https://github.com/YOUR_USERNAME/Prabudda-portfolio.git .

# Set up firewall
echo "🔥 Setting up firewall..."
sudo ufw default deny incoming
sudo ufw default allow outgoing
sudo ufw allow ssh
sudo ufw allow 80/tcp
sudo ufw allow 443/tcp
sudo ufw --force enable

# Configure fail2ban
echo "🛡️ Configuring fail2ban..."
sudo systemctl start fail2ban
sudo systemctl enable fail2ban

# Create deployment user (optional)
echo "👤 Creating deployment user..."
sudo useradd -m -s /bin/bash deploy || true
sudo usermod -aG docker deploy || true

# Set up log rotation for Docker
echo "📝 Setting up log rotation..."
sudo tee /etc/logrotate.d/docker > /dev/null <<EOF
/var/lib/docker/containers/*/*.log {
    rotate 7
    daily
    compress
    size=10M
    missingok
    delaycompress
    copytruncate
}
EOF

# Create systemd service for auto-startup
echo "⚙️ Creating systemd service..."
sudo tee /etc/systemd/system/prabudda-portfolio.service > /dev/null <<EOF
[Unit]
Description=Prabudda Portfolio Docker Compose
Requires=docker.service
After=docker.service

[Service]
Type=oneshot
RemainAfterExit=yes
WorkingDirectory=/opt/prabudda-portfolio
ExecStart=/usr/local/bin/docker-compose up -d
ExecStop=/usr/local/bin/docker-compose down
TimeoutStartSec=0

[Install]
WantedBy=multi-user.target
EOF

sudo systemctl daemon-reload
sudo systemctl enable prabudda-portfolio.service

echo "✅ Server setup completed successfully!"
echo ""
echo "📋 Next steps:"
echo "1. Update the GitHub repository URL in this script and clone it manually"
echo "2. Set up GitHub Actions secrets:"
echo "   - SERVER_HOST: Your VPS IP address"
echo "   - SERVER_USER: VPS username (e.g., root or ubuntu)"
echo "   - SERVER_PASSWORD: VPS user password"
echo "   - SERVER_PORT: SSH port (optional, defaults to 22)"
echo "3. Push your code to trigger the first deployment"
echo ""
echo "🔄 To start the application manually:"
echo "cd /opt/prabudda-portfolio && docker-compose up -d"
echo ""
echo "⚠️  Please reboot the server or log out and back in for Docker group changes to take effect."
