---
status: "[ACTIVE]"
title: "Proof Rules — Honesty & Evidence Gates"
owner: "Norbert Wozniak"
updated: "2026-06-25"
classification: "L2 — HARD rules (binding)"
references:
  - "../../flexgrafik-meta/docs/core/traction-honesty-framework.md"
  - "../../flexgrafik-meta/docs/core/verification-audit.md"
---

# Proof Rules

> **Principle:** Tech traction can be strong; commercial traction is Commander-owned. Never invent numbers.  
> **SSoT code:** `src/content/proof.ts` · `src/content/readiness.ts`  
> **Skill:** `.agents/skills/proof-check/SKILL.md`

---

## Status definitions

**PR-01 (HARD)** — Readiness labels on Built vs Planned table:

| Label | Meaning |
|-------|---------|
| **LIVE** | Production code + smoke pass; capability described matches AS-IS inventory |
| **PARTIAL** | Core exists; named capability in roadmap (cite PLANNED items) |
| **PLANNED** | Documented TO-BE only; no production claim |

*Source:* readiness.ts, meta as-is-inventory.md

**PR-02 (HARD)** — Proof manifest tiers in `proof.ts`:

| Tier | Use |
|------|-----|
| PROVEN | Commander-verified or production measurement |
| DEMO | Gratka / representative screenshot / diagram |
| PLANNED | Future slot — show empty state, not fake media |

---

## Agent prohibitions

**PR-03 (HARD)** — Zero `[FILL:]` placeholders in shipped `src/` (grep gate).  
*Source:* site-map §7, proof-check

**PR-04 (HARD)** — No video placeholders on home (`EcosystemVideo` forbidden until real Loom URLs in proof.ts).  
*Source:* site-map §2 forbidden

**PR-05 (HARD)** — Agents do not set `ready: true` on proof.ts screens/videos without artefact in `public/gratka/` or Commander-provided asset.  
*Source:* COMMANDER_PLAN pattern (now archived)

**PR-06 (HARD)** — Metrics on home from `proof.ts` / `metrics-display.ts` only — no hardcoded numbers in components.  
*Source:* ecosystem.ts header comment

---

## Commercial traction (Commander-owned)

**PR-07 (HARD)** — Commercial metrics (orders, GMV, AOV, lead counts, conversion %) — **only Dowódca** may publish. Agents leave `UNKNOWN` or omit.

**PR-08 (HARD)** — Before LinkedIn launch or investor call: Commander fills template below (from meta traction-honesty §2.2).

```markdown
## Commercial Traction Snapshot — [DATE]

| Metryka | Wartość | Źródło | Okres |
|---------|---------|--------|-------|
| Zamówienia opłacone (count) | UNKNOWN | WooCommerce admin | |
| GMV brutto (€) | UNKNOWN | WC reports | |
| AOV średni (€) | UNKNOWN | WC / target 400-700 | |
| Leady gra (email) | UNKNOWN | WP game API / DB | |
| Leady chat (sessions) | UNKNOWN | jadzia logs / GA4 | |
| MRR recurring | N/A (one-time Wizard) | — | |
| Konwersja portal→wizard | UNKNOWN | GA4 | |
| Konwersja game→wizard | UNKNOWN | GA4 + UTM | |
```

*Instruction:* Copy to Commander private notes or meta traction-honesty when ready. Portfolio may state "tech MVP LIVE, commercial TBD" until filled.

---

## Sync obligations

**PR-09 (HARD)** — When meta `as-is-inventory.md` updates: sync `readiness.ts` + ecosystem-bridge.md in same services session.

**PR-10 (HARD)** — Case study measurements must map to `proof.ts` → `caseMeasurements` keys via `ecosystem.ts` CASE_MEASUREMENT_KEYS.

**PR-11 (SOFT)** — Screenshots max 1600px width; WebP preferred; lazy below fold.  
*Source:* brain §7 #13

---

## Tech traction (allowed with AS-IS %)

**PR-12 (HARD)** — Allowed public tech claims (with Built vs Planned table backup):

- Wizard Cash Engine LIVE ~90%
- Agent OS 5-node HITL LIVE ~90%
- VCMS governance scan Conflicts: 0
- Jadzia COI — state per current `readiness.ts` row (update when meta changes)

**PR-13 (HARD)** — Disclaimers required: portal chat = generic sales; full COI vision = roadmap; qualification agent = TO-BE.

---

*13 rules · Upstream: [traction-honesty-framework.md](../../flexgrafik-meta/docs/core/traction-honesty-framework.md)*
