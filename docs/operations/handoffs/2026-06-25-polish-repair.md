# Handoff — Full polish pump (P0 + P1 + P2)

**Date:** 2026-06-25  
**Goal:** Professional microcopy polish, skills install, results IA tweak, ship to production.

## Skills installed (skills.sh)

| Skill | Source | Purpose |
|-------|--------|---------|
| `ui-audit` | mblode/agent-skills | Page-level UI QA checklist |
| `tuzi-copy-polish` | tuziapi/tuzi-skills | Social copy (not site) |
| `copy-polish-quietforge` | repo-local | Quietforge microcopy grep gate |

## Code changes (beyond prior session)

| Area | Change |
|------|--------|
| Eyebrow | `stripEyebrowPrefix` + normalize in `Eyebrow.tsx` |
| `/results/` | Case cards first; LOS as “How these systems connect” after grid |
| CTA | Remaining buttons → `CTAS.bookAutomationMap` |
| Blog MDX | Link text `Book Automation Map` |
| Sitemap | Tiered priorities |
| strategy-check | CTA canon label updated |

## Verification

```
npm run typecheck ✅
npm run build ✅
rg "Guided agency|Book your Automation Map" src/ --glob "*.tsx" → 0
```

## Deploy

Pushed to `master` → Vercel CD.
