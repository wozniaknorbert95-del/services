---
status: "[EXECUTED]"
title: "Plan — Homepage GTM Faza 0 (implementacja kodu)"
owner: "Norbert Wozniak"
updated: "2026-06-29"
classification: "Operations plan — src/ implementation"
approved: "Commander HITL 2026-06-29 (GTM pack v2)"
executed: "2026-06-29 — S1–S4 complete (de22608, 98727a0)"
upstream:
  - "../../strategy/gtm/README.md"
  - "../../strategy/site-map.md"
  - "../../audits/2026-06-25/quietforge-ux-ia.md"
commit_baseline: "3e7b418 — docs(gtm): refresh pack v2"
---

# Plan — Homepage GTM Faza 0

**Cel:** Zamknąć wiersze **P0** z [GTM README gap table](../../strategy/gtm/README.md#co-wymaga-aktualizacji-dokumenty-vs-strona-ssot-gap) na produkcji — zanim pierwszy post B2B z Map CTA ([06-roadmap M0.2](../../strategy/gtm/06-roadmap-90-days.md)).

**SSoT strategii:** GTM pack v2 (`docs/strategy/gtm/01`–`08`) — **nie** stary plan kodu sprzed audytu.

**Zasada sesji:** 1 komponent / sesja OpenCode · max 3 sekcje home / sesja · `npm run build` między batchami.

---

## CO / DLACZEGO / BO

| | |
|--|--|
| **CO** | 6 work packages (0.1–0.6) + opcjonalny 0.7 Book Discovery verify |
| **DLACZEGO** | LinkedIn copy OK (4.2/5), landing psuje kliknięcia (6.5/10 konwersja) — jargon, brak dual-brand, brak Featured mirror |
| **BO** | Post B2B bez spójnego home = compound trust leak; GTM v2 blokuje M1.x do M0.2 DONE |

---

## Stan wyjściowy (baseline kod — commit `3e7b418`)

| Element | Plik | Problem |
|---------|------|---------|
| Hero terminal mock | `HeroSection.tsx`, `conversion-copy.ts` HERO.terminal | De-jargon fail — repo/terminal above fold |
| Proof strip „8-repo governance” | `conversion-copy.ts` HERO.proofStrip | Track A anti-pattern ([04-audience §anti-przykłady](../../strategy/gtm/04-audience-and-messaging.md)) |
| Brak dual-brand band | — | microTrust w HERO tylko w copy, nie sekcja |
| Brak Featured strip | — | CTAs rozproszone |
| IntentRouter repo keys | `IntentRouter.tsx` | „Eight parts”, repo keys visible — za wcześnie |
| Metadata OG „8-repo” | `page.tsx` metadata | De-jargon fail w share preview |
| Book Discovery | `book-discovery/page.tsx` | Metadata częściowo naprawione; weryfikacja copy vs form |
| BuiltVsPlanned badges | `BuiltVsPlanned.tsx` | OK compact — wzór dla innych modułów |

**Home order (LOCKED):** [site-map.md §3](../../strategy/site-map.md) — Faza 0 **wstawia** sekcje, nie przebudowuje całej IA.

---

## Docelowa kolejność sekcji (delta vs dziś)

```text
1  HeroSection          — P→S→E beat, de-jargon, bez terminal (0.2, 0.3)
2  DualBrandBand        — NOWA (0.1)
3  FeaturedStrip        — NOWA (0.4)
4  PainGrid             — bez zmian
5  SystemMetrics        — bez zmian
6  SpearheadSpotlight   — opcjonalnie badge LIVE (0.5)
7  BuiltVsPlanned       — bez zmian (wzór badge)
8  ResultsTeaser        — P→S→E cards verify (0.2)
9  IntentRouter         — outcome labels, badges (0.5); pozostaje §7
…  reszta LOCKED
```

**site-map.md §3:** zaktualizować w **tej samej sesji** co dodanie DualBrand + Featured (anti-chaos rule AGENTS.md).

---

## Work packages

### 0.1 — DualBrandBand (P0)

**Spec:** [01-two-brand-model](../../strategy/gtm/01-two-brand-model.md) · [05-content-pillars P3](../../strategy/gtm/05-content-pillars.md)

**CO:** Dedykowana sekcja pod hero — dwie kolumny / dwa bloki:
- **Quietforge** — sell B2B: Map → build, Conversion Systems Architect
- **FlexGrafik** — live proof: registered NL company, not demo — link `/results/`

**Pliki:**
- `src/components/home/DualBrandBand.tsx` (new)
- `src/content/conversion-copy.ts` — `DUAL_BRAND` export
- `src/app/page.tsx` — insert after HeroSection

**NIE:** consumer pitch druku · CTA „zamów oklejenie” · investor language

**DoD:**
- [ ] Sekcja visible without scroll on desktop (below hero fold OK)
- [ ] QF block has L3 secondary link optional; FG block links `/results/`
- [ ] Copy EN, outcome-first
- [ ] `data-home-section="dual-brand"` for analytics
- [ ] `prefers-reduced-motion` respected
- [ ] `site-map.md §3` row added (#2)
- [ ] `npm run build` PASS

---

### 0.2 — Hero Problem → System → Effect (P0)

**Spec:** [04-audience messaging hierarchy](../../strategy/gtm/04-audience-and-messaging.md) · [07-playbook briefs „Wersja do homepage”](../../strategy/gtm/07-post-playbook.md)

**CO:** Hero left column = explicit 3-beat structure (visual, not wall of text):
1. **Problem** — inbox chaos / manual quotes (1 line)
2. **System** — supervised conversion workflow (1 line)
3. **Effect** — qualified pipeline, less admin (1 line)

H1 + lead mogą zostać; **dodać** beat row pod lead lub zintegrować w layout.

**Pliki:**
- `src/content/conversion-copy.ts` — `HERO.problemBeat`, `systemBeat`, `effectBeat`
- `src/components/home/HeroSection.tsx` — render 3-beat
- `src/components/home/ResultsTeaser.tsx` — verify cards use same P→S→E labels

**DoD:**
- [ ] 3 beats readable in ≤5 s together with H1
- [ ] ResultsTeaser cards labelled Problem / System / Effect (or equivalent eyebrow)
- [ ] Post ↔ home 5s test pass for brief #1 hook
- [ ] `npm run build` PASS

---

### 0.3 — De-jargon above fold (P0)

**Spec:** [03-linkedin-principles P5](../../strategy/gtm/03-linkedin-principles.md) · [04 anti-przykłady](../../strategy/gtm/04-audience-and-messaging.md)

**CO:** Usunąć / przenieść below fold:
- Terminal mock (right column hero) → replace with **proof visual** (wizard screenshot / inbox — existing asset `public/gratka/`)
- Proof strip: replace „8-repo governance” → outcome claims (wizard LIVE · HITL approval · EU-hosted · inbox classified)
- Hero status bar „N repos” → remove from hero or move to IntentRouter / BehindTheScenes
- OG metadata: remove „8-repo governance” from `page.tsx` openGraph

**Pliki:**
- `src/components/home/HeroSection.tsx`
- `src/content/conversion-copy.ts` — HERO.proofStrip, remove or relocate terminal
- `src/app/page.tsx` — metadata

**DoD:**
- [ ] Zero „8-repo”, „LangGraph”, repo keys above fold
- [ ] Proof strip = 4 outcome claims from proof.ts / site-map §4
- [ ] OG/twitter description bez jargon
- [ ] Mobile hero: L3 CTA visible without scroll (verify)
- [ ] `npm run build` PASS

---

### 0.4 — FeaturedStrip (P0)

**Spec:** [02-channel-architecture Featured](../../strategy/gtm/02-channel-architecture.md) · [03 P2](../../strategy/gtm/03-linkedin-principles.md)

**CO:** 3-card strip — mirror LinkedIn Featured (Commander ustawi LI po deploy):

| # | Label | URL | Analytics |
|---|-------|-----|-----------|
| 1 | Book Automation Map — €290 | `/book-discovery/` | `cta_book_map_click` location=`featured_1` |
| 2 | Live systems on FlexGrafik | `/results/` | `cta_results_click` location=`featured_2` |
| 3 | How it works | `/how-it-works/` | `cta_how_it_works_click` location=`featured_3` |

**Pliki:**
- `src/components/home/FeaturedStrip.tsx` (new)
- `src/content/conversion-copy.ts` — `FEATURED_CARDS`
- `src/app/page.tsx` — insert after DualBrandBand

**DoD:**
- [ ] 3 cards, equal visual weight, sharp corners (`--qf-radius`)
- [ ] Card #1 price matches `PRICING.discovery` constant
- [ ] URLs = exact match [02-channel Featured table](../../strategy/gtm/02-channel-architecture.md)
- [ ] `site-map.md §3` row added (#3)
- [ ] Commander can copy URLs 1:1 to LinkedIn Featured
- [ ] `npm run build` PASS

---

### 0.5 — LIVE / PARTIAL badges (P1)

**Spec:** [proof-rules PR honesty](../../canons/proof-rules.md) · [05-content-pillars P1](../../strategy/gtm/05-content-pillars.md)

**CO:** Reuse badge pattern from `BuiltVsPlanned` on:
- `SpearheadSpotlight` — wizard **LIVE**
- `IntentRouter` — per-repo status badge (LIVE/PARTIAL/PLANNED from ecosystem SSoT)
- IntentRouter headline: outcome-first — **hide repo keys** in default view; show on expand or tooltip

**Pliki:**
- `src/components/ui/StatusBadge.tsx` (extract if not exists)
- `src/components/home/SpearheadSpotlight.tsx`
- `src/components/home/IntentRouter.tsx`
- `src/content/ecosystem.ts` — verify status fields

**DoD:**
- [ ] IntentRouter default title ≠ „Eight parts” / repo dump
- [ ] Each visible module has honesty badge
- [ ] PARTIAL modules name what's PLANNED (Jadzia pattern)
- [ ] `npm run build` PASS

---

### 0.6 — L3 CTA polish (P1)

**Spec:** [conversion-pipeline L3](../../strategy/conversion-pipeline.md) · site-map §3 chrome

**CO:**
- Verify hero primary = Book Map everywhere
- `StickyCta`: trigger **after BuiltVsPlanned** (section 5), not section 7 — mobile earlier L3
- FinalCtaBand: single L3 only (verify)

**Pliki:**
- `src/components/layout/StickyCta.tsx`
- `src/components/home/FinalCtaBand.tsx`

**DoD:**
- [ ] Mobile: sticky Map visible after scroll past honesty gate
- [ ] No competing primary CTAs above Featured strip
- [ ] Analytics events fire on all L3 touchpoints
- [ ] `npm run build` PASS

---

### 0.7 — Book Discovery verify (P0 cross-route, optional same batch)

**Spec:** GTM README · audyt site §2 P0

**CO:** Confirm single model: **manual qualification** (current form = enquiry). Copy already partially says „Request slot” / „Payment link follows”.

**Pliki:**
- `src/app/book-discovery/page.tsx`
- `src/app/book-discovery/BookDiscoveryForm.tsx`

**DoD:**
- [ ] Zero „Pay & pick a slot in under two minutes” if no checkout
- [ ] Form button label matches page promise
- [ ] Featured card #1 + LI Featured URL land on consistent copy
- [ ] If Commander chooses checkout model later → separate plan, not Faza 0

---

## Kolejność sesji (proponowana)

| Sesja | WP | Komponenty | Batch gate |
|-------|-----|------------|------------|
| **S1** | 0.1 + 0.4 | DualBrandBand + FeaturedStrip + site-map §3 | build |
| **S2** | 0.2 + 0.3 | HeroSection P→S→E + de-jargon + metadata | build |
| **S3** | 0.5 | IntentRouter + SpearheadSpotlight badges | build |
| **S4** | 0.6 + 0.7 | StickyCta + Book Discovery verify | build + typecheck |

**Alternatywa (ostrożniejsza):** 1 WP = 1 sesja (6 sesji) — wolniej, mniejsze diffy.

---

## Weryfikacja końcowa (M0.2 DONE)

Commander + agent — checklist przed pierwszym postem LinkedIn:

| Test | Pass criteria |
|------|---------------|
| **5s test** | QF sell / FG proof / Map CTA — bez scroll |
| **De-jargon** | Brak 8-repo / terminal / repo keys above fold |
| **Featured mirror** | 3 URL = [02-channel table](../../strategy/gtm/02-channel-architecture.md) = LI Featured (manual) |
| **Post brief #1** | [07-playbook](../../strategy/gtm/07-post-playbook.md) homepage version matches live |
| **Book Discovery** | Copy = form behaviour |
| **Build** | `npm run build` + `npm run typecheck` PASS |
| **GTM gap table** | Wiersze P0 = DONE na prod |

Po deploy (Vercel CD master): Commander ustawia LinkedIn Featured → M1.5 ([06-roadmap](../../strategy/gtm/06-roadmap-90-days.md)).

---

## Out of scope (Faza 0)

- Book Discovery checkout + calendar integration
- Pricing matrix drift across /solutions/ /pricing/ (osobna sesja AUD)
- LinkedIn post publishing (M1.x)
- Investor track / `/founder/` investor bridge
- GA4 event wiring (osobny plan)
- Wizard video BL-03 / inbox video BL-03b
- PainGrid / LivingSystemTeaser / full site-map reorder beyond §3 insert

---

## Po Faza 0 — następne kroki

1. **Deploy** — push master → Vercel (auto CD)
2. **Commander manual** — LinkedIn Featured + Services pricing ([02-channel](../../strategy/gtm/02-channel-architecture.md))
3. **M1.1** — pierwszy post P1 ([07-playbook #1](../../strategy/gtm/07-post-playbook.md)) + CTA komentarz
4. **Handoff** — `docs/operations/handoffs/2026-06-XX-homepage-faza-0.md`
5. **Opcjonalnie Faza 1** — pricing SSoT, Book Discovery checkout, OG refresh per route

---

*Plan approved: Commander 2026-06-29 · GTM v2 commit: `3e7b418`*
