---
status: "[ACTIVE — pending Commander HITL checkbox]"
title: "2026-07 Ecosystem Truth Matrix"
owner: "Norbert Wozniak"
updated: "2026-07-19"
classification: "L4 operations artefact — public claim authority for Quietforge sync"
commander_hitl: "[x] Approved for public site + LinkedIn claim use — Commander green-light 2026-07-19"
---

# 2026-07 Ecosystem Truth Matrix

> Source of runtime truth for Quietforge public claims. Pair with [`2026-07-commercial-packaging-map.md`](./2026-07-commercial-packaging-map.md).  
> Conflict rule: this matrix + meta as-is (post-sync) win over stale master paragraphs until master is updated.

## Legend

| Status | Meaning |
|--------|---------|
| LIVE | Production evidence; safe to claim with named limitation if any |
| PARTIAL | Deployed path incomplete or UX not E2E; sell with badge + limitation |
| PLANNED | Not public |
| PROOF-ONLY | Show as lab proof; not a named Quietforge SKU yet |

## Metrics lock

| Metric | Value | Evidence |
|--------|-------|----------|
| Active SKUs (catalog) | **167** | `zzpackage…/system/data/product-master-table.json` — `active=True` (175 rows total, 8 inactive) |
| Wizard UI screens | 9 | theme SPA |
| Business stages | 7 | Wizard steps |
| Jadzia operational spine | ~93% LIVE | `jadzia-core/brain.md` 2026-07 |
| Full COI vision | PARTIAL | Strategist auto-act, procurement Phase C, INT-006 full spawn |
| Gate D real paid iDEAL | OUT | Not a public traction claim |

---

## Capability matrix

| ID | Capability | Repo | Status | Evidence | Quietforge offer mapping |
|----|------------|------|--------|----------|--------------------------|
| WIZ-01 | Wizard SPA configurator | zzpackage | LIVE | prod wizard | Sales Funnel / Wizard |
| WIZ-02 | Mollie checkout path | zzpackage | LIVE | Woo+Mollie; COD off | Sales Funnel — no paid-traction claim |
| WIZ-03 | Order webhook → Jadzia | zzpackage→jadzia | LIVE | INT-002; Gate C test | Sales Funnel + Ops Command (ledger) |
| WIZ-04 | Active SKU catalog | zzpackage | LIVE | 167 active | metrics.skus |
| INS-01 | Design Agent intake→brief→mockups | jadzia+zzpackage | PARTIAL | `/voertuigreclame-ontwerp/`; sales persona NOT GO | Wizard extension “Complex Quote & Design Intake” |
| INS-02 | Mockup → priced Wizard handoff | zzpackage | PARTIAL | lab path; not sales GO | same |
| GAME-01 | Lead magnet PWA + rewards | app | LIVE | prod app | Lead Magnet Game (selective) |
| GAME-02 | Leads → Jadzia | app→jadzia | LIVE | INT-004 E2E | Lead Magnet + Ops spine proof |
| PORT-01 | Trust portal CTAs Wizard-first | flexgrafik-nl | LIVE | front-page | Web Upgrade proof |
| PORT-02 | Generic sales chat widget | portal+jadzia | LIVE | INT-001 | Web Upgrade / Inbox patterns |
| PORT-03 | Portal qualification UX E2E | portal | PARTIAL | INT-012 API LIVE; portal UI still generic | Web Upgrade “qualification-ready architecture” only |
| JAD-01 | Order/lead/GA4/calendar spine | jadzia | LIVE | spine proof matrix | Ops Command Layer + Jadzia case |
| JAD-02 | COI Commander cockpit | jadzia | LIVE | commander UI prod | Ops Command Layer + Managed |
| JAD-03 | Weekly owner brief (HITL drafts) | jadzia | LIVE | brief_node | Managed + Ops Command |
| JAD-04 | Supervised content publish (FB) | jadzia | LIVE | INT-011 text/photo/video | Managed content ops — **not** ads agency |
| JAD-05 | Marketing scorecard / CPL proof | jadzia | PROOF-ONLY | needs Commander scorecard HITL | case shell only until approved |
| JAD-06 | Full autonomous COI | jadzia | PLANNED | — | **FORBIDDEN** |
| AOS-01 | 5-node LangGraph HITL | agent-os | LIVE | prod API | Agent OS case / trust |
| AOS-02 | Mission Control | agent-os-ui | LIVE | os.flexgrafik.nl | trust / delivery proof |
| AOS-03 | Auto prod deploy | agent-os | PLANNED | Zasada 11 | **FORBIDDEN** |
| VCMS-01 | 8-repo scan / conflicts | flex-vcms | LIVE | vcms-scan | owner-ecosystem / governance |
| VCMS-02 | services in repos.yaml | flex-vcms | PLANNED | GAP-V05 | owner note only |
| META-01 | Constitution / contracts | flexgrafik-meta | LIVE | docs/core | method proof |

---

## Integration status (public)

| INT | Label | Status for public |
|-----|-------|-------------------|
| INT-001 | Widget chat | LIVE |
| INT-002 | WC orders → Jadzia | LIVE (ops ledger; Gate D parked) |
| INT-003 | Game → Wizard coupon | LIVE |
| INT-004 | Game → leads | LIVE |
| INT-009 | GA4 snapshot | LIVE |
| INT-010 | Content calendar | LIVE |
| INT-011 | Facebook publish | LIVE (HITL) |
| INT-012 | Portal qualification | PARTIAL (API LIVE · portal UX generic) |
| INT-013 | Growth attribution | PLANNED |
| INT-006 | Jadzia → Agent OS spawn | PARTIAL |

---

## Forbidden public claims

1. Fully autonomous AI business / COI without human approval  
2. Gate D / MRR / paid-order traction as Quietforge proof  
3. “Jadzia runs on LangGraph”  
4. “Portal has live industry qualification agent” (E2E)  
5. Marketing OS as paid ads management / media buying agency  
6. INSPIRE mockups = print-ready final artwork  
7. INSPIRE = polished autonomous sales consultant (until sales GO)  
8. Fake client logos or invented revenue  

## Allowed sales angles

1. Complex quote & design intake (INSPIRE PARTIAL) under Wizard  
2. Operations cockpit (Commander) as Operations Command Layer  
3. Supervised content prepare→approve→publish  
4. Weekly owner brief (decision support)  
5. Wizard enterprise: open pricing, checkout, SKU catalog, HITL chat  
6. Conversion ops spine: one operational record for leads/orders/analytics  

---

## Commander HITL

- [x] Truth matrix approved for Quietforge + LinkedIn — 2026-07-19  
- [x] Commercial packaging map approved — 2026-07-19  
- [x] SKU public number locked at **167** active  

*Approved for ship. Commander may revoke any overclaim in post-deploy review.*
