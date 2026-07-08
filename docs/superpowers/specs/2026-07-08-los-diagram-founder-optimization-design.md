# Design: LOS Diagram — Founder Optimization (Audience A)

**Date:** 2026-07-08  
**Scope:** `/founder/#system-diagram` only (owner-ecosystem secondary, unchanged default)  
**Session focus:** Visibility + richness — structure stays, presentation upgrades.

---

## Problem (reload)

| Issue | Evidence |
|-------|----------|
| **Słaba widoczność** | 9px mono text, homogenic nodes, edges invisible without hover |
| **Za biedna** | Brak step numbers, subtitle na canvas, capability chips, Jadzia drill-down |
| **Stale Jadzia** | `system-diagram.ts`: PARTIAL ~55%; repo truth: Phase A+B LIVE (7/8 capabilities) |
| **Zły default** | Architecture first — SMB founder lost in 15s |

**Zachowujemy:** `system-diagram.ts` SSoT, panel AS-IS/TO-BE, mobile accordion, static fallback.

---

## Decyzje sesji

1. **Audience A only** — founder = ścieżka klienta + proof, nie repo dump
2. **Struktura strony OK** — ten sam `LivingSystemDiagram`, bogatsze widoki wewnątrz
3. **Default = Story** — 6 kroków z `OWNER_FLOW_STEPS`, numerowane karty, StatusBadge
4. **Architecture = „Technical map”** — swimlane jak static SVG, hero edges only
5. **Jadzia sync** — z `jadzia-coi.ts` + `jadzia-core/brain.md` (Phase A+B LIVE)

---

## Widoki (founder)

| View | Label | Content |
|------|-------|---------|
| **story** (default) | Customer journey | 6 steps: Entry → Revenue → Leads → Operations → Execution → Supervision |
| **architecture** | Technical map | Swimlane LOS + clickable nodes + hero flow arrows |
| smb_funnel | hidden on founder | merged into story |

---

## P0 implementacja (ta sesja)

- [ ] P0.1 `DiagramStoryView` — rich step cards, link to node detail
- [ ] P0.2 Swimlane layout JSON + renderer (architecture)
- [ ] P0.3 Hero edges default; „Show integrations (13)” toggle
- [ ] P0.4 Richer nodes: larger, layer tint, StatusBadge, `hoverLine` subtitle
- [ ] P0.5 Jadzia node + panel: LIVE ~85%, 7 capabilities from `JADZIA_COI_CAPABILITIES`
- [ ] P0.6 Life loop collapsible on founder (default closed)
- [ ] P0.7 Founder `defaultView="story"`, panel below diagram on founder
- [ ] P0.8 Update `audit-los-diagram.mjs`

---

## Jadzia truth (2026-07-05 deploy closure)

**Status:** LIVE (operational spine) — procurement Phase C PLANNED  
**Readiness:** ~85% (Phase A+B deployed, prod-smoke 8/8)  
**LIVE:** orders INT-002, leads INT-004, GA4 INT-009, content calendar INT-010, chat INT-001, WP SSH, worker HITL  
**PARTIAL/PLANNED:** Strategist weekly brief, Agent OS auto-spawn INT-006, Procurement Brain

---

## DoD

- Founder sees **6 numbered steps** without clicking
- Jadzia step shows **≥4 capability chips** LIVE
- Architecture view: nodes **inside** lane bands
- 15s test: portal → game → wizard → jadzia → governance
