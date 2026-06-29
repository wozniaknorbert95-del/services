---
status: "[CLOSED — M0.2 OK 2026-06-29]"
title: "Homepage GTM Critical Path — Faza 0"
owner: "Norbert Wozniak"
updated: "2026-06-29"
classification: "Operations plan — src/ implementation"
approved: "Commander HITL 2026-06-29 (GTM pack v2)"
executed: "2026-06-29 — kod S1–S4 shipped"
deploy_commit: "c363d1f"
verified: "2026-06-29 — agent prod smoke PASS (B2 partial, 4 uwagi P2/P3 → Faza B)"
verify_plan: "./2026-06-29-homepage-gtm-verify-action.md"
commander_signoff: "M0.2 OK — 2026-06-29 (commit 8d6af0a)"
closed: "2026-06-29 — M0.2 CLOSED"
upstream:
  - "../../strategy/gtm/README.md"
  - "../../strategy/site-map.md"
  - "../../audits/2026-06-25/quietforge-ux-ia.md"
  - "../handoffs/2026-06-29-homepage-gtm-faza-0.md"
---

# Homepage GTM Critical Path — Faza 0

> **Stan:** Produkcja live · Agent smoke **PASS** · **Commander sign-off M0.2 OK** (2026-06-29, commit `8d6af0a`) · **M0.2 CLOSED** → V2 LinkedIn Featured → M1.1

---

## Wynik weryfikacji agenta + Commander sign-off (2026-06-29)

| B1–B7 | B8 sticky | C LinkedIn | Commander |
|-------|-----------|------------|-----------|
| ✅ PASS (B2 partial — hero L3 na krawędzi mobile; header L3 OK) | ⏳ scroll manual | ⏳ V2 | ✅ **M0.2 OK** |

Szczegóły: [verify-action plan](./2026-06-29-homepage-gtm-verify-action.md) · Sign-off commit: `8d6af0a`

---

## Status w jednym miejscu

| Faza | Stan | Kto zamyka |
|------|------|------------|
| GTM pack v2 docs | ✅ DONE | Commander HITL 2026-06-29 |
| Faza 0 kod (0.1–0.7) | ✅ DONE w repo | Agent — commity `de22608`, `98727a0` |
| Build / typecheck | ✅ PASS lokalnie | Agent |
| Deploy produkcja | ✅ LIVE | Agent — fetch + browser 2026-06-29 |
| Smoke test 5s (live) | ✅ PASS (B2 partial) | Agent CDP + Commander V1.1–V1.5 |
| Commander sign-off (M0.2) | ✅ **M0.2 OK** (2026-06-29, `8d6af0a`) | Commander |
| LinkedIn Featured mirror (V2) | ⏳ **MANUAL — P0 next** | Commander V2 |
| Pierwszy post B2B (M1.1) | 🔓 **READY** (po V2) | [verify-action](./2026-06-29-homepage-gtm-verify-action.md) |

---

## Co zrobiono (implementacja)

| WP | Opis | Commit | Pliki kluczowe |
|----|------|--------|----------------|
| **0.1** | DualBrandBand — QF sell / FG proof | `de22608` | `DualBrandBand.tsx`, `DUAL_BRAND` |
| **0.2** | Hero P→S→E beats + ResultsTeaser labels | `98727a0` | `HeroSection.tsx`, `ResultsTeaser.tsx` |
| **0.3** | De-jargon hero + metadata (terminal out, no 8-repo) | `98727a0` | `conversion-copy.ts`, `layout.tsx`, `page.tsx` |
| **0.4** | FeaturedStrip — Map · /results/ · /how-it-works/ | `de22608` | `FeaturedStrip.tsx`, `FEATURED_STRIP` |
| **0.5** | LIVE/PARTIAL badges IntentRouter + Spearhead | `98727a0` | `IntentRouter.tsx`, `getReadinessStatus()` |
| **0.6** | L3 w hero + Featured — **częściowo** | `98727a0` | StickyCta **bez zmian** (patrz defer) |
| **0.7** | Book Discovery copy = form | ✅ już OK | Brak diff — model manual qualification |
| **Kanony** | site-map §3 (15 sekcji) + §4 proof strip | `de22608`/`98727a0` | `site-map.md` |
| **Handoff** | Sesja domknięta | `3933c30` | `handoffs/2026-06-29-homepage-gtm-faza-0.md` |

### Odchylenia od pierwotnego cursor plan (świadome)

| Plan v1 | Zrobione v2 | Powód |
|---------|-------------|-------|
| Featured card #3 = wizard URL | **/how-it-works/** | GTM v2 + [02-channel Featured](../../strategy/gtm/02-channel-architecture.md) mirror LI |
| StickyCta od sekcji 2, Map primary mobile | **Bez zmian** — WhatsApp primary, trigger po BuiltVsPlanned | site-map §3 Home chrome LOCKED; hero + Featured dają L3 above fold |
| Spearhead bez terminala | **Terminal zostaje** w sekcji 6 (below fold) | Scope S2 = hero de-jargon only; spearhead terminal = Faza B opcjonalna |
| PainGrid micro-CTA L3 | **Nie dodane** | Hero + Featured + ResultsTeaser link wystarczają na min. 3× L3 |

---

## DoD work packages — implementacja vs weryfikacja

Legenda: **Impl** = w kodzie · **Verify** = potwierdź na live

### 0.1 DualBrandBand

| DoD | Impl | Verify |
|-----|------|--------|
| Sekcja pod hero, dwa brandy | ✅ | ⏳ Desktop: widoczne po hero scroll minimalnym |
| QF → `/book-discovery/`, FG → `/results/` | ✅ | ⏳ Kliknij oba linki na prod |
| Copy z `conversion-copy.ts` | ✅ | ✅ |
| `site-map.md §3` row #2 | ✅ | ✅ |
| `data-home-section="dual-brand"` | ✅ | ⏳ DevTools / SectionProgress |

### 0.2 Hero P→S→E

| DoD | Impl | Verify |
|-----|------|--------|
| 3 beaty Problem / System / Effect | ✅ | ⏳ 5s test z H1 |
| ResultsTeaser z labelami P→S→E | ✅ | ⏳ Scroll do sekcji 8 |
| OG bez jargon | ✅ | ⏳ Share preview / LinkedIn debugger |

### 0.3 De-jargon above fold

| DoD | Impl | Verify |
|-----|------|--------|
| Brak terminal mock w hero | ✅ | ⏳ Prod screenshot hero |
| Proof strip bez „8-repo” | ✅ | ⏳ |
| Brak statusbar „N repos” w hero | ✅ | ⏳ |
| Brak „Eight parts” / repo keys w IntentRouter UI | ✅ | ⏳ Sekcja 9 — karty bez repoKey visible |
| `layout.tsx` metadata bez 8-repo | ✅ | ⏳ View source / OG |

**Uwaga:** Spearhead (sekcja 6) nadal ma terminal mock — **below fold**, poza buyer zone 1–6.

### 0.4 FeaturedStrip

| DoD | Impl | Verify |
|-----|------|--------|
| 3 karty, Map €290 = `PRICING.discovery` | ✅ | ⏳ Cena na karcie #1 |
| URL: book-discovery, results, how-it-works | ✅ | ⏳ 3 kliknięcia na prod |
| Analytics `featured_1/2/3` | ✅ | ⏳ GA4 po pierwszym kliku (osobny plan) |
| Mirror dla LinkedIn Featured | ✅ w kodzie | ⏳ **Commander ustawia LI ręcznie** |

### 0.5 LIVE/PARTIAL badges

| DoD | Impl | Verify |
|-----|------|--------|
| StatusBadge na każdej karcie IntentRouter | ✅ | ⏳ 8 kart, Jadzia = PARTIAL |
| Spearhead LIVE badge | ✅ | ⏳ |
| Statusy = `readiness.ts` | ✅ | ⏳ Spot-check Jadzia PARTIAL |

### 0.6 L3 CTA polish

| DoD | Impl | Verify |
|-----|------|--------|
| Hero primary = Book Map | ✅ | ⏳ Mobile 390px — L3 bez scroll? |
| Featured card #1 = Map | ✅ | ⏳ |
| StickyCta po BuiltVsPlanned | ✅ (bez zmian) | ⏳ Mobile scroll do sekcji 7 |
| Sticky Map jako primary mobile | ❌ defer | WhatsApp nadal primary per site-map §3 |
| Min. 3× L3 na home | ✅ | ⏳ hero + featured + results teaser / final |

### 0.7 Book Discovery

| DoD | Impl | Verify |
|-----|------|--------|
| Brak „Pay & pick a slot” bez checkout | ✅ | ⏳ Przeczytaj `/book-discovery/` live |
| Form = „Request my Automation Map slot” | ✅ | ⏳ Submit flow (test enquiry) |
| Spójność z Featured card #1 | ✅ | ⏳ |

---

## Weryfikacja — checklist pewności (przed M1.1)

### A. Agent / CI (można powtórzyć lokalnie)

```bash
npm run typecheck          # oczekiwane: PASS
npm run build              # oczekiwane: PASS, 34 routes
rg "8-repo governance" src/components/home/HeroSection.tsx src/content/conversion-copy.ts  # 0 matches
rg "Eight parts" src/components/home/  # 0 matches
rg "HERO\.terminal" src/   # 0 matches (terminal usunięty z hero)
```

| Check | Ostatni wynik | Data |
|-------|---------------|------|
| typecheck | ✅ PASS | 2026-06-29 |
| build | ✅ PASS (34 routes) | 2026-06-29 |
| Grep de-jargon hero | ✅ PASS | 2026-06-29 |

### B. Commander — produkcja (OBOWIĄZKOWE)

Wykonaj na **https://quietforge.flexgrafik.nl/** po deploy Vercel:

| # | Test | Pass when | ✓ |
|---|------|-----------|---|
| B1 | **5s test desktop** | Wiesz: QF sprzedaje · FG dowodzi · gdzie Map | ☐ |
| B2 | **5s test mobile 390px** | L3 „Book Automation Map” widoczny bez scroll | ☐ |
| B3 | **Dual-brand** | Dwa bloki pod hero, zero pitch druku | ☐ |
| B4 | **Featured strip** | 3 karty, €290, poprawne URL | ☐ |
| B5 | **Hero** | Brak terminala, brak „8-repo”, 3 beaty P→S→E | ☐ |
| B6 | **IntentRouter** | Badge LIVE/PARTIAL, brak repo dump w nagłówku | ☐ |
| B7 | **Book Discovery** | Copy = form (request slot → payment link 24h) | ☐ |
| B8 | **Sticky mobile** | Pojawia się po BuiltVsPlanned, działa | ☐ |

### C. Commander — LinkedIn (MANUAL, przed postem)

| # | Akcja | URL / label | ✓ |
|---|-------|-------------|---|
| C1 | Featured slot 1 | `https://quietforge.flexgrafik.nl/book-discovery/` · Book Automation Map | ☐ |
| C2 | Featured slot 2 | `https://quietforge.flexgrafik.nl/results/` · Live systems | ☐ |
| C3 | Featured slot 3 | `https://quietforge.flexgrafik.nl/how-it-works/` · How it works | ☐ |
| C4 | Services Map pricing | €290, link book-discovery | ☐ |

### D. Opcjonalne (nie blokuje M1.1)

| Item | Priorytet | Notatka |
|------|-----------|---------|
| GA4 event verify LI → Map | P2 | Osobny plan analytics |
| Spearhead terminal removal | P2 | Faza B — below fold |
| StickyCta Map-primary mobile | P2 | Wymaga amendment site-map §3 chrome |
| Pricing drift /solutions vs /pricing | P2 | Osobna sesja AUD |
| UX re-score vs audyt 6.5/10 | P2 | Subiektywny po smoke |

---

## GTM README gap table — stan po Faza 0

| Wymaganie | Stan kod | Stan prod (VERIFY) |
|-----------|----------|-------------------|
| Dual-brand band | ✅ | ✅ B3 |
| Problem → System → Effect hero | ✅ | ✅ B5 |
| De-jargon above fold | ✅ | ✅ (W1 Faza B below fold) |
| Featured paths | ✅ | ✅ B4 |
| LIVE/PARTIAL badges | ✅ | ✅ B6 |
| L3 Map first screen | ✅ hero+featured | ⚠️ B2 partial |
| Spójność post ↔ home | N/A | ⏳ po LI Featured |
| Investor język off home | ✅ (home) | ✅ |

**Gate M0.2:** Agent = PASS · Commander sign-off V1.5 ✅ **DONE** (2026-06-29) → M1.1 unlocked (po V2 LinkedIn Featured).

---

## Commity (referencja)

```
8d6af0a docs(gtm): M0.2 Commander sign-off — unlock M1.1 Inbox Killer publish pack
271c31b docs(gtm): sync gap tables with prod verification results
6c2068b docs(plan): M0.2 prod verification results + action plan for M1.1
c363d1f docs(plan): Homepage GTM Critical Path — done vs verify checklist (M0.2)
3933c30 docs(handoff): homepage GTM Faza 0 complete — M0.2 ready for deploy
98727a0 feat(home): complete GTM Faza 0 S2–S4 — hero, badges, IntentRouter
de22608 feat(home): S1 — DualBrandBand + FeaturedStrip (GTM Faza 0)
59178e0 docs(plan): homepage GTM Faza 0 — implementation spec from GTM v2
3e7b418 docs(gtm): refresh pack v2 — site audit sync + homepage requirements
```

---

## Po weryfikacji — następne kroki

1. ~~Commander zaznacza B1–B8 + C1–C4~~ → **B1–B8 + V1.5 DONE** (M0.2 OK 2026-06-29); C1–C4 = V2 poniżej
2. **V2** — LinkedIn Featured live (3 URL + Services €290) — Commander manual, ~10 min
3. **M1.1** — post P1 Inbox Killer ([07-playbook #1](../../strategy/gtm/07-post-playbook.md)) — copy-paste: [`plans/2026-06-29-m1-inbox-killer-post.md`](./2026-06-29-m1-inbox-killer-post.md)
4. Opcjonalnie Faza B: W1 ResultsTeaser de-jargon, W2 Spearhead terminal, W3 BuiltVsPlanned copy, W4 StickyCta Map-primary + site-map §3 amendment

---

## Out of scope (bez zmian)

- Book Discovery checkout + calendar
- LinkedIn UI poza Featured/Services
- Investor track / posty B2B przed VERIFY
- IntentRouter full redesign (outcome-only, no repo grid)

---

*Plan approved: 2026-06-29 · Executed: 2026-06-29 · Deploy: `3933c30` · M0.2 CLOSED: 2026-06-29 (`8d6af0a`) · Next gate: V2 LinkedIn Featured → M1.1*
