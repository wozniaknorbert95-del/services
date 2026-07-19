---
status: "[WORKING — not for publication]"
title: "Research Notes — System Description Master"
date: "2026-07-08"
owner: "Session agent"
classification: "Internal input for system-description-master.md"
---

# Research Notes (Faza 0)

> **Not for publication.** Input for [`system-description-master.md`](./system-description-master.md).

---

## 1. Source read order — completed

| # | Source | Used for |
|---|--------|----------|
| 1 | `flexgrafik-meta/docs/core/as-is-inventory.md` | Baseline % (note: §5 integration table stale vs INT contracts) |
| 2 | `flexgrafik-meta/docs/core/verification-audit.md` | GAP-V01–V05 |
| 3 | `flexgrafik-meta/docs/core/living-system-architecture.md` | LOS 5 layers + life loop |
| 4 | `flexgrafik-meta/docs/core/ecosystem-blueprint.md` | Three brains, C4 |
| 5 | `flexgrafik-meta/docs/core/jadzia-operating-charter.md` | COI five pillars |
| 6 | `flexgrafik-meta/docs/core/integration-contracts.md` | INT-001–013 (authoritative for LIVE) |
| 7 | `flexgrafik-meta/docs/core/modules/module-*.md` (×8) | Per-module specs |
| 8 | `services/docs/canons/vision-system.md` | Portfolio direction |
| 9 | `services/docs/architecture/ecosystem-bridge.md` | Repo → portfolio map |
| 10 | `services/src/content/proof.ts` + `readiness.ts` + `profile-copy.md` | Public metrics |

---

## 2. Metric reconciliation (canonical for master)

### 2.1 Wizard steps

| Term | Value | Evidence |
|------|-------|----------|
| **SPA screens** | **9** | `wizard-1-3.js` L68–78: Intro + 7 categories + Checkout |
| **Business decision stages** | **7** | Steps 1–7: Fundament → Premium (exclude Intro + Checkout) |
| **Public footnote** | `9 UI screens · 7 business decision stages` | `proof.ts` L17–18 |

**Rule:** Never cite only one number without the other.

### 2.2 SKU count

| Source | Count | Verdict |
|--------|-------|---------|
| `product-master-table.json` raw array | **175** | PowerShell `ConvertFrom-Json` count 2026-07-08 |
| `proof.ts` | **167** | Comment: SSoT + `validate_product_master.py` |
| `module-zzpackage-wizard.md` | 77 | **STALE** — ignore for public copy |
| `profile-copy.md` v3 | 167 | Align with proof.ts |

**Master decision:** Public copy uses **167 SKUs** with footnote: *"SSoT `product-master-table.json`; validated catalog per `validate_product_master.py` (raw entries may differ)."*

### 2.3 Jadzia COI readiness

| Source | % | Notes |
|--------|---|-------|
| `as-is-inventory.md` §1 (2026-06-24) | ~35% | Pre COI Phase A deploy |
| `jadzia charter` §9 | ~10% COI capability | Emotional honesty — operational % higher |
| `readiness.ts` (portfolio) | **~93% PARTIAL** | Ops Command Layer spine (2026-07-19 Truth×Offer) |
| `integration-contracts.md` | order, lead, analytics LIVE | Nodes exist in `jadzia-core/agent/nodes/` |

**Master decision:** **~93% PARTIAL** for portfolio Ops Command spine; full COI strategist / supplier vision remains PARTIAL-PLANNED.

**Evidence nodes LIVE:** `order_node.py`, `lead_node.py`, `analytics_node.py`, `content_calendar_node.py`

### 2.4 systemsLive "5" vs 8 repos

**Deprecated.** Replace with `READINESS_ROWS` (8 rows) + `productionTouching: "6"` from `proof.ts`.

### 2.5 Portal chat

| AS-IS | TO-BE |
|-------|-------|
| INT-001 generic `customer_agent` via proxy API | INT-012 `portal/qualify` qualification agent |

### 2.6 services repo

GAP-V05: not in VCMS `repos.yaml`; sibling asset; domain `quietforge.flexgrafik.nl`.

---

## 3. Integration status snapshot (from INT contracts)

| ID | Name | Status |
|----|------|--------|
| INT-001 | Wizard → widget chat | LIVE |
| INT-002 | WC order webhook | LIVE (2026-06-26) |
| INT-003 | Game → Wizard coupon | LIVE |
| INT-004 | Game → leads API | LIVE (2026-06-06-26) |
| INT-005 | Portal CTAs | LIVE |
| INT-006 | Jadzia → Agent OS spawn | PARTIAL |
| INT-007 | VCMS scan | LIVE |
| INT-008 | Meta constitution | LIVE |
| INT-009 | GA4 → analytics | LIVE (2026-06-26) |
| INT-010 | Content calendar | PARTIAL |
| INT-011 | Agent OS code changes | LIVE |
| INT-012 | Portal qualification | PLANNED |
| INT-013 | Growth attribution | PLANNED |

---

## 4. User text → master upgrade map

| Original fragment | Master upgrade |
|-------------------|----------------|
| supervised conversion systems | LOS + three brains + HITL on every write path |
| qualify, guide, draft, route | Per-module: Wizard configurator, inbox classify (B2B product), portal chat (honest), lead/order nodes |
| built inside FlexGrafik | 8-repo governed stack + Built vs Planned + demo URLs |
| Quietforge service layer | Automation Map €290 + module ladder + Managed Automation €349+/mo |

---

## 5. Blockers for Commander (HITL)

- Commercial metrics §2.2 `traction-honesty-framework.md` — still UNKNOWN
- `vision-system.md` Commander approve checkbox — pending
- Mission Control URL public access — credentials on request

---

## 6. Stale docs to flag (not fix in this session)

- `as-is-inventory.md` §5 jadzia integrations table (orders/leads PLANNED — contradicted by INT-002/004)
- `module-zzpackage-wizard.md` SKU 77
- `module-app-game.md` lead sync PLANNED

*Master doc uses integration-contracts + code evidence as override.*
