---
status: "[ACTIVE]"
title: "GA4 Property Map — FlexGrafik Ecosystem"
owner: "Norbert Wozniak"
updated: "2026-06-26"
classification: "Architecture — analytics SSoT"
---

# GA4 Property Map

**Rule:** [`ops-rules.md` OR-01](../canons/ops-rules.md) — one product surface = one GA4 property.

Account: **FlexGrafik** (`337818458`)

---

## Current state (canon)

| Display name (GA UI) | Domain / product | Property ID | Measurement ID | Stream | MCP SA Viewer |
|----------------------|------------------|-------------|----------------|--------|---------------|
| **Quietforge** | `quietforge.flexgrafik.nl` | `543331587` | `G-LY0E7MW0HF` | Quietforge Web (`15155226236`) | `quietforge-ga-reader-712@flexgrafik.iam.gserviceaccount.com` |
| FlexGrafik App | `app.flexgrafik.nl` (game) | `528764186` | (app streams) | — | optional |
| Strona Flexgrafik | `flexgrafik.nl` | `468854880` | TBD | — | optional |
| ZZPackage Shop | `zzpackage.flexgrafik.nl` | `528785553` | TBD | — | optional |

**Quietforge selector shows the word “Quietforge”.** Cutover executed 2026-06-26.

---

## Legacy — retired for Quietforge

| What | Value | Status |
|------|-------|--------|
| Old stream on FlexGrafik App | `G-M24NL622DF` | **deprecated for Quietforge — do not use** |
| Old property conflation | `528764186` labeled Quietforge in docs | Retired — App property only |
| Mixed B2B + game traffic | pre-cutover | Historical only on `528764186` |

Prod cutover: Vercel `NEXT_PUBLIC_GA_MEASUREMENT_ID=G-LY0E7MW0HF` (Production + Preview).

---

## Quietforge canon events (property-local)

Active: `cta_book_map_click`, `cta_whatsapp_click`, `sample_map_download`, `wizard_demo_click`, `case_study_open`, `pricing_view`, `book_discovery_view`, `intake_submit`

Deferred: `book_payment_start`, `book_payment_complete`

Custom dimension: `location` (CTA location) — parameter `location`, scope Event

Key events: `cta_book_map_click`, `intake_submit`

Exploration: **Quietforge Map funnel** — book_discovery_view → cta_book_map_click → pricing_view|case_study_open → intake_submit

---

## Code / ops touchpoints

| File | Field |
|------|-------|
| Vercel `NEXT_PUBLIC_GA_MEASUREMENT_ID` | `G-LY0E7MW0HF` |
| `scripts/ga4-prod-smoke.mjs` | `G-LY0E7MW0HF` |
| `scripts/ga4-api-audit.py` | `543331587` |
| `config/ga4-quietforge.ids.json` | full ID bundle |
| `docs/operations/RESTART-PROMPT-GA4-MCP.md` | property + measurement |
| `brain.md` §5 env table | measurement + property |

---

*SSoT for analytics boundaries · Wins over handoff prose when they conflict*
