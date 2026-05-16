# 🚀 Quick Start & Developer Reference

## Running the Project

```bash
# Install dependencies (if needed)
npm install

# Development mode
npm run dev
# Open http://localhost:3000

# Build for production
npm run build

# Start production server
npm start

# Run linter
npm run lint
```

---

## 🎨 Component Quick Reference

### Modifying Content

#### **Update Navbar Links**
File: `components/Navbar.tsx` (line 23-30)
```tsx
const navLinks = [
  { label: 'Features', href: '#features' },
  // Add more links here
];
```

#### **Update Hero Headline**
File: `components/HeroSection.tsx` (line 29-32)
```tsx
<h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight mb-6">
  Your headline here
</h1>
```

#### **Update Features**
File: `components/FeaturesSection.tsx` (line 7-42)
```tsx
const features = [
  {
    icon: '✓',
    title: 'Feature Name',
    description: 'Feature description',
  },
  // Add more features
];
```

#### **Update Testimonials**
File: `components/TestimonialsSection.tsx` (line 7-25)
```tsx
const testimonials = [
  {
    quote: 'Student feedback here',
    author: 'Student Name',
    level: 'College - Class 12',
  },
  // Add more testimonials
];
```

#### **Update Academic Levels**
File: `components/AcademicLevelsSection.tsx` (line 7-24)
```tsx
const levels = [
  {
    level: 'Level Name',
    description: 'Description',
    icon: '🎓',
  },
  // Add more levels
];
```

---

## 🎨 Customizing Colors

### Update Primary Colors
Edit Tailwind classes throughout components:

```tsx
// Current: Blue
from-blue-600 to-indigo-600    // Change to your colors

// Examples:
from-purple-600 to-pink-600    // Purple + Pink
from-green-600 to-emerald-600  // Green
from-orange-600 to-red-600     // Orange + Red
```

### Common Color Variables
- Blue: `#2563EB` (blue-600)
- Indigo: `#4F46E5` (indigo-600)
- Green: `#16A34A` (green-600)
- Red: `#DC2626` (red-600)
- Purple: `#9333EA` (purple-600)

---

## 🔄 Component Composition

### Adding a New Section

1. Create component in `components/NewSection.tsx`:
```tsx
'use client';

import SectionHeader from './SectionHeader';

export default function NewSection() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          title="Your Title"
          subtitle="Your subtitle"
        />
        {/* Your content */}
      </div>
    </section>
  );
}
```

2. Import in `app/page.tsx`:
```tsx
import NewSection from '@/components/NewSection';
```

3. Add to page layout:
```tsx
export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        {/* ... other sections ... */}
        <NewSection />  {/* Add here */}
      </main>
      <Footer />
    </>
  );
}
```

---

## 🎬 Animation Reference

### Scroll-Triggered Fade-In-Up
```tsx
'use client';
import { useEffect, useRef, useState } from 'react';

export function MyComponent() {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={isVisible ? 'animate-fade-in-up' : 'opacity-0'}
    >
      {/* Content */}
    </div>
  );
}
```

### Available Animation Classes
```css
.animate-fade-in-up      /* Main scroll animation */
.animate-fade-in          /* Simple fade */
.animate-slide-in-left    /* Slide from left */
.animate-slide-in-right   /* Slide from right */
.animate-scale-in         /* Scale up */
.animate-float            /* Floating motion */
.animate-glow             /* Pulse glow effect */
```

---

## 📱 Responsive Design Patterns

### Mobile-First Grid
```tsx
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
  {/* 1 col on mobile, 2 on medium, 3 on large */}
</div>
```

### Mobile-First Sizing
```tsx
<h1 className="text-2xl md:text-4xl lg:text-5xl">
  {/* 2xl on mobile, 4xl on medium, 5xl on large */}
</h1>
```

### Responsive Spacing
```tsx
<div className="px-4 sm:px-6 lg:px-8">
  {/* 1rem on mobile, 1.5rem on small, 2rem on large */}
</div>
```

---

## 🔧 Common Customizations

### Change CTA Button Text
Search for button text and replace:
- "Get Started Free" → your text
- "View Live Demo" → your text
- "Start Free Now" → your text

### Change Dashboard Mock Data
File: `components/DashboardPreview.tsx`
```tsx
<p className="text-2xl font-bold text-white">12</p>  // Change number
<span className="text-2xl font-bold text-green-600">87%</span>  // Change percentage
```

### Update Footer Links
File: `components/Footer.tsx` (line 8-27)
```tsx
const footerLinks = {
  Product: [
    { label: 'Features', href: '#features' },
    // Add your links
  ],
};
```

### Change Navbar Brand
File: `components/Navbar.tsx` (line 23-27)
```tsx
<span className="text-xl font-bold text-gray-900 hidden sm:inline">
  Your Brand Name
</span>
```

---

## 🎯 SEO Configuration

### Update Page Metadata
File: `app/layout.tsx` (line 19-36)
```tsx
export const metadata: Metadata = {
  title: 'Your Title',
  description: 'Your description',
  keywords: 'your,keywords',
  // Update other fields
};
```

### Update Favicon
Place favicon files in `public/` folder:
- `favicon.ico`
- `favicon.png`
- `apple-touch-icon.png`

---

## 🐛 Common Issues & Solutions

### Animations Not Working
- Ensure `'use client'` directive at top of component
- Check Intersection Observer browser support
- Verify CSS classes are in `globals.css`

### Responsive Layout Issues
- Use mobile-first (base styles for mobile)
- Check Tailwind breakpoints: `sm:` `md:` `lg:` `xl:`
- Test on actual devices with Chrome DevTools

### Import Errors
- Verify path aliases in `tsconfig.json` (should have `@/*`)
- Use `@/components/` for component imports
- Check file names match exactly (case-sensitive)

### Styling Not Applied
- Clear `.next` build cache
- Restart dev server
- Check Tailwind CSS in `globals.css` has `@import`

---

## 📚 File Structure Reference

```
d:\Student Task Management Website\
├── app/
│   ├── layout.tsx           ← Metadata, fonts
│   ├── page.tsx             ← Main page structure
│   └── globals.css          ← Animations, custom styles
├── components/              ← All React components
│   ├── Navbar.tsx
│   ├── HeroSection.tsx
│   ├── ProblemStatement.tsx
│   ├── SolutionOverview.tsx
│   ├── FeaturesSection.tsx
│   ├── AcademicLevelsSection.tsx
│   ├── HowItWorks.tsx
│   ├── DashboardPreview.tsx
│   ├── BenefitsSection.tsx
│   ├── TestimonialsSection.tsx
│   ├── FinalCTA.tsx
│   ├── Footer.tsx
│   └── [Reusable card components]
├── public/                  ← Static assets
├── package.json
├── tsconfig.json
├── next.config.ts
├── tailwind.config.ts
├── BUILD_SUMMARY.md         ← Build overview
├── LANDING_PAGE_GUIDE.md    ← Detailed guide
└── README.md
```

---

## 🚀 Deployment Commands

```bash
# Vercel (recommended for Next.js)
vercel deploy

# Docker
docker build -t studentsphere .
docker run -p 3000:3000 studentsphere

# Traditional Node.js
npm run build
npm start
```

---

## 💡 Performance Tips

1. **Images**: Use WebP format with fallbacks
2. **Fonts**: Currently using Google Fonts (Geist)
3. **CSS**: Tailwind already optimized for production
4. **JavaScript**: Keep components light, use lazy loading
5. **Animations**: GPU-accelerated via `transform` and `opacity`

---

## 🔗 Useful Links

- [Next.js Documentation](https://nextjs.org/docs)
- [React Documentation](https://react.dev)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [TypeScript Handbook](https://www.typescriptlang.org/docs)

---

**Last Updated**: May 16, 2024  
**For Questions**: Check LANDING_PAGE_GUIDE.md for more details
