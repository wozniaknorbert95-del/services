# 07 — Remediation Plan with DoD (operational)

**Date:** 2026-06-25 · **Audit:** [`00-executive-summary.md`](./00-executive-summary.md)  
**Status:** Agent remediation complete (local, uncommitted) · Commander: BL-02 partial · BL-03/BL-03b open

---

## BL-02 pre-launch policy (Commander 2026-06-25)

Commercial scale **not launched** — partner alignment in progress.

| Rule | Enforcement |
|------|-------------|
| No invented client counts on live site | e.g. forbidden: "15 clients" |
| No fake GMV / conversion % on public pages | PR-07 |
| Historical order economics | **Private only** — [`commercial-traction-2026-06-25.md`](../operations/commercial-traction-2026-06-25.md) |
| Typical own-business AOV | €250–€550 (print/wizard) — **not** public traction claim |
| Higher tier mix | ~1/4 at ~€1.490 framing — pricing alignment only, not portfolio proof |
| Public pricing tiers | Allowed — structure, not traction |
| BL-02 status | **partial — public UNKNOWN, Commander notes only** |

**Agent gate:** Do not add commercial metrics to `src/content/proof.ts` or field reports without explicit Commander publish list.

---

## FIND-01 · BL-02 — Commercial traction

**Owner:** Commander · **Notes:** [`commercial-traction-2026-06-25.md`](../operations/commercial-traction-2026-06-25.md)

- [x] PR-08 template + Commander private snapshot (honest UNKNOWN public)
- [x] Pre-launch policy documented (this section)
- [x] No fabricated metrics on live site (field reports = process-proof only)
- [x] BL-02 SESSION-ANCHOR → **partial resolved**
- [ ] Live WC/GA4 counts for investor-only deck (optional later)
- [ ] Public publish decision when partner alignment complete

---

## FIND-02 · BL-03 — Wizard video

**Handoff:** [`video-p0-agency.md`](../operations/handoffs/2026-06-25-video-p0-agency.md)

- [x] `videos.wizard.poster` = `/gratka/wizard-checkout.png`
- [x] `public/gratka/wizard-demo.mp4` committed (54s, Playwright capture)
- [x] `videos.wizard`: `url` + `ready: true` (PR-05 satisfied)
- [ ] Commander visual review (PII / checkout frame)
- [ ] Post-deploy smoke on solutions + results sales-funnel (after Vercel CD)

---

## FIND-03 · E-8a — Sales-funnel solutions SSoT

- [x] Solutions exports in `sales-funnel-case-study.ts`
- [x] Thin `solutions/sales-funnel/page.tsx`
- [x] Mollie / 9 screens / zzpackage copy (not generic CRM)

---

## FIND-04 · E-8b — Web-upgrade solutions SSoT

- [x] `web-upgrade-case-study.ts`
- [x] Thin `solutions/web-upgrade/page.tsx`
- [x] Conversion framing + advisory bridge

---

## FIND-05 · AUD-01 — WEBSITE_ONLY_EXCEPTION

- [x] `/solutions/web-upgrade/`
- [x] `/pricing/`

---

## FIND-06 · AUD-02 — Field reports SSoT

- [x] `fieldReports` in `proof.ts` — process-proof, no unverified 14/3
- [x] Thin `FieldReports.tsx`
- [x] Inbox line uses `metrics.msgsPerScan`
- [x] Commander policy: no commercial counts until publish list

---

## FIND-07 · AUD-03 — Hub sync

- [x] `ownerEcosystemHubCard`
- [x] Hub `measurement` from `caseMeasurements.*`
- [x] `whatsappPilot` manifestKey (not `ownerEcosystem`)

---

## FIND-08 · E-7 — WhatsApp pilot module

- [x] `whatsapp-discovery-pilot-case-study.ts`
- [x] Thin results page
- [x] PLANNED video placeholder

---

## FIND-09 · E-8c — Managed automation module

- [x] `managed-automation-case-study.ts`
- [x] Thin solutions page + FAQ from module

---

## FIND-10 · AUD-04 — Audit script

- [x] `audit-navigation.mjs` ignores `?_rsc=` false positives

---

## FIND-11 · BL-03b — Inbox video

**Handoff:** [`bl03b-inbox-video-commander.md`](../operations/handoffs/2026-06-25-bl03b-inbox-video-commander.md)

- [ ] Commander 60s recording
- [ ] `videos.inboxKiller.ready === true`

---

## Outbound gate (program DoD)

| # | Criterion | Status |
|---|-----------|--------|
| 1 | BL-02 honest policy + private notes | ✅ partial |
| 2 | Wizard video live | ⏳ BL-03 |
| 3 | Solutions SSoT (sales-funnel + web-upgrade) | ✅ |
| 4 | WEBSITE_ONLY_EXCEPTION | ✅ |
| 5 | Field reports in proof layer | ✅ |
| 6 | `typecheck` + `build` PASS | verify session |
| 7 | Partner alignment + optional WC/GA4 for investor | ⏳ Commander |
| 8 | Sales-readiness re-score ≥4.0 | after BL-03 + outbound prep |

---

## Session map

| Session | FIND | Owner |
|---------|------|-------|
| R-0 | BL-02 partial | Commander ✅ |
| R-1 | BL-03 | Commander ⏳ |
| R-2 | E-8a | Agent ✅ |
| R-3 | E-8b + AUD-01 | Agent ✅ |
| R-4 | AUD-02 | Agent ✅ |
| R-5 | AUD-03 | Agent ✅ |
| R-6 | E-7 | Agent ✅ |
| R-7 | E-8c | Agent ✅ |
| R-8 | AUD-04 | Agent ✅ |
| R-9 | BL-03b | Commander ⏳ |

*Spec reference: plan `audit_remediation_dod` — do not edit `.cursor/plans/` from agent sessions.*
