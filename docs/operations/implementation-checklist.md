# Implementation Checklist — Quietforge Professional Fixes

Use this as the execution handoff for developers/agents.  
**Last verified:** 2026-06-25 (post P0 remediation session).

---

## Sprint 1 — critical trust leaks

- [x] Replace canonical files with the updated versions in this folder.
- [x] Create one global pricing object and remove hardcoded price fragments.
- [x] Set Managed Automation to `€349–€890/mo` everywhere.
- [x] Fix `/solutions/` cards: Web Upgrade = website, Sales Funnel = wizard/quotes/checkout.
- [x] Fix `/book-discovery/` so copy and UI match.
  - [ ] Preferred: payment + calendar + intake. *(deferred — Commander chose fallback)*
  - [x] Fallback: request slot + payment link after fit check.
  - [x] Remove `Send enquiry — I will reply within 24h` as main submit.
- [x] Remove “agency” wording from `/founder/`.
- [x] Remove unfinished video placeholder from `/founder/`.
- [x] Hide `/results/whatsapp-discovery-pilot/` from sitemap/results hub or complete it.

---

## Sprint 2 — home clarity

- [x] Reorder home to buyer-first flow.
- [x] Move PainGrid before deep LOS architecture.
- [x] Make LOS section a teaser; link to full owner ecosystem.
- [x] Compact Built vs Planned on home.
- [x] Rewrite repo/system cards as outcome-first.
- [x] Reduce CTA density; one primary per viewport.
- [x] Keep Wizard Cash Engine as the only spearhead panel.

---

## Sprint 3 — hub polish

- [x] Results hub cards follow Problem → System → Effect → Status.
- [ ] Add filters or grouping to `/results/`. *(optional — separate session)*
- [x] Solution pages use consistent structure:
  - Problem
  - System
  - Effect
  - Proof
  - Price range
  - CTA
- [x] Solution detail pages use `SOLUTION_DETAIL_PRICES` / `PRICING_MATRIX` ranges (not `singleSystem` fallback).
- [x] Pricing page uses one matrix.
- [x] Trust page adds checklist and AVG/DPA flow.

---

## Sprint 4 — UX/UI QA

- [x] Mobile pricing cards replace dense tables.
- [x] Built vs Planned mobile accordion/card layout.
- [ ] No horizontal overflow on mobile. *(spot-check recommended pre-deploy)*
- [x] All tap targets ≥ 44px (header mobile menu, sticky CTA).
- [x] Focus rings visible (Button component).
- [x] Alt text for all diagrams/screenshots.
- [x] Reduced motion path verified (useMotion hook).
- [x] No unfinished placeholders on public money pages.

---

## Measurement events

- [x] `cta_book_map_click`
- [x] `cta_whatsapp_click`
- [x] `sample_map_download`
- [x] `wizard_demo_click`
- [x] `case_study_open`
- [x] `pricing_view`
- [ ] `book_payment_start` *(N/A until checkout on Book Discovery)*
- [ ] `book_payment_complete` *(N/A until checkout on Book Discovery)*
- [x] `intake_submit`

---

## Definition of done

A page is done only if:

- [x] The user knows what problem it solves.
- [x] The proof is real or clearly labelled.
- [x] The CTA has one obvious next step.
- [x] Prices match the canonical matrix.
- [x] Mobile is clean.
- [x] There are no public placeholders.

---

## Housekeeping

- [x] Remove duplicate `docs/strategy/quietforge-professional-update/` after canon promotion.
- [x] Fix `site-map.md` audit reference path.
- [x] Align SR-02 source to site-map §3–§4.
- [x] Header solutions dropdown shows price ranges.

## Polish repair (2026-06-25)

- [x] Eyebrow double-prefix audit + `Eyebrow` hardening (`stripEyebrowPrefix`).
- [x] Glued copy fixes (Spearhead, HowIWork, SystemMetrics, how-it-works Step 3).
- [x] Agency → implementation demo copy.
- [x] CTA `Book Automation Map` on all button surfaces.
- [x] Sitemap tiered priorities.
- [x] `/results/` case cards before LOS connector section.
- [x] Skills: `ui-audit`, `tuzi-copy-polish`, `copy-polish-quietforge` installed.
