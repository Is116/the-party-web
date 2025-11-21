# Thé Party Website - Complete Setup Guide

## 📦 What You Have

A complete, production-ready Next.js website for Thé Party with:
- 10 custom React components
- Full TypeScript support
- Tailwind CSS styling with exact brand colors
- Framer Motion animations
- Responsive design
- SEO optimization

## 🚀 Quick Setup (5 minutes)

### Step 1: Extract the Files

**Windows:**
- Right-click `the_party_website.zip` → Extract All

**Mac/Linux:**
```bash
unzip the_party_website.zip
# or
tar -xzf the_party_website.tar.gz
```

### Step 2: Install Dependencies

```bash
cd the_party_website
npm install
```

This will install:
- Next.js 14
- React 18
- TypeScript
- Tailwind CSS
- Framer Motion
- React Icons

### Step 3: Run Development Server

```bash
npm run dev
```

Open http://localhost:3000 in your browser!

## 📋 Prerequisites

Before starting, make sure you have:

### Required
- **Node.js 18 or higher** 
  - Download: https://nodejs.org/
  - Check version: `node --version`

- **npm or yarn**
  - Comes with Node.js
  - Check version: `npm --version`

### Recommended
- **VS Code** with extensions:
  - ESLint
  - Tailwind CSS IntelliSense
  - TypeScript

## 🎨 Customization Guide

### 1. Update Text Content

Edit component files in `src/components/`:

**Example - Update Hero Text:**
```tsx
// src/components/Hero.tsx
<h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6">
  Your Custom Title
</h1>
```

### 2. Change Colors

Colors are defined in `tailwind.config.js`:

```js
colors: {
  primary: {
    dark: '#0A0E1A',  // Change these
    DEFAULT: '#141824',
  },
  accent: {
    green: '#D4FF00',
    purple: '#9B51E0',
    blue: '#56CCF2',
  },
}
```

### 3. Add Images

1. Place images in `public/images/`
2. Use them in components:

```tsx
import Image from 'next/image'

<Image 
  src="/images/your-image.png" 
  alt="Description"
  width={500}
  height={300}
/>
```

### 4. Add New Sections

Create a new component in `src/components/`:

```tsx
// src/components/NewSection.tsx
'use client'

const NewSection = () => {
  return (
    <section className="py-24">
      <div className="section-container">
        <h2 className="text-4xl font-bold">New Section</h2>
        {/* Your content */}
      </div>
    </section>
  )
}

export default NewSection
```

Then add to `src/app/page.tsx`:

```tsx
import NewSection from '@/components/NewSection'

export default function Home() {
  return (
    <main>
      {/* ... other sections */}
      <NewSection />
    </main>
  )
}
```

## 🌐 Deployment Options

### Option 1: Vercel (Easiest - Free)

1. Push code to GitHub:
```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin YOUR_GITHUB_URL
git push -u origin main
```

2. Go to https://vercel.com
3. Click "Import Project"
4. Select your GitHub repository
5. Click "Deploy"

Done! Your site is live in minutes.

### Option 2: Netlify (Free)

1. Build the site:
```bash
npm run build
```

2. Go to https://netlify.com
3. Drag and drop the `.next` folder
4. Site is live!

### Option 3: Self-Hosted

```bash
# Build production version
npm run build

# Start production server
npm run start
```

Server runs on port 3000 by default.

### Option 4: Static Export

For static hosting (GitHub Pages, etc.):

1. Update `next.config.js`:
```js
module.exports = {
  output: 'export',
  images: {
    unoptimized: true,
  },
}
```

2. Build:
```bash
npm run build
```

3. Upload the `out/` folder to any static host

## 🎯 Common Tasks

### Update Download Links

Edit `src/components/Download.tsx`:

```tsx
{/* App Store Button */}
<motion.button
  onClick={() => window.open('YOUR_APP_STORE_URL', '_blank')}
  // ... rest of button
>
```

### Add Social Media Links

Edit `src/components/Footer.tsx`:

```tsx
const socialLinks = [
  { icon: <FiTwitter />, href: 'https://twitter.com/yourhandle', label: 'Twitter' },
  // ... add more
]
```

### Change Logo

Replace the emoji in `Navigation.tsx` and `Footer.tsx`:

```tsx
<div className="w-12 h-12 bg-accent-green rounded-2xl flex items-center justify-center">
  <Image src="/images/logo.png" alt="Logo" width={48} height={48} />
</div>
```

### Add Analytics

Add to `src/app/layout.tsx`:

```tsx
import Script from 'next/script'

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'GA_MEASUREMENT_ID');
          `}
        </Script>
      </body>
    </html>
  )
}
```

## 🔧 Development Commands

```bash
# Start development server (with hot reload)
npm run dev

# Build for production
npm run build

# Start production server (after build)
npm run start

# Run linter
npm run lint

# Type check
npx tsc --noEmit

# Clear cache and rebuild
rm -rf .next && npm run dev
```

## 🐛 Troubleshooting

### "Module not found" errors

```bash
rm -rf node_modules package-lock.json
npm install
```

### Port 3000 already in use

```bash
# Use different port
PORT=3001 npm run dev
```

### Build fails

```bash
# Clear Next.js cache
rm -rf .next

# Rebuild
npm run build
```

### TypeScript errors

```bash
# Check all types
npx tsc --noEmit

# Install missing types
npm install --save-dev @types/react @types/node
```

### Styling not working

```bash
# Make sure Tailwind is watching
npm run dev

# Check tailwind.config.js paths are correct
```

## 📱 Testing on Mobile

### Local Network Testing

1. Get your local IP:
```bash
# Mac/Linux
ifconfig | grep "inet "

# Windows
ipconfig
```

2. Start dev server:
```bash
npm run dev
```

3. On mobile, visit: `http://YOUR_IP:3000`

### Mobile Simulators

**iOS (Mac only):**
- Use Xcode Simulator

**Android:**
- Use Android Studio Emulator
- Or Chrome DevTools mobile view (F12 → Toggle Device Toolbar)

## 🎨 Animation Customization

Framer Motion is used for animations. To customize:

```tsx
// Example in any component
<motion.div
  initial={{ opacity: 0, y: 50 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8, delay: 0.2 }}
>
  Content
</motion.div>
```

Common animation patterns:
- **Fade in**: `opacity: 0` → `opacity: 1`
- **Slide up**: `y: 50` → `y: 0`
- **Scale**: `scale: 0.9` → `scale: 1`
- **Rotate**: `rotate: 0` → `rotate: 360`

## 📊 Performance Tips

1. **Image Optimization**
   - Use Next.js Image component
   - Provide width and height
   - Use modern formats (WebP)

2. **Code Splitting**
   - Automatically handled by Next.js
   - Use dynamic imports for large components

3. **Font Loading**
   - Already optimized with next/font/google

4. **CSS Optimization**
   - Tailwind purges unused CSS automatically

## 🔒 Security

Before deploying:

1. **Environment Variables**
   - Never commit `.env` files
   - Use Vercel/Netlify environment variables

2. **API Keys**
   - Keep in `.env.local`
   - Prefix with `NEXT_PUBLIC_` for client-side use

3. **Content Security Policy**
   - Add to `next.config.js` if needed

## 📈 SEO Checklist

- [x] Meta tags added
- [x] Open Graph tags included
- [x] Twitter Card tags included
- [ ] Add sitemap.xml (optional)
- [ ] Add robots.txt (optional)
- [ ] Submit to Google Search Console
- [ ] Add structured data (Schema.org)

## 🎓 Learning Resources

- **Next.js**: https://nextjs.org/docs
- **Tailwind CSS**: https://tailwindcss.com/docs
- **Framer Motion**: https://www.framer.com/motion/
- **React**: https://react.dev/

## ✅ Pre-Launch Checklist

Before going live:

- [ ] Test on Chrome, Firefox, Safari
- [ ] Test on mobile devices
- [ ] Check all links work
- [ ] Verify download buttons point to correct URLs
- [ ] Add real social media links
- [ ] Set up analytics
- [ ] Test contact/signup forms
- [ ] Optimize images
- [ ] Add favicon
- [ ] Set up custom domain
- [ ] Test site speed (Google PageSpeed Insights)

## 🎉 You're Ready!

Your Thé Party website is ready to launch. The design matches your brand perfectly with:
- Exact color scheme from design document
- All features from the presentation
- Modern, animated UI
- Mobile responsive
- Production ready

**Next Steps:**
1. Customize content
2. Add your images
3. Deploy to Vercel
4. Share with the world!

---

**Need Help?**
- Check the README.md for detailed info
- Review component files for examples
- Check Next.js documentation

**Good luck with your launch!** 🚀
