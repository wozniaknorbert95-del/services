# Handoff — P0 remediation + analytics + doc hygiene

**Date:** 2026-06-25  
**Goal:** Close gaps from deep verification — solution detail pricing, analytics wiring, canon/doc cleanup.

## What changed

| Area | Change |
|------|--------|
| Pricing SSoT | `SOLUTION_DETAIL_PRICES` in `pricing.ts`; all 5 solution detail pages use matrix ranges |
| Solution pages | web-upgrade €1,800–5,500; sales-funnel €2,400–6,500; inbox full range |
| CTA canon | `CTAS.bookAutomationMap` → `Book Automation Map` (site-map §4) |
| WhatsApp | `WHATSAPP.label` → `Ask on WhatsApp` (sticky + social) |
| Header | Solutions dropdown shows price ranges (desktop + mobile) |
| Analytics | 7/9 events wired; payment events deferred (no checkout yet) |
| Docs | `implementation-checklist.md` updated; SR-02 + site-map audit path fixed |

## Files touched

- `src/content/pricing.ts` — `SOLUTION_DETAIL_PRICES`
- `src/app/solutions/*/page.tsx` — `priceFrom` from SSoT
- `src/components/solutions/SolutionLayout.tsx` — range-aware label + CTA/analytics
- `src/components/analytics/*` — `AnalyticsPageView`, `TrackedLink`, `TrackedAnchor`
- `src/components/Header.tsx`, `HeroSection.tsx`, `SpearheadSpotlight.tsx`, `FinalCtaBand.tsx`
- `src/components/FooterArtefactLinks.tsx`, `Footer.tsx`
- `src/app/pricing/page.tsx`, `src/app/results/page.tsx`
- `src/content/conversion-copy.ts`, `src/lib/constants.ts`
- `docs/operations/implementation-checklist.md`, `docs/canons/strategy-rules.md`, `docs/strategy/site-map.md`

## Verification

```
npm run typecheck ✅
npm run build ✅ (sitemap 23 routes)
```

## Deferred

- `/results/` filters/grouping (optional session)
- `book_payment_*` events until Book Discovery checkout
- Formal mobile overflow audit (spot-check before deploy)

## Next step

Commit + push when Commander approves.
