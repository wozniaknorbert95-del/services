# Handoff — VCMS live audit fixes (proof + pricing + deploy)

**Date:** 2026-06-16  
**Scope:** Push pending EN IntentRouter + proof hygiene + pricing VCMS line

## Live audit findings (addressed)

| Issue | Fix |
|-------|-----|
| IntentRouter PL on EN site | Already in `c85c527` — pushed |
| VCMS dead links in router | Same commit |
| Dashboard screenshot `Conflicts: 9` vs copy | New `vcms-dashboard.svg` — Conflicts: 0, 8 repos |
| Audit log Polish UI in PNG | New `audit-log.svg` — EN JSONL fixture |
| Conflict report dark/cropped | Fixed SVG encoding + `object-contain` for SVG proof |
| Pricing ecosystem tier missing VCMS | `pricing.ecosystem.summary` in SSoT + `/pricing` |

## Files

- `public/gratka/vcms-dashboard.svg` (new)
- `public/gratka/audit-log.svg` (new)
- `public/gratka/conflict-report.svg` (cleaned)
- `src/content/proof.ts` — asset paths + `ecosystem.summary`
- `src/app/pricing/page.tsx` — VCMS in ecosystem tier
- `src/components/home/BehindTheScenes.tsx` — SVG render fix

## Verify post-deploy

1. Homepage IntentRouter — EN copy, VCMS → owner-ecosystem
2. BehindTheScenes — dashboard shows Conflicts: 0
3. `/pricing` — Multi-System includes VCMS scan & governance

## Remaining P2

- SystemMetrics `[FILL]`
- Owner-ecosystem dedicated VCMS narrative block
