# Prabudda Portfolio - Docker Deployment

A modern Next.js portfolio with Docker, Nginx, and CI/CD automation.

## 🚀 Quick Start

### Local Development (Testing Docker Setup)

**Windows:**
```cmd
scripts\local-dev.bat
```

**Linux/Mac:**
```bash
./scripts/local-dev.sh
```

**Manual:**
```bash
docker-compose up -d --build
```

Access at: http://localhost

### Production Deployment

1. **Setup VPS:**
   ```bash
   # Upload and run on your Ubuntu VPS
   ./scripts/server-setup.sh
   ```

2. **Configure GitHub Secrets:**
   - `SERVER_HOST`: Your VPS IP (e.g., `192.168.1.100`)
   - `SERVER_USER`: VPS username (e.g., `root`)
   - `SERVER_PASSWORD`: VPS password
   - `SERVER_PORT`: SSH port (optional, default: 22)

3. **Deploy:**
   ```bash
   git push origin main
   ```

## 📁 Key Files

- `Dockerfile` - Multi-stage build with Nginx
- `docker-compose.yml` - Container orchestration
- `nginx.conf` & `default.conf` - Web server configuration
- `.github/workflows/deploy.yml` - CI/CD pipeline
- `scripts/` - Deployment automation scripts

## 🔧 Commands

```bash
# Start application
docker-compose up -d

# View logs
docker-compose logs -f

# Stop application
docker-compose down

# Rebuild
docker-compose up -d --build

# Manual deployment (on VPS)
./scripts/deploy.sh
```

## 📚 Documentation

See [DEPLOYMENT.md](DEPLOYMENT.md) for complete setup instructions.

## 🏗️ Architecture

- **Frontend**: Next.js (static export)
- **Web Server**: Nginx (containerized)
- **Deployment**: Docker + GitHub Actions
- **Infrastructure**: Ubuntu VPS

## ✨ Features

- ✅ Multi-stage Docker build
- ✅ Nginx with security headers
- ✅ Automated CI/CD with GitHub Actions
- ✅ Password-based VPS authentication
- ✅ Health checks and monitoring
- ✅ Automatic cleanup and optimization
- ✅ Development and production scripts
