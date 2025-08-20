# Cloudflare Domain & SSL Setup Guide

This guide will help you set up your domain with Cloudflare DNS and SSL certificate for your Prabudda Portfolio.

## 🌐 Prerequisites

- A registered domain name
- Cloudflare account (free)
- Ubuntu server with your portfolio deployed
- Root or sudo access to your server

## 📋 Step-by-Step Setup

### Step 1: Configure Cloudflare DNS

1. **Add your domain to Cloudflare:**
   - Log in to [Cloudflare Dashboard](https://dash.cloudflare.com/)
   - Click "Add a Site"
   - Enter your domain name (e.g., `prabudda.dev`)
   - Choose the Free plan
   - Cloudflare will scan your existing DNS records

2. **Update DNS Records:**
   - Delete any existing A records pointing to old IPs
   - Add a new A record:
     - **Type**: A
     - **Name**: @ (for root domain) or www
     - **IPv4 address**: Your VPS IP address
     - **Proxy status**: ✅ Proxied (orange cloud)
   - Add CNAME for www (if using root domain):
     - **Type**: CNAME
     - **Name**: www
     - **Target**: your-domain.com
     - **Proxy status**: ✅ Proxied

3. **Update Nameservers:**
   - Copy the Cloudflare nameservers from the dashboard
   - Go to your domain registrar's control panel
   - Update nameservers to Cloudflare's nameservers
   - Wait for DNS propagation (can take up to 24 hours)

### Step 2: Configure Cloudflare SSL Settings

1. **SSL/TLS Settings:**
   - Go to SSL/TLS → Overview
   - Set encryption mode to **"Full (strict)"**
   - Enable **"Always Use HTTPS"**

2. **Edge Certificates:**
   - Go to SSL/TLS → Edge Certificates
   - Enable **"Always Use HTTPS"**
   - Enable **"HTTP Strict Transport Security (HSTS)"**
   - Enable **"Automatic HTTPS Rewrites"**

### Step 3: Install Certbot on Your Server

Run the SSL setup script on your Ubuntu server:

```bash
# Download and run the SSL setup script
wget https://raw.githubusercontent.com/YOUR_USERNAME/Prabudda-portfolio/main/scripts/ssl-setup.sh
chmod +x ssl-setup.sh
sudo ./ssl-setup.sh your-domain.com
```

### Step 4: Update Your Application

The setup script will automatically update your Nginx configuration and Docker Compose files to support SSL.

### Step 5: Deploy Updated Configuration

After running the SSL setup script:

```bash
cd /opt/prabudda-portfolio
docker-compose down
docker-compose up -d --build
```

## 🔧 Manual SSL Setup (Alternative)

If you prefer manual setup or the script fails:

### Install Certbot:
```bash
sudo apt update
sudo apt install snapd
sudo snap install core; sudo snap refresh core
sudo snap install --classic certbot
sudo ln -s /snap/bin/certbot /usr/bin/certbot
```

### Stop your current application:
```bash
cd /opt/prabudda-portfolio
docker-compose down
```

### Generate SSL certificate:
```bash
sudo certbot certonly --standalone -d your-domain.com -d www.your-domain.com
```

### Set up auto-renewal:
```bash
sudo crontab -e
# Add this line:
0 12 * * * /usr/bin/certbot renew --quiet
```

## 🌟 Cloudflare Additional Optimizations

### Performance Settings:
1. **Speed → Optimization:**
   - Enable **Auto Minify** (HTML, CSS, JS)
   - Enable **Brotli**
   - Enable **Early Hints**

2. **Caching:**
   - Go to Caching → Configuration
   - Set **Browser Cache TTL** to "1 month"
   - Enable **Always Online**

3. **Page Rules (Optional):**
   - Create rule for `your-domain.com/*`
   - Settings: Cache Level: Cache Everything, Edge Cache TTL: 1 month

### Security Settings:
1. **Security → Settings:**
   - Set **Security Level** to "Medium"
   - Enable **Bot Fight Mode**

2. **Firewall Rules (Optional):**
   - Block traffic from specific countries if needed
   - Rate limiting rules

## 🔍 Verification

### Test SSL Certificate:
```bash
# Test SSL certificate
curl -I https://your-domain.com

# Check certificate details
openssl s_client -connect your-domain.com:443 -servername your-domain.com
```

### Test HTTP to HTTPS Redirect:
```bash
curl -I http://your-domain.com
# Should return 301/302 redirect to HTTPS
```

### Online Tools:
- [SSL Labs Test](https://www.ssllabs.com/ssltest/)
- [Cloudflare Diagnostic Center](https://www.cloudflare.com/diagnostic-center/)

## 🚨 Troubleshooting

### Common Issues:

1. **DNS not propagating:**
   ```bash
   # Check DNS propagation
   nslookup your-domain.com
   dig your-domain.com
   ```

2. **Certificate generation fails:**
   ```bash
   # Make sure ports 80 and 443 are available
   sudo netstat -tulpn | grep :80
   sudo netstat -tulpn | grep :443
   
   # Stop any services using these ports
   sudo systemctl stop nginx
   sudo systemctl stop apache2
   ```

3. **Mixed content errors:**
   - Enable "Automatic HTTPS Rewrites" in Cloudflare
   - Check your application for hardcoded HTTP URLs

4. **Cloudflare SSL errors:**
   - Verify SSL mode is set to "Full (strict)"
   - Ensure your server has a valid SSL certificate

### Log Locations:
- Certbot logs: `/var/log/letsencrypt/`
- Nginx logs: `docker-compose logs prabudda-portfolio`
- System logs: `/var/log/syslog`

## 🔄 Maintenance

### Certificate Renewal:
Certificates auto-renew via cron job. To test renewal:
```bash
sudo certbot renew --dry-run
```

### Update SSL Configuration:
After any SSL changes, restart your application:
```bash
cd /opt/prabudda-portfolio
docker-compose restart
```

## 📈 Performance Benefits

With Cloudflare + SSL setup:
- ✅ Global CDN acceleration
- ✅ DDoS protection
- ✅ SSL/TLS encryption
- ✅ Automatic HTTPS redirects
- ✅ Improved SEO rankings
- ✅ Browser security compliance

## 📞 Support

If you encounter issues:
1. Check Cloudflare's status page
2. Verify DNS settings in Cloudflare dashboard
3. Test SSL certificate validity
4. Check server logs for errors

---

**Note**: Replace `your-domain.com` and `YOUR_USERNAME` with your actual values throughout this guide.
