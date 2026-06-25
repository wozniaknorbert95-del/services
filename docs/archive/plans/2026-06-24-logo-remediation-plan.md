# Logo Remediation Plan — Quietforge Brand Chrome

**Date:** 2026-06-24  
**Scope:** Header/nav wordmark + decorative graphic watermark  
**Status:** Implemented in same session

---

## 1. Problem diagnosis

| Issue | Root cause | Impact |
|-------|------------|--------|
| Illegible header logo | `BrandLogo` renders square PNG (`1024×1024`) at `height: 2.25rem` (36px) | Complex mark collapses to unreadable smudge — amateur SaaS look |
| Wrong asset for context | Graphic lockup used where typographic mark is specified | Violates `DESIGN-SYSTEM.md` §8: lowercase `quietforge` with `▍` accent (`.qf-logo`) |
| No decorative brand presence | Full graphic never shown at appropriate scale | Brand equity wasted; header carries impossible job |

**Evidence:** `brand-logo.css` caps image at 36px; nav links use `--qf-fs-sm` (14px) — wordmark at 16–18px would read clearly; 36px PNG does not.

---

## 2. Before / after spec

### Header & footer (typographic wordmark)

| Property | Before | After |
|----------|--------|-------|
| Format | PNG `<Image>` | CSS text lockup `▍ quietforge` |
| Font | n/a | `--qf-mono`, weight 700 |
| Header size | 36px image | **17px** mobile (`--qf-fs-base`), **18px** desktop (`--qf-fs-lg`) |
| Footer size | 44px image | **16px** (`--qf-fs-base`) |
| Accent | in PNG | `::before` bar `--qf-accent` |
| Link | home | unchanged |
| Hover | none | text → `--qf-accent`, no underline on logo link |

### Hero background (graphic watermark)

| Property | Spec |
|----------|------|
| Asset | `/brand/quietforge-logo.png` (keep existing; favicon-grade PNG OK at large scale with low opacity) |
| Placement | Hero section, right-aligned, vertically centered |
| Max width | **480px** desktop (`min(42vw, 480px)`) |
| Opacity | **4%** (0.04) — readable hero copy remains AA on `--qf-bg` |
| z-index | `0` behind content; hero inner `z-index: 1` |
| Mobile `<820px` | **hidden** — avoids clutter on narrow viewports |
| Motion | Static only; inherits global `prefers-reduced-motion` (no animation) |
| a11y | `aria-hidden="true"`, empty alt, `pointer-events: none` |

### Unchanged

- Favicon + apple-touch-icon: graphic PNG via `layout.tsx` `metadata.icons`
- OG images: SVG routes (not logo PNG)

---

## 3. File list

| File | Action |
|------|--------|
| `src/components/ui/BrandLogo.tsx` | Replace PNG with typographic wordmark |
| `src/components/ui/brand-logo.css` | Wordmark + watermark styles |
| `src/components/ui/BrandWatermark.tsx` | **Create** — hero decorative layer |
| `src/components/home/HeroSection.tsx` | Add watermark + relative stacking |
| `src/lib/constants.ts` | Add `BRAND_WORDMARK` constant |
| `docs/plans/2026-06-24-logo-remediation-plan.md` | This plan |
| `docs/handoffs/2026-06-24-logo-remediation.md` | Session handoff |

**Not changed:** `Header.tsx`, `Footer.tsx` (still use `<BrandLogo />` — behaviour changes via component), `public/brand/quietforge-logo.png`, `layout.tsx` icons.

---

## 4. Breakpoints

| Breakpoint | Header wordmark | Watermark |
|------------|-----------------|-----------|
| `<820px` | `--qf-fs-base` (16px) | hidden |
| `≥820px` | `--qf-fs-lg` (20px) | visible, max 480px wide, 4% opacity |

---

## 5. Implementation steps (executed)

1. Refactor `BrandLogo` → text lockup using `.qf-brand-wordmark` (mirrors canonical `.qf-logo` in `quietforge.css`).
2. Remove PNG `<Image>` from header/footer paths; keep `BRAND_LOGO` for icons only.
3. Add `BrandWatermark` with CSS background-image (no layout shift, no extra DOM weight from Image fill).
4. Wrap hero in `position: relative`; stack watermark under content.
5. Run `npm run build` gate.
6. Handoff + commit to `master`.

---

## 6. Quality gates

- [x] No graphic logo in header/footer
- [x] Wordmark readable at arm's length on 1440px and 390px viewports
- [x] Watermark opacity ≤5%; hero H1/contrast unaffected
- [x] `prefers-reduced-motion`: watermark static (no animation added)
- [x] Max 8 Tailwind utilities per element — styles in `brand-logo.css`
- [x] `npm run build` PASS

---

## 7. Future (out of scope)

- Dedicated `/brand/quietforge-wordmark.svg` if non-CSS wordmark needed in PDF/OG
- Optional footer band watermark at 2–3% if brand presence needed below fold
- Light theme wordmark contrast check when `qf-theme-light` ships
