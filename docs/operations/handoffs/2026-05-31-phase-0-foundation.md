# Phase 0 — Foundation & Brand Migration

**Date:** 2026-05-31
**Scope:** Shared layout, brand migration, UI primitives, error boundaries, cleanup.

---

## What was done

1. **Brand migration** — `layout.tsx` metadata updated from FlexGrafik Digital → Quietforge (title, description, OG, Twitter, JSON-LD).
2. **Design system** — `globals.css` rewritten with Quietforge tokens (warm black base `#0e0c0a`, amber accent `#e8a33d`, monospace-first, sharp 2px radius). Legacy `--color-*` bridge kept for backward compatibility during transition.
3. **Shared layout shell** — `Header.tsx` (sticky, Solutions dropdown, persistent "Book Automation Map →" CTA, mobile hamburger) + `Footer.tsx` (4-column mini-sitemap, Pillar 3 bridge) integrated into root `layout.tsx`.
4. **UI primitives** —
   - Extended: `Button.tsx` (withArrow, xl size, link variant), `Card.tsx` (spearhead/hover/interactive variants).
   - New: `Eyebrow.tsx`, `IconTile.tsx`, `ProcessStep.tsx`, `PricingCard.tsx`, `FaqItem.tsx`.
5. **Lib utilities** — `constants.ts` (routes, nav, pricing SSoT), `motion.ts` (shared Framer Motion variants).
6. **Error boundaries** — `error.tsx`, `not-found.tsx`, `loading.tsx` at app root.
7. **Cleanup** — deleted 7 superseded components (TrustBar, Solution, ProjectShowcase, RiskReversal, CTASection, Products, Trust).
8. **Build gate** — `npm run build` + `npm run typecheck` both pass with zero errors.

---

## Files created / modified

| File | Action |
|------|--------|
| `src/app/globals.css` | Rewritten — Quietforge tokens |
| `src/app/layout.tsx` | Updated metadata + Header/Footer integration |
| `src/components/Header.tsx` | New |
| `src/components/Footer.tsx` | Rewritten |
| `src/components/ui/Button.tsx` | Extended |
| `src/components/ui/Card.tsx` | Extended |
| `src/components/ui/Eyebrow.tsx` | New |
| `src/components/ui/IconTile.tsx` | New |
| `src/components/ui/ProcessStep.tsx` | New |
| `src/components/ui/PricingCard.tsx` | New |
| `src/components/ui/FaqItem.tsx` | New |
| `src/lib/constants.ts` | New |
| `src/lib/motion.ts` | New |
| `src/app/error.tsx` | New |
| `src/app/not-found.tsx` | New |
| `src/app/loading.tsx` | New |
| `src/app/page.tsx` | Placeholder (Phase 1 rebuild next) |
| `src/components/TrustBar.tsx` | Deleted |
| `src/components/Solution.tsx` | Deleted |
| `src/components/ProjectShowcase.tsx` | Deleted |
| `src/components/RiskReversal.tsx` | Deleted |
| `src/components/CTASection.tsx` | Deleted |
| `src/components/Products.tsx` | Deleted |
| `src/components/Trust.tsx` | Deleted |

---

## Design tokens (single source of truth)

All in `src/app/globals.css` under `:root` with `--qf-*` prefix.
Key colours: `--qf-bg #0e0c0a`, `--qf-accent #e8a33d`, `--qf-text #e9e2d4`.

---

## Next step

**Phase 1 — Home Page deep rebuild** (sessions 2–3). Map 1:1 to `Home — Copy & Wireframe (Filar 2).md`.
