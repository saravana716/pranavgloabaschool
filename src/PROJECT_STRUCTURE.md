# Project Structure Overview

## 📁 Complete File Structure

```
global-international-school/
├── 📄 package.json                 # Dependencies and scripts
├── 📄 vite.config.ts              # Vite build configuration
├── 📄 tsconfig.json               # TypeScript configuration
├── 📄 tsconfig.node.json          # TypeScript Node configuration
├── 📄 eslint.config.js            # ESLint configuration
├── 📄 index.html                  # Main HTML entry point
├── 📄 README.md                   # Project documentation
├── 📄 DEPLOYMENT.md               # Deployment guide
├── 📄 .gitignore                  # Git ignore rules

├── 📂 public/                     # Static assets
│   ├── 📄 _redirects              # Netlify SPA routing
│   └── 📄 favicon.svg             # Site favicon

├── 📂 src/                        # Source code
│   ├── 📄 main.tsx                # React entry point
│   ├── 📄 App.tsx                 # Main application component
│   │
│   ├── 📂 styles/                 # Global styles
│   │   └── 📄 globals.css         # Tailwind CSS + custom styles
│   │
│   └── 📂 components/             # React components
│       ├── 📄 Header.tsx          # Main navigation header
│       ├── 📄 Footer.tsx          # Site footer with navigation
│       ├── 📄 HomePage.tsx        # Home page layout
│       ├── 📄 ScrollToTop.tsx     # Scroll to top button
│       │
│       ├── 📄 AboutSection.tsx    # About page with auto-carousel
│       ├── 📄 InfrastructureSection.tsx  # Infrastructure facilities
│       ├── 📄 AcademicsSection.tsx       # Academic programs
│       ├── 📄 AdmissionFormSection.tsx   # Admission form
│       ├── 📄 GallerySection.tsx         # Image gallery
│       ├── 📄 CareerSection.tsx          # Career opportunities
│       ├── 📄 ContactFormSection.tsx     # Contact form
│       │
│       ├── 📄 HeroSection.tsx     # Hero banner
│       ├── 📄 WhyChooseSection.tsx       # Why choose us section
│       ├── 📄 SchoolImageSwiper.tsx      # Image carousel
│       ├── 📄 RecentActivitiesSlider.tsx # Activities slider
│       ├── 📄 ActivitiesContentSlider.tsx # Content slider
│       ├── 📄 PageHeader.tsx             # Page headers with breadcrumbs
│       │
│       ├── 📄 NewsEventsSection.tsx      # News and events
│       ├── 📄 FacultySection.tsx         # Faculty information
│       ├── 📄 AdmissionsSection.tsx      # Admissions info
│       ├── 📄 ContactSection.tsx         # Contact details
│       │
│       ├── 📂 figma/              # Figma-specific components
│       │   └── 📄 ImageWithFallback.tsx  # Image component
│       │
│       └── 📂 ui/                 # Reusable UI components (shadcn/ui)
│           ├── 📄 accordion.tsx
│           ├── 📄 alert-dialog.tsx
│           ├── 📄 alert.tsx
│           ├── 📄 aspect-ratio.tsx
│           ├── 📄 avatar.tsx
│           ├── 📄 badge.tsx
│           ├── 📄 breadcrumb.tsx
│           ├── 📄 button.tsx
│           ├── 📄 calendar.tsx
│           ├── 📄 card.tsx
│           ├── 📄 carousel.tsx
│           ├── 📄 chart.tsx
│           ├── 📄 checkbox.tsx
│           ├── 📄 collapsible.tsx
│           ├── 📄 command.tsx
│           ├── 📄 context-menu.tsx
│           ├── 📄 dialog.tsx
│           ├── 📄 drawer.tsx
│           ├── 📄 dropdown-menu.tsx
│           ├── 📄 form.tsx
│           ├── 📄 hover-card.tsx
│           ├── 📄 input-otp.tsx
│           ├── 📄 input.tsx
│           ├── 📄 label.tsx
│           ├── 📄 menubar.tsx
│           ├── 📄 navigation-menu.tsx
│           ├── 📄 pagination.tsx
│           ├── 📄 popover.tsx
│           ├── 📄 progress.tsx
│           ├── 📄 radio-group.tsx
│           ├── 📄 resizable.tsx
│           ├── 📄 scroll-area.tsx
│           ├── 📄 select.tsx
│           ├── 📄 separator.tsx
│           ├── 📄 sheet.tsx
│           ├── 📄 sidebar.tsx
│           ├── 📄 skeleton.tsx
│           ├── 📄 slider.tsx
│           ├── 📄 sonner.tsx
│           ├── 📄 switch.tsx
│           ├── 📄 table.tsx
│           ├── 📄 tabs.tsx
│           ├── 📄 textarea.tsx
│           ├── 📄 toggle-group.tsx
│           ├── 📄 toggle.tsx
│           ├── 📄 tooltip.tsx
│           ├── 📄 use-mobile.ts
│           └── 📄 utils.ts

└── 📂 dist/                       # Build output (generated)
```

## 🔧 Key Configuration Files

### package.json
- All React, TypeScript, and Tailwind dependencies
- Build scripts for development and production
- Deployment-ready configuration

### vite.config.ts
- React plugin configuration
- Tailwind CSS v4 integration
- Build optimization settings
- Development server setup

### tsconfig.json
- TypeScript configuration for React
- Path mapping for cleaner imports
- Strict type checking enabled

### src/styles/globals.css
- Tailwind CSS v4 configuration
- Custom school color scheme variables
- Typography settings
- Custom animations and scrollbar styles

## 🎨 Design System

### Color Palette
```css
--primary: #0f4c5c      /* Dark Teal */
--secondary: #3caea3    /* Teal */
--muted: #c7d5c8        /* Light Sage */
--card: #e8ddd0         /* Cream */
--destructive: #b23a32  /* Burgundy */
```

### Typography
- Base font size: 14px
- Consistent font weights and line heights
- Responsive typography system

## 📱 Features Implementation

### Navigation System
- Single-page application routing
- Smooth scroll to top functionality
- Breadcrumb navigation
- Mobile-responsive header

### Content Sections
- **Home**: Hero swiper, why choose us, activities
- **About**: Auto-sliding building carousel, scrollable content
- **Infrastructure**: Alternating layout design
- **Gallery**: Masonry layout with lightbox
- **Forms**: Validation with React Hook Form

### Interactive Elements
- Image carousels and sliders
- Form validation and submission
- Scroll-to-top button with animations
- WhatsApp integration
- Social media links

## 🚀 Deployment Ready

The project is configured for:
- ✅ Netlify deployment
- ✅ Vercel deployment
- ✅ GitHub Pages (with build action)
- ✅ Static hosting services

### Build Commands
```bash
npm install      # Install dependencies
npm run dev      # Start development server
npm run build    # Build for production
npm run preview  # Preview production build
```

## 📊 Performance Optimizations

- Code splitting with Vite
- Tree shaking for smaller bundles
- Optimized images via Unsplash
- CSS purging with Tailwind
- Modern JavaScript output
- Lazy loading where appropriate

## 🎯 Ready for Production

This structure provides:
- Professional code organization
- Type safety with TypeScript
- Modern development experience
- Production-ready builds
- Easy deployment process
- Maintainable codebase

All components are properly typed, styled, and optimized for production deployment!