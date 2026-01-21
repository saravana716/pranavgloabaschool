# Deployment Guide

This guide will help you deploy the Global International School website to Netlify or Vercel.

## 📋 Pre-deployment Checklist

1. ✅ All components are properly organized in `/src/components/`
2. ✅ Package.json includes all necessary dependencies
3. ✅ Vite configuration is set up for production builds
4. ✅ TypeScript configuration is properly set
5. ✅ Tailwind CSS v4 is configured
6. ✅ All images use Unsplash URLs (no local images)

## 🚀 Quick Deployment

### Option 1: Netlify (Recommended)

#### Method A: Drag & Drop
1. Run the build command:
   ```bash
   npm install
   npm run build
   ```
2. Go to [Netlify Drop](https://app.netlify.com/drop)
3. Drag the `dist` folder to the deployment area
4. Your site will be live instantly!

#### Method B: Git Integration
1. Push your code to GitHub/GitLab/Bitbucket
2. Go to [Netlify](https://netlify.com) and sign in
3. Click "New site from Git"
4. Connect your repository
5. Set build settings:
   - **Build command**: `npm run build`
   - **Publish directory**: `dist`
   - **Node version**: 18 or higher
6. Deploy!

### Option 2: Vercel

#### Method A: Vercel CLI
1. Install Vercel CLI:
   ```bash
   npm i -g vercel
   ```
2. Run deployment:
   ```bash
   npm install
   npm run build
   vercel --prod
   ```

#### Method B: Git Integration
1. Push your code to GitHub/GitLab/Bitbucket
2. Go to [Vercel](https://vercel.com) and sign in
3. Click "New Project"
4. Import your repository
5. Vercel auto-detects Vite settings
6. Deploy!

## ⚙️ Build Settings

### Netlify Settings
```
Build command: npm run build
Publish directory: dist
Node version: 18.x
```

### Vercel Settings
Vercel automatically detects Vite projects, but you can manually set:
```
Framework Preset: Vite
Build Command: npm run build
Output Directory: dist
Install Command: npm install
```

## 🔧 Environment Variables

If you need to add environment variables:

### Netlify
1. Go to Site settings → Environment variables
2. Add your variables

### Vercel
1. Go to Project settings → Environment Variables
2. Add your variables

## 📁 File Structure for Deployment

```
/
├── package.json           # Dependencies and scripts
├── vite.config.ts        # Vite configuration
├── tsconfig.json         # TypeScript configuration
├── index.html            # Main HTML entry point
├── public/
│   ├── _redirects        # Netlify SPA routing
│   └── favicon.svg       # Site icon
├── src/
│   ├── main.tsx          # React entry point
│   ├── App.tsx           # Main app component
│   ├── components/       # All React components
│   └── styles/
│       └── globals.css   # Global styles
└── dist/                 # Build output (generated)
```

## 🔄 Automatic Deployments

### Setup CI/CD with Git
1. Connect your repository to Netlify or Vercel
2. Every push to main branch will trigger automatic deployment
3. Pull requests will create preview deployments

### Build Status
Both platforms provide:
- Build logs for debugging
- Deploy previews for pull requests
- Rollback capabilities
- Custom domains

## 🌐 Custom Domain Setup

### Netlify
1. Go to Site settings → Domain management
2. Add custom domain
3. Update DNS records as instructed

### Vercel
1. Go to Project settings → Domains
2. Add custom domain
3. Configure DNS records

## 🐛 Common Issues & Solutions

### Build Errors
- **Node version**: Ensure Node.js 18+ is used
- **Dependencies**: Run `npm install` to ensure all packages are installed
- **TypeScript errors**: Run `npm run type-check` locally first

### Runtime Errors
- **Routing**: Ensure `_redirects` file is in public folder for SPAs
- **Images**: All images use Unsplash URLs, no local images
- **Environment**: Check if any environment variables are needed

### Performance
- Images are optimized via Unsplash
- Code splitting is configured in Vite
- Bundle analysis available via build logs

## 📊 Monitoring

### Netlify Analytics
- Enable Netlify Analytics for traffic insights
- Core Web Vitals monitoring

### Vercel Analytics
- Enable Vercel Analytics for performance monitoring
- Real user metrics

## 🚀 Performance Optimization

The site is already optimized with:
- ✅ Code splitting
- ✅ Tree shaking
- ✅ Minification
- ✅ Modern JavaScript
- ✅ Optimized images via Unsplash
- ✅ CSS optimization

## 📞 Support

If you encounter issues:
1. Check build logs in your deployment platform
2. Test locally with `npm run build && npm run preview`
3. Verify all dependencies are installed
4. Check the troubleshooting section in README.md

---

**Ready to deploy?** Follow the quick deployment steps above!