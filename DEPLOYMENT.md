# aaPanel Deployment Guide

## Prerequisites
- Node.js 18+ installed on your server
- aaPanel installed and configured
- Domain name pointed to your server

## Deployment Steps

### 1. Build the Application
\`\`\`bash
npm install
npm run build
\`\`\`

### 2. aaPanel Configuration
1. Create a new website in aaPanel
2. Set document root to `/path/to/your/project`
3. Configure Node.js application:
   - Entry file: `server.js`
   - Port: 3000 (or your preferred port)

### 3. Environment Variables
1. Copy `.env.example` to `.env.local`
2. Update the values with your production settings
3. Replace `your-domain.com` in sitemap.xml and robots.txt

### 4. SSL Certificate
1. Enable SSL in aaPanel
2. Configure automatic renewal

### 5. Performance Optimization
- Enable Gzip compression in aaPanel
- Configure caching headers
- Set up CDN if needed

## Post-Deployment Checklist
- [ ] Test all pages load correctly
- [ ] Verify mobile responsiveness
- [ ] Check SSL certificate
- [ ] Test contact form (if implemented)
- [ ] Verify sitemap accessibility
- [ ] Submit sitemap to Google Search Console
