# Handoff — Home Page Optimization (Architect's Cockpit)

**Date:** 2026-06-23  
**Repo:** services.flexgrafik.nl  
**Plan:** Home Page Optimization — Architect's Cockpit (all sprints A–C)  
**Build:** `npm run build` ✅  
**Sprint D:** complete (intent persistence, cursor blink, pipeline handoff)

## Summary

Full home optimization per audit `docs/audits/2026-06-23/home-page-audit.md`. Section order unchanged (site-map §2 LOCKED). Visual weight, design system compliance, and conversion mechanics improved. Sprint D adds cross-section intent filtering and cockpit micro-polish.

## Sprint A — Design system integrity

| Task | File | Change |
|------|------|--------|
| A1 | `IntentRouter.tsx` | Quietforge tokens, no rounded/shadow/gradient, filter state label, Button component |
| A2 | `Pricing.tsx` | Single primary CTA on Automation Map; featured Single System tier |
| A3 | `HeroSection.tsx` | 2 CTAs above fold; wizard + See systems in status bar; proofLine promoted |

## Sprint B — Cockpit identity

| Task | File | Change |
|------|------|--------|
| B1 | Multiple home components | Terminal eyebrows: pipeline, diagnostics, spearhead, governance, workflow, results, metrics |
| B2 | `SystemMetrics.tsx`, `metrics-display.ts` | Outcome-first layout; 4 cards (dropped repos, skus) |
| B3 | `ResultsTeaser.tsx` | 3 curated case studies; mid-page L3; measurement in accent |
| B4 | `OwnerEcosystemTeaser.tsx`, `BehindTheScenes.tsx` | Removed duplicate outcome bullets; BTS left-aligned |

## Sprint C — Advanced cockpit

| Task | File | Change |
|------|------|--------|
| C1 | `SystemArchitecture.tsx`, `PainGrid.tsx` | `py-sp-16` bridge sections |
| C2 | `TrustAndObjections.tsx` (new) | Merged trust + objections; replaces WhyThisWorks + TrustSafety on home |
| C3 | `SectionProgress.tsx` (new) | Desktop left rail + mobile scroll bar |

## Other

- `globals.css` — `.panel` and `.btn` aligned to `--qf-radius` and flat backgrounds
- `conversion-copy.ts` — WhatsApp CTA: "Quick question? WhatsApp"
- `page.tsx` — SectionProgress + TrustAndObjections wired

## Legacy (unused on home, kept in repo)

- `WhyThisWorks.tsx`
- `TrustSafety.tsx`

## Post-deploy smoke

1. Home IntentRouter — sharp corners, no shadow on filter buttons
2. Hero — 2 buttons above fold; status bar has See systems + wizard links
3. Pricing — 1 filled CTA (Automation Map only)
4. Results — 3 cards + "Ready? Book…" link
5. Desktop — section progress rail left
6. Mobile — top progress bar under nav
7. IntentRouter — pick "Save time" → Results/Pain/Metrics highlight matching cards
8. Hero terminal — cursor blinks (unless reduced-motion)
9. Pipeline — steps 03–04 accent border + modules handoff label

## Sprint D — Cross-section cockpit polish

| Task | File | Change |
|------|------|--------|
| D1 | `home-intent.tsx` (new) | `HomeIntentProvider` + `useHomeIntent` + sessionStorage persistence |
| D2 | `intent-highlight.ts` (new) | `intentHighlightClass`, `sortByIntentMatch` helpers |
| D3 | `IntentRouter.tsx`, `ResultsTeaser.tsx`, `PainGrid.tsx`, `SystemMetrics.tsx` | Intent filter propagates — match highlight, non-match dim, sort matches first |
| D4 | `HeroSection.tsx`, `globals.css` | Terminal cursor blink (`qf-cursor-blink`), respects reduced-motion |
| D5 | `SystemArchitecture.tsx` | Steps 03–04 (Wizard + AI) accent border + `// modules underneath ↓` handoff |
| D6 | `page.tsx` | `HomeIntentProvider` wraps home stack |
