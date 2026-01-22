# iOS Mobile Issue - Troubleshooting Guide

## ✅ What I Fixed

### 1. **iOS Meta Tags** - Added Critical Viewport Settings
```html
<meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover, user-scalable=yes, maximum-scale=5" />
<meta name="apple-mobile-web-app-capable" content="yes" />
<meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
<meta name="apple-mobile-web-app-title" content="Pranav Global School" />
<link rel="apple-touch-icon" href="/favicon.svg" />
```

### 2. **Cache Headers** - Fixed iOS Caching Issues
- Added proper cache control headers in Vercel configuration
- Updated vite.config.ts with security headers

### 3. **Vercel Configuration** - Enhanced vercel.json
- Added proper cache headers
- Configured content-type security
- Fixed rewrite rules for SPA routing

## 🔍 Troubleshooting Steps on iPhone

### Step 1: Clear Safari Cache
1. Open **Settings** → **Safari**
2. Tap **Clear History and Website Data**
3. Select **All time**
4. Confirm

### Step 2: Check iPhone Network
1. Go to **Settings** → **Wi-Fi**
2. Disconnect and reconnect to your network
3. Try again

### Step 3: Check Safari Compatibility Mode
1. Open Safari on iPhone
2. Long press the address bar
3. Look for "aA" button at top left
4. Ensure "Request Desktop Site" is OFF

### Step 4: Disable Safari Restrictions
1. **Settings** → **Screen Time**
2. Check if content restrictions are enabled
3. Disable if necessary

### Step 5: Check Firebase Configuration
Your Firebase domain is: `pranav-global-school---pgs`

Ensure this domain is whitelisted in:
- ✅ Firebase Console → Authentication → Settings → Authorized domains
- ✅ Firebase Console → Firestore → Rules (if applicable)

## 🛠️ What to Deploy

1. **Rebuild your project:**
   ```bash
   npm run build
   ```

2. **Deploy to Vercel:**
   ```bash
   npm install -g vercel
   vercel --prod
   ```

## 📋 Common iOS-Specific Issues & Solutions

### Issue 1: Page Doesn't Load
**Causes:**
- Safari cache issues
- Mixed HTTPS/HTTP content
- CORS restrictions

**Solutions:**
- Clear cache (see Step 1 above)
- Ensure all content is HTTPS only
- Check browser console on desktop for errors

### Issue 2: Functionality Broken but Page Loads
**Causes:**
- JavaScript compatibility (ES5 vs ES6+)
- Firebase connectivity
- LocalStorage restrictions

**Solutions:**
- We've set build target to ES2015 (compatible with iOS 12+)
- Check Firebase rules and domain whitelist
- Test on desktop first

### Issue 3: Slow Loading on iPhone
**Causes:**
- Large bundle size
- Network throttling
- Image optimization

**Solutions:**
- Bundle already split by vendor/forms/icons
- Use 3G throttling to test
- Ensure images are optimized

## 🚀 Next Steps

1. **Deploy changes** to production
2. **Test on iPhone:**
   - Clear Safari cache
   - Visit your domain
   - Check browser console (Developer → Safari → Develop)
3. **Monitor for errors:**
   - Check Vercel deployment logs
   - Check browser console on iPhone

## 📞 If Still Not Working

Check these in order:
1. ✅ Vercel deployment successful
2. ✅ Domain SSL certificate valid
3. ✅ Firefox/Chrome on iOS work (if applicable)
4. ✅ Desktop browsers work
5. ✅ Android works (as you confirmed)

If none work, the issue is likely:
- DNS propagation (wait 24 hours)
- ISP/Network blocking
- Firebase domain whitelist issue

## 🔗 Resources

- [Apple WebApp Meta Tags](https://developer.apple.com/library/archive/documentation/AppleApplications/Reference/SafariHTMLRef/Articles/MetaTags.html)
- [iOS 15+ Web App Issues](https://webkit.org/status/#specification-web-app-manifest)
- [Vercel Headers Configuration](https://vercel.com/docs/edge-network/headers)
- [Firebase Security Rules](https://firebase.google.com/docs/firestore/security/start)
