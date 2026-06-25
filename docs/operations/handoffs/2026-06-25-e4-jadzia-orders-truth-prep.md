# E-4 Prep — Jadzia Orders Truth Sync (portfolio-wide)

**Status:** PREP — recommended next session  
**Priority:** P1 (MR-16 / authority-chain — meta AS-IS wins)  
**Trigger:** E-2b fixed agent-orchestrator; same class of drift remains on **featured** case #02 + home §3

---

## CO (jedno zdanie)

Ujednolicić claim „orders” w całym portfolio: WooCommerce checkout LIVE na zzpackage ≠ jadzia.db order webhook (PLANNED per meta).

---

## Problem

| Layer | Current claim | Meta AS-IS |
|-------|---------------|------------|
| `jadzia-coi-case-study.ts` | „jadzia.db unifies orders and leads” | `order_node` / WC webhook → jadzia.db **PLANNED** |
| `proof.ts` jadziaCoi | „orders, leads…” LIVE | Same |
| `readiness.ts` row jadzia-core | status `LIVE`, capability lists Orders | Should be `PARTIAL` or split LIVE/PLANNED |
| `ecosystem.ts` statusNote | „LIVE: orders · leads…” | Same |
| `jadzia-coi.ts` capability `orders` | „WooCommerce order ingestion…” as fact | Qualify PLANNED |
| `case-studies.ts` #02 hub | „unifies orders and leads” | Qualify |
| `module-showcase.ts` jadzia | „orders, leads…” | Qualify |

**Nuance (binding):** Customers **do** pay via wizard (WooCommerce/Mollie LIVE). **jadzia.db ingestion** of those orders is not live yet — do not conflate.

---

## TO-BE (1 sesja, 1-1-1)

### Pattern (mirror E-2b)

- jadzia-core module status → `PARTIAL` where order webhook is the gap
- Copy template: **„leads, WP SSH, sales chat, weekly brief LIVE · WC order sync to jadzia.db PLANNED”**
- `JADZIA_COI_CAPABILITIES.orders` → rename detail to planned ingestion, or badge `PLANNED`
- `readiness.ts` jadzia row → `PARTIAL` + capability string split
- Home `BuiltVsPlanned` picks up readiness automatically

### Files (estimate 8–10)

| File | Action |
|------|--------|
| `src/content/jadzia-coi-case-study.ts` | qualify orders |
| `src/content/jadzia-coi.ts` | capability orders |
| `src/content/readiness.ts` | PARTIAL + capability |
| `src/content/proof.ts` | jadziaCoi measurement |
| `src/content/ecosystem.ts` | statusNote |
| `src/lib/case-studies.ts` | hub #02 system line |
| `src/content/module-showcase.ts` | effect line |
| `src/app/results/jadzia-coi/page.tsx` | only if capability badges need status |

### DoD

- [ ] Zero unqualified „jadzia.db unifies orders” without PLANNED qualifier
- [ ] `readiness.ts` ↔ meta as-is-inventory.md — no contradiction
- [ ] agent-orchestrator + jadzia-coi + home BuiltVsPlanned tell same story
- [ ] `npm run build` + handoff `2026-06-XX-e4-jadzia-orders-truth.md`

### Out of scope

- Implementing order webhook in jadzia-core repo
- BL-02 commercial traction numbers

---

## After E-4 (backlog priority)

| ID | Work | Why |
|----|------|-----|
| **E-5** | `inbox-killer-case-study.ts` SSoT | B2B product page — copy still hardcoded in page.tsx |
| **E-6** | `advisory-modernisation` SSoT | Anonymised reference — lower traffic |
| **BL-02** | Commercial traction §2.2 | Commander — before investor/LinkedIn push |
| **BL-01** | Mission Control URL in proof.ts | Optional polish |

---

*Prep · Commander approved senior direction 2026-06-25*
