# Prabudda Perera - Portfolio

Personal portfolio website showcasing my work as a Software Support Engineer and Full-Stack Developer.

## 🚀 Quick Start

```bash
# Install dependencies
pnpm install

# Run development server
pnpm dev

# Build for production
pnpm build
```

## 🛠️ Built With

- Next.js 15
- TypeScript
- Tailwind CSS
- Framer Motion

## ✨ Features

- Dark/Light theme
- Responsive design
- Smooth animations
- Glassmorphism UI

## 📝 Update Portfolio

Edit `src/data/portfolio.ts` to update your information.

## 🚢 Deployment

### Deploying to Dokploy

1. **Create New Application** in Dokploy dashboard
2. **Connect Repository** (GitHub/GitLab/Bitbucket)
3. **Configure Build Settings**
   - Build Method: **Dockerfile**
   - Container Port: **3000**
4. **Deploy** and wait for build to complete

### Local Docker Testing

```bash
# Build image
docker build -t prabudda-portfolio .

# Run container
docker run -p 3000:3000 prabudda-portfolio
```

### Environment Variables

Add in Dokploy dashboard if needed:
```
NODE_ENV=production
PORT=3000
```

### Custom Domain

1. Add domain in Dokploy settings
2. Update DNS records to point to Dokploy server
3. SSL/TLS configured automatically with Let's Encrypt

## 🐛 Troubleshooting

- **Build fails**: Check `pnpm-lock.yaml` is up to date
- **Port not accessible**: Verify port 3000 in Dokploy config
- **App crashes**: Check Dokploy logs for errors