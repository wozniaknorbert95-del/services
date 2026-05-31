# Mapa Strony — Filar 2 (SMB) — wersja 2.0

> **Wielostronicowy serwis** (NIE one-pager) dopasowany 1:1 do **Strategii Filar 2 v5.0**.
> Rynek: EN / remote (€) · Cel: cash flow → MRR · Tryb: solo + AI workforce.
> Poprzednia mapa (v1) powstała pod starą strategię v4.1 → ta wersja ją audytuje i przebudowuje.
>
> Zasada nadrzędna: **klient się NIE gubi.** Jedna oś główna („mam problem → jest system → jest wynik → umów płatny krok"), jedno ostrze sprzedażowe, reszta jako kontrolowana drabina up-sell.

---

## 0. AUDYT mapy v1 → v2.0 — co zmieniamy i dlaczego

| # | Problem w mapie v1 | Skąd rozjazd | Naprawa w v2.0 |
|---|--------------------|--------------|----------------|
| 1 | **Wejście = darmowy „30-min call"** | mapa robiona pod v4.1 | Główne CTA = **Paid Discovery (Automation Map)**. Filtruje, finansuje, konwertuje (strategia §5.1) |
| 2 | **5 produktów na równi** → klient się gubi | brak hierarchii | **Spearhead + Ladder**: Inbox Killer na froncie, reszta jako up-sell (strategia §4) |
| 3 | **Zero MRR w architekturze** | v1 traktował support jako przypis | Osobna strona **Managed Automation (Care/Manage/Partner)** + obecność MRR w całym lejku (strategia §5.3) |
| 4 | **Brak strony Pricing** | ceny chowane za callem | Strona **Pricing** z kotwicami — przy cash-flow cena musi być widoczna |
| 5 | **Brak obrony ceny / moat** | v1 nie miał tej sekcji | Sekcja „Why this works / Why me" niesie moat: AI-workforce, HITL, ekosystem (strategia §2, §8) |
| 6 | **„Why Me" miękkie, bez przewagi** | v1 ogólnikowe | About sprzedaje AI-workforce + most do Filaru 3 jako dowód klasy enterprise |
| 7 | **Use cases jako fikcja z adnotacją** | brak realnych | Use cases oparte na realnych modułach ekosystemu (Problem→System→Wynik + metryki) |
| 8 | **Nawigacja bez fokusu konwersji** | 7 równych zakładek | Nawigacja prowadzi do JEDNEGO celu (Discovery); persystentne CTA na każdej stronie |

**Jedno zdanie:** mapa v1 prowadziła do darmowej rozmowy i gubiła klienta w 5 produktach. Mapa v2.0 prowadzi do **płatnego Discovery przez jedno ostrze**, z resztą jako uporządkowana drabina.

---

## 1. Architektura informacji (sitemap)

```
HOME  ──────────────────────────────────────────────┐
 │  (hero → pain → spearhead → proof → CTA Discovery) │
 │                                                    │
 ├── SOLUTIONS (hub)                                  │
 │     ├── /solutions/inbox-killer      ★ SPEARHEAD   │
 │     ├── /solutions/web-upgrade         (ladder 1)  │
 │     ├── /solutions/sales-funnel        (ladder 2)  │
 │     ├── /solutions/lead-magnet-game    (ladder 3)  │
 │     └── /solutions/managed-automation  ★ MRR       │
 │                                                    │
 ├── HOW IT WORKS  (proces: Discovery → Build → Run)  │
 ├── RESULTS / USE CASES  (Problem→System→Wynik)      │
 ├── PRICING  (Discovery / Setup tiers / MRR)         │
 ├── ABOUT / WHY ME  (AI-workforce, moat, Filar 3)    │
 ├── RESOURCES / BLOG  (SEO + edukacja, AI „pod maską")│
 └── BOOK DISCOVERY  ◄── główny cel każdego CTA ──────┘
       (płatny krok, nie darmowa rozmowa)
```

**Menu główne (desktop):**
`Solutions ▾ · How It Works · Results · Pricing · About · Blog · [Book Discovery →]`

- `Solutions ▾` rozwija dropdown z 4 modułami + „Managed Automation".
- `[Book Discovery →]` jest **wyróżnionym przyciskiem** (kontrastowy), nie zwykłym linkiem — obecny w nagłówku na każdej stronie.

**Stopka:** mini-sitemap + powtórzone CTA Discovery + kontakt + link „For larger systems → Pillar 3".

---

## 2. HOME / START

**Cel:** w 5–10 s przekazać: kto, dla kogo, jaki wynik, jeden klik dalej. Prowadzi do Discovery, nie do listy 5 produktów.

**Sekcje (kolejność = lejek):**

1. **Hero**
   - H1 (wynik, nie technologia): *„Your website and back-office — running on autopilot."*
   - Sub: *„Done-for-you digital systems for small business. Fewer emails, more clients, no more shame about your old site."*
   - Primary CTA: **`Book your Automation Map →`** (Paid Discovery).
   - Secondary CTA: `See what we fix` (→ Solutions hub).
   - Micro-trust pod CTA: *„Built on a live, battle-tested system — not a template."*

2. **Pain grid (3–4 kafle)** — język klienta, każdy linkuje do rozwiązania:
   - „Drowning in emails & losing leads" → Inbox Killer (★ ostrze, pierwsze)
   - „Your site looks like 2012" → Web Upgrade
   - „Manual quotes eating your day" → Sales Funnel
   - „Traffic but no leads" → Lead Magnet Game

3. **Spearhead spotlight — Inbox Killer** (jedna sekcja, większa niż reszta)
   - To jest świadome złamanie symetrii: ostrze dostaje najwięcej uwagi.
   - 1 zdanie problemu + 3 bullet wyniku (h/tydzień odzyskane, leady nie giną, HITL = bezpiecznie) + CTA → strona Inbox Killer.

4. **The rest, in order (Solutions teaser jako DRABINA, nie siatka)**
   - Pokaż 3 pozostałe moduły jako „next steps once your inbox is calm" → komunikuje kolejność, nie chaos wyboru.
   - „Not sure what you need? That's what the Automation Map is for." → CTA Discovery.

5. **Why this works (mini-proof / moat — skrót strategii §2, §8)**
   - 3 punkty: *„Built on my own live ecosystem", „Delivered by my AI workforce — faster & leaner", „Nothing sends or deploys without your approval (HITL)."*

6. **Results teaser** — 2 mini use-case (Problem→Wynik, 1 liczba) → link do Results.

7. **Final CTA band** — *„Start with a paid Automation Map. We find your 2–3 biggest leaks and show the ROI before you commit to anything bigger."* → Book Discovery.

---

## 3. SOLUTIONS (hub + 5 podstron)

**Cel:** uporządkować ofertę tak, by klient widział **hierarchię i kolejność**, nie 5 równych opcji. To bezpośrednia odpowiedź na „klient się pogubi".

### 3.0. Solutions HUB (strona-rozdzielnia)
- Intro 2 zdania: *„A few sharp, productized systems — not a hundred services."*
- **Układ wizualny = drabina, nie grid:**
  - `STEP 1 — Tame the chaos:` **Inbox Killer** ★ (największy box, „start here")
  - `STEP 2 — Win more clients:` Web Upgrade · Sales Funnel · Lead Magnet Game (mniejsze boxy)
  - `KEEP IT RUNNING:` **Managed Automation (MRR)** (wstęga na dole)
- Każdy box: dla kogo / co robi / wynik / „Learn more →".

### 3.1. `/solutions/inbox-killer` ★ SPEARHEAD
Bazuje na: **Jadzia Core** (classify → plan → diff → approve, HITL).
Sekcje:
1. Hero: *„Stop drowning in your inbox."* + CTA Discovery.
2. Problem (ich język): godziny dziennie w skrzynce, leady giną w szumie.
3. How it works (prosto): reads folders → sorts (lead/client/invoice/spam) → prioritizes → drafts replies → **you approve, it never sends alone (HITL)**.
4. What you get: mniej godzin, zero zgubionych leadów, lista leadów z zapytań.
5. **Setup + MRR** jasno: jednorazowy setup, potem „kept healthy" (link → Managed Automation).
6. CTA: Book Automation Map (Discovery odejmowane od setupu).

### 3.2. `/solutions/web-upgrade` (ladder 1)
Bazuje na: flexgrafik-nl, wizard, SSoT. Audyt → mobile-first layout → CTA/lead capture → GA4 → auto-maile. Wynik: strona, której nie wstyd i która konwertuje.

### 3.3. `/solutions/sales-funnel` (ladder 2)
Bazuje na: zzpackage wizard. 3–5-krokowy konfigurator/funnel + płatność / „call me back" + integracja CRM/mail. Wynik: koniec z „ile to kosztuje?" w mailach.

### 3.4. `/solutions/lead-magnet-game` (ladder 3)
Bazuje na: app.flexgrafik.nl (custom Canvas engine). Quiz/mini-gra brandowana → lead capture → nagroda (rabat/consult). Wynik: więcej leadów + asset, którym się chwalisz. (Unikalny: własny silnik gry — to differentiator.)

### 3.5. `/solutions/managed-automation` ★ MRR (NOWA — kluczowa, brak w v1)
**To jest rdzeń przychodu — dostaje pełną podstronę.**
1. Pozycjonowanie: *„Your AI worker that never sleeps — kept healthy."* (niezawodność, nie „support hours").
2. Co zawiera (3 tiery zgodne ze strategią §5.3):
   - **Care** — uptime, drobne poprawki, miesięczny raport.
   - **Manage** — aktywne dostrajanie, priorytet, drobne rozszerzenia.
   - **Partner (AI Ops)** — monitoring driftu, nowe automaty, doradztwo.
3. Dlaczego retainer (dla klienta): system to żywy organizm, dryf modeli, zmieniające się dane.
4. CTA: link z Pricing + „comes after any setup project".

---

## 4. HOW IT WORKS (proces)

**Cel:** uspokoić („masz proces"), wprost zakotwiczyć **płatne Discovery** jako krok 1.

1. Intro: *„Three clear steps. No surprises, no jargon."*
2. **Step 1 — Automation Map (Paid Discovery)** — 60–90 min + dokument: 2–3 największe wycieki, ROI, rekomendowany moduł. *„Paid — and credited toward your first project."* (To filtr + ROI, strategia §4.0.)
3. **Step 2 — Build** — adaptacja gotowego modułu danymi klienta (produktyzacja, nie projekt od zera). Szybko, bo dostarcza AI-workforce.
4. **Step 3 — Run (Managed Automation)** — handover + szkolenie + przejście na MRR. Link → Managed Automation.
5. **HITL highlight:** osobny blok — *„You stay in control. Nothing sends or deploys without your approval."* (moat + bezpieczeństwo).
6. **FAQ:** „Do I need an existing site?", „Does it work with my email?", „How long does it take?", „Why is Discovery paid?" (obrona modelu).

---

## 5. RESULTS / USE CASES

**Cel:** dowód, że systemy działają. Schemat **Problem → System → Wynik + 1 metryka**. Oparte na realnych modułach (nie fikcja).

1. Intro: *„Every project starts with a pain: chaos, time, a site that doesn't sell."*
2. **Use case 1 — „Inbox chaos → inbox under control"** (Inbox Killer) — metryka: h/tydzień odzyskane, % mniej zgubionych leadów.
3. **Use case 2 — „Site from 2012 → 2026"** (Web Upgrade) — metryka: więcej zapytań, mniej ręcznych odpisów.
4. **Use case 3 — „Manual quotes → configurator"** (Sales Funnel) — metryka: uporządkowany pipeline, mniej maili „ile to kosztuje".
5. **Use case 4 — „Dead landing → game that collects leads"** (Lead Magnet) — metryka: więcej kontaktów, dłuższy czas na stronie.
6. CTA band → Book Discovery.

> Uwaga sztabu: dopóki nie ma realnych klientów, oznacz jako „patterns / what we build" i zamień na prawdziwe case'y po pierwszych wdrożeniach (strategia §9, faza 3). Nie udawaj metryk, których nie masz.

---

## 6. PRICING (NOWA — brak w v1, wymagana przy cash-flow first)

**Cel:** cena widoczna = mniejsze tarcie, szybsze „tak". Niski próg wejścia z przodu.

1. **Tier 0 — Automation Map (Discovery): €150–450** — „start here, credited toward your project".
2. **Setup tiers:** Starter €1–2.5k · Growth €3–6k · Pro €6–12k (z opisem co wchodzi).
3. **Managed Automation (MRR):** Care €99–249 · Manage €300–750 · Partner €800–1500 /mo.
4. **Framing:** *„Small-business pricing, enterprise-grade systems — because my AI workforce does the heavy lifting."* (obrona ceny, strategia §8).
5. CTA: Book Discovery.

> Decyzja do potwierdzenia: pokazywać widełki czy „from €…"? Rekomendacja sztabu: **„from €…"** dla setupów (kotwica + przestrzeń na wycenę po Discovery), pełne ceny dla Discovery i MRR (niski próg = transparentność buduje zaufanie).

---

## 7. ABOUT / WHY ME

**Cel:** zaufanie + przewaga, bez wchodzenia w enterprise-żargon Filaru 3.

1. **Who I am** (krótko): od brandingu/druku FlexGrafik do systemów cyfrowych i automatyzacji dla małych firm; ekosystem budowany 2 lata na żywym biznesie.
2. **What makes this different (moat — strategia §2, §8):**
   - *„I build my own AI workers — most of the delivery runs without human hours. That's why I'm faster and leaner."*
   - *„Branding + UX + automation under one roof — from logo to backend."*
   - *„No AI hype — only systems that work, with you in control (HITL)."*
3. **Why it matters for you:** *„Enterprise-grade architecture, in a package a small business actually understands."*
4. **Bridge to Pillar 3** (subtelnie): *„Growing into something bigger? I also build full multi-agent systems — see Pillar 3."* (link wychodzący, jednokierunkowy).

---

## 8. RESOURCES / BLOG

**Cel:** SEO + edukacja + miejsce, gdzie „AI pod maską" może się pojawić dla ciekawych (strategia §7.2).

1. Intro: *„Short, practical notes on digital transformation & automation for small business."*
2. Kategorie: Digital Transformation · Automation · How it works under the hood (tu AI/agents jawnie) · Insights/Patterns.
3. Lista postów: tytuł + 2–3 zdania + link.
4. Każdy post kończy się CTA → Discovery.

---

## 9. BOOK DISCOVERY (cel każdego CTA — zastępuje „Contact" z v1)

**Cel:** jeden, prosty, **płatny** krok wejścia. Zero darmowych „pogadajmy".

1. Intro: *„Start with a paid Automation Map. In 60–90 min we find your 2–3 biggest time/money leaks and show the ROI — credited toward your project."*
2. **Co dostajesz** (uzasadnia opłatę): dokument Automation Map + rekomendacja modułu + wstępny ROI.
3. **Płatność + booking:** wybór slotu + płatność z góry (filtr poważnych). Mollie/Stripe + kalendarz.
4. Formularz: imię, firma, email, „biggest pain" (checkboxy + pole), link/URL strony.
5. Kontakt alternatywny: mail · (opcjonalnie) Telegram/WhatsApp.
6. Gwarancja-redukcja-ryzyka: *„If the Map shows nothing worth automating, you owe nothing further — and you keep the document."*

---

## 10. Reguły UX i konwersji (spinają całość)

- **Jeden cel na stronie:** każda podstrona ma dokładnie jedno główne CTA = Book Discovery. Drabina (up-sell) to CTA drugorzędne.
- **Persystentny przycisk Discovery** w nagłówku na każdej stronie (kontrastowy).
- **Hierarchia, nie symetria:** Inbox Killer zawsze pierwszy/większy. Reszta jako „next steps". To technicznie zapobiega „pogubieniu się".
- **Język klienta wszędzie** (czas/kasa/nerwy); „AI/agents" tylko w blogu i sekcji „under the hood".
- **MRR wpleciony w każdą podstronę produktu** (setup → kept running), nie tylko na osobnej stronie.
- **Mobile-first** (target SMB często mobilny), szybkie ładowanie (spójne z obietnicą Web Upgrade).
- **Most do Filaru 3** wyłącznie jako jednokierunkowy link w About/stopce — nigdy nie miesza się z lejkiem SMB.

---

## 11. Mapowanie: strona ↔ strategia (kontrola spójności)

| Strona | Realizuje cel strategii |
|--------|--------------------------|
| Home → Discovery | Cash flow first, jedno ostrze (§1, §4.1) |
| Inbox Killer (spearhead) | Spearhead, najszybsze „tak" (§4.1) |
| Web/Funnel/Game | Ladder up-sell (§4.2) |
| Managed Automation | MRR-first, rdzeń przychodu (§5.3) |
| How It Works | Paid Discovery + HITL + produktyzacja (§4.0, §6) |
| Pricing | Niski próg wejścia, obrona ceny (§5, §8) |
| About | Moat: AI-workforce + most do Filaru 3 (§2, §8, §11) |
| Results | Pętla case studies (§9, §10) |
| Book Discovery | Płatne wejście = filtr + finansowanie (§5.1) |

---

### Następny krok (osobna sesja)
Gotowe **teksty per sekcja** (copy EN: nagłówki, body, CTA), wireframe układu i ewentualnie kodowy one-pager każdej podstrony do deployu. **Ta sesja: tylko mapa/architektura.** ✅
