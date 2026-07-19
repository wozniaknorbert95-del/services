# Burza mózgów — Home IA (research-backed) · 2026-07-19

**Tryb:** sam research + rekomendacje specjalistów (nie pytanie Dowódcy o preferencje).  
**Wejście:** [`2026-07-19-home-map-source-prod-audit.md`](./2026-07-19-home-map-source-prod-audit.md) (prod = źródła; chaos = gęstość IA).  
**Zasada:** fakty z badań / teardownów / wzorców stron z jasną architekturą konwersji — nie zgadywanie.

---

## Panel „zawodowców” (role w tej analizie)

| Rola | Za co odpowiada | Źródła faktów |
|------|-----------------|---------------|
| **A. Conversion Architect (B2B SaaS)** | sekcje, CTA, story arc | CopyCrest 500-homepage study; Sextant Story Arc; Canvas Builder 7–9 sections |
| **B. Buyer-language / JTBD** | jeden router = ból klienta | Devqube problem-first; GenesysGrowth; LOW/CODE homepage-as-routing |
| **C. Systems / automation services marketer** | porównywalne strony | [floworks.dev](https://floworks.dev/), [thecrmshop.com](https://www.thecrmshop.com/), StoryBrand B2B playbook |
| **D. Brand / dogfood strategist** | Quietforge ↔ FlexGrafik | PRAGMA/Brand9 dogfood pattern; dogfooding literature |
| **E. E-commerce / product-proof UX** | proof visual + metrics | Waveup above-fold; SaaS hero product screenshot norms |

---

## Q1 — Jeden router: który trafia w ból?

### Kandydaci

| Router | Mówi językiem… | Ryzyko |
|--------|----------------|--------|
| **PainGrid** | bólu operacyjnego (quotes, site, traffic, inbox) | — |
| **FeaturedStrip** | ścieżek oferty (Map / Results / How) | to nie ból — to menu startowe |
| **IntentRouter** | modułów / repo-outcome | taksonomia produktu (jak Salesforce teardown: site map ≠ persuasion) |

### Fakty

1. **CopyCrest (500 B2B SaaS):** top converters = outcome → audience → **jedna** next action; stacking wyborów = cognitive load.  
2. **Sextant Story Arc:** najpierw *status quo pain*, potem solution — strony, które skaczą od razu do katalogu, tracą Mirror Test.  
3. **Devqube 2026:** Page B (opis bólu klienta) > Page A (lista features) — rozpoznanie „exactly!” musi poprzedzić ofertę.  
4. **Salesforce SignalScore teardown:** organizacja wokół produktów/kategorii zamiast buyer outcomes = niski persuasion score.  
5. **LOW/CODE:** homepage = routing po języku buyera, nie org chart.

### Werdykt specjalistów A+B

**Zostaje tylko PainGrid.**

- FeaturedStrip = drugi „start menu” → **wyciąć z home** (Map już jest L3 w hero; Results/How w nav).  
- IntentRouter = katalog modułów → **przenieść na `/solutions/` lub `/results/`** (tam jest właściwe miejsce na 6 kart).

**Uzasadnienie w 1 zdaniu:** cold SMB pyta „czy to o *moim* wycieku?”, nie „który z 6 repo mnie interesuje?”.

---

## Q2 — Dual brand: pełna sekcja czy nie?

### Fakty

1. Cold buyer ma **5 s** na decyzję „czy ja tu jestem?” (CopyCrest / multiple hero studies) — druga marka w osobnym H2 kosztuje uwagę.  
2. **Dogfood pattern (PRAGMA / Brand 9):** proof żyje jako *live operating company*, ale na about/proof — nie jako równoległy brand chapter na pierwszym scrollu.  
3. **floworks.dev:** jedna marka, live workflow w hero — zero dual-brand education.  
4. Quietforge już ma **1-liner w hero** (`Quietforge deploys · FlexGrafik is the live proof`) — to wystarcza powyżej foldu.

### Werdykt specjalisty D (+ A)

**Usuń pełną sekcję `DualBrandBand` z home.**

- Zostaw 1-liner w hero.  
- FlexGrafik jako **dowód w Spearhead** (live URL / screenshot) + link „See live systems”.  
- Pełna historia dual-brand → `/about/` lub `/founder/` / results owner-ecosystem (gdzie buyer już jest warm).

**Uzasadnienie:** dogfood buduje zaufanie; **edukacja dwóch marek na home buduje confusion** u cold traffic.

---

## Q3 — SystemMetrics osobno czy w Spearhead? (e-commerce / proof UX)

### Fakty

1. High-converting SaaS: **jeden** product proof block = screenshot + outcome bullets + thin proof numbers (Waveup: above-fold proof density; Canvas: features-as-outcomes, nie spec sheet).  
2. Osobny H2 „Verified proof at a glance” po „Wizard Cash Engine…” = **dwa razy to samo job** (proof).  
3. **floworks:** metrics („4–8 weeks”, „fixed scope”) wklejone *obok* live workflow — nie jako osobny rozdział.  
4. E-commerce principle: jedna „product stage” na viewport story — nie katalog KPI.

### Werdykt specjalisty E (+ C)

**Scal `SystemMetrics` do `SpearheadSpotlight` (1 H2, 1 blok).**

- 3–4 liczby jako strip pod screenshotem / obok bullets.  
- Bez drugiego tytułu sekcji.

---

## Q4 — „Why it works” — zostaje

### Fakty

1. **StoryBrand B2B playbook:** brak sekcji *Plan* („jak to działa / dlaczego to działa”) = częsta przyczyna słabego close u services.  
2. Complex / high-ticket offers: long-form z process + risk removal konwertuje lepiej niż short (Clique Studios: 5–10 screens dla high-value).  
3. Quietforge sprzedaje **paid Map + supervised systems** — buyer musi zobaczyć metodę i HITL/safety zanim zapłaci €290.

### Werdykt

**KEEP — i wzmocnij jako jedną sekcję „Why / How it works”.**

- `HowIWork` (Map → … → Handover) = rdzeń.  
- Karty safety z Trust (human approve / EU / logs) = **w tej samej sekcji** lub bezpośrednio pod nią jako jeden blok „Why it’s safe” — **bez** osobnego H2 „why-this-works” jako trzeciego close.  
- Objections (price/trust/timing) mogą zostać w tej samej strefie trust **albo** tuż przed Pricing.

Nie kasujemy „why it works” — **kasujemy fragmentację** (how + trust + why jako trzy rozdziały).

---

## Q5 — Ile sekcji? (limit z researchu, nie zgadywanie)

### Fakty

| Źródło | Rekomendowany zakres |
|--------|----------------------|
| Canvas Builder (B2B SaaS) | **7–9** sekcji praktyczny sweet spot |
| StoryBrand B2B playbook | ~**8** sekcji mapowanych na framework |
| Clique (high-value services) | long-form OK, ale **każda sekcja musi earn the scroll** |
| CopyCrest | mniej stacking; message architecture > volume |

Obecnie Quietforge: **~13 markerów DOM / 11 H2** → powyżej sweet spot + 3 routery.

### Werdykt specjalistów A+C

**Target: 8 logical sections (≈ 8 H2), nie 13.**

---

## Rekomendowana mapa home (v4.0 — proposal)

```text
1. Hero
   — outcome H1 · audience · dual-brand 1-liner
   — Book Map CTA (primary) + See live systems + WhatsApp
   — proof strip (plain language)
   — LIVE wizard visual (desktop; mobile: after CTA)

2. Pain router (JEDYNY router)
   — PainGrid quote-first → solution pages

3. Live proof (merged)
   — Spearhead Wizard + metrics strip + try wizard
   — Design Intake mention OK (krótko)

4. Honesty gate
   — BuiltVsPlanned compact (4 rows) + link full architecture

5. Why / How it works   ← KEEP (merged how + safety)
   — 5-step method
   — 3 safety cards (approve / EU / logs)
   — thin objections OR move objections to #7

6. Pricing
   — Map Most popular · builds · Managed

7. Final CTA
   — Book Map + sample Map

Chrome: Sticky Book Map (mobile) · nav Results / Solutions / How / Pricing
```

### Co znika z home (dokąd)

| Usuwamy z home | Dokąd |
|----------------|-------|
| DualBrandBand (pełna) | hero 1-liner + /about or /founder |
| FeaturedStrip | hero CTA już pokrywa Map; Results/How w nav |
| IntentRouter | `/solutions/` hub (już ma ladder) |
| SystemMetrics jako osobna sekcja | wklejone w Spearhead |
| Osobny marker `why-this-works` | scalone w §5 Why/How |

### Co zostaje (Twoje twarde wymagania)

| Wymaganie | Status w v4 |
|-----------|-------------|
| EN only | bez zmian |
| Book Map above fold | §1 |
| Pain jako primary recognition | §2 **jedyny** router |
| Why it works | §5 **KEEP** (nawet wzmocnione) |
| Live proof FlexGrafik | §3 Spearhead |
| Honesty / no fake traction | §4 |

---

## Porównanie z stronami „z wynikami” (wzorce, nie kopiuj UI)

| Site | Co robi dobrze | Lekcja dla Quietforge |
|------|----------------|------------------------|
| [floworks.dev](https://floworks.dev/) | 1 brand · live workflow w hero · concrete automations · 3-step process · 1 primary CTA | Skrócić home; proof = live system, nie dual brand chapter |
| [thecrmshop.com](https://www.thecrmshop.com/) | Outcome headline · pain list · **jeden** paid diagnostic entry (Leak Sprint) | Map €290 = ich Sprint; nie rozpraszać 3 routerami |
| CopyCrest top quartile | 1 outcome · 1 CTA · proof mapped to fear | IntentRouter na home = strach „za skomplikowane” |
| StoryBrand services | Plan section obowiązkowa | Why/How zostaje |

---

## Scorecard: obecne vs v4

| Kryterium | Dziś | v4 |
|-----------|------|-----|
| Routers na home | 3 | **1** |
| Dual-brand chapters | 2 (liner + full) | **1** (liner) |
| Proof H2 | 2–3 | **1** merged |
| Why/How | fragmented | **1** merged KEEP |
| Logical sections | ~13 DOM | **7–8** |
| Primary CTA | Book Map | Book Map (bez konkurencji Featured) |

---

## Ryzyka v4 (uczciwie)

| Ryzyko | Mitigacja |
|--------|-----------|
| Featured znika — LinkedIn mirror słabszy | Featured linki zostają w nav + LI Featured nadal wskazuje `/book-discovery/` `/results/` `/how-it-works/` |
| IntentRouter znika z home — warm tech buyer traci shortcut | `/solutions/` + `/results/` w header; Intent może wrócić jako kompakt na results |
| Mniej scroll proof | Spearhead musi być silniejszy wizualnie (już macie screenshot) |

---

## Decyzja do implementacji (bez pytania Ciebie)

**Zatwierdzone przez ten research panel:**

1. **Router = PainGrid only**  
2. **Dual brand = hero 1-liner only** (kill DualBrandBand on home)  
3. **Metrics ⊂ Spearhead**  
4. **Why/How it works = KEEP** (merge HowIWork + safety)  
5. **Home = 8 logical sections** (mapa powyżej)

---

## Następny krok (gdy powiesz „implementuj v4”)

1. Zaktualizować `site-map.md` §3 → **v4.0**  
2. `page.tsx`: usunąć DualBrand, Featured, IntentRouter; merge metrics  
3. Nowy komponent lub merge Trust+How → „WhyItWorks”  
4. Build + mobile smoke fold  
5. Handoff

*Research complete — gotowe do decyzji implementacyjnej.*
