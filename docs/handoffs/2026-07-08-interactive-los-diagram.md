# Handoff: Interactive LOS Diagram — Quietforge

**Date:** 2026-07-08  
**Repo:** `services` (quietforge.flexgrafik.nl)  
**Plan:** Interactive LOS Diagram (founder primary, owner-ecosystem secondary)

## CO — delivered

1. **Data layer** — `src/content/system-diagram.ts`  
   - 9 nodes + Quietforge service node  
   - 13 INT edges (INT-001…INT-013) from integration contracts  
   - Copy from `system-description-master.md` §3–§5, §13  
   - Layout positions from `docs/design/los-diagram-layout.json`

2. **React components** — `src/components/diagram/`  
   - `LivingSystemDiagram.tsx` — SVG, hover/click, view toggle, life loop, walk-the-loop  
   - `DiagramDetailPanel.tsx` — AS-IS / TO-BE, proof + demo links  
   - `DiagramMobileAccordion.tsx` — accordion &lt;768px (SVG hidden on mobile)  
   - `DiagramViewToggle.tsx` — Architecture | SMB Funnel

3. **Page integration**  
   - `/founder/#system-diagram` — replaced `VideoSlot` (founder video placeholder)  
   - `/results/owner-ecosystem/#los` — interactive diagram above static SVG fallback

4. **Nav / audit**  
   - Footer „LOS diagram” → `/founder/#system-diagram`  
   - `audit-navigation.mjs` — founder anchor + interactive diagram check

5. **Design ref** — `docs/design/los-diagram-layout.json` (Figma-equivalent layout coordinates; no MCP export PNG this session)

## DLACZEGO

Founder page credibility layer needed proof without unfinished video. Interactive map is stronger for LinkedIn/tech traffic than empty `VideoSlot`. SR-02 unchanged — no full diagram on home.

## Verification

```powershell
cd services
npm run typecheck
npm run lint
npm run build
npm run audit:navigation   # requires dev server on :3000
```

| Check | Expected |
|-------|----------|
| `/founder/#system-diagram` | 9+1 clickable nodes, detail panel |
| Mobile 375px | Accordion, no page-wide overflow |
| `/results/owner-ecosystem/#los` | Interactive + static SVG download |
| Home `/` | No `LivingSystemDiagram` (SR-02) |
| Static fallback | SVG + PDF links under diagram |

## NASTĘPNY KROK

- Commander HITL on `system-description-master.md` traction §2.2 (separate task)  
- Optional: Figma PNG ref export to `docs/design/los-diagram-figma-ref.png`  
- Deploy manual only (Zasada 11)

## Files touched

| File | Action |
|------|--------|
| `docs/design/los-diagram-layout.json` | CREATE |
| `src/content/system-diagram.ts` | CREATE |
| `src/components/diagram/*.tsx` | CREATE (4) |
| `src/app/founder/page.tsx` | MODIFY |
| `src/app/results/owner-ecosystem/page.tsx` | MODIFY |
| `src/lib/navigation.ts` | MODIFY |
| `scripts/audit-navigation.mjs` | MODIFY |
| `docs/strategy/site-map.md` | MODIFY |
