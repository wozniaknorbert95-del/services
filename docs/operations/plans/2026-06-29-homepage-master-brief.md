---
status: "[APPROVED — COMMANDER DECISIONS RECEIVED 2026-06-29]"
title: "Homepage Master Brief — Ostateczna wersja homepage + GTM spójność"
owner: "Norbert Wozniak (Dowódca)"
updated: "2026-06-29"
classification: "Operations plan — Faza 0 brief + struktura (APPROVED)"
parent_plan: "../../Desktop/plan home page.txt"
commander_decisions: "../../Desktop/mapa.txt"
upstream:
  - "./2026-06-29-homepage-gtm-faza-0.md"
  - "../../strategy/gtm/README.md"
  - "../../strategy/site-map.md"
  - "../../audits/2026-06-25/quietforge-ux-ia.md"
  - "../../canons/strategy-rules.md"
  - "../../canons/marketing-rules.md"
  - "../../canons/ux-rules.md"
---

# Homepage Master Brief

> **Cel główny (z planu Dowódcy):** Maksymalizacja konwersji na Automation Map (€290) przy zachowaniu pełnej spójności z GTM Pack (01–08).
>
> **Zasada nadrzędna:** Strona mówi językiem właściciela firmy, nie dewelopera.
>
> **Podejście:** Zero zgadywania — każda zmiana poprzedzona weryfikacją plików. Każda sesja = 1 komponent (Zasada 1-1-1).

---

## §1 Kontekst wykonania

### 1.1 Stan obecny (po Faza 0 shipped, M0.2 CLOSED 2026-06-29)

| Warstwa | Stan | Źródło |
|---------|------|--------|
| Kod homepage | 15 sekcji w `page.tsx` (zgodne z `site-map.md §3`) | `src/app/page.tsx` |
| Faza 0 GTM | ✅ SHIPPED — dual-brand, Featured, de-jargon hero, P→S→E beats, LIVE/PARTIAL badges | commity `de22608`, `98727a0` |
| Commander sign-off | ✅ M0.2 OK (2026-06-29, commit `8d6af0a`) | `verify-action.md` |
| Produkcja | LIVE — `https://quietforge.flexgrafik.nl/` | Vercel CD |
| Martwy kod | 5 nieużywanych komponentów home (WhyThisWorks, TrustSafety, SystemArchitecture, OwnerEcosystemTeaser + IntentFilterChips aktywny transitivnie) | inwentaryzacja 2026-06-29 |
| Uwagi otwarte (Faza B) | W1–W4 (P2/P3 polish, nie blokują M1.1) | `verify-action.md` |

### 1.2 Co plan Dowódcy chce osiągnąć (delta vs obecnie)

| Cel planu | Obecnie | Target | Delikatna uwaga |
|-----------|---------|--------|-----------------|
| Max 8–9 sekcji home | 15 sekcji | 8–9 sekcji | Wymaga amend `site-map.md §3` + `SR-01` (anti-chaos rule 1 + 2) |
| Redukcja objętości 35–40% | ~long pitch deck | -35–40% scroll | Realizowane przez compact variants + usuwanie sekcji |
| IntentRouter max 6–7 kart | 8 repo (SR-06 HARD) | 6–7 kart | **Łamie SR-06** — wymaga amend HARD rule + skill sync |
| Wywalić pełną governance / LOS / agent cards z home | Sekcje #10–11 (below fold) | Przenieść na `/results/owner-ecosystem/` | ** częściowo łamie SR-12** (quietforge shows governed ecosystem proof — nie zero-repo mode) |
| Wywalić terminal blocks | Spearhead sekcja #6 ma terminal mock | Screenshot only | Oznaczone jako W2 Faza B (defer) |
| Przełożyć język na benefitowy (P→S→E) | Hero zrobione (M0.2) | Wszystkie sekcje | W1–W3 Faza B (copy polish) |
| GTM docs 01–08 sync | Status quo | Wszystkie docs refl. nową home | Faza 3 planu — osobne sesje docs |

### 1.3 Co już zostało zrobione z planu (M0.2 = Faza 0 GTM)

Plan Dowódcy w punktach 1.1–1.4 pokrywa się z Fazą 0 GTM pack v2, która jest **shipped i signed off**:

- ✅ Hero + Dual-brand band (sek. #1–2)
- ✅ Featured strip — 3 paths (sek. #3)
- ✅ De-jargon above fold (hero bez terminala, bez 8-repo)
- ✅ P→S→E beats w hero + ResultsTeaser labels
- ✅ LIVE/PARTIAL badges (IntentRouter + Spearhead)

**Wniosek:** Plan Dowódcy zaczyna się efektywnie od **Fazy 1** (struktura i komunikacja). Faza 0 GTM pack = zrobiona.

---

## §2 Konflikty z HARD rules — mapa i resolution

Plan Dowódcy wymaga zmian które kolidują z binding canon. Bez ich rozwiązania pierwsza edycja `page.tsx` wywoła `KONFLIKT Z SR-XX`.

| HARD rule | Treść | Konflikt z planem | Proponowana resolution |
|-----------|-------|-------------------|------------------------|
| **SR-01** | Home order LOCKED do `site-map.md §3` (rule mówi "13 sekcji", §3 ma 15 — wewnętrzna sprzeczność) | Plan chce 8–9 sekcji | Amend `site-map.md §3` (nowa struktura 8–9) + amend `SR-01` (nowa liczba) w tej samej sesji |
| **SR-03** | Zmiana `page.tsx` MUSI zaktualizować `site-map.md §3` w tej samej sesji | Każda zmiana struktury | Procedural — w każdej sesji strukturalnej同步 |
| **SR-06** | `IntentRouter` ZAWSZE pokazuje 8 repo; filter dimuje, nie ukrywa | Plan chce 6–7 kart | **Dwie opcje:** (A) zachować 8 repo, compact layout; (B) amend SR-06 (HARD rule edit + skill sync) |
| **SR-12** | quietforge shows governed ecosystem proof (LOS, Built vs Planned, 8-repo) — nie zero-repo mode | Plan chce wywalić governance/LOS z home | Zachować teaser + link do `/results/owner-ecosystem/`; pełne usunięcie = łamanie SR-12 |
| **MR-05** | Każda money page arc: Problem → System → Effect | Plan chce to samo | Brak konfliktu — synergia |
| **MR-11** | Brak LangGraph/MCP/LLM w SMB-facing sections | Plan chce wywalić żargon | Brak konfliktu — synergia; **flag**: `BuiltVsPlanned` compact ma `LangGraph HITL pipeline` (VIOLATION dziś, W3 Faza B) |
| **UR-02** | Max 1 primary CTA per viewport | Plan chce więcej CTA strategicznie | Uwaga: "więcej CTA" ≠ 2 primary w jednym viewport; można dodać **text linki** L1/L2 między sekcjami |
| **Anti-chaos 1** | `page.tsx` change → `site-map.md §2` same session | Każda sesja strukturalna | Procedural |
| **Anti-chaos 2** | HARD rule edit → canon + relevant skill same session | Amend SR-01/SR-06 | Wymaga sesji `risky` (scope-lock) z `strategy-check` skill sync |
| **Zasada 1-1-1** | Jeden komponent per sesja OpenCode | Plan jest wielosesyjny | Rozbij na sekwencję sesji (§5) |

### 2.1 Decyzje wymagane od Dowódcy (przed Fazą 1)

> **✅ ROZSTRZYGNIĘTE — Commander decisions `mapa.txt` 2026-06-29. Zobacz §11.1 dla mapy pytań → odpowiedzi.**

1. **SR-06 — IntentRouter 8 vs 6–7 kart?** → **6 kart** (amend SR-06)
2. **SR-12 — governance/LOS obecność na home?** → **Usunąć `LivingSystemTeaser` + `BehindTheScenes`** (amend SR-12, governance jako link + BuiltVsPlanned row)
3. **Redukcja 15→8 czy 9 sekcji?** → **9 sekcji** (Opcja A z IntentRouter 6 kart — hybryda A+B)

---

## §3 Propozycja finalnej struktury homepage (Faza 0.3 planu)

> **✅ WYBRANO: Opcja A+ (9 sekcji + IntentRouter 6 kart)** — Commander decisions `mapa.txt` §1. Zobacz §11.2 dla zatwierdzonej tabeli z wytycznymi per sekcja. Poniższe dwie opcje zachowane jako historia analizy.

Dwie opcje — jak w audycie site (`quietforge-ux-ia.md` §5). Opcja A zachowawcza, Opcja B agresywna (konwersyjna dla SMB).

### Opcja A — 9 sekcji (zachowawcza, zgodna z SR-06 i SR-12)

| # | Sekcja | Komponent | Funnel job | Uwagi do implementacji |
|---|--------|-----------|------------|------------------------|
| 1 | Hero | `HeroSection` | 5s clarity + L3 | Bez zmian (M0.2 OK) |
| 2 | Dual-brand | `DualBrandBand` | QF sell / FG proof | Bez zmian (M0.2 OK) |
| 3 | Featured paths | `FeaturedStrip` | 3 paths mirror LI | Bez zmian (M0.2 OK) |
| 4 | Pain router | `PainGrid` | "Choose your leak" | Bez zmian (4 cards, jargon-free) |
| 5 | Wizard proof + metrics | `SpearheadSpotlight` + `SystemMetrics` compact (połączone) | Live proof #1 + 4 numbers | Wymaga refactor: 1 sekcja z 2 pod-blokami |
| 6 | Honesty gate + results | `BuiltVsPlanned` compact + `ResultsTeaser` (połączone) | Trust + P→S→E cards | Wymaga refactor + W3 de-jargon `LangGraph` z BuiltVsPlanned |
| 7 | Pick your module | `IntentRouter` | Self-segmentation 8 repo | Bez zmian struktury (SR-06), tylko compact layout |
| 8 | Method + Trust | `HowIWork` compact + `TrustAndObjections` (połączone) | Process + risk removal | Wymaga refactor: 1 sekcja z 2 pod-blokami |
| 9 | Pricing + Final CTA | `Pricing` + `FinalCtaBand` (połączone) | Commercial + close | Wymaga refactor: 1 sekcja z 2 pod-blokami |

**Redukcja:** 15 → 9 sekcji (-40%). Nie łamie SR-06, SR-12.
**Sekcje usunięte z home (przeniesione):** `LivingSystemTeaser` (teaser) → link w `FinalCtaBand`; `BehindTheScenes` → pełna na `/results/owner-ecosystem/`.
**Honesty gate + ResultsTeaser połączone** = jedno "proof + honesty" blok.

### Opcja B — 8 sekcji (agresywna, wymaga amend SR-06 + SR-12)

| # | Sekcja | Komponent | Funnel job | Wymagane zmiany |
|---|--------|-----------|------------|-----------------|
| 1 | Hero | `HeroSection` | 5s + L3 | Bez zmian |
| 2 | Dual-brand + Featured | `DualBrandBand` + `FeaturedStrip` (połączone) | QF/FG + 3 paths | Refactor: 1 sekcja z 2 pod-blokami |
| 3 | Pain router | `PainGrid` | Choose your leak | Bez zmian |
| 4 | Wizard proof + metrics | `SpearheadSpotlight` + `SystemMetrics` compact | Live proof #1 | Refactor + W2 (terminal → screenshot) |
| 5 | Honesty gate + results | `BuiltVsPlanned` compact + `ResultsTeaser` | Trust + P→S→E | Refactor + W1+W3 de-jargon |
| 6 | Pick your module | `IntentRouter` (6–7 kart) | Self-segmentation | **Łamie SR-06** — wymaga amend + skill sync |
| 7 | Method + Trust | `HowIWork` compact + `TrustAndObjections` | Process + risk | Refactor: 1 sekcja z 2 pod-blokami |
| 8 | Pricing + Final CTA | `Pricing` + `FinalCtaBand` + LOS link | Commercial + close + "full architecture" link | Refactor; `BehindTheScenes` + `LivingSystemTeaser` usunięte z home |

**Redukcja:** 15 → 8 sekcji (-47%). Wymaga amend SR-06 (6–7 kart) + SR-12 (governance tylko link).
**Sekcje usunięte z home:** `LivingSystemTeaser`, `BehindTheScenes` (pełne na `/results/owner-ecosystem/`); 1–2 repo z `IntentRouter` (ukryte, nie dim).

### 3.1 Rekomendacja agenta

**Opcja A** — mimo że tylko 9 sekcji (plan Dowódcy mówi "max 8–9"):
- Nie wymaga amend HARD rules (SR-06, SR-12) → mniejsze ryzyko canon drift
- Zachowuje governed ecosystem proof (SR-12) jako below-fold teaser
- IntentRouter 8 repo = zgodne z SR-06 (filter dim already works)
- Redukcja -40% objętości przez compact variants + łączenie sekcji
- Można wykonać w mniejszej liczbie sesji (mniej canon edits)

**Opcja B** wymaga:
- Sesja `risky` (scope-lock) na amend SR-06 + SR-12 + `strategy-check` skill sync
- Wyższe ryzyko regresji konwersji (ukrycie repo = mniej self-segmentation paths)
- Większy drop unikalnych dowodów governance z home

### 3.2 Mapa sekcji: obecne 15 → target (Opcja A)

| Obecnie (#) | Komponent | Target (Opcja A) | Akcja |
|--------------|-----------|------------------|-------|
| 1 | HeroSection | #1 Hero | zostaje |
| 2 | DualBrandBand | #2 Dual-brand | zostaje |
| 3 | FeaturedStrip | #3 Featured | zostaje |
| 4 | PainGrid | #4 Pain router | zostaje |
| 5 | SystemMetrics compact | #5 (połączone z #6) | refactor: pod-blok |
| 6 | SpearheadSpotlight | #5 (połączone z #5) | refactor: pod-blok + W2 |
| 7 | BuiltVsPlanned compact | #6 (połączone z #8) | refactor: pod-blok + W3 |
| 8 | ResultsTeaser | #6 (połączone z #7) | refactor: pod-blok + W1 |
| 9 | IntentRouter | #7 Pick module | zostaje (compact) |
| 10 | LivingSystemTeaser | ❌ usunięte z home | link w FinalCtaBand |
| 11 | BehindTheScenes | ❌ usunięte z home | pełna na /results/owner-ecosystem/ |
| 12 | HowIWork | #8 (połączone z #13) | refactor: pod-blok compact |
| 13 | TrustAndObjections | #8 (połączone z #12) | refactor: pod-blok |
| 14 | Pricing | #9 (połączone z #15) | refactor: pod-blok |
| 15 | FinalCtaBand | #9 (połączone z #14) | refactor: pod-blok + LOS link |

---

## §4 Master brief copy / komunikacja (Faza 1.2–1.5 planu)

### 4.1 Ton

- **Język:** English (public B2B, EN-friendly NL SMB)
- **Głos:** founder first-person, nie "we/agency" (MR-11, marketing-strategy §11)
- **Message hierarchy:** Problem → System → Effect (MR-05, GTM 04)
- **Anti-positioning:** "Not a web designer. Not an AI chatbot builder." (MR-03) — obecne w `POSITIONING`, nie w hero (do rozważenia czy dodać)

### 4.2 Słownik do usunięcia z above-fold (MR-11)

| Dziś w kodzie | Gdzie | Akcja |
|----------------|-------|-------|
| `5-node LangGraph HITL pipeline, hybrid VPS` | `BuiltVsPlanned` compact (Agent OS capability) | W3: → "5-step supervised workflow, EU VPS" |
| `LangGraph`, `Langfuse`, `WP SSH`, `GA4`, `Telegram HITL` | `ResultsTeaser` effect lines (z `proof.ts`) | W1: → effect copy bez tech stack names |
| `8-repo governance` | `ResultsTeaser` owner-ecosystem card | W1: → "One supervised system, 8 production parts" (per §5) |
| `HITL approval` | `HeroSection` proofStrip | Łagodny — zostaje (znane SMB) lub → "Human approval on every send" |
| `Mollie checkout`, `HITL active` | `SpearheadSpotlight` terminal mock | W2: terminal → screenshot, copy → "Live checkout · human approval on deploy" |
| `VCMS`, `Agent OS` | `BehindTheScenes` (below fold) | Opcja A: sekcja usuwana z home; Opcja B: link only |
| `Agent OS nodes`, `Production-touching repos` | `SystemMetrics` compact | Łagodny — zostaje lub → "5 AI agents · 8 production parts" |

### 4.3 CTA hierarchy (zgodne z `conversion-pipeline.md §2`)

| Tier | Label | Destination | Gdzie na home |
|------|-------|-------------|---------------|
| L3 (primary) | `Book Automation Map` | `/book-discovery/` | Hero, Featured #1, Final CTA, sticky mobile (secondary) |
| L1 (secondary) | `See live systems` / `See all results` | `/results/` | Hero, DualBrand FG, Featured #2, ResultsTeaser |
| L2 (demo) | `Try the wizard (2 min)` | `zzpackage.flexgrafik.nl` | SpearheadSpotlight ONLY |
| Support | `Ask on WhatsApp` | WhatsApp deep link | Hero (text), sticky mobile (primary) |
| L1.5 | `How it works` | `/how-it-works/` | Featured #3 |

**Zasada UR-02:** 1 primary per viewport. Plan mówi "więcej CTA strategicznie" = text linki między sekcjami, nie 2 primary.

### 4.4 Copy SSoT — wszystkie strings z `src/content/*.ts`

- `HERO`, `DUAL_BRAND`, `FEATURED_STRIP`, `SPEARHEAD`, `OBJECTIONS`, `CTAS` → `conversion-copy.ts`
- `PAIN_GRID`, `INTENT_ROUTER_HEADER`, `ECOSYSTEM_REPOS`, `HOME_SECTIONS` → `ecosystem.ts`
- `READINESS_ROWS`, `getReadinessStatus` → `readiness.ts`
- `METRIC_DISPLAY_CARDS`, `metrics` → `metrics-display.ts` + `proof.ts`
- `CASE_STUDIES`, `FEATURED_CASE_SLUGS` → `lib/case-studies`
- `LOS_TEASER`, `LOS_DEFINITION` → `los-architecture.ts`

**Zasada:** żadnego hardkodowanego copy w komponentach — wszystko z content. Dziś kilka komponentów hardkoduje (`BehindTheScenes`, `HowIWork`, `TrustAndObjections`, `Pricing` — flagged w inwentaryzacji).

---

## §5 Sekwencja sesji wykonawczych (Zasada 1-1-1)

> **⚠️ ZASTĄPIONE przez §12** — zaktualizowana sekwencja po decyzjach `mapa.txt`. Poniższa zachowana jako historia pierwotnego planu.

Plan Dowódcy ma 4 fazy. Rozbijam na sesje agenta (max 3 sekcje/sesja z build gate między).

### Faza 0 — Przygotowanie (ta sesja)

| Sesja | Co | Status |
|-------|-----|--------|
| 0.1 | Weryfikacja stanu repo (GTM 01–08 + kanony + komponenty + audyt) | ✅ zrobione w tej sesji |
| 0.2 | Master brief (ten dokument) | ✅ zrobione |
| 0.3 | Propozycja struktury (§3) | ✅ zrobione — czeka na akceptację Dowódcy |

### Faza 1 — Struktura i komunikacja (po akceptacji §3)

| Sesja | Typ | Co | Zasada 1-1-1 | Output |
|-------|-----|----|--------------|--------|
| 1.0 | `risky` (scope-lock) | Amend `site-map.md §3` (nowa struktura 8/9) + amend `SR-01` (nowa liczba) + `strategy-check` skill sync | docs canon edit | Nowy `site-map.md §3` + `strategy-rules.md` zaktualizowane |
| 1.1 | `page-feature` | Refactor `page.tsx` — nowa kolejność 9 sekcji (Opcja A) + usunięcie `LivingSystemTeaser` + `BehindTheScenes` z home (zachować import dla `/results/owner-ecosystem/` jeśli używane) | 1 file: page.tsx | Nowy `page.tsx` + sync `site-map.md §2` |
| 1.2 | `page-feature` | Refactor: połączone sekcje #5 (Spearhead + SystemMetrics) — nowy komponent `ProofAndMetricsBlock` lub variant | 1 komponent | Nowy/zedytowany komponent |
| 1.3 | `page-feature` | Refactor: połączone sekcje #6 (BuiltVsPlanned + ResultsTeaser) — `HonestyAndResultsBlock` | 1 komponent | Nowy/zedytowany komponent |
| 1.4 | `page-feature` | Refactor: połączone sekcje #8 (HowIWork + TrustAndObjections) — `MethodAndTrustBlock` | 1 komponent | Nowy/zedytowany komponent |
| 1.5 | `page-feature` | Refactor: połączone sekcje #9 (Pricing + FinalCtaBand) — `PricingAndCloseBlock` + LOS link | 1 komponent | Nowy/zedytowany komponent |
| 1.6 | `conversion-task` | Copy polish W1: ResultsTeaser owner-ecosystem card de-jargon ("8-repo governance" → "One supervised system") | 1 komponent | `ResultsTeaser` zedytowany |
| 1.7 | `conversion-task` | Copy polish W3: BuiltVsPlanned compact de-jargon (`LangGraph HITL pipeline` → "supervised workflow") | 1 komponent | `BuiltVsPlanned` zedytowany |
| 1.8 | `conversion-task` | W2: Spearhead terminal mock → screenshot only (jeśli Commander potwierdza) | 1 komponent | `SpearheadSpotlight` zedytowany |

### Faza 2 — UX i potencjał sprzedażowy

| Sesja | Typ | Co | Output |
|-------|-----|----|--------|
| 2.1 | `conversion-task` | Audyt CTA distribution + dodanie L1/L2 text linków między sekcjami (nie 2 primary) | Copy + komponenty |
| 2.2 | `page-bugfix` | Mobile optimization: tabele → cards, BuiltVsPlanned accordion, tap targets 44px | Komponenty |
| 2.3 | `seo-task` | Lighthouse + performance audit + OG refresh jeśli zmiana metryki home | seo |
| 2.4 | `page-bugfix` | Usunięcie martwych komponentów (`WhyThisWorks`, `TrustSafety`, `SystemArchitecture`, `OwnerEcosystemTeaser`) — po weryfikacji że nie są importowane nigdzie | cleanup |

### Faza 3 — Aktualizacja GTM docs

| Sesja | Typ | Co | Output |
|-------|-----|----|--------|
| 3.1 | `docs-task` | Aktualizacja `gtm/README.md` (gap table po zmianach) + `01-two-brand-model.md` (finalny dual-brand na home) | 2 docs |
| 3.2 | `docs-task` | Aktualizacja `02-channel-architecture.md` + `03-linkedin-principles.md` P5 (spójność home) | 2 docs |
| 3.3 | `docs-task` | Aktualizacja `05-content-pillars.md` (kolumna "Jak wspiera homepage") + `04, 06, 07, 08` drobne poprawki | 5 docs |

### Faza 4 — Weryfikacja końcowa

| Sesja | Typ | Co | Output |
|-------|-----|----|--------|
| 4.1 | `deploy-task` | Finalna weryfikacja kodu — `npm run build` + typecheck + lint + audit:links + lighthouse:ci | verify report |
| 4.2 | `docs-task` | Audyt spójności homepage vs GTM docs — checklist | raport |
| 4.3 | Commander HITL | Test z 3–5 użytkownikami + finalna akceptacja | Commander |

**Łącznie:** ~15 sesji agenta (Faza 1: 9, Faza 2: 4, Faza 3: 3, Faza 4: 2). Czas: 8 dni roboczych planu Dowódcy = realistyczne przy 2 sesjach/dzień.

---

## §6 Ryzyka i mitigation

| Ryzyko | Prawdopodobieństwo | Wpływ | Mitigation |
|--------|---------------------|-------|------------|
| Canon drift przy amend SR-01/SR-06 | Średnie | Wysoki | Sesja 1.0 `risky` z scope-lock + skill sync w tej samej sesji |
| Regresja konwersji po redukcji sekcji | Średnie | Wysoki | Opcja A (zachowawcza) + verify po każdej sesji + Lighthouse + analytics events |
| Usunięcie `BehindTheScenes` łamie SR-12 | Niskie | Średni | Link "See full architecture →" w FinalCtaBand + pełna na `/results/owner-ecosystem/` |
| GTM docs nie zaktualizowane po home change | Wysokie | Średni | Faza 3 jako osobne sesje (nie łączyć z kodem) + anti-chaos rule |
| Zasada 1-1-1 łamana przez "mega-diffy" | Wysokie | Średni | §5 sekwencja — każda sesja = 1 komponent / max 3 sekcje |
| Martwy kod usunięty za wcześnie (przed refactor) | Średnie | Niski | Sesja 2.4 na końcu Fazy 2 (po potwierdzeniu że nie są importowane) |
| `BuiltVsPlanned` compact `LangGraph` shipped dziś (MR-11 VIOLATION) | Pewne | Niski (below fold) | W3 w sesji 1.7 |
| `ResultsTeaser` effect lines z `proof.ts` mają `Langfuse`/`WP SSH` | Pewne | Niski (below fold) | W1 w sesji 1.6 |

---

## §7 Open questions dla Dowódcy (BLOCKING przed Fazą 1)

> **✅ WSZYSTKIE ROZSTRZYGNIĘTE — Commander decisions `mapa.txt` 2026-06-29.** Zobacz §11.1 dla mapy pytań → odpowiedzi. Poniższe pytania zachowane jako historia analizy.

1. ~~Opcja A (9 sekcji) czy Opcja B (8 sekcji)?~~ → **Opcja A+ (9 sekcji + IntentRouter 6 kart)** — §11.1 Q1
2. ~~IntentRouter — 8 repo czy 6–7 kart?~~ → **6 kart** (amend SR-06) — §11.1 Q2, §11.3 sekcja 7
3. ~~`LivingSystemTeaser` + `BehindTheScenes` — zostawić czy usunąć?~~ → **Usunąć całkowicie** (amend SR-12) — §11.1 Q3, §11.5
4. ~~Spearhead terminal mock — usuwamy teraz czy defer?~~ → **Usuwamy teraz** (W2 w sesji 1.2) — §11.1 Q4, §11.3 sekcja 5
5. ~~Anti-positioning w hero subline?~~ → **Nie zmieniamy** (hero bez zmian copy) — §11.1 Q5
6. ~~Sekwencja sesji — akcept czy konsolidacja?~~ → **Zaakceptowana** (zaktualizowana sekwencja §12) — §11.1 Q6

---

## §8 Anti-chaos checklist (przed każdą sesją Fazy 1+)

- [ ] `page.tsx` change → `site-map.md §3` updated w tej samej sesji (SR-03)
- [ ] HARD rule edit → canon + `strategy-check` skill sync w tej samej sesji (anti-chaos 2)
- [ ] Copy strings z `src/content/*.ts` (SSoT), nie hardkodowane w komponentach
- [ ] `npm run build` + `typecheck` + `lint` PASS przed commit (AGENTS §8)
- [ ] Handoff na koniec każdej sesji (`docs/operations/handoffs/YYYY-MM-DD-*.md`)
- [ ] OG image regen jeśli zmiana metryki home (`scripts/generate-og.mjs`)
- [ ] Sitemap regen na build (auto przez `prebuild`)
- [ ] `prefers-reduced-motion` respektowane (UR-11)
- [ ] Max 8 Tailwind utils / element (UR-07) — extract do `qf-*` jeśli przekroczone
- [ ] Mobile-first, tap targets ≥ 44px (UR-13)

---

## §9 Co NIE jest w scope tego briefu

- Book Discovery checkout + calendar implementacja (P0 drift — osobna sesja jeśli trzeba)
- LinkedIn UI egzekucja (Featured, Services — Commander manual)
- Investor track na homepage (Track D — off home per GTM 04/08)
- Solution pages redesign (osobny plan)
- Pricing SSoT drift audit (osobna sesja AUD — W4 verify-action)
- Founder page "agency" fix + video placeholder (osobna sesja)
- `/results/whatsapp-discovery-pilot/` completion (osobna sesja)

---

## §10 Następny krok

**Commander decisions received** (`C:\Users\FlexGrafik\Desktop\mapa.txt` — 2026-06-29). Zobacz §11 (mapa pytań → odpowiedzi) i §12 (zaktualizowana sekwencja wykonawcza).

**Pierwsza sesja wykonawcza:** 1.0 (`risky`, scope-lock) — amend `site-map.md §3` + `SR-01` + `SR-06` + `SR-12` + `strategy-check` skill sync. Wszystkie canon edits w jednej sesji (anti-chaos rule 2).

---

## §11 Commander Decisions — mapa.txt (2026-06-29)

> **Źródło:** `C:\Users\FlexGrafik\Desktop\mapa.txt` — zatwierdzona struktura 9 sekcji + szczegółowe wytyczne per sekcja + zasady językowe/UX + metryki sukcesu.

### 11.1 Odpowiedzi na 6 pytań blocking (§7)

| # | Pytanie (§7) | Odpowiedź Dowódcy (mapa.txt) | Konsekwencja canon |
|---|--------------|------------------------------|---------------------|
| 1 | Opcja A (9 sekcji) czy Opcja B (8 sekcji)? | **Opcja A+ — 9 sekcji** (zatwierdzona tabela w mapa.txt §1) | Amend `SR-01` (15→9) + `site-map.md §3` |
| 2 | IntentRouter — 8 repo czy 6–7 kart? | **6 kart** (mapa.txt sekcja 7: "Maksymalnie 6 kart (usuwamy 2 najmniej istotne)") | **Amend `SR-06`** (HARD rule edit + skill sync) |
| 3 | `LivingSystemTeaser` + `BehindTheScenes` — zostawić teaser czy usunąć? | **Usunąć całkowicie** (mapa.txt §5: "Sekcja governance → wywalamy z homepage"; "Living Operating System → przenosimy na /results/owner-ecosystem/") | **Amend `SR-12`** (governance proof jako link w FinalCtaBand, nie dedykowana sekcja) |
| 4 | Spearhead terminal mock (W2) — usuwamy teraz czy defer? | **Usuwamy teraz** (mapa.txt sekcja 5: "Wywalamy: Terminal ($ wizard.checkout), długie listy SKU, szczegóły Mollie"; "Zostaje: Status LIVE + 1 mocny benefit + screenshot + link do proof") | Sesja 1.2 (Spearhead refactor) |
| 5 | Anti-positioning w hero subline? | **Nie zmieniamy** (mapa.txt sekcja 1: "Zostaje w obecnej formie" + "Tylko ewentualne lekkie dopracowanie") | Brak canon edit — hero bez zmian copy |
| 6 | Sekwencja 15 sesji — akcept czy konsolidacja? | **Zaakceptowana struktura 9 sekcji** (mapa.txt §1) — sekwencja sesji per §12 | Brak canon edit — wykonawcza |

### 11.2 Zatwierdzona struktura 9 sekcji (mapa.txt §1)

| # | Sekcja | Cel (mapa.txt) | Co zostaje | Co wywalamy | Co zmieniamy | Długość | CTA |
|---|--------|----------------|------------|-------------|--------------|---------|-----|
| 1 | Hero | Natychmiastowe zrozumienie oferty | Obecna wersja (P/S/E + dual-brand teaser) | — | Lekkie dopracowanie nagłówka | Krótka (1 ekran) | Book Automation Map |
| 2 | Dual-brand wyjaśnienie | Wyjaśnić dwa brandy | "Quietforge sells the system. FlexGrafik runs it live." | — | Utrzymać (bardzo dobra) | Średnia | Book Map / See live systems |
| 3 | Three paths | Jasne punkty wejścia | 3 karty: Map, Live systems, How it works | — | Utrzymać | Średnia | 3× CTA |
| 4 | 4 Pain Points | Pokazać zrozumienie bólu | 4 bolączki (Inbox, Website, Quotes, Traffic) | — | Lekkie dopracowanie tekstów | Średnia | Linki do rozwiązań |
| 5 | Live Proof – Wizard | Pokazać realny dowód | Wizard Cash Engine (LIVE) | **Terminal + długie listy SKU + szczegóły Mollie** | **Skrócić do 4–5 punktów + 1 mocny screenshot** | Krótka | Try wizard (proof) + Book Map |
| 6 | Honesty Gate | Pokazać transparentność | Tabela LIVE/PARTIAL/PLANNED | Szczegółowe opisy modułów | **Tylko 4 najważniejsze moduły w skróconej formie** | Krótka | Link do /results/ |
| 7 | Pick your module | Dać wybór bez przytłaczania | **6 kart** (zamiast 8) | Pełne opisy techniczne repo + LangGraph + VCMS dashboard | **Mocno skrócone opisy (1–2 zdania) + status LIVE/PARTIAL** | Średnia | Link do konkretnego wyniku |
| 8 | How it works | Pokazać proces i bezpieczeństwo | 5 kroków (Map→Architect→Build→Verify→Handover) | Szczegóły agentów i narzędzi | Utrzymać w skróconej formie | Średnia | Book Automation Map |
| 9 | Trust + Pricing + Final CTA | Zamknąć decyzję | Trust & Safety + cennik + finalne CTA | Nadmiarowe szczegóły AVG/DPA | **Skrócić + dodać mocniejsze CTA** | Średnia | Book Automation Map (duże) |

**Po sekcji 9 nie ma już nic więcej na stronie głównej.**

### 11.3 Szczegółowe wytyczne per sekcja (mapa.txt §3)

**Sekcja 5 — Live Proof (Wizard):**
- Wywalamy: Terminal (`$ wizard.checkout`), długie listy SKU, szczegóły Mollie
- Zostaje: Status LIVE + 1 mocny benefit + screenshot + link do proof
- Cel: Pokazać, że coś działa, nie jak działa technicznie

**Sekcja 6 — Honesty Gate:**
- Maksymalnie 4 wiersze (mapa.txt sugeruje: Wizard, Jadzia, Agent OS, Governance)
- Wywalamy: webhooki, Paramiko, Langfuse, audit logs z capability linii
- Wymaga de-jargon W3: "5-node LangGraph HITL pipeline" → "5-step supervised workflow"

**Sekcja 7 — Pick your module (NAJWAŻNIEJSZA zmiana):**
- Maksymalnie 6 kart (usuwamy 2 najmniej istotne)
- Każda karta: max 2–3 linie tekstu + status (LIVE/PARTIAL)
- Wywalamy: nazwy repozytoriów (repo keys), diagramy agentów, linki do wewnętrznych dashboardów
- **Rekomendacja agenta — 2 repo do ukrycia:** `flex-vcms` (governance — przeniesione) + `flexgrafik-meta` (method — internal). Pozostaje 6 kart: zzpackage, app.flexgrafik.nl, jadzia-core, agent-os, flexgrafik-nl, agent-os-ui.

**Sekcja 8 — How it works:**
- 5 kroków zostaje, bez "AI agents orchestrate", "fixed rules"
- Skupić się na korzyściach: bezpieczeństwo, jasność, brak lock-in

**Sekcja 9 — Trust + Pricing:**
- Trust & Safety skrócić o ~50%
- Cennik bez zmian (czytelny)
- Mocniejsze CTA Book Automation Map

### 11.4 Zasady językowe i UX (mapa.txt §4 — obowiązkowe)

| Zasada | Opis | Priorytet |
|--------|------|-----------|
| Język | Zawsze Problem → System → Effect | Obowiązkowy |
| Technologia | **Zero nazw narzędzi (LangGraph, VCMS, Paramiko, FastAPI) na homepage** | Obowiązkowy |
| Długość tekstu | **Każda sekcja max 60–70% obecnej długości** | Obowiązkowy |
| CTA | Dominujące CTA = Book Automation Map | Obowiązkowy |
| Statusy | Zawsze LIVE / PARTIAL / PLANNED | Obowiązkowy |
| Linki | zzpackage.flexgrafik.nl tylko jako proof (nie główne CTA) | Obowiązkowy |

### 11.5 Co zostaje vs co jest usuwane (mapa.txt §5)

| Element | Decyzja | Uzasadnienie |
|---------|---------|--------------|
| Sekcja governance (VCMS, conflict reports, audit logs) | **Wywalamy z homepage** | Zbyt techniczna |
| Szczegóły Agent OS (agent cards, LangGraph) | **Wywalamy z homepage** | Zbyt techniczna |
| Pełna lista 8 repozytoriów | **Redukujemy do 6 kart** | Zbyt dużo |
| Terminalowe bloki kodu | **Wywalamy** | Nie pasuje do odbiorcy |
| Sekcja "Living Operating System" (6 warstw) | **Przenosimy na /results/owner-ecosystem/** | Zbyt głęboka |
| Metryki "9 Wizard UI screens, 5 Agent OS nodes" | **Skracamy / upraszczamy** | Zostawiamy tylko kluczowe |
| Sekcja "Governance layer" z diagramami | **Wywalamy z homepage** | Przenosimy głębiej |

### 11.6 Metryki sukcesu (mapa.txt §6)

| Metryka | Cel po wdrożeniu |
|---------|------------------|
| Czas spędzony na stronie | Spadek (krótsza, bardziej konkretna) |
| Współczynnik konwersji na /book-discovery/ | Wzrost |
| Bounce rate | Spadek |
| Feedback od użytkowników | "Wyraźnie wiem, co oferujecie" |

### 11.7 Tensions do rozstrzygnięcia w sesji 1.0 (canon amend)

| Tension | Opis | Proponowane resolution |
|---------|------|------------------------|
| **T1: Governance w Honesty Gate vs VCMS ukryty w IntentRouter** | mapa.txt sekcja 6 sugeruje "Governance" jako 1 z 4 wierszy BuiltVsPlanned, ale §5 wywal VCMS z homepage | Governance jako **concept** w BuiltVsPlanned row ("Governance layer" + status + krótki capability bez "KODA assistant, audit trail"), NIE jako repo card w IntentRouter. Spójne: governance pokazane jako honesty, nie jako moduł do pick. |
| **T2: SR-12 amend scope** | SR-12 wymaga "governed ecosystem proof (LOS, Built vs Planned, 8-repo)" na home | Amend: home zachowuje BuiltVsPlanned compact (honesty gate) + link "See full architecture" w sekcji 9; pełne LOS + 8-repo + governance details na `/results/owner-ecosystem/`. Link only = zachowanie SR-12 duch. |
| **T3: SR-06 amend scope** | SR-06 wymaga zawsze 8 repo w IntentRouter | Amend: home IntentRouter pokazuje 6 kart (biznesowo istotne); pełne 8 repo na `/results/owner-ecosystem/` lub `/founder/`. Filter dim zasada zostaje dla 6 kart. |
| **T4: BuiltVsPlanned 4 wiersze — które?** | mapa.txt: Wizard, Jadzia, Agent OS, Governance. Aktualnie: Wizard, Lead Magnet, Jadzia COI, Agent OS | Sesja 1.3 (BuiltVsPlanned refactor): zamień Lead Magnet → Governance row (z de-jargon). Lead Magnet zostaje w IntentRouter + `/results/lead-magnet/`. |

---

## §12 Zaktualizowana sekwencja wykonawcza (po decyzjach mapa.txt)

### Faza 1 — Canon + struktura + komunikacja

| Sesja | Typ | Co | Zasada 1-1-1 | Output |
|-------|-----|----|--------------|--------|
| **1.0** | `risky` (scope-lock) | **Canon amend (wszystko w jednej sesji):** `site-map.md §3` (nowa struktura 9) + `SR-01` (15→9) + `SR-06` (8→6 kart IntentRouter home, pełne 8 na /results/owner-ecosystem/) + `SR-12` (governance proof = BuiltVsPlanned row + link, nie dedykowana sekcja) + `strategy-check` skill sync | docs canon edit | Zaktualizowane `strategy-rules.md` + `site-map.md` + skill |
| **1.1** | `page-feature` | Refactor `src/app/page.tsx` — nowa kolejność 9 sekcji + usunięcie `LivingSystemTeaser` + `BehindTheScenes` z importów (zachować komponenty dla `/results/owner-ecosystem/`) | 1 file: page.tsx | Nowy `page.tsx` + sync `site-map.md §3` (już zaktualizowane w 1.0) |
| **1.2** | `page-feature` | Refactor sekcji #5 — `SpearheadSpotlight` + `SystemMetrics` compact połączone. **W2: terminal mock → screenshot only**. Skrócić do 4–5 punktów. | 1 komponent (lub 2 jeśli wymaga) | Zedytowane `SpearheadSpotlight.tsx` + `SystemMetrics.tsx` (lub nowy wrapper) |
| **1.3** | `page-feature` | Refactor sekcji #6 — `BuiltVsPlanned` compact. **T4: 4 wiersze = Wizard, Jadzia COI, Agent OS, Governance.** **W3: de-jargon `LangGraph HITL pipeline` → "supervised workflow"**. Usunąć `ResultsTeaser` z home (merge z BuiltVsPlanned lub usunięcie — decyzja w sesji). | 1 komponent | Zedytowane `BuiltVsPlanned.tsx` + `READINESS_ROWS` w `readiness.ts` |
| **1.4** | `page-feature` | Refactor sekcji #7 — `IntentRouter` 6 kart (ukryć `flex-vcms` + `flexgrafik-meta`). Mocno skrócone opisy (1–2 zdania). Zachować outcome-first labels + StatusBadge + filter dim. | 1 komponent | Zedytowane `IntentRouter.tsx` + `ecosystem.ts` (nowy filtr lub flaga `homeVisible`) |
| **1.5** | `page-feature` | Refactor sekcji #8 — `HowIWork` skrócony. 5 kroków bez "AI agents orchestrate", "fixed rules". Skupić na korzyściach (safety, clarity, no lock-in). | 1 komponent | Zedytowane `HowIWork.tsx` |
| **1.6** | `page-feature` | Refactor sekcji #9 — `TrustAndObjections` skrócony o ~50% + `Pricing` + `FinalCtaBand` połączone. Mocniejsze CTA. Dodać link "See full architecture →" do `/results/owner-ecosystem/` (SR-12 amend). | 1 komponent (lub 2 jeśli wymaga) | Zedytowane `TrustAndObjections.tsx` + `FinalCtaBand.tsx` |
| **1.7** | `conversion-task` | Copy polish W1 — `ResultsTeaser` (jeśli zostaje w sekcji #6 lub link): de-jargon "8-repo governance" → "One supervised system, 8 production parts". Effect lines bez `Langfuse`, `WP SSH`, `GA4`. | 1 komponent | Zedytowane `ResultsTeaser.tsx` + `proof.ts` `caseMeasurements` |

### Faza 2 — UX i potencjał sprzedażowy

| Sesja | Typ | Co | Output |
|-------|-----|----|--------|
| **2.1** | `conversion-task` | Audyt CTA distribution + dodanie L1/L2 text linków między sekcjami (zgodne z UR-02 — 1 primary per viewport) | Copy + komponenty |
| **2.2** | `page-bugfix` | Mobile optimization: tabele → cards, BuiltVsPlanned accordion, tap targets 44px, brak horizontal scroll 375px | Komponenty |
| **2.3** | `page-feature` | Usunięcie martwych komponentów (`WhyThisWorks`, `TrustSafety`, `SystemArchitecture`, `OwnerEcosystemTeaser`) — po weryfikacji że nie są importowane nigdzie w `src/` | cleanup |
| **2.4** | `seo-task` | Lighthouse + performance audit + OG refresh jeśli zmiana metryki home (`scripts/generate-og.mjs`) | seo |

### Faza 3 — Aktualizacja GTM docs

| Sesja | Typ | Co | Output |
|-------|-----|----|--------|
| **3.1** | `docs-task` | Aktualizacja `gtm/README.md` (gap table po zmianach) + `01-two-brand-model.md` (finalny dual-brand na home — bez zmian, potwierdzenie) | 2 docs |
| **3.2** | `docs-task` | Aktualizacja `02-channel-architecture.md` (home jako asset — nowa struktura 9) + `03-linkedin-principles.md` P5 (spójność home — nowa sekcja 5/6/7) | 2 docs |
| **3.3** | `docs-task` | Aktualizacja `05-content-pillars.md` (kolumna "Jak wspiera homepage" per pillar) + `04, 06, 07, 08` drobne poprawki | 5 docs |

### Faza 4 — Weryfikacja końcowa

| Sesja | Typ | Co | Output |
|-------|-----|----|--------|
| **4.1** | `deploy-task` | Finalna weryfikacja kodu — `npm run build` + typecheck + lint + audit:links + lighthouse:ci (A11y ≥95, Perf ≥90) | verify report |
| **4.2** | `docs-task` | Audyt spójności homepage vs GTM docs — checklist | raport |
| **4.3** | Commander HITL | Test z 3–5 użytkownikami + finalna akceptacja (mapa.txt §6 metryki) | Commander |

**Łącznie:** ~16 sesji agenta (Faza 1: 8, Faza 2: 4, Faza 3: 3, Faza 4: 2 + Commander HITL).

### 12.1 Gate między sesjami (anti-chaos)

Po każdej sesji kodu:
- `npm run build` PASS + `npm run typecheck` PASS (AGENTS §8)
- Handoff `docs/operations/handoffs/YYYY-MM-DD-[feature].md`
- Sync `site-map.md §3` jeśli `page.tsx` zmieniony (SR-03) — w 1.0 zrobione upfront
- `strategy-check` skill po każdej sesji strukturalnej (anti-chaos rule 2)

---

*Master brief: 2026-06-29 · Owner: Norbert Wozniak · Status: APPROVED (Commander decisions mapa.txt 2026-06-29) · Input: `plan home page.txt` + `mapa.txt` (Desktop) + GTM pack v2 + audyt 2026-06-25 · Next: sesja 1.0 canon amend*
