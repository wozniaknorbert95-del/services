# Audyt Quietforge — mapa strony, układ sekcji, UX/UI

**Adres:** https://quietforge.flexgrafik.nl/  
**Data audytu:** 2026-06-25  
**Zakres:** information architecture, mapa strony, kolejność sekcji, UX/UI, ścieżki konwersji  
**Materiały wejściowe:** live crawl strony + załączone kanony: `site-map.md`, `marketing-strategy.md`, `conversion-pipeline.md`, `ui-ux-principles.md`, `README.md`.

---

## 1. Werdykt strategiczny

Quietforge ma mocny fundament: jasne pozycjonowanie „Conversion Systems Architect”, realny proof zamiast fake-logo theatre, dobry rdzeń ofertowy oraz konsekwentny język governance/HITL. To **nie wygląda jak losowy freelancer** — to już idzie w stronę product-company / operator-led consulting.

Ale z perspektywy agencji klasy Google/IBM, główny problem nie leży w braku treści. Problemem jest **nadmiar systemu pokazany zbyt wcześnie i zbyt równorzędnie**.

Obecna strona próbuje udowodnić kompetencję przez ekspozycję całej architektury. Dla technicznego odbiorcy to buduje respekt. Dla właściciela SMB w Holandii może tworzyć efekt:

> „To wygląda imponująco, ale nie wiem jeszcze, co dokładnie mam kliknąć i który problem rozwiążemy jako pierwszy.”

### Ocena ogólna

| Obszar | Ocena | Komentarz |
|---|---:|---|
| Pozycjonowanie | 8.5/10 | Mocne, odróżniające. Dobrze odcina „web designer / chatbot guy”. |
| Dowody / proof | 8.0/10 | Dużo realnego materiału, ale proof jest czasem zbyt techniczny i rozproszony. |
| Mapa strony / IA | 7.0/10 | Struktura logiczna, ale za dużo stron ma podobny priorytet i kilka route’ów jest niedomkniętych. |
| Home section flow | 7.2/10 | Kanonicznie uporządkowane, lecz poznawczo ciężkie. Architektura pojawia się za wcześnie dla SMB. |
| UX/UI clarity | 6.8/10 | Dobry terminal/product vibe, ale za duża gęstość, za wiele CTA i etykiet technicznych. |
| Konwersja | 6.5/10 | Mocne L3, ale Book Discovery obiecuje płatność/slot, a pokazuje formularz enquiry — to krytyczny rozdźwięk. |
| Trust | 8.0/10 | HITL, EU, AVG, proof własnego systemu są mocne. Trzeba wyrównać ceny i statusy. |

**Najważniejszy cel redesignu:** zmienić stronę z „zobacz cały mój system” na „wybierz swój problem → zobacz działający system → zrozum ryzyko i cenę → zrób następny krok”.

---

## 2. Krytyczne problemy do naprawy najpierw

### P0 — niespójność Book Discovery

Na `/book-discovery/` tekst mówi:

- „Pay & pick a slot”
- „Secure your session in under two minutes”
- „Start with a paid Automation Map — €290”

Ale rzeczywisty formularz mówi:

- „Send enquiry — I will reply within 24h”

To jest największy problem konwersyjny. Użytkownik spodziewa się płatnej rezerwacji, a dostaje zwykły formularz kontaktowy. Powstaje dysonans: czy to jest produkt, konsultacja, lead form, czy ręczna kwalifikacja?

**Rekomendacja:** wybrać jeden z dwóch modeli:

1. **Model produktowy:** checkout + kalendarz + krótki intake. Wtedy copy „Pay & pick a slot” zostaje.
2. **Model ręcznej kwalifikacji:** zmienić copy na „Request your Automation Map slot” / „Apply for Automation Map”; jasno powiedzieć, że Norbert odpowiada w 24h i wysyła link do płatności po wstępnej kwalifikacji.

Nie mieszać obu.

---

### P0 — niespójność cen między stronami

W live crawl widać rozjazdy:

| Oferta | Solutions hub | Pricing page | Home pricing |
|---|---:|---:|---:|
| Inbox Killer | from €1,200 | €1,200–€4,800 | — |
| Sales Funnel | from €1,800 | €2,400–€6,500 | — |
| Web Upgrade | from €2,400 | €1,800–€5,500 | — |
| Managed Automation | from €99/mo | €349–€890/mo | Maintenance from €290/mo |

To obniża trust bardziej niż brak animacji lub mniej dopracowany layout. Jeśli klient widzi trzy ceny miesięcznej opieki, zaczyna podejrzewać, że zakres jest płynny.

**Rekomendacja:** jeden centralny pricing matrix i jedna nomenklatura:

- Automation Map: €290
- Inbox Killer: €1,200–€4,800
- Web Upgrade: €1,800–€5,500
- Sales Funnel / Wizard Cash Engine: €2,400–€6,500
- Lead Magnet Game: €2,200–€6,500, jeśli zostaje osobną ofertą
- Managed Automation: wybrać jeden entry point, np. `from €290/mo` albo `€349–€890/mo`; nie pokazywać `€99/mo`, jeśli to nie jest aktualna oferta.

---

### P0 — Sales Funnel i Web Upgrade są semantycznie zamienione w `/solutions/`

Na hubie `/solutions/`:

- **Sales Funnel** opisuje „A website that finally earns its keep” — to brzmi jak Web Upgrade.
- **Web Upgrade** opisuje „Quotes, bookings and qualifying — handled. A 3–5 step configurator” — to brzmi jak Sales Funnel / Wizard Cash Engine.

Na stronach szczegółowych jest odwrotnie:

- `/solutions/sales-funnel/` = Wizard Cash Engine, quotes, pricing, checkout.
- `/solutions/web-upgrade/` = website wired for enquiries.

**Rekomendacja:** natychmiast poprawić opisy i ceny w `/solutions/`, bo to jest główna strona wyboru oferty.

---

### P1 — `/results/whatsapp-discovery-pilot/` jest za cienki jak na publiczny case

Route jest w sitemapie, ale treściowo ma tylko H1 i „Video walkthrough”. Skoro sitemap wystawia tę stronę publicznie, powinna spełniać minimum case-study:

- Problem
- System
- Flow 6–8 pytań
- Scoring / output brief
- HITL gate
- Status: pilot
- CTA

Albo: usunąć z sitemap/nav do czasu uzupełnienia.

---

### P1 — strona Founder ma placeholder video i słowo „agency”

`/founder/` mówi: „I built it because I needed it to run my own agency.” To konfliktuje z pozycjonowaniem, które aktywnie odcina „agency/freelancer”. Lepiej:

> „I built it because I needed it to run my own business.”

Dodatkowo placeholder „Video is in production” wygląda jak unfinished page. Jeśli video nie ma, sekcja powinna być zamieniona na:

- 3-min written walkthrough,
- diagram founder stack,
- albo „Read the production proof” bez ramki video.

---

## 3. Audyt mapy strony

### 3.1 Obecny live sitemap

W sitemapie jest 24 URL-e:

**Core:**

- `/`
- `/solutions/`
- `/pricing/`
- `/how-it-works/`
- `/results/`
- `/book-discovery/`
- `/founder/`
- `/about/`
- `/trust/`
- `/legal/`
- `/blog/`

**Solutions:**

- `/solutions/inbox-killer/`
- `/solutions/web-upgrade/`
- `/solutions/sales-funnel/`
- `/solutions/lead-magnet-game/`
- `/solutions/managed-automation/`

**Results:**

- `/results/inbox-killer/`
- `/results/agent-orchestrator/`
- `/results/sales-funnel/`
- `/results/lead-magnet/`
- `/results/jadzia-coi/`
- `/results/advisory-modernisation/`
- `/results/owner-ecosystem/`
- `/results/whatsapp-discovery-pilot/`

### 3.2 Problem IA: zbyt wiele stron ma podobną wagę

W XML sitemap prawie wszystko ma `priority 0.8` i `weekly`. Z punktu widzenia SEO to nie jest katastrofa, ale z punktu widzenia architektury informacji pokazuje brak hierarchii. Nie każda strona powinna być traktowana jak money page.

**Proponowana hierarchia:**

| Tier | Rola | Strony |
|---|---|---|
| Tier 0 | Główne wejście | `/` |
| Tier 1 | Decyzja zakupowa | `/solutions/`, `/results/`, `/pricing/`, `/how-it-works/`, `/book-discovery/` |
| Tier 1 trust | Wsparcie decyzji | `/founder/`, `/trust/` |
| Tier 2 solution | Wybór problemu | 5 stron `/solutions/*` |
| Tier 2 proof | Dowód | 7–8 stron `/results/*`, ale tylko gotowe case’y publicznie |
| Utility | Nie sprzedażowe | `/about/`, `/legal/`, `/blog/` |

### 3.3 Rekomendowana mapa strony dla użytkownika

Header powinien prowadzić użytkownika przez decyzję, nie przez strukturę repozytoriów.

**Rekomendowany header:**

1. **Systems & Results** → `/results/`  
   Lepsze niż samo „Systems”, bo SMB szybciej rozumie „Results”.
2. **Solutions** → dropdown  
   - Inbox Killer — Start here
   - Web Upgrade
   - Sales Funnel / Wizard Cash Engine
   - Lead Magnet Game
   - Managed Automation
3. **How It Works** → `/how-it-works/`
4. **Pricing** → `/pricing/`
5. **Founder** lub **Founder’s System** → `/founder/`
6. CTA: **Book Automation Map** → `/book-discovery/`

**Footer:** może mieć pełniejszą mapę: Results, Trust, About, Blog, Legal, artefacts.

### 3.4 Co zrobić z `/about/` i `/founder/`

Obie strony częściowo pełnią podobną funkcję: „kim jest Norbert i dlaczego mu wierzyć”.

**Rekomendacja:**

- Header: tylko `/founder/` jako story + system proof.
- Footer: `/about/` jako formalne about/contact/profile.
- Dodać mocne linkowanie między nimi:
  - Founder → About: „Formal profile & company proof”
  - About → Founder: „See the founder system”

---

## 4. Audyt home page — kolejność sekcji

Obecny home zgodnie z `site-map.md` ma zasadniczo taki układ:

1. Hero
2. LOS architecture
3. Built vs planned
4. Repo router
5. Pain grid
6. Spearhead / Wizard Cash Engine
7. Ecosystem map
8. Metrics
9. Results teaser
10. Behind the scenes / Governance
11. How I work
12. Trust & objections
13. Pricing
14. Final CTA

### 4.1 Co działa

- Strona ma logiczny, pełny proof stack.
- Nie udaje agencji z fake logos.
- Bardzo dobrze pokazuje „live vs planned”.
- Repo router jest ciekawą koncepcją: pełna widoczność + intent filter zamiast ukrywania.
- Ceny i Automation Map są obecne, czyli nie ma klasycznego „contact for price”.
- Trust/HITL/AVG/EU jest realnym wyróżnikiem.

### 4.2 Co nie działa wystarczająco dobrze

#### Problem A — Architektura pojawia się zanim użytkownik poczuje swój problem

Po hero użytkownik od razu dostaje Living Operating System, 6 layers, 8 repos, Jadzia, VCMS, Agent OS, MCP, OpenRouter itd. To imponujące, ale SMB buyer często potrzebuje najpierw:

1. „Tak, to mój problem.”
2. „Jaki efekt mogę dostać?”
3. „Czy to jest realne?”
4. „Jak to jest bezpieczne?”
5. „Ile kosztuje pierwszy krok?”

Obecny układ zbyt szybko przechodzi do „jak zbudowana jest maszyna”.

#### Problem B — za dużo równoważnych proofów

Home pokazuje:

- LOS
- built/planned
- 8 repos
- pain grid
- wizard
- ecosystem
- metrics
- results
- governance
- workflow
- trust
- pricing

Każdy z tych bloków jest sensowny osobno. Razem tworzą efekt bardzo długiego pitch decku. Użytkownik może nie wiedzieć, który dowód jest najważniejszy.

#### Problem C — CTA są liczne i różnego typu

Na home pojawiają się m.in.:

- Book Automation Map
- WhatsApp
- See systems
- Try wizard
- See proof
- Read case study
- Download LOS diagram
- Download sample
- See Trust details

To nie jest złe jako cała strona, ale w danym viewportcie trzeba pilnować jednej dominującej akcji.

---

## 5. Rekomendowany home flow — wersja „agency-grade”

Są dwie możliwe ścieżki.

### Opcja A — konserwatywna, zgodna z obecnym `site-map.md`

Nie zmieniać kolejności 14 sekcji, ale zmienić intensywność i rolę pierwszych bloków.

#### 1. Hero — uprościć decyzję

**Cel:** użytkownik ma w 5 sekund wiedzieć: kto, dla kogo, jaki efekt, co kliknąć.

Obecny kierunek jest dobry, ale hero powinno mieć mniej proof metadanych. Proponowany układ:

- Eyebrow: `// Conversion Systems Architect for NL small business`
- H1: `Conversion systems that qualify leads, reduce admin and keep humans in control.`
- Lead: 1–2 zdania, bez stack-jargonu.
- Proof strip: `Live wizard · 8-repo governance · HITL approval · EU-hosted`
- CTA primary: `Book Automation Map`
- CTA secondary: `See live systems`
- Tertiary text link: `Ask a quick question on WhatsApp`

Nie robić z WhatsApp drugiego pełnego primary na desktopie. Na mobile WhatsApp może być sticky primary, zgodnie z kanonem.

#### 2. LOS architecture — zamienić z pełnej mapy na teaser decyzyjny

Zostawić sekcję jako #2, ale nie pokazywać całego systemu jako pierwszego dużego bloku edukacyjnego. Pokazać tylko:

- Sense → Decide → Act → Learn
- „AI proposes, human approves”
- 3 outcomes: fewer lost leads, less manual admin, safer changes
- Link: `See full architecture`

Pełna sześciowarstwowa mapa powinna być dostępna, ale nie musi dominować pierwszej części home.

#### 3. Built vs Planned — bardzo dobrze, skrócić tabelę

Obecna tabela jest mocnym honesty gate. Ale na home tabela 8 modułów może być za ciężka. Proponuję:

- 3 status pills: `Live`, `Partial`, `Planned`
- 4 najważniejsze rows domyślnie
- `Expand all 8 systems` / link do owner ecosystem

#### 4. Repo router — utrzymać, ale tłumaczyć językiem biznesowym

Karty repo powinny mieć tytuł techniczny jako drugorzędny, a główny outcome jako pierwszy.

Przykład:

- Obecnie: `Chief Operating Intelligence (COI)`
- Lepiej: `Know which leads/orders need action first`  
  sublabel: `Jadzia COI · Think + Act`

#### 5. Pain grid — powinien działać jak „choose your leak”

Każdy pain card powinien mieć:

- problem w języku klienta,
- koszt problemu,
- system fix,
- jeden link.

Przykład:

> **Quotes by hand, all day**  
> You answer the same questions repeatedly before knowing if the lead is serious.  
> Fix: Wizard Cash Engine → structured quote, price, checkout.

#### 6–10. Proof stack — nadać hierarchię

Spearhead Wizard powinien być proof #1. Governance/VCMS proof #2. Results teaser proof #3.

Nie każdy proof powinien mieć tę samą wagę wizualną. Wprowadzić hierarchię:

- Spearhead panel: Wizard Cash Engine
- Secondary panel: VCMS governance
- Compact cards: Results
- Deep links: individual case studies

#### 11–14. Process, trust, pricing, CTA — dobry koniec

Ta część jest strategicznie poprawna. Trzeba tylko wyrównać pricing i Book Discovery.

---

### Opcja B — odważna, bardziej konwersyjna dla SMB

Jeśli można złamać obecny lock w `site-map.md`, rekomendowany flow byłby taki:

1. Hero
2. Pain grid / choose your leak
3. Outcome proof strip
4. Wizard Cash Engine spearhead
5. Built vs Planned honesty gate
6. Results teaser
7. Repo / system router
8. LOS architecture
9. Governance / behind the scenes
10. How I work
11. Trust & objections
12. Pricing
13. Final CTA

Dlaczego? Bo SMB nie kupuje LOS. SMB kupuje ulgę: mniej maili, mniej ręcznego quoting, więcej kwalifikowanych leadów. LOS jest powodem, dla którego można Ci zaufać — ale powinien przyjść po rozpoznaniu problemu i po pierwszym konkretnym dowodzie.

---

## 6. UX/UI — konkretne uwagi

### 6.1 Gęstość informacji

Quietforge ma silny styl terminal/product-company, ale obecnie zbyt wiele bloków ma podobną wagę. Sekcje z kodem, tabelami, diagramami, statusami i badge’ami pojawiają się jedna po drugiej.

**Rekomendacje:**

- Każda sekcja = jedna decyzja użytkownika.
- Maksymalnie 1 duży diagram na 2–3 sekcje.
- Tabele na home skracać; pełne tabele przenosić do `/results/owner-ecosystem/`.
- Używać progresywnego disclosure: `Summary first, architecture after click`.

### 6.2 Jargon i nazewnictwo

Dla buyer-facing pages terminy typu `Jadzia COI`, `VCMS`, `Agent OS`, `MCP`, `OpenRouter`, `LangGraph` powinny być drugorzędne.

**Wzorzec:**

> Business outcome first. System name second. Stack third.

Przykład:

- Zamiast: `Jadzia COI — Chief Operating Intelligence`
- Lepiej: `A weekly operating brief from your leads, orders and inbox`  
  `Powered by Jadzia COI`

### 6.3 CTA hierarchy

Zasada z `ui-ux-principles.md` jest dobra: jeden primary per viewport. Trzeba ją bardziej egzekwować.

**CTA hierarchy:**

- Primary: `Book Automation Map`
- Secondary: `See results` / `See systems`
- Tertiary: `Ask on WhatsApp`
- L2 demo: `Try the wizard` tylko w blokach wizard/proof, nie jako konkurencja do bookingu w każdej sekcji.

Na mobile: sticky WhatsApp primary może działać, ale niech Book będzie secondary i niech nie przykrywa treści.

### 6.4 Karty i gridy

Case/result cards powinny być maksymalnie skanowalne:

1. Problem
2. System
3. Effect
4. Status: Live / Partial / Pilot
5. Link

Obecne karty często zaczynają się od kontekstu i stacku. To jest dobre na detail page, ale na hubie trzeba skrócić.

### 6.5 Tables on mobile

Pricing i Built vs Planned mają tabele. Na mobile tabele często stają się ciężkie poznawczo. Zalecenie:

- Pricing: cards zamiast tabeli na mobile.
- Built vs Planned: accordion / status cards.
- Results: filters + compact cards.

### 6.6 Accessibility i trust polish

Brak pełnego testu wizualnego w tym audycie, ale z treści i kanonu wynika, że trzeba szczególnie pilnować:

- focus states na kartach i CTA,
- kontrast amber/dark,
- alt text diagramów,
- `prefers-reduced-motion`,
- tap targets 44px,
- brak horizontal scroll dla tabel.

---

## 7. Audyt głównych route’ów

### `/` — Home

**Rola:** landing + proof stack.  
**Status:** mocna, ale zbyt ciężka.

**Najważniejsze poprawki:**

- uprościć LOS above fold,
- ograniczyć liczbę równorzędnych CTA,
- wyraźniej pokazać „start here” dla trzech typów problemu,
- pricing i Book Discovery wyrównać.

---

### `/solutions/`

**Rola:** wybór problemu/oferty.  
**Status:** dobra struktura produktowa, ale krytyczna niespójność Sales Funnel vs Web Upgrade.

**Poprawki:**

- poprawić zamienione opisy,
- pokazać rekomendowaną ścieżkę: `Start here → Grow → Keep running`,
- dodać „Not sure? Automation Map” jako sticky lub final only,
- ujednolicić ceny z `/pricing/`.

---

### `/results/`

**Rola:** proof hub.  
**Status:** bardzo wartościowy, ale ciężki.

**Poprawki:**

- dodać filtry: `Lead generation`, `Inbox/admin`, `Governance`, `AI workforce`, `Live`, `Pilot`,
- karty skrócić do Problem/System/Effect,
- techniczny stack przenieść niżej,
- `/results/whatsapp-discovery-pilot/` uzupełnić albo ukryć.

---

### `/pricing/`

**Rola:** commercial clarity.  
**Status:** strategicznie bardzo potrzebna, ale z rozjazdami.

**Poprawki:**

- jeden pricing matrix,
- wyjaśnić różnicę: `Map`, `Build`, `Run`,
- nie linkować „Under €199? Free lead guide” do tego samego sample Map, jeśli to nie jest faktyczny lead guide,
- dodać „what happens after booking” zgodne z Book Discovery.

---

### `/book-discovery/`

**Rola:** L3 conversion.  
**Status:** największy dysonans.

**Poprawki:**

- checkout/calendar albo copy „request/apply”,
- dodać sample Automation Map bezpośrednio nad formularzem,
- dodać trust line przy formularzu: `Paid only after confirmation` albo `Payment link follows after fit check`, zależnie od modelu,
- dodać WhatsApp fallback, jeśli użytkownik ma pytanie przed płatnością.

---

### `/founder/`

**Rola:** founder credibility.  
**Status:** dobry kierunek, za cienki względem potencjału.

**Poprawki:**

- usunąć „agency”,
- usunąć placeholder video albo zastąpić written walkthrough,
- dodać timeline: `problem → built FlexGrafik stack → now Quietforge`,
- linkować do 2–3 proof assets.

---

### `/trust/`

**Rola:** risk removal.  
**Status:** dobra, ale mogłaby bardziej wspierać konwersję.

**Poprawki:**

- dodać checklistę „Before we touch your inbox/system”,
- dodać DPA/AVG flow w 3 krokach,
- dodać CTA: `Book Automation Map` + `Download safety playbook`, ale jeden primary.

---

## 8. Priorytetowy plan naprawczy

### Sprint 1 — 1–2 dni: trust leaks

1. Ujednolicić pricing na Home, Solutions, Pricing, Managed Automation.
2. Poprawić Sales Funnel vs Web Upgrade na `/solutions/`.
3. Naprawić `/book-discovery/`: albo realny paid booking, albo zmiana copy na request/apply.
4. Usunąć/zmienić „agency” na `/founder/`.
5. Ukryć lub uzupełnić `/results/whatsapp-discovery-pilot/`.

### Sprint 2 — 3–5 dni: home clarity

1. Uprościć LOS section above fold — teaser zamiast pełnego technical dump.
2. Skrócić Built vs Planned na home.
3. Przepisać repo cards outcome-first.
4. Wzmocnić Pain Grid jako „choose your leak”.
5. Uporządkować CTA hierarchy.

### Sprint 3 — 1–2 tygodnie: proof/product polish

1. Results hub: filtry + krótsze karty.
2. Solution pages: każda według schematu Problem → System → Effect → Proof → CTA.
3. Case studies: consistent schema + status labels.
4. Founder page: pełny narrative proof.
5. Trust page: AVG/DPA visual flow.

### Sprint 4 — 30 dni: enterprise polish

1. Light mobile QA: tap targets, overflow, table cards.
2. Accessibility pass: landmarks, focus, reduced motion, alt diagrams.
3. Microcopy polish na wszystkich CTA.
4. Artefact library: Automation Map sample, safety playbook, LOS diagram, handover policy jako jedna sekcja `/artefacts/` lub footer group.
5. Measurement plan: GA4 events dla Book, WhatsApp, Wizard, Download, Case Study clicks.

---

## 9. Najważniejsza rekomendacja końcowa

Nie budować „większej” strony. Budować **bardziej decyzyjną** stronę.

Quietforge już ma wystarczająco dużo proofu. Teraz trzeba go ułożyć tak, żeby użytkownik przeszedł przez prostą ścieżkę:

```text
I recognise my problem
→ I see a working system
→ I trust the safety/proof
→ I understand the price
→ I know exactly what happens after I click
```

Obecny site mówi: „zobacz jak duży i zaawansowany jest mój system”.  
Docelowy site powinien mówić: „wybierz problem — pokażę Ci działający system i bezpieczny pierwszy krok”.

To jest różnica między dobrym technicznym portfolio a naprawdę wysokokonwertującą stroną product-consulting.
