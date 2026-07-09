# Design: Technical Map — Enterprise Diagram Architecture

**Date:** 2026-07-09  
**Status:** APPROVED — Commander 2026-07-09 (labels: human names on canvas)  
**Scope:** Interactive Technical map (`variant="founder"`) + shared renderer for `variant="full"`  
**Supersedes:** layout sections of `2026-07-08-los-diagram-founder-optimization-design.md`  
**Design truth:** [`public/gratka/los-architecture.svg`](../../../public/gratka/los-architecture.svg)

---

## 1. Expert diagnosis — why the current plan is insufficient

The P0 plan correctly identifies slot-based layout and compact nodes. It misses three decisions that separate **enterprise deployment diagrams** from **decorated node graphs**:

| Gap in original plan | Expert impact |
|----------------------|---------------|
| **Think + Orchestrate treated as stacked lanes** | Static SVG places them **side-by-side in one row** (y=252). Stacking them doubles vertical height and breaks scan path. |
| **Guard modeled as equal swimlane** | Guard is a **cross-cutting banner** (full-width strip above Sense), not a peer lane. Putting VCMS nodes inside Guard confuses “always on” vs “pipeline step”. |
| **Hero edges = INT edge flags** | Integration IDs (INT-002, INT-003…) are **data couplings**. Primary flow is a **separate visual construct** — vertical buses in layer gutters, like static SVG lines at x=600, x=300, x=870. |
| **P0.4 proposed larger nodes + StatusBadge on canvas** | Wrong direction. Enterprise diagrams **reduce** canvas chrome; status belongs in panel/tooltip. Previous session already proved 172×68 × 3 text lines = unreadable. |
| **No paint order / gutter contract** | Edges drawn over subtitles = amateur. Professional rule: **bands → gutters → edges → nodes → labels**. |
| **quietforge in MEMORY slot** | Not in static SVG. Service/portfolio layer is footer copy, not a deployment node. |

**Verdict:** Treat interactive Technical map as **static SVG + hit targets + panel**, not a new diagram language.

---

## 2. Diagram classification

| Attribute | Value |
|-----------|-------|
| Type | **Layered deployment diagram** with cross-cutting guard |
| Not | C4 dynamic, force-directed graph, BPMN, pure swimlane |
| Primary reader | Founder / SMB evaluator (15s scan) |
| Secondary reader | Tech visitor / investor (60s drill-down) |
| Cognitive budget | **1 model on canvas** — vertical supervised loop. Everything else is progressive disclosure. |

---

## 3. Three approaches (trade-offs)

### A — Slot grid + gutter routing (RECOMMENDED)

Measure static SVG coordinates → encode as `slots` + `primaryBuses` in JSON. Renderer places nodes in slots; edges route through **inter-layer gutters** (12–16px gaps between bands).

| Pros | Cons |
|------|------|
| Matches static ≥90% | Manual coord maintenance when repos change |
| Predictable export/print | One-time geometry work |
| No new dependencies | |
| Edges never cross node text | |

### B — Static SVG background + HTML/SVG overlay hit targets

Render `los-architecture.svg` as `<image>`; position transparent buttons over repo rects.

| Pros | Cons |
|------|------|
| Instant visual parity | Breaks on any static SVG edit |
| Minimal layout code | Multi-appearance (zzpackage ×2) needs duplicate overlays |
| | Poor accessibility / focus rings |
| | Cannot animate focus/highlight cleanly |

### C — Auto layout library (@xyflow, dagre)

| Pros | Cons |
|------|------|
| Scales to 50+ nodes | **Rejected** — audit 2026-07-08 proved worse than static |
| | Non-deterministic layout |
| | Export mismatch |

**Recommendation:** **A**. Optional future: generate slot JSON from static SVG once via script — not in P0.

---

## 4. Canvas geometry (frozen from static SVG)

Canvas: **1200 × 720** (match static; current 780 is unnecessary height).

```
┌─────────────────────────────────────────────────────────────┐
│  TITLE + subtitle (centered, y=36/58)                        │
├─────────────────────────────────────────────────────────────┤
│  GUARD BANNER (y=72, h=56, full width, green tint)          │
│  centered text only — NO nodes in guard row                    │
├─────────────────────────────────────────────────────────────┤
│  SENSE (y=148, h=88)                                         │
│  [zzpackage] [game] [portal] [vcms-scan]  ← repo row y≈200   │
├──────────────────────────┬──────────────────────────────────┤
│  THINK (x=40, w=520)     │  ORCHESTRATE (x=580, w=580)      │
│  y=252, h=88             │  same y — SPLIT ROW               │
│  [jadzia]                │  [agent-os] [mission-ctrl] [vcms]│
├──────────────────────────┴──────────────────────────────────┤
│  ACT (y=356, h=88)                                           │
│  [zzpackage] [jadzia] [agent-os]                             │
├─────────────────────────────────────────────────────────────┤
│  MEMORY (y=460, h=72, dashed blue border)                    │
│  [flexgrafik-meta]                              (right side) │
├─────────────────────────────────────────────────────────────┤
│  footer legend (3 lines, y=640+)                             │
└─────────────────────────────────────────────────────────────┘
```

**Left rail (120px):** Layer labels + subtitles live **only** in rail. Node area starts at x=140. This removes subtitle/arrow collision entirely.

**Guard policy:** VCMS governance is a **Sense-layer node** (`flex-vcms` in Sense row per static). Guard banner is **text-only** cross-cutting strip — not a slot row for nodes.

---

## 5. Node model

### 5.1 Slot vs node identity

```ts
interface DiagramSlot {
  id: string;           // "zzpackage-sense" | "zzpackage-act"
  nodeId: DiagramNodeId; // links to detail panel SSoT
  layer: DiagramLayerId;
  col: number;
  row?: number;         // only for split-row (think=0, orchestrate=1)
}
```

Multi-appearance: same `nodeId`, different `slotId`. Click either → same `DiagramDetailPanel`.

**Visual link (P1):** 2px amber left stripe on all slots sharing `nodeId` when one is selected.

### 5.2 Compact node chrome (canvas)

| Property | Value |
|----------|-------|
| Size | **130 × 28** (match static repo boxes; scale to 140×32 on retina if needed) |
| Content | Human label only (`Wizard`, not `zzpackage`) on founder |
| Status | 6px dot top-left — no text on canvas |
| Tier A spearhead | Wizard slots: `stroke: accent, stroke-width: 2` |
| Tier B spine | Jadzia: subtle amber fill tint |
| Tier C infra | Default repo box style |

`hoverLine`, `readiness`, `asIs` → panel only. `<title>` for SVG tooltip.

### 5.3 quietforge

**Not placed on architecture canvas.** Footer line only (static pattern): “quietforge.flexgrafik.nl — portfolio truth”. Remains in Story view step 6 / panel link.

---

## 6. Edge taxonomy (four classes — not two)

Separate **visual edges** from **integration data** in `system-diagram.ts`:

| Class | ID prefix | Default | Stroke | Routing |
|-------|-----------|---------|--------|---------|
| **primary** | `FLOW-*` | ON | amber 2.5px | Vertical in gutter between bands |
| **governance** | `GOV-*` | ON | green 1.5px dashed | Guard banner → Sense (decorative) |
| **feedback** | `FLOW-MEMORY` | ON | blue 1.5px dashed | Memory → Think arc (static path) |
| **integration** | `INT-*` | OFF | white 1px 25% | Toggle “Show integrations (N)” |

### 6.1 Primary flow buses (match static arrows)

Explicit geometry — **not** derived from node centers:

| Bus | From band | To band | x anchor | Label |
|-----|-----------|---------|----------|-------|
| FLOW-1 | Sense | Think | 600 | (none — vertical) |
| FLOW-2 | Think | Act | 300 | via gutter |
| FLOW-3 | Orchestrate | Act | 870 | via gutter |
| FLOW-4 | Act | Memory | 600 | vertical |
| FLOW-MEMORY | Memory | Think | 200 | “Memory → Think feedback” |

INT-002, INT-003 etc. remain in data model for panel/toggle — they are **not** the primary visual path.

### 6.2 Gutter routing algorithm

```
function routeBus(fromBand, toBand, xAnchor):
  y1 = fromBand.y + fromBand.height + GUTTER/2
  y2 = toBand.y - GUTTER/2
  return polyline [(xAnchor, y1), (xAnchor, y2)]
```

Node-to-node integrations (when toggled): L-shaped route via nearest gutter, never through node bbox. Use simple obstacle avoidance: if bbox collision, offset x by 40px.

### 6.3 Paint order (mandatory)

1. Background
2. Layer bands (split-row for think/orchestrate)
3. Guard banner
4. Primary + feedback edges
5. Integration edges (if visible)
6. Nodes
7. Edge labels (offset +12px right of bus, never on curve)
8. Footer legend

---

## 7. Progressive disclosure stack

| Level | Surface | Audience |
|-------|---------|----------|
| L0 | Story view (default founder) | SMB — 6 numbered steps |
| L1 | Technical map — primary buses only | Mixed — 15s architecture scan |
| L2 | + integration toggle | Tech — full INT map |
| L3 | Node click → detail panel | Proof / AS-IS / demos |
| L4 | Static SVG / PDF download | LinkedIn / offline |

**Life loop** (`<details>`): stays **below** diagram, default closed on founder. Never competes with L1 canvas.

**Remove from architecture toolbar on founder:** “Walk the loop” visible only when life-loop `<details>` is open (reduces toolbar noise).

---

## 8. Interaction spec

| Action | Behavior |
|--------|----------|
| Click slot | Open panel below (founder) / right (full) |
| Click same slot | Toggle close |
| Hover slot (desktop) | Highlight slot + connected primary bus; dim others (opacity 0.35) |
| Escape | Close panel |
| Arrow keys (P1) | Move focus in flow order: Sense L→R, ↓ Think, etc. |
| Integration toggle | Fade-in INT edges 200ms; respect `prefers-reduced-motion` |

**Focus ring:** 2px amber outline on slot rect (SVG `stroke`, not CSS on `<g>` — CSS vars fail in SVG).

---

## 9. Responsive / mobile

| Breakpoint | Technical map behavior |
|------------|------------------------|
| `< md` | **Hide SVG entirely.** Layer-grouped accordion (existing `DiagramMobileAccordion`) sorted by LOS order. |
| `≥ md` | Full canvas, `viewBox` scale, no `min-width` forcing page scroll |

Expert rule: **never ship dense deployment diagrams on 375px canvas** — list view is the mobile pattern (AWS architecture icons, Retool docs).

---

## 10. Revised P0 implementation (single session)

| Step | Task | File(s) |
|------|------|---------|
| P0.0 | Freeze geometry constants from static SVG | `los-diagram-layout.json` |
| P0.1 | Split-row layer model + guard banner (no guard slots) | layout JSON + renderer |
| P0.2 | Slot definitions (14 slots incl. multi-appearance) | layout JSON |
| P0.3 | `resolveSlotPosition()` + `getArchitectureSlots()` | `system-diagram.ts` |
| P0.4 | Compact node renderer (130×28, tier styles) | `LivingSystemDiagram.tsx` |
| P0.5 | `PRIMARY_BUSES` + gutter router (replace Bézier hero) | `system-diagram.ts` + renderer |
| P0.6 | Paint order refactor + left rail labels | `LivingSystemDiagram.tsx` |
| P0.7 | Integration toggle wires to INT class only | existing toggle |
| P0.8 | Mobile: hide SVG `< md` | `LivingSystemDiagram.tsx` |
| P0.9 | Audit gates: ACT ≥2 nodes, no SVG on story default, gutter overlap test | `audit-los-diagram.mjs` |

**Explicitly NOT in P0:** StatusBadge on canvas, 3-brains regions, walk-loop sync, export SVG, Figma.

---

## 11. P1 polish (session 2, after live gate)

- Multi-slot selection stripe (same `nodeId`)
- Keyboard navigation in flow order
- Hover tooltip (`hoverLine` one line)
- Edge pulse on bus hover (reduced-motion safe)
- Optional: `THREE_BRAINS` as faint background regions **behind** nodes, not labels

---

## 12. Definition of Done

| Test | Pass |
|------|------|
| Geometry | Think + Orchestrate share y=252; Guard has zero nodes |
| 5s | “Where does customer pay?” → Wizard visible in Sense or Act |
| 15s | portal → game → wizard → jadzia → agent-os without clicking |
| Static parity | Screenshot overlay ≥85% band alignment |
| ACT | ≥3 nodes (zzpackage, jadzia, agent-os) |
| Edges | Zero labels overlapping rail subtitles |
| Story default | No SVG visible until Technical map tab |
| Mobile | No horizontal page overflow; accordion on `< md` |
| Build | `npm run build` + `typecheck` PASS |
| Audit | `audit-los-diagram.mjs` → PASS |

---

## 13. Anti-patterns (hard no)

- `@xyflow/react` / force layout
- Quadratic Bézier for inter-layer primary flow
- Readiness % on canvas
- Repo keys as primary canvas label (founder variant)
- Guard as node container row
- More than 6 primary elements visible without interaction
- Diagram on homepage (SR-02)

---

## 14. Files touched (P0)

| File | Action |
|------|--------|
| `docs/design/los-diagram-layout.json` | REWRITE — geometry + slots + buses |
| `src/content/system-diagram.ts` | Slots, PRIMARY_BUSES, resolver |
| `src/components/diagram/LivingSystemDiagram.tsx` | Renderer rewrite |
| `scripts/audit-los-diagram.mjs` | Geometry gates |
| `docs/operations/handoffs/2026-07-09-technical-map-p0.md` | Session handoff |

**Unchanged:** `DiagramStoryView.tsx`, `founder/page.tsx` copy, `DiagramDetailPanel.tsx` content, static SVG asset.

---

## 15. Label policy (locked)

| Surface | Canvas | Panel |
|---------|--------|-------|
| Founder Technical map | **Human names only** (`Wizard Cash Engine`, `Jadzia COI`) | `shortLabel` repo key in subtitle |
| Owner-ecosystem `full` | Human name + optional mono `shortLabel` (P1) | Full AS-IS |

Commander decision: **human names on canvas** (2026-07-09).

---

*Ready for P0 implementation session.*
