---
description: Lighthouse + manual SEO and conversion audit
---

# SEO Audit — services.flexgrafik.nl

## Purpose
Ensure the site meets professional standards for performance, accessibility, SEO, and conversion optimization.

## Automated Checks

### 1. Lighthouse (Chrome DevTools)
- Open `https://services.flexgrafik.nl/`
- Open DevTools → Lighthouse tab
- Run audit: Mobile + Desktop
- Target scores:
  | Metric | Target |
  |---|---|
  | Performance | ≥ 90 |
  | Accessibility | ≥ 95 |
  | Best Practices | ≥ 95 |
  | SEO | ≥ 95 |

### 2. Broken Links
```bash
npm run audit:links
# or
npx broken-link-checker https://services.flexgrafik.nl --ordered
```

## Manual Checks

### Metadata
- [ ] Every page has unique `<title>` (max 60 chars)
- [ ] Every page has `<meta name="description">` (max 160 chars)
- [ ] OG `type`, `title`, `description`, `url`, `images` present
- [ ] Twitter card metadata present

### Conversion (CRO)
- [ ] One CTA above the fold on homepage ("Book Free Demo")
- [ ] Trust Bar visible in first viewport
- [ ] Pain Points use hard data (numbers, percentages, €)
- [ ] Solution section has clear pricing
- [ ] Case Studies show Before/After metrics
- [ ] Risk Reversal section reduces purchase anxiety
- [ ] Final CTA repeats the primary action
- [ ] No competing CTAs (one primary per section)

### Mobile
- [ ] Tap targets ≥ 44px
- [ ] No horizontal scroll
- [ ] Font sizes readable (≥ 16px body)
- [ ] Sections stack vertically
- [ ] Images scale correctly

### Accessibility
- [ ] `prefers-reduced-motion` disables animations
- [ ] Focus rings visible on interactive elements
- [ ] Alt text on images
- [ ] Color contrast ≥ 4.5:1
- [ ] ARIA labels where needed

## Reporting
Document findings in: `services/docs/audits/YYYY-MM-DD-seo.md`

Include:
- Lighthouse scores (screenshot or JSON)
- List of broken links (if any)
- CRO recommendations
- Mobile issues
- Priority fixes (P0 = blocks deploy, P1 = next sprint, P2 = nice to have)
