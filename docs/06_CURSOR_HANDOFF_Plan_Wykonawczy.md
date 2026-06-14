# CURSOR HANDOFF — PLAN WYKONAWCZY (sztywny)
**Projekt:** Quietforge portfolio → poziom boutique automation studio
**Wersja:** 1.0 · zastępuje plan „FlexGrafik — Tygodnie 1–4" (oparty na przestarzałym audycie)
**Data:** 2026-06-14

> Ten dokument jest instrukcją wykonawczą dla Cursora. Czytaj całość przed startem.
> Sekcja **GARDRAILS (DO NOT DO)** jest obowiązująca — jej zignorowanie cofa projekt.

---

# 0. BRIEFING DLA CURSORA (kontekst obowiązkowy)

## Co istnieje i DZIAŁA (nie ruszać)
Żywa strona to **Quietforge — „AI Systems Architect for small business"**. Już zaimplementowane i DOBRE:
- Pozycjonowanie hero („AI Systems Architect", „systems that code, check and maintain themselves")
- Problem-first cards („Sound familiar?" → 4 problemy → 4 rozwiązania)
- Spearhead (Inbox Killer jako „start here")
- Methoda 5-krokowa (Map → Architect → Build → Verify → Hand over)
- Sekcja Risk & Safety (HITL, EU data, AVG, scoped access, logged, no lock-in) — **powyżej poziomu freelancera**
- Paid discovery (Automation Map €290, kredytowane) — **dojrzały model sprzedaży**
- Ecosystem map (SVG/PDF)
- 4 case studies (struktura partial)
- Blog (1 wpis techniczny)

**Twoja praca NIE polega na przebudowie tego. Polega na dodaniu warstwy DOWODÓW + usunięciu sygnałów amatorskich.**

## Thesis (jedno zdanie kierunku)
> System jest LIVE. Brakuje jego PRZECHWYCENIA i PREZENTACJI. Budujesz pojemniki (czytające z manifestu), którymi klient wypełni realne dowody na końcu.

---

# 1. GUARDRAILS — DO NOT DO (obowiązujące, sztywne)

| # | ZABRONIONE | Powód |
|---|---|---|
| G1 | **Nie przebudowuj Hero** (rewrite pozycjonowania) | Już jest „AI Systems Architect". Cursor-owski plan „Hero Rewrite" bazuje na starym audycie. Dozwolone: jedynie metrics strip + naprawa literówki (patrz zadania). |
| G2 | **Nie zmieniaj CTA na „Book Strategy Call"** | Masz płatny Automation Map €290 = dojrzały model. „Strategy call" to regresja do freelancera. Zachowaj „Book your Automation Map". |
| G3 | **Nie usuwaj Pricing** | Brak ceny = sygnał freelancera. DODAJ widełki (zadanie T3.1). |
| G4 | **Nie ruszaj designu / dark mode / „jak Linear, Vercel"** | Wysoki effort, ryzyko, zero wpływu na sprzedaż. Design jest wystarczający. ZERO przebudowy wizualnej. |
| G5 | **Nie hardkoduj placeholderów w komponentach** | Wszystko do wypełnienia przez klienta → przez **manifest** (sekcja 2). |
| G6 | **Nie wymyślaj liczb/metryk** | W manifestue wszystkie wartości = `null` + komentarz `// FILL`. Liczby wstawi klienta. |
| G7 | **Nie twórz mockupów udających UI** | Sloty na realne screeny. Placeholder = szary box z etykietą, nie stock/fake UI. |
| G8 | **Nie dodawaj animacji „dla animacji"** | Jedyna dozwolona animacja = ilustracja przepływu danych (lead→quote), i to tylko jeśli nie wymaga przebudowy. |
| G9 | **Nie zmieniaj domeny/mail/brandingu w kodzie teraz** | To zadanie T5.1, na samym końcu, po decyzji klienta. |
| G10 | **Nie kasuj istniejących sekcji, które działają** (Problem cards, Method, Safety, spearhead) | Chronimy fundament. |

> Jeśli ktokolwiek z planu „Tydzień 1–4" Cursora każe Ci zrobić coś z G1–G10 — **NIE RÓB**. Ten dokument ma pierwszeństwo.

---

# 2. ARCHITEKTURA: PROOF MANIFEST (wykonaj PIERWSZE)

## Wzorzec
Jeden plik — źródło prawdy dla wszystkiego, co klient uzupełnia. Wszystkie komponenty czytają z niego. Klient na końcu wypełnia **tylko ten plik**.

### T1.0 — Utwórz `src/content/proof.ts`

**Plik:** `src/content/proof.ts` (lub `.json` jeśli wolisz — ale `.ts` lepiej się typuje)

**Spec treści (struktura — uzupełnij typy, wartości = `null` + komentarze):**

```ts
// ============================================================================
// PROOF MANIFEST — single source of truth for all client-fillable proof.
// Cursor: build all proof components to READ from this file. Do NOT hardcode.
// Client: fill every `null` with real data at the end. Every number must be TRUE.
// ============================================================================

export const metrics = {
  repos: null,            // FILL: number of production repos (e.g. 8)
  systemsLive: null,     // FILL: systems running in production
  msgsPerScan: null,     // FILL: messages classified per scan (e.g. "100+")
  wizardSteps: null,     // FILL: configurator steps (e.g. 7)
  dynamicFields: null,   // FILL: dynamic form fields (e.g. "30+")
  workflowSteps: null,   // FILL: agent pipeline steps (e.g. 12)
  integrations: null,    // FILL: number of integrations
  hosting: "EU-hosted VPS · FastAPI + LangGraph",  // example, client to confirm
} as const;

export type VideoSlot = {
  url: string | null;        // FILL: youtube/vimeo/loom embed url
  duration: string;          // set: "90s", "60s", etc.
  poster: string | null;     // FILL: /gratka/xxx.jpg poster image path
  ready: boolean;            // false until client fills url
};

export const videos: Record<string, VideoSlot> = {
  ecosystem:     { url: null, duration: "90s",  poster: null, ready: false }, // "How the whole ecosystem works"
  inboxKiller:   { url: null, duration: "60s",  poster: null, ready: false },
  wizard:        { url: null, duration: "45s",  poster: null, ready: false },
  vcms:          { url: null, duration: "75s",  poster: null, ready: false },
  agentOs:       { url: null, duration: "60s",  poster: null, ready: false },
};

export type ScreenShot = {
  src: string | null;        // FILL: /gratka/xxx.png
  alt: string;               // descriptive alt (accessibility)
  caption: string;           // one line: "what you see + why it matters"
  ready: boolean;
};

export const screens: Record<string, ScreenShot> = {
  vcmsDashboard:   { src: null, alt: "VCMS admin dashboard",          caption: "Where content, forms and flows are governed.", ready: false },
  inboxLanes:      { src: null, alt: "Inbox Killer classification lanes", caption: "Lead · client · invoice · noise, with approval gate.", ready: false },
  agentCards:      { src: null, alt: "Agent cards",                    caption: "Every agent has a role, rules and a review gate.", ready: false },
  workflowMap:     { src: null, alt: "Agent pipeline workflow",        caption: "Plan → code → test → review → approve.", ready: false },
  wizardCheckout:  { src: null, alt: "Self-service configurator checkout", caption: "Configure → see price → pay, no phone call.", ready: false },
  auditLog:        { src: null, alt: "Activity audit log",             caption: "Who did what, when — available on request.", ready: false },
  portalAssistant: { src: null, alt: "Customer-facing AI assistant",  caption: "Qualification assistant in the customer portal.", ready: false },
};

// Case studies: measurement line (honest reframe — see T2.4)
export const caseMeasurements: Record<string, { value: string; ready: boolean }> = {
  inboxKiller: { value: null, ready: false },   // FILL: real metric or capability metric
  agentOs:     { value: null, ready: false },
  salesFunnel: { value: null, ready: false },
  advisory:    { value: null, ready: false },
};

// Pricing tiers (see T3.1) — placeholders null
export const pricing = {
  discovery: { price: "€290", note: "Credited toward your project." },  // known, keep
  singleSystem: { from: null, timeline: null, includes: null },   // FILL
  ecosystem:    { from: null, timeline: null, includes: null },   // FILL
  maintenance:  { from: null, perMonth: true, note: "No lock-in." },   // FILL
};
```

### T1.0 — Definition of Done
- [ ] Plik `src/content/proof.ts` istnieje, eksportuje `metrics`, `videos`, `screens`, `caseMeasurements`, `pricing`
- [ ] Każda wartość do uzupełnienia = `null` z komentarzem `// FILL`
- [ ] TypeScript typy poprawne (brak błędów `tsc`)
- [ ] `ready: boolean` flaga na każdym wideo/screenie (steruje renderem: `false` → placeholder box, `true` → real content)
- [ ] README/`proof.README.md` dodany: instrukcja dla klienta jak wypełnić (patrz sekcja 7)

---

# 3. FAZY I ZADANIA (kolejność wykonania)

> Zasada renderu slotów: jeśli `ready === false` → renderuj **placeholder box** (szary, z etykietą np. `[FILL: ecosystem video — 90s]`), NIE pusty element, NIE fake content. Dzięki temu klient widzi w dev dokładnie, gdzie wstawić dowód.

---

## FAZA 1 — FUNDAMENT (szybki, niskie ryzyko, odblokowuje resztę)

### T1.1 — Naprawa krytycznych literówek i duplikatów `<title>`
**Pliki:** `src/app/layout.tsx` (+ każda strona nadpisująca `metadata`), komponent methody na home.
**Do zrobienia:**
- `„Mappaid first step"` → **„Map · paid first step"**
- Usuń duplikat w `<title>`: `„…| Quietforge | Quietforge"` → jeden brand tag (np. `Inbox Killer — Case study | Quietforge`)
- Przejrzyj każde `metadata.title` / `metadata.description` — unikalne per strona
**Definition of Done:**
- [ ] Zero wystąpień „Mappaid" w repo
- [ ] Zero duplikatów brandu w żadnym `<title>`
- [ ] `metadata` unikalne na każdej podstronie (title + description)

### T1.0 — Proof manifest (patrz sekcja 2 powyżej)

---

## FAZA 2 — POJEMNIKI DOWODÓW (rdzeń projektu)

### T2.1 — Sekcja „System Metrics"
**Pliki:** nowy komponent `src/components/sections/SystemMetrics.tsx` + wstawka na home (nad lub pod Results preview) + ew. na `/results`.
**Spec:**
- Czyta z `proof.ts` → `metrics`
- Render: grid 4–6 kafelków, każdy = duża liczba + krótki label
- Nagłówek sekcji: `// The system, in numbers`
- Lead (hardcoded, EN): „Eight production repos. One supervised ecosystem. Built from scratch — running a real business today, not a pitch deck." *(klient może edytować, gdy liczby gotowe)*
- Jeśli `metrics.x === null` → kafelek pokazuje placeholder `[FILL]`, ale **nie psuje layout**
**Copy EN dla labeli (przykłady — do powiązania z manifestem):**
```
Repos / modules · Inbox throughput · Self-service funnel · Workflow · Safety · Hosting
```
**Definition of Done:**
- [ ] Komponent czyta wyłącznie z `proof.ts`, zero hardcodowanych liczb
- [ ] Sekcja renderuje się poprawnie z pustym manifestem (placeholdery, nie crash)
- [ ] Po wypełnieniu `metrics` → pokazuje realne liczby bez zmiany kodu
- [ ] Responsywne (mobile: 2 kolumny, desktop: 4–6)
- [ ] Sekcja widoczna na home i opcjonalnie `/results`

### T2.2 — Sekcja „Behind the Scenes" (TOP ASSET — VCMS)
**Pliki:** nowy komponent `src/components/sections/BehindTheScenes.tsx` + wstawka na home (po Results) LUB nowa podstrona `/behind-the-scenes`.
**Spec:**
- Nagłówek: `// Behind the scenes`
- Lead (EN, hardcoded): „Most agencies show you a website. Here's the system that runs behind it — the layer that decides why this is a business system, not a page."
- Grid 3–4 screeny czytane z `proof.ts` → `screens` (vcmsDashboard, agentCards, workflowMap, auditLog)
- Każdy screen: obraz + caption + alt
- Slot na 1× Loom (vcms) czytany z `videos.vcms`
- `ready === false` → placeholder box z etykietą
**Definition of Done:**
- [ ] Czyta wyłącznie z manifestu
- [ ] Renderuje poprawnie z pustym manifestem
- [ ] Sekcja istnieje i jest osiągalna z home
- [ ] Captiony z manifestu renderują się pod każdym screenem

### T2.3 — Komponent wideo + sloty (ekosystem + per-moduł)
**Pliki:** nowy komponent `src/components/ui/VideoSlot.tsx` (reusable) + integracja: ecosystem na home, per-module przy case studies / Behind the Scenes.
**Spec:**
- Komponent przyjmuje klucz do `proof.ts → videos[key]`
- `ready === false` → placeholder box: `[FILL: <key> video — <duration>]` + poster slot
- `ready === true` → embed (youtube/vimeo/loom) z lazy-load + poster
- Lazy: `loading="lazy"`, nie ładuj wideo dopóki nie w viewport (performance)
- Dostępność: tytuł + przycisk „Watch", nie autoplay
**Definition of Done:**
- [ ] Komponent reusable, czyta z manifestu
- [ ] Placeholder i real embed działają poprawnie
- [ ] Lazy-load (LCP nie uderzony)
- [ ] Slot `videos.ecosystem` osadzony na home (widoczny, nad foldem lub tuż pod — patrz T3.0)

### T2.4 — Standaryzacja Case Studies (wszystkie 4 do jednego szablonu)
**Pliki:** szablon komponentu `src/components/casestudy/CaseStudyLayout.tsx` + refaktor 4 stron w `/results/*`.
**Struktura docelowa (jednolita dla każdego case):**
1. **Context / Problem** — konkretny ból
2. **Architecture** — diagram (już masz SVG ✓ — zachowaj)
3. **Build** — co wdrożono (moduły, logika)
4. **Result** — realny efekt LUB capability metric (czytane z `caseMeasurements[key]`)
5. **Stack** — technologie (FastAPI, LangGraph, VPS, Workspace, Make/Zapier…)
6. **Proof** — 1 screen (z manifestu) + 1 video slot (z manifestu)
7. **Measurement line** — czytana z `caseMeasurements[key]`
**Do zrobienia:**
- Refaktor 4 istniejących stron (`inbox-killer`, `agent-orchestrator`, `sales-funnel`, `advisory-modernisation`) do szablonu
- Zachowaj istniejące treści/context/diagramy — reorganizuj, nie kasuj
- Measurement line: zostaw `null` w manifestie (klient wstawi); komponent pokazuje placeholder, NIE stary hedging („a few hours", „to be quantified" → USUŃ z kodu, zastąp slotem z manifestu)
**Definition of Done:**
- [ ] Wszystkie 4 case studies mają identyczną strukturę (7 sekcji)
- [ ] Zero hardcoded hedgingu („a few hours", „to be quantified", „once live") w kodzie — zastąpione slotami manifestu
- [ ] Każdy case ma 1 screen slot + 1 video slot (z manifestu)
- [ ] Istniejące diagramy SVG zachowane i osadzone
- [ ] Stack wymieniony w każdym case
- [ ] Render poprawny z pustym manifestem

---

## FAZA 3 — KONWERSJA

### T3.0 — Ecosystem video na home (widoczność)
**Uwaga:** To NIE jest osobny build — to zasada placementu. Slot `videos.ecosystem` (z T2.3) musi być osadzony **widocznie na home** (tuż pod hero/problem cards LUB w sekcji „Live proof" obok ecosystem map). Nie schowany na końcu.
**Definition of Done:**
- [ ] Ecosystem video slot widoczny w górnej połowie home (powyżej foldu Results)
- [ ] `ready === false` → placeholder jasno komunikuje „90s overview coming"

### T3.1 — Sekcja Pricing (widełki projektowe)
**Pliki:** nowa sekcja `src/components/sections/Pricing.tsx` + nowa podstrona `/pricing` (lub sekcja na home nad CTA).
**Spec — 4 poziomy (czytane z `proof.ts → pricing`):**
1. **Automation Map** — `€290` (known, hardcoded OK), note: „Credited toward your project."
2. **Single System Build** — `from €—` (null → FILL), timeline, includes (1 moduł live + handover)
3. **Ecosystem / Multi-System** — `from €—` (null → FILL), timeline, includes (2–3 moduły + Agent OS + AVG/HITL)
4. **Maintenance** — `from €—/mc` (null → FILL), note: „No lock-in."
**Copy lead (EN, hardcoded):** „Start with a paid Automation Map. Then choose a build that fits the size of the problem — not the size of a retainer."
**CTA na każdym:** → Book Automation Map (kwalifikacja przez discovery; NIE „Book Strategy Call").
**Definition of Done:**
- [ ] Sekcja czyta widełki z manifestu (`from` = null → placeholder, `discovery` hardcoded)
- [ ] 4 poziomy wyraźne, z „co wchodzi" dla każdego
- [ ] CTA → `/book-discovery` na każdym (nie „strategy call")
- [ ] „from €X" formatowanie (klient wstawi liczby)
- [ ] Responsywne

### T3.2 — Solution pages (4 produkty, jednolita struktura)
**Pliki:** refaktor `/solutions/*` (inbox-killer, sales-funnel, web-upgrade, lead-magnet-game).
**Struktura docelowa (per Solution page):**
1. **Problem** — 1 zdanie bólu
2. **System** — co dostajesz (3–4 punkty)
3. **Effect** — before/after LUB 3 bullety rezultatu
4. **Proof** — 1 screen + (opcj.) 1 Loom + link do pełnego case study
5. **Price from** — link do Pricing (`from €X`)
6. **CTA** — Book Automation Map
**Definition of Done:**
- [ ] Wszystkie 4 Solution pages mają identyczną strukturę (6 sekcji)
- [ ] Każda ma screen slot + link do powiązanego case study
- [ ] Każda ma Price-from + CTA → discovery
- [ ] Istniejące treści zachowane (reorganizacja, nie kasowanie)

---

## FAZA 4 — GŁĘBIA / ZAUFANIE

### T4.1 — Trust / Safety page (podniesienie dla klientów regulowanych)
**Pliki:** nowa podstrona `/trust` (lub wzmocnienie istniejącej sekcji Safety) + link z home/nav.
**Spec:**
- Wynieś istniejącą sekcję Risk & Safety na mocniejszą stronę/sekcję
- Nagłówek: `// Safe enough to hand your inbox to`
- Pozycjonowanie (EN, hardcoded): „AI in a real business should reduce risk, not add it. Every system is built to survive a small business owner's worst week — and a regulator's question."
- Elementy (masz większość — zgrupuj): HITL on every send/publish/deploy · service accounts, scoped permissions · start on test inbox · EU data, scoped access, revocable · logged & auditable · AVG/DPA · no lock-in
- Wyróżnij: „For ZZP & small businesses in NL — services, e-commerce, advisory, regulated."
**Definition of Done:**
- [ ] Strona/sekcja Trust istnieje, osiągalna z nav
- [ ] Wszystkie 7 elementów bezpieczeństwa obecnych
- [ ] Odniesienie do AVG/DPA (już w advisory case) widoczne
- [ ] Brak duplikacji sprzecznej z istniejącą sekcją Safety na home (jedna wersja prawdy)

### T4.2 — Founder page „Why I built my own system"
**Pliki:** nowa/rozbudowana `/founder` (lub `/about`).
**Spec:**
- Nagłówek: `// Why I built my own system`
- Zdjęcie slot (`screens` lub nowy `founder.portrait` w manifestue — null → placeholder)
- Krótki clip slot (`videos.founder` — opcj., null)
- Tekst (EN, ramowo — klient dopracuje): historia samouk → budowa ekosystemu → rozumienie ryzyka
- **ZASADA G-copy:** NIE używaj słowa „samouk/self-taught" jako pozycjonowania na stronie (brzmi amatorsko). Ramowo: „I came up through practice — a dozen real jobs across industries. For the last few years I've built a live multi-agent ecosystem that runs a real business end to end." (Klient decyduje o finalnym tonie.)
**Definition of Done:**
- [ ] Strona Founder istnieje, osiągalna z nav/footer
- [ ] Slot na zdjęcie + (opcj.) wideo z manifestu
- [ ] Brak słowa „samouk" w finalnym copy pozycjonującym (klient dostaje ramę, nie to hasło)
- [ ] Link do ecosystem map + case studies

---

## FAZA 5 — POLISH (na końcu)

### T5.0 — Microcopy / hedging sweep
**Pliki:** całe `/src`.
**Do zrobienia:** przeszukaj repo pod kątem hedgingu w claimach: „maybe", „probably", „should", „a few", „estimate ~", „to be quantified" → usuń LUB przenieś do manifestu (jako `null`).
**Definition of Done:**
- [ ] grep po repo: zero hedgingu w claimach hardcoded
- [ ] Wszystkie linie pomiarowe czytane z manifestu

### T5.1 — Brand consistency (PO decyzji klienta — na końcu)
**Pliki:** `layout.tsx`, `metadata`, `next.config`, env, komponenty z nazwą marki.
**Do zrobienia (po decyzji klienta Quietforge vs Flexgrafik):**
- Jedna nazwa marki na całej powierzchni
- Własna domena (nie `*.vercel.app` na docelowej produkcji) — konfiguracja DNS/deploy
- E-mail na własnej domenie
- Favicon, OG image spójne
**Definition of Done:**
- [ ] Zero rozjazdu domena/mail/brand
- [ ] Własna domena skonfigurowana
- [ ] Favicon + OG image obecne i spójne
- [ ] **CZEKAJ na decyzję klienta przed startem tego zadania**

### T5.2 — QA Gate pass
**Patrz sekcja 6 (Acceptance).** Cursor wykonuje self-audit przed zgłoszeniem „gotowe".

---

# 4. KOLEJNOŚĆ WYKONANIA (rekomendowana dla Cursora)

```
T1.0 (manifest)  ──┐
T1.1 (literówki) ──┼─► FAZA 1 (odblokowanie)
                   │
T2.1 (metrics)  ───┤
T2.3 (video comp) ─┤
T2.2 (behind scenes)┼─► FAZA 2 (pojemniki dowodów) ← RDZEŃ
T2.4 (case studies)─┘
                   │
T3.0 (video placement)┐
T3.1 (pricing) ───────┼─► FAZA 3 (konwersja)
T3.2 (solution pages)─┘
                   │
T4.1 (trust) ──────┐
T4.2 (founder) ────┴─► FAZA 4 (głębia/zaufanie)
                   │
T5.0 (hedging sweep)┐
T5.1 (brand) ───────┼─► FAZA 5 (polish)
T5.2 (QA gate) ─────┘
```

> Cursor: realizuj FAZY po kolei. Wewnątrz fazy — zadania mogą być równoległe. NIE zaczynaj Fazy 3 przed ukończeniem Fazy 2 (pojemniki muszą istnieć, zanim wstawisz w nie odnośniki).

---

# 5. KRYTERIA PRZYJĘCIA — Definition of Done PROJEKTU

> Przed zgłoszeniem „gotowe", Cursor przepuszcza całość przez tę listę (self-audit).

## Dowody / manifest
- [ ] `src/content/proof.ts` istnieje, wszystkie `null`-sloty mają `// FILL` + komentarz
- [ ] Żaden komponent nie hardcoduje liczb / URL-i wideo / ścieżek screenów (wszystko z manifestu)
- [ ] Każdy slot `ready === false` renderuje placeholder box (nie crash, nie fake content)
- [ ] Sekcja System Metrics istnieje (T2.1)
- [ ] Sekcja Behind the Scenes istnieje (T2.2)
- [ ] Komponent VideoSlot reusable (T2.3)
- [ ] Ecosystem video slot widoczny na home, górna połowa (T3.0)
- [ ] 4 case studies w jednolitym szablonie 7-sekcyjnym (T2.4)

## Konwersja
- [ ] Sekcja/Podstrona Pricing z 4 poziomami (T3.1)
- [ ] 4 Solution pages w jednolitym szablonie 6-sekcyjnym (T3.2)
- [ ] CTA = „Book Automation Map" wszędzie (ZERO „Strategy Call")
- [ ] Z home → cena + demo w ≤2 kliknięciach per produkt

## Głębia
- [ ] Trust/Safety page istnieje, osiągalna z nav (T4.1)
- [ ] Founder page istnieje (T4.2), zero „samouk" w copy pozycjonującym

## Polish
- [ ] Zero „Mappaid" w repo
- [ ] Zero duplikatów brandu w `<title>`
- [ ] Zero hedgingu w hardcoded claimach
- [ ] Mobile: wszystkie nowe sekcje czytelne na telefonie
- [ ] Brak dead links (szczególnie `/gratka/` PDF/SVG)
- [ ] `tsc` / build przechodzi bez błędów
- [ ] LCP nie pogorszone przez wideo (lazy-load)

## Guardrails (weryfikacja)
- [ ] Hero NIE przebudowane (tylko metrics strip + literówka)
- [ ] Design NIE zmieniony (zero dark-mode rebuild, zero „Linear/Vercel" reskin)
- [ ] Pricing NIE usunięte (dodane)
- [ ] Istniejące działające sekcje (Problem cards, Method, Safety, spearhead) NIE skasowane

---

# 6. CO WYPEŁNIA KLIENT (po zakończeniu Cursora) — instrukcja

> Cursor: dołącz tę sekcję jako `proof.README.md` przy manifeście.

**Klient wypełnia TYLKO `src/content/proof.ts`** (oraz ew. finalne copy tekstowe). Nic poza manifestem nie wymaga zmiany kodu, aby dowody pojawiły się na stronie.

**Checklista wypełnienia:**
1. `metrics.*` — wpisz PRAWDZIWE liczby (repos, msgsPerScan, wizardSteps…). Każda musi być prawdziwa.
2. `videos.*.url` — wklej embed URL (YouTube/Vimeo/Loom) + ustaw `ready: true` + `poster`.
3. `screens.*.src` — wgraj PNG do `/public/gratka/`, wpisz ścieżkę + ustaw `ready: true`.
4. `caseMeasurements.*.value` — wpisz realną metrykę LUB capability metric + `ready: true`.
5. `pricing.*.from` — wpisz widełki („€1500", „€6000"…) + timeline + includes.

Po wypełnieniu → build → deploy. Wszystkie sloty zamienią się z placeholderów na realne dowody automatycznie.

---

# 7. PRIORYTET #1 (jeśli Cursor ma zacząć od JEDNEJ rzeczy)

**T1.0 (manifest) → T1.1 (literówki) → T2.1 (System Metrics).**

Manifest odblokowuje wszystko. Literówki to 5-minutowy sygnał jakości. System Metrics to najszybszy przeskok „obietnica → dowód", nieblokowany ciężkim capture'm. Po tych trzech strona już ma realny delta; reszta to pogłębianie.
