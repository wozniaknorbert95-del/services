# Handoff — Technical Map Enterprise P0

**Date:** 2026-07-09  
**Session:** Technical Map layout engine rewrite (expert revision)  
**Branch:** master  
**Spec:** `docs/superpowers/specs/2026-07-09-technical-map-enterprise-design.md`

## CO ZROBIONO

Przepisanie layout engine diagramu Technical map — slot grid + gutter buses, match static SVG geometry.

## Zmiany

| Area | Detail |
|------|--------|
| Layout JSON | `docs/design/los-diagram-layout.json` — 1200×720, split-row Think\|Orchestrate, guard banner, 12 slots, PRIMARY_BUSES |
| SSoT | `system-diagram.ts` — `resolveSlotPosition()`, `getArchitectureSlots()`, `routeBusPath()`, integration edges separate from FLOW |
| Renderer | `LivingSystemDiagram.tsx` — compact 130×28 nodes, left rail labels, paint order, architecture vs funnel canvases |
| Mobile | SVG hidden `< md`; accordion only on Technical map |
| quietforge | Removed from architecture canvas (footer only) |
| Audit | `audit-los-diagram.mjs` — ACT≥3, Wizard×2, story default no SVG, mobile gates |

## Build gate

- `npm run typecheck` — PASS
- `npm run build` — PASS
- `node scripts/audit-los-diagram.mjs http://localhost:3003` — **PASS** (0 findings)

## Pliki

```
docs/design/los-diagram-layout.json
src/content/system-diagram.ts
src/components/diagram/LivingSystemDiagram.tsx
scripts/audit-los-diagram.mjs
docs/superpowers/specs/2026-07-09-technical-map-enterprise-design.md
```

## NASTĘPNY KROK

- [ ] Deploy + live visual check side-by-side with `public/gratka/los-architecture.svg`
- [ ] P1 polish: keyboard nav, hover tooltips, multi-slot selection stripe
- [ ] Commander 15s test on production `/founder/#system-diagram`
