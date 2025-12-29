# Deployment Guide for Dokploy

This guide will help you deploy your portfolio to Dokploy using Docker.

## Prerequisites

- A Dokploy account and server setup
- Your repository pushed to GitHub/GitLab/Bitbucket

## Files Created

The following files have been added to your project for Docker deployment:

- **Dockerfile**: Multi-stage Docker build configuration
- **.dockerignore**: Excludes unnecessary files from Docker builds
- **docker-compose.yml**: For local testing (optional)
- **next.config.ts**: Updated with `output: 'standalone'` for Docker

## Deploying to Dokploy

### Method 1: Using Dokploy Dashboard

1. **Login to Dokploy**
   - Access your Dokploy dashboard

2. **Create New Application**
   - Click "Create Application"
   - Select "Docker" as the deployment method

3. **Connect Repository**
   - Connect your Git repository (GitHub, GitLab, or Bitbucket)
   - Select the branch you want to deploy (usually `main` or `master`)

4. **Configure Build Settings**
   - Build Method: **Dockerfile**
   - Dockerfile Path: `Dockerfile` (default)
   - Build Context: `.` (root directory)

5. **Configure Port**
   - Container Port: **3000**
   - Publish Port: **80** or **443** (for HTTPS)

6. **Environment Variables** (Optional)
   Add any environment variables your app needs:
   ```
   NODE_ENV=production
   PORT=3000
   ```

7. **Deploy**
   - Click "Deploy" and wait for the build to complete
   - Dokploy will automatically build and deploy your application

### Method 2: Using Git Push

If your Dokploy instance is configured for automatic deployments:

```bash
git add .
git commit -m "Add Docker configuration"
git push origin main
```

Dokploy will automatically detect the changes and redeploy.

## Local Testing

Test your Docker setup locally before deploying:

### Build the Docker image:
```bash
docker build -t prabudda-portfolio .
```

### Run the container:
```bash
docker run -p 3000:3000 prabudda-portfolio
```

### Or use Docker Compose:
```bash
docker-compose up
```

Visit `http://localhost:3000` to see your portfolio.

## Dockerfile Features

The Dockerfile includes:

- ✅ **Multi-stage build**: Minimizes final image size
- ✅ **pnpm support**: Uses the exact version from package.json
- ✅ **Standalone output**: Optimized for production
- ✅ **Non-root user**: Enhanced security
- ✅ **Health checks**: Built-in container health monitoring
- ✅ **Alpine Linux**: Smaller base image (~50MB vs 1GB+)

## Troubleshooting

### Build fails with "module not found"
- Make sure all dependencies are in `package.json`
- Run `pnpm install` locally to update `pnpm-lock.yaml`

### Port is not accessible
- Verify port 3000 is exposed in Dokploy configuration
- Check firewall settings on your server

### Application crashes on startup
- Check Dokploy logs for error messages
- Verify environment variables are set correctly

### Image size is too large
- The .dockerignore file should exclude node_modules, .next, etc.
- Multi-stage build should keep final image under 200MB

## Environment Variables

If you need to add environment variables:

1. In Dokploy dashboard, go to your application settings
2. Add environment variables under "Environment Variables" section
3. Common variables:
   - `NODE_ENV=production`
   - `NEXT_PUBLIC_*` (for client-side variables)

## Custom Domain

To use a custom domain with Dokploy:

1. Go to your application settings in Dokploy
2. Add your domain under "Domains" section
3. Update DNS records to point to your Dokploy server
4. Dokploy will automatically configure SSL/TLS with Let's Encrypt

## Performance Optimization

The Dockerfile is already optimized, but consider:

- Enable caching in Dokploy for faster rebuilds
- Use CDN for static assets (if available)
- Monitor resource usage and scale if needed

## Support

For Dokploy-specific issues, check:
- [Dokploy Documentation](https://dokploy.com/docs)
- [Dokploy Discord/Community](https://dokploy.com/discord)

For Next.js Docker issues:
- [Next.js Docker Documentation](https://nextjs.org/docs/deployment#docker-image)

