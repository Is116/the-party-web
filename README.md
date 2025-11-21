# Thé Party - Official Website

A stunning, modern website built with Next.js 14, TypeScript, and Tailwind CSS showcasing the Thé Party music platform.

## 🎨 Features

- **Next.js 14** with App Router
- **TypeScript** for type safety
- **Tailwind CSS** for styling
- **Framer Motion** for smooth animations
- **Responsive Design** - Works on all devices
- **Exact Brand Colors** from the design document
- **SEO Optimized** with proper metadata
- **Fast Performance** with Next.js optimizations

## 🎯 Sections

1. **Hero** - Stunning landing section with animated gradients
2. **Core Pillars** - Three main pillars with icons and descriptions
3. **Features** - Detailed feature showcases (Community, Events, Music Hub)
4. **App Screens** - Mobile app mockups with animations
5. **Status Badges** - Gamification system (Creator, Organizer, Soulchild)
6. **Community Features** - Forum economy and future roadmap
7. **Download** - App download section with store buttons
8. **Footer** - Complete footer with links and newsletter

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

```bash
# Install dependencies
npm install
# or
yarn install

# Run development server
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) to see the website.

## 📁 Project Structure

```
the_party_website/
├── src/
│   ├── app/
│   │   ├── layout.tsx          # Root layout
│   │   └── page.tsx             # Homepage
│   ├── components/
│   │   ├── Navigation.tsx       # Header navigation
│   │   ├── Hero.tsx             # Hero section
│   │   ├── CorePillars.tsx      # Core pillars section
│   │   ├── Features.tsx         # Features section
│   │   ├── AppScreens.tsx       # App mockups section
│   │   ├── StatusBadges.tsx     # Gamification section
│   │   ├── CommunityFeatures.tsx # Community section
│   │   ├── Download.tsx         # Download section
│   │   └── Footer.tsx           # Footer
│   └── styles/
│       └── globals.css          # Global styles
├── public/
│   └── images/                  # Static images
├── package.json
├── next.config.js
├── tailwind.config.js
└── tsconfig.json
```

## 🎨 Color Scheme

The website uses the exact color scheme from the Thé Party design:

```css
Primary Dark:    #0A0E1A
Secondary Dark:  #141824
Accent Green:    #D4FF00
Accent Purple:   #9B51E0
Accent Blue:     #56CCF2
Card Background: #1E2230

Status Badges:
Creator:         #D4FF00
Organizer:       #FFB84D
Soulchild:       #FF6B9D
```

## 🛠️ Customization

### Update Content

Edit the component files in `src/components/` to update:
- Text content
- Features
- Stats
- Links

### Change Colors

Update `tailwind.config.js` to modify the color scheme:

```js
colors: {
  primary: {
    dark: '#0A0E1A',
    // ...
  }
}
```

### Add Images

Place images in `public/images/` and reference them:

```tsx
<Image src="/images/your-image.png" alt="Description" />
```

## 📱 Responsive Design

The website is fully responsive with breakpoints:
- Mobile: < 640px
- Tablet: 640px - 1024px
- Desktop: > 1024px

## ⚡ Performance Optimizations

- **Image Optimization** with Next.js Image component
- **Code Splitting** automatic with Next.js
- **Font Optimization** with Next.js Font
- **CSS Optimization** with Tailwind CSS purging
- **Lazy Loading** for components using Intersection Observer

## 🚀 Deployment

### Vercel (Recommended)

1. Push code to GitHub
2. Import project in Vercel
3. Deploy automatically

```bash
# Or use Vercel CLI
npm install -g vercel
vercel
```

### Build for Production

```bash
npm run build
npm run start
```

### Static Export (Optional)

To generate static HTML:

```bash
# Update next.config.js
output: 'export'

# Build
npm run build
```

## 📝 Environment Variables

Create `.env.local` for environment variables:

```env
NEXT_PUBLIC_SITE_URL=https://theparty.app
NEXT_PUBLIC_API_URL=your-api-url
```

## 🔧 Development Commands

```bash
# Development server
npm run dev

# Build for production
npm run build

# Start production server
npm run start

# Lint code
npm run lint

# Type check
npx tsc --noEmit
```

## 🎯 SEO

The website includes:
- **Meta Tags** for social sharing
- **Open Graph** tags for Facebook/LinkedIn
- **Twitter Card** tags
- **Structured Data** (can be added)
- **Sitemap** generation (can be configured)

## 📊 Analytics (Optional)

Add Google Analytics or similar:

```tsx
// src/app/layout.tsx
<Script
  src="https://www.googletagmanager.com/gtag/js?id=GA_ID"
  strategy="afterInteractive"
/>
```

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## 📄 License

Proprietary - All rights reserved

## 🤝 Contributing

This is a proprietary project for Thé Party.

## 💡 Tips

1. **Animations**: Adjust Framer Motion settings in components for different effects
2. **Colors**: Use Tailwind utilities like `bg-accent-green` for consistency
3. **Icons**: React Icons library is included - import from `react-icons/fi`
4. **Fonts**: Inter font is loaded via Google Fonts
5. **Images**: Use Next.js Image component for automatic optimization

## 🐛 Troubleshooting

### Build Errors

```bash
# Clear Next.js cache
rm -rf .next

# Reinstall dependencies
rm -rf node_modules package-lock.json
npm install
```

### TypeScript Errors

```bash
# Check types
npx tsc --noEmit
```

### Styling Issues

```bash
# Rebuild Tailwind
npm run dev
```

## 📞 Support

For issues or questions:
- Check the documentation
- Review component files
- Check console for errors

---

**Built with Next.js 14, TypeScript, and Tailwind CSS**

*For the music community, by the music community* 🎵
