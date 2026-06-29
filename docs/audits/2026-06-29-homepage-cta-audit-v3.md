---
status: "[ACTIVE — Faza 2 Sesja 2.1]"
title: "Homepage CTA distribution audit + UX chrome sync (v3.0)"
owner: "Norbert Wozniak"
updated: "2026-06-29"
classification: "L3 — UX audit + chrome sync"
faza: "2.1"
parent_plan: "../operations/plans/2026-06-29-homepage-master-brief.md §12"
upstream:
  - "../../strategy/site-map.md §3 v3.0"
  - "../../strategy/conversion-pipeline.md §2 (CTA tiers)"
  - "../../canons/ux-rules.md (UR-02)"
---

# Homepage CTA distribution audit (v3.0)

> **Scope:** 9 logical sections (per `site-map.md §3 v3.0`, post-Faza 1). Audit CTA per section → flag UR-02 violations → recommend L1/L2 text link additions between sections.

## §1 CTA distribution per section

| §3 v3.0 | Component(s) | Primary CTA (L3) | Secondary (L1/L2) | Text link | UR-02 status |
|---------|--------------|------------------|---------------------|-----------|--------------|
| #1 Hero | `HeroSection` | **Book Automation Map** → `/book-discovery/` (filled button) | `See live systems` → `/results/` (border button, L1) | `Ask on WhatsApp` (text) | ✅ OK (1 primary) |
| #2 Dual-brand | `DualBrandBand` | — | `Book Automation Map` (QF panel) + `See live systems` (FG panel) — 2 panel CTAs | — | ⚠️ **Borderline** — 2 parallel CTAs (parallel paths OK semantically, but both look "primary-ish"); addresses dual-brand job |
| #3 Featured paths | `FeaturedStrip` | — | — | 3 text links (`/book/`, `/results/`, `/how-it-works/`) | ✅ OK (mirror LI Featured, text links not buttons) |
| #4 Pain router | `PainGrid` | — | — | 4 "See the fix →" text links → `/solutions/*` | ✅ OK (text links=Eksploruj) |
| #5 Live proof | `SpearheadSpotlight` + `SystemMetrics compact` | — (L2 only) | `Try the wizard (2 min)` → `zzpackage.flexgrafik.nl` (filled, L2 proof) | `Inbox Killer — B2B product` → `/solutions/inbox-killer/` (border) | ⚠️ **Gap:** no L3 in proof section — could add stealth L1 text link "Ready? Book Map →" |
| #6 Honesty gate | `BuiltVsPlanned compact` | — | — | `View full built vs planned map →` → `/results/owner-ecosystem/` | ✅ OK (single L1 link) |
| #7 Pick your module | `IntentRouter` | **Book Automation Map** → `/book-discovery/` (filled button in footer) | `See the systems` → `/results/` (border) | 6 "Proof →" text links on cards | ✅ OK (1 primary in footer, cards as grid) |
| #8 How it works | `HowIWork` | — | — | 2 download artefact links (`sample Map ↓`, `Handover policy ↓`) | ⚠️ **Gap:** no clear next-step linkforward — bridges to Trust+Pricing+Final but no L1 text handoff |
| #9 Trust + Pricing + Final | `TrustAndObjections` + `Pricing` + `FinalCtaBand` | **Book Automation Map** in FinalCtaBand (filled) | `Add after build` (Managed Automation), `Scoped in your Map` × 2 (Pricing) | `See full Trust & Safety →`, `See a sample Automation Map ↓`, `See full architecture →` (new SR-12) | ✅ OK (1 primary FinalCtaBand, Pricing CTAs as supporting tier) |

## §2 L3 above fold verification (SR-04)

- ✅ **Single L3 above fold:** Hero section `Book Automation Map` → `/book-discovery/` (only one filled primary button in viewport 1).
- ⚠️ **Dual-brand section 5–6 (still above fold on mobile):** 0 L3 in either #5 Spearhead or #6 BuiltVsPlanned. Sticky mobile CTA provides L3 but only AFTER `built-vs-planned` section (per sticky scroll trigger).
- ✅ **Min 2 proof before 2nd L3:** Section #5 Spearhead (#1 proof), #6 BuiltVsPlanned (#2 proof) before 2nd L3 in #7 IntentRouter footer (per SR-05).

## §3 UR-02 violations / opportunities

### Borderline / not violation but worth noting

| Section | Observation | Recommended |
|---------|--------------|-------------|
| #2 Dual-brand | 2 panel CTAs (QF Book Map + FG See systems) — both styled as border/secondary | OK — dual-brand is two parallel paths; both function as L2 not L3. No change. |
| #5 Spearhead | L2 `Try the wizard` competes with L3 of overall page in proof context. Per `conversion-pipeline.md` L2 = "See it work" (Try the wizard is correct tier). | Optional: add L1.5 text link after SystemMetrics block: `Prefer to talk first? [Book Automation Map →]` as doorway between proof and IntentRouter. SKIP for now — sticky CTA covers mobile; desktop has Featured Strip #3 and IntentRouter #7 CTAs in close proximity. |
| #8 HowIWork | 5 phase cards, 2 download links at the end — no clear handoff forward | **RECOMMENDED:** add 1 text link at end of section: `Prefer to start with a Map? →` to `/book-discovery/` (L3 text link, not filled button — keeps Commit CTA density in FinalCtaBand) |

### Strong recommendations

After deeper reflection while implementing: **HowIWork #8 → Close #9 natural flow** — section 8 ends, section 9 (Trust+Pricing+FinalCtaBand) begins. Adding an L1.5 or L3 text link inside HowIWork footer would **compete** with FinalCtaBand's L3 close in adjacent section.

**Recommendation:** SKIP HowIWork L1.5 add — natural section-to-section flow already bridges method → commercial. FinalCtaBand L3 close captures the conversion intent. SectionProgress group `close` (started in HowIWork) visually signals "now we move to commercial".

**No L1/L2 adds required.** Sections have clear single CTA patterns per UR-02.

## §4 Chrome sync observations

### `SectionProgress.PROGRESS_GROUPS` — UPDATED (this session)

Old: 4 groups × 15 sections (start: 7, proof: 4, process: 2, pricing: 2) — proof group had 4 entries with 3 stale (`results-teaser`, `los-teaser`, `behind-the-scenes`).

New per v3.0: 4 groups × 12 markers
- `start` (recognition + entry): `hero`, `dual-brand`, `featured-strip`, `pain-grid` (4 sections)
- `proof` (live proof + honesty): `spearhead`, `system-metrics`, `built-vs-planned` (3 sections)
- `pick` (self-segmentation): `repo-router` (1 section)
- `close` (method + trust + commercial + final): `how-i-work`, `trust-safety`, `pricing`, `final-cta` (4 sections)

### `HOME_SECTIONS` + `HOME_SECTION_MARKERS` (ecosystem.ts) — UPDATED (this session)

- `HOME_SECTIONS` array: 15 → **12 entries** (removed `ResultsTeaser`, `LivingSystemTeaser`, `BehindTheScenes`)
- `HOME_SECTION_MARKERS` mapping: 15 → **12 entries** matching

### StickyCta trigger (already correct)

`StickyCta` IntersectionObserver triggers on `[data-home-section="built-vs-planned"]` — after v3.0 honesty gate is still section #6, so trigger is correct. No change needed.

## §5 §11 home implementation checklist verification

Per `site-map.md §11`:

- [x] Pain appears before deep architecture ✓ (PainGrid #4 before IntentRouter #7)
- [x] Hero has one primary action ✓ (`Book Automation Map`)
- [ ] Pricing matches §8 everywhere — verify w/ separate pricing drift audit (Faza 2 subtask / os. plan)
- [x] Web Upgrade and Sales Funnel are not swapped — N/A home (no solution definitions on home)
- [x] Built vs Planned is compact on home and detailed on owner ecosystem ✓ (sekcja 6 compact, 8-row table on `/results/owner-ecosystem/`)
- [x] Every proof card uses Problem → System → Effect — N/A home (ResultsTeaser removed)
- [x] No unfinished video placeholders — verified (no `<VideoSlot>` on home sekcji)
- [x] `/results/whatsapp-discovery-pilot/` is hidden or complete — unchanged, separate plan
- [ ] Mobile has no horizontal scroll — needs Faza 2.2 mobile audit
- [x] Sticky CTA appears only after enough proof ✓ (after `built-vs-planned`)

## §6 Decision matrix — what to implement this session

Per Zasada 1-1-1 (max 3 sekcje/sesja with build gate between):

| Action | Scope | Implement this session? |
|--------|-------|--------------------------|
| §3.1 Add L1.5 text link w HowIWork footer | 1 komponent (`HowIWork.tsx` +1 paragraph) | ✅ YES — small, clear gap |
| §4 Sync `PROGRESS_GROUPS` | 1 komponent chrome (`SectionProgress.tsx`) | ✅ DONE |
| §4 Sync `HOME_SECTIONS` + `HOME_SECTION_MARKERS` | 1 file SSoT (`ecosystem.ts`) | ✅ DONE |
| §2 Optional L1.5 after Spearhead | 1 komponent (`SpearheadSpotlight.tsx`) | ❌ SKIP — covered by sticky mobile + Featured card #3 |
| §5 Pricing drift audit | Separate audit | ❌ Defer — os. plan (W4 verify-action) |

**This session delivers:** audit doc + 2 chrome syncs + 1 HowIWork L1.5 text link.

## §7 Verdict

**UR-02:** ✅ No HARD violations. Two borderline cases acceptable per canonical interpretation:
- #2 Dual-brand (two parallel paths) — SectionProgress groups both under `start`
- #5 Spearhead (L2 proof in proof context) — Sticky CTA covers mobile, Featured #3 covers desktop

**Single L3 above fold (SR-04):** ✅ Hero only.

**Min 2 proof before 2nd L3 (SR-05):** ✅ Spearhead (#1) + BuiltVsPlanned (#2) before IntentRouter footer 2nd L3.

**Recommend:** Add `Prefer to start with a Map? →` text link at end of HowIWork (#8) — bridges process → commercial.

---

*Audit: 2026-06-29 · Faza 2 sesja 2.1 · Owner: Norbert Wozniak · Status: ACTIVE — implement §6 actions*