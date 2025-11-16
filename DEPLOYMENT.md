# Deployment Guide - Mirran Gallery

## ✅ Setup Complete

All dependencies have been installed and the project is ready for deployment.

## 🚀 Vercel Deployment

### Quick Deploy

1. **Connect to Vercel:**
   - Push your code to GitHub/GitLab/Bitbucket
   - Go to [vercel.com](https://vercel.com) and import your repository
   - Vercel will automatically detect the Vite framework

2. **Environment Variables (Optional):**
   - In Vercel project settings, add environment variables:
     - `VITE_SITE_URL` - Your production domain (e.g., `https://mirrangallery.com`)
     - `VITE_OG_IMAGE` - Custom Open Graph image URL (optional)

3. **Deploy:**
   - Vercel will automatically build and deploy
   - The `vercel.json` configuration is already set up with:
     - SPA routing (all routes redirect to index.html)
     - Security headers
     - Cache optimization for static assets

### Manual Configuration

The `vercel.json` file includes:
- ✅ Build command: `npm run build`
- ✅ Output directory: `dist`
- ✅ SPA routing rewrites
- ✅ Security headers (XSS protection, frame options, etc.)
- ✅ Cache headers for static assets

## 📊 SEO Optimizations Completed

### Meta Tags
- ✅ Enhanced Open Graph tags with image dimensions
- ✅ Twitter Card optimization
- ✅ Additional meta tags (keywords, language, revisit-after)
- ✅ Theme color and mobile optimization

### Structured Data
- ✅ Organization schema (ArtGallery type)
- ✅ Enhanced with address and contact information
- ✅ Dynamic URL generation using environment variables

### Files Updated
- ✅ `sitemap.xml` - Updated with current date (2025-11-16) and proper domain
- ✅ `robots.txt` - Updated with proper domain and sitemap reference
- ✅ `index.html` - Enhanced with comprehensive meta tags
- ✅ SEO helpers - Environment variable support for dynamic URLs

### Important Notes

1. **Domain Configuration:**
   - Update `SITE_URL` in `src/utils/seoHelpers.ts` or set `VITE_SITE_URL` environment variable
   - Current domain: `https://mirrangallery.com`
   - Update `sitemap.xml` and `robots.txt` with your actual domain

2. **Open Graph Image:**
   - Create an OG image (1200x630px recommended)
   - Place it in `/public/og-image.png` or set `VITE_OG_IMAGE` environment variable

3. **Favicon:**
   - Add favicon files to `/public/`:
     - `favicon.svg` (or `.ico`)
     - `apple-touch-icon.png` (180x180px)

## 🔧 Build Verification

✅ Build tested successfully:
- No TypeScript errors
- No linting errors
- CSS warnings resolved
- Output: `dist/` directory

## 📝 Next Steps

1. **Before Deploying:**
   - [ ] Update domain in `src/utils/seoHelpers.ts` (or use `VITE_SITE_URL` env var)
   - [ ] Update domain in `public/sitemap.xml`
   - [ ] Update domain in `public/robots.txt`
   - [ ] Add favicon files to `/public/`
   - [ ] Create and add OG image (`/public/og-image.png`)

2. **Deploy to Vercel:**
   - [ ] Push code to Git repository
   - [ ] Import project in Vercel
   - [ ] Set environment variables (if needed)
   - [ ] Deploy!

3. **Post-Deployment:**
   - [ ] Verify site loads correctly
   - [ ] Test all routes
   - [ ] Submit sitemap to Google Search Console
   - [ ] Verify meta tags with [Open Graph Debugger](https://developers.facebook.com/tools/debug/)
   - [ ] Test Twitter Card with [Card Validator](https://cards-dev.twitter.com/validator)

## 🛠️ Development

```bash
# Install dependencies (already done)
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 📦 Dependencies

All dependencies are installed and up to date. The project uses:
- React 18.3.1
- Vite 5.4.19
- TypeScript 5.8.3
- Tailwind CSS 3.4.17
- React Router 6.30.1
- React Helmet Async (for SEO)

## 🔒 Security

The `vercel.json` includes security headers:
- X-Content-Type-Options: nosniff
- X-Frame-Options: DENY
- X-XSS-Protection: 1; mode=block
- Referrer-Policy: strict-origin-when-cross-origin

## 📈 Performance

- Static assets are cached for 1 year
- Images and assets have immutable cache headers
- Preconnect and DNS prefetch for Google Fonts

---

**Ready to deploy!** 🎉

