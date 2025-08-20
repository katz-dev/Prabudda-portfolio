# Prabudda Portfolio - CI/CD Deployment Guide

This guide will help you set up a complete CI/CD pipeline for your Next.js portfolio using Docker, Nginx, and Ubuntu VPS.

## 🏗️ Architecture Overview

- **Frontend**: Next.js with static export
- **Web Server**: Nginx (inside Docker container)
- **Containerization**: Docker with multi-stage build
- **CI/CD**: GitHub Actions
- **Deployment**: Ubuntu VPS with password authentication

## 📋 Prerequisites

- Ubuntu VPS/Server (18.04 or later)
- GitHub repository
- Domain name (optional)

## 🚀 Setup Instructions

### Step 1: Prepare Your VPS

1. **Connect to your VPS:**
   ```bash
   ssh root@YOUR_VPS_IP
   # or
   ssh ubuntu@YOUR_VPS_IP
   ```

2. **Upload and run the setup script:**
   ```bash
   # Upload the setup script to your VPS
   wget https://raw.githubusercontent.com/YOUR_USERNAME/Prabudda-portfolio/main/scripts/server-setup.sh
   
   # Make it executable
   chmod +x server-setup.sh
   
   # Run the setup script (includes comprehensive cleanup)
   ./server-setup.sh
   ```
   
   **Note**: The setup script now includes comprehensive cleanup that will:
   - Remove all existing Docker containers and images
   - Clean up old project directories
   - Stop conflicting web servers (Apache/Nginx)
   - Free up disk space by cleaning logs and temporary files

3. **Repository setup:**
   The repository will be automatically cloned during the first GitHub Actions deployment. No manual cloning needed!

### Step 2: Configure GitHub Actions Secrets

Go to your GitHub repository → Settings → Secrets and variables → Actions

Add these secrets:

| Secret Name | Description | Example |
|-------------|-------------|---------|
| `SERVER_HOST` | Your VPS IP address | `192.168.1.100` |
| `SERVER_USER` | VPS username | `root` or `ubuntu` |
| `SERVER_PASSWORD` | VPS user password | `your_secure_password` |
| `SERVER_PORT` | SSH port (optional) | `22` |

### Step 3: Initial Deployment

1. **Push your code to the main branch:**
   ```bash
   git add .
   git commit -m "Initial deployment setup"
   git push origin main
   ```

2. **Monitor the deployment:**
   - Go to GitHub → Actions tab
   - Watch the deployment workflow

3. **Verify deployment on your VPS:**
   ```bash
   cd /opt/prabudda-portfolio
   docker-compose ps
   ```

## 🔧 Manual Deployment (Alternative)

If you prefer manual deployment or want to test locally:

**From your development machine:**
```bash
./scripts/manual-deploy.sh
```

**On the server (after first deployment):**
```bash
cd /opt/prabudda-portfolio
./scripts/deploy.sh
```

## 🌐 Accessing Your Application

- **HTTP**: `http://YOUR_VPS_IP`
- **With Domain**: Point your domain's A record to your VPS IP

## 📁 Project Structure

```
Prabudda-portfolio/
├── Dockerfile                 # Multi-stage Docker build
├── docker-compose.yml         # Container orchestration
├── nginx.conf                 # Nginx main configuration
├── default.conf              # Nginx server configuration
├── next.config.ts            # Next.js configuration (static export)
├── .github/workflows/deploy.yml  # CI/CD pipeline
├── scripts/
│   ├── server-setup.sh       # VPS setup script (with cleanup)
│   ├── deploy.sh            # Manual deployment script
│   ├── manual-deploy.sh     # Local manual deployment
│   └── cleanup-server.sh    # Comprehensive server cleanup
└── DEPLOYMENT.md            # This documentation
```

## 🐳 Docker Configuration

### Multi-stage Build Process:
1. **Base**: Node.js Alpine image
2. **Dependencies**: Install npm packages
3. **Builder**: Build Next.js application
4. **Runner**: Nginx Alpine with built files

### Container Features:
- Nginx with optimized configuration
- Security headers
- Gzip compression
- Static file caching
- Health checks
- Non-root user execution

## 🔄 CI/CD Workflow

The GitHub Actions workflow:

1. **Test Stage**:
   - Checkout code
   - Setup Node.js and pnpm
   - Install dependencies
   - Run linting
   - Build application

2. **Deploy Stage** (main branch only):
   - Connect to VPS via SSH (password auth)
   - Pull latest code
   - Stop existing containers
   - Build and start new containers
   - Verify deployment
   - Clean up old images

## 🛠️ Useful Commands

### Docker Commands:
```bash
# View running containers
docker-compose ps

# View logs
docker-compose logs -f

# Restart containers
docker-compose restart

# Stop containers
docker-compose down

# Rebuild and start
docker-compose up -d --build

# Clean up unused images
docker system prune -f
```

### Server Management:
```bash
# Check service status
sudo systemctl status prabudda-portfolio

# Start/stop service
sudo systemctl start prabudda-portfolio
sudo systemctl stop prabudda-portfolio

# View server logs
sudo journalctl -u prabudda-portfolio -f
```

## 🔒 Security Features

- Firewall configuration (UFW)
- Fail2ban for intrusion prevention
- Non-root container execution
- Security headers in Nginx
- Log rotation for Docker containers

## 🚨 Troubleshooting

### Common Issues:

1. **Container won't start:**
   ```bash
   docker-compose logs
   ```

2. **Build fails:**
   ```bash
   docker-compose up --build
   ```

3. **Permission issues:**
   ```bash
   sudo chown -R $USER:$USER /opt/prabudda-portfolio
   ```

4. **Port already in use:**
   ```bash
   sudo netstat -tulpn | grep :80
   sudo systemctl stop apache2  # if Apache is running
   ```

### Log Locations:
- Application logs: `docker-compose logs`
- Nginx logs: Inside container `/var/log/nginx/`
- System logs: `/var/log/syslog`

## 📈 Performance Optimization

- Nginx gzip compression enabled
- Static file caching (1 year)
- Multi-stage Docker build for smaller images
- Image pruning in CI/CD pipeline

## 🔄 Updates and Maintenance

### Automatic Updates:
- Push to main branch triggers deployment
- Old images are automatically cleaned up

### Manual Updates:
```bash
cd /opt/prabudda-portfolio
git pull origin main
./scripts/deploy.sh

# Or use the manual deployment script
./scripts/manual-deploy.sh
```

### System Maintenance:
```bash
# Update system packages
sudo apt update && sudo apt upgrade -y

# Clean Docker system
docker system prune -a -f

# Comprehensive server cleanup (recommended monthly)
./scripts/cleanup-server.sh

# Check disk usage
df -h
```

## 📞 Support

For issues or questions:
1. Check the logs first
2. Verify all secrets are set correctly
3. Ensure VPS has sufficient resources
4. Check firewall settings

---

**Note**: Replace `YOUR_USERNAME` and `YOUR_VPS_IP` with your actual values throughout this guide.
