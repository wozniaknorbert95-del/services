---
description: Add a new route/page to services.flexgrafik.nl
---

# New Page Scaffold — services.flexgrafik.nl

## Purpose
Standardized process for adding a new route with proper metadata, OG image, and sitemap entry.

## Steps

### 1. Create route directory and page
```
src/app/[route-name]/page.tsx
```

### 2. Export metadata
```tsx
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Page Title | FlexGrafik Digital',
  description: 'Concise description for SEO.',
  openGraph: {
    title: 'Page Title',
    description: 'Same or shorter description.',
    url: 'https://services.flexgrafik.nl/route-name/',
    images: [{ url: '/og/route-name.svg', width: 1200, height: 630 }],
  },
};
```

### 3. Create OG image
```
public/og/route-name.svg
```
Use existing SVG template. Dimensions: 1200×630. Background: `#090c11`. Accent: `#58a6ff`.

### 4. Update sitemap.xml
Add to `public/sitemap.xml`:
```xml
<url>
  <loc>https://services.flexgrafik.nl/route-name/</loc>
  <lastmod>YYYY-MM-DD</lastmod>
  <changefreq>monthly</changefreq>
  <priority>0.7</priority>
</url>
```

### 5. Compose page using primitives
- Import `Section`, `Card`, `Button`, `Badge` from `@/components/ui/`
- Use `src/app/globals.css` CSS custom properties
- No inline styles. Tailwind utility classes only.
- If using Framer Motion: `'use client';` at top
- Respect `prefers-reduced-motion`

### 6. Build and deploy
1. Follow `build-check.md`
2. Follow `deploy-vercel.md`

## Acceptance Criteria
- [ ] Page renders at `/route-name/`
- [ ] Unique `<title>` and `<meta name="description">`
- [ ] OG image present in `public/og/`
- [ ] Added to `public/sitemap.xml`
- [ ] `npm run build` passes with zero errors
- [ ] Mobile viewport: no horizontal scroll, readable fonts
