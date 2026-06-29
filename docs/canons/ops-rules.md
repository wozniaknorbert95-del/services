---
status: "[ACTIVE]"
title: "Operations Rules — Infrastructure & Observability"
owner: "Norbert Wozniak"
updated: "2026-06-26"
classification: "L2 — HARD rules (ops / analytics / deploy)"
---

# Operations Rules

Binding rules for infrastructure, analytics, credentials, and observability. **No shortcuts that push ambiguity to the Commander.**

Pattern: one product surface → one measurable boundary (Google Analytics 4 property model, IBM operational clarity).

---

## OR-01 — One product surface = one GA4 property (HARD)

| Rule | Detail |
|------|--------|
| **Requirement** | Each public product domain (e.g. `quietforge.flexgrafik.nl`, `app.flexgrafik.nl`, `zzpackage.flexgrafik.nl`) MUST have its **own GA4 property** with a human-readable display name matching the product. |
| **Forbidden** | Sharing one GA4 property across unrelated products and “fixing” reports with hostname filters, stream labels, or agent-side filters as the **permanent** solution. |
| **Allowed temp** | Hostname filter only during verified cutover window (max 7 days), documented in handoff with end date. |
| **SSoT** | [`docs/architecture/ga4-property-map.md`](../architecture/ga4-property-map.md) |

**Violation example (2026-06-26):** Quietforge events sent to property `528764186` (“FlexGrafik App”) — Commander could not find “Quietforge” in GA selector; reports mixed with game traffic.

---

## OR-02 — No infra handoff leftovers (HARD)

| Rule | Detail |
|------|--------|
| **Requirement** | Session ends with credentials live, access granted, APIs enabled, smoke PASS, and docs updated — not “paste JSON here” or “add Viewer manually”. |
| **Forbidden** | Closing a session with manual steps the agent could execute (GCP Console, GA Admin, Vercel env, MCP audit). |
| **Exception** | Commander-only secrets (payment keys, irreversible prod toggles) — state explicitly what only Commander can do and why. |

---

## OR-03 — Name what you wire (HARD)

| Rule | Detail |
|------|--------|
| **Requirement** | Every doc, env var comment, and handoff that references a GA4 **property ID** MUST also state **display name**, **domain**, and **measurement ID** in the same table row. |
| **Forbidden** | Bare numeric IDs (`528764186`) without UI label — causes selector confusion. |

---

## OR-04 — Analytics changes need architecture update (HARD)

| Rule | Detail |
|------|--------|
| **Trigger** | New stream, new property, measurement ID change, MCP SA scope change. |
| **Required** | Update `ga4-property-map.md`, `brain.md` §5 env table, `scripts/ga4-*`, `docs/operations/runbooks/RESTART-PROMPT-GA4-MCP.md` in **same session**. |

---

## OR-05 — Agent must not recommend “good enough” when canon exists (HARD)

| Rule | Detail |
|------|--------|
| **Requirement** | If the user asked for professional / enterprise-grade setup, propose the **canon-compliant** path first. |
| **Forbidden** | Suggesting shared properties, shared measurement IDs, or “filter later” when separation was the stated or implied goal. |
| **If blocked** | Say what blocks full setup and execute everything else — do not reframe the shortcut as the solution. |

---

*5 rules · See also: [`ga4-property-map.md`](../architecture/ga4-property-map.md) · [`authority-chain.md`](../architecture/authority-chain.md)*
