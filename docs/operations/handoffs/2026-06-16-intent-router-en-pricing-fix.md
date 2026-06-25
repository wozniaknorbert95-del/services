# Handoff — IntentRouter EN + pricing fallback cleanup

**Date:** 2026-06-16  
**Commit:** `c85c527`  
**Scope:** Root-cause fix session (P0/P1)

## Problem (root cause)

1. **IntentRouter** shipped with Polish copy on an English site; module links were `#` placeholders.
2. **`/pricing` page JSX** still rendered `[FILL]` when `proof.ts` values were null — even though SSoT had real prices, the fallback strings leaked into UI paths.
3. Previous agent loop: StrReplace on `pricing/page.tsx` assumed wrong labels/structure.

## Changes

| File | Change |
|------|--------|
| `src/components/home/IntentRouter.tsx` | Full EN copy; `Link` + `ROUTES` for all modules and CTAs |
| `src/app/pricing/page.tsx` | Replaced 5× `[FILL]` with `Quoted after Map` / `Quoted monthly` / `Varies by scope` |
| `src/components/sections/Pricing.tsx` | Maintenance fallback → `Quoted after Map` |

## Verification

- `npm run typecheck` — pass
- `npm run build` — pass (29 routes)

## Remaining (P2 — not in this commit)

- `SystemMetrics.tsx` — one `[FILL]` for null metric values
- `/results/owner-ecosystem` — optional "Why VCMS matters" block

## Deploy

Commit local only until `git push origin master` (Vercel CD on push).
