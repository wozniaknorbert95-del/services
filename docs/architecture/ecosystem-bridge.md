---
status: "[ACTIVE]"
title: "Ecosystem Bridge — Meta Modules to Portfolio"
owner: "Norbert Wozniak"
updated: "2026-06-25"
classification: "Architecture — cross-repo map"
---

# Ecosystem Bridge

Maps `flexgrafik-meta` modules to portfolio `src/content/*` and live routes.  
**Truth source:** meta [`as-is-inventory.md`](../../flexgrafik-meta/docs/core/as-is-inventory.md) (refresh syncs `readiness.ts`).

---

## Eight-repo table

| # | Repo key | Meta module doc | `readiness.ts` | `ecosystem.ts` | Primary proof route |
|---|----------|-----------------|----------------|----------------|---------------------|
| 1 | zzpackage | `modules/module-zzpackage-wizard.md` | Wizard Cash Engine | ECOSYSTEM_REPOS[0] | `/results/sales-funnel/` |
| 2 | app.flexgrafik.nl | `modules/module-app-game.md` | Lead magnet game | ECOSYSTEM_REPOS[1] | `/results/lead-magnet/` |
| 3 | jadzia-core | `modules/module-jadzia-core.md` | Jadzia COI | ECOSYSTEM_REPOS[2] | `/results/jadzia-coi/` |
| 4 | agent-os | `modules/module-agent-os.md` | Agent OS | ECOSYSTEM_REPOS[3] | `/results/agent-orchestrator/` |
| 5 | flex-vcms | `modules/module-flex-vcms.md` | VCMS governance | ECOSYSTEM_REPOS[4] | `/results/owner-ecosystem/` |
| 6 | flexgrafik-nl | `modules/module-flexgrafik-nl.md` | Trust portal | ECOSYSTEM_REPOS[5] | `/solutions/web-upgrade/` |
| 7 | flexgrafik-meta | `modules/module-flexgrafik-meta.md` | Constitution | ECOSYSTEM_REPOS[6] | `/how-it-works/` |
| 8 | agent-os-ui | `modules/module-agent-os-ui.md` | Mission Control | ECOSYSTEM_REPOS[7] | `/trust/` |

**Portfolio repo (this):** meta `futures/future-services-quietforge.md` + new `modules/module-services-quietforge.md` — sibling asset, not in VCMS `repos.yaml` (GAP-V05).

---

## Status badge source

| UI component | Data |
|--------------|------|
| `BuiltVsPlanned` | `readiness.ts` → READINESS_ROWS |
| `StatusBadge` on owner-ecosystem flow | `owner-ecosystem.ts` |
| Home metrics footnotes | `metrics-display.ts` + `proof.ts` |

When meta AS-IS changes → update `readiness.ts` first, then pages.

---

## Three brains on portfolio

| Brain | Meta doc | Portfolio expression |
|-------|----------|----------------------|
| VCMS | ecosystem-blueprint §3 | BehindTheScenes, owner-ecosystem governance steps |
| Jadzia COI | jadzia-operating-charter.md | `/results/jadzia-coi/`, LOS think/act layers |
| Agent OS | module-agent-os.md | `/results/agent-orchestrator/`, Mission Control `/trust/` |

---

## Integration contracts

Cross-repo LIVE/PARTIAL/PLANNED: meta [`integration-contracts.md`](../../flexgrafik-meta/docs/core/integration-contracts.md) (11 contracts).

Portfolio must not claim contract LIVE until meta marks it LIVE.

---

*Sync trigger: VCMS scan Conflicts: 0 + meta as-is-inventory refresh*
