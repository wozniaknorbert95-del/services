---
status: "[ARCHIVE]"
classification: "Commander private — not site canon"
updated: "2026-06-28"
note: "Product numbers may lag src/content/proof.ts and readiness.ts. Sync before investor calls."
---

# MASTER PLAN POZYSKANIA FINANSOWANIA
## QuietForge / Flexgrafik — Autonomous AI + Workflow Platform Builder

**Wersja:** 1.0  
**Data:** 27 czerwca 2026  
**Cel:** pozyskanie finansowania na budowę silnika do autonomicznych platform usługowych opartych na AI i workflow. Druk (print procurement) jako pierwszy, najbardziej dopracowany vertical.

---

## 1. DIAGNOZA STARTOWA — GDZIE JESTEŚMY DZIŚ

### Co już działa (mocne dowody produktowe)
| Element | Stan | Co to znaczy dla inwestora |
|---|---|---|
| **AI Sales Agent / Trust Portal** | 🟢 Live | Chat kwalifikujący, prowadzi rozmowę, dobiera produkt |
| **Wizard Cash Engine** | 🟢 Live | 9 ekranów, 77 SKU, Mollie checkout, live na zzpackage.flexgrafik.nl |
| **Agent OS** | 🟢 Live | 5-węzłowy pipeline LangGraph, HITL, hybrydowe VPS |
| **VCMS (Governance Layer)** | 🟢 Live | 8 repozytoriów, skanowanie konfliktów, SSoT, audyt |
| **Jadzia COI** | 🟡 Częściowo | Leady, WP SSH, sales chat, weekly brief — EU-hosted |
| **Lead Magnet Game** | 🟢 Live | PWA z Turnstile, 4-tier ladder, mostek do wizarda |
| **Produkt usługowy** | 🟢 Live | Automation Map €290, Single System Build €1.490+, Managed Automation €349–890/mo |

### Co brakuje do pełnej wizji (priorytety inwestorskie)
| Element | Stan | Co trzeba zbudować/dowieść |
|---|---|---|
| **Procurement Brain** | 🔴 20% | Główny agent decyzyjny: jak produkować, kto, za ile, w jakim terminie |
| **Supplier Intelligence** | 🔴 10% | Baza dostawców z maszynami, MOQ, terminami, jakością, ocenami |
| **RFQ Agent** | 🔴 0–10% | Automatyczne zapytania ofertowe do dostawców |
| **Production Planner** | 🔴 0% | Planowanie terminów i optymalizacja między dostawcami |
| **Quality Memory** | 🔴 0% | Historia zamówień, oceny dostawców, reklamacje |
| **Cost Intelligence** | 🔴 0% | Pełny TCO: druk + transport + czas + pakowanie + ryzyko |
| **Negotiation Agent** | 🔴 0% | Przyszłościowy moduł negocjacji |
| **Design-to-Production** | 🟡 40% | AI Designer → mockup → preflight → produkcja |
| **Knowledge Graph** | 🔴 0% | Relacje: produkt → materiał → maszyna → dostawca → transport → ryzyko |

### Kluczowy problem narracyjny do rozwiązania
Nie możesz wejść do inwestora i powiedzieć: *"Mam system dla drukarni"*. To brzmi jak niszowe narzędzie SaaS z limitem rynku.

Musisz powiedzieć: *"Zbudowaliśmy działający silnik AI do automatyzacji firm usługowych opartych na marketplace i prowizjach. Druk jest naszym pierwszym pionem, ale architektura pozwala wdrażać kolejne branże — tak jak WordPress uprościł tworzenie stron internetowych, my upraszczamy tworzenie autonomicznych platform usługowych."*

To zmienia skalę rozmowy z 2–5 mln EUR do potencjalnie znacznie wyższej wyceny.

---

## 2. STRATEGIA FINANSOWANIA

### 2.1. Ile potrzebujemy?

Na podstawie stanu produktu i celów, proponuję rundę **seed** na kwotę:

**300 000 – 750 000 EUR**

Dlaczego taki przedział:
- **300 000 EUR** — minimum na dopracowanie produktu, pierwszych płacących klientów i zbudowanie trakcji.
- **500 000–750 000 EUR** — optymalna kwota na 12–18 miesięcy runway, zespół 3–4 FTE, rozwój Procurement Brain i 2–3 pilotaże w druku.

### 2.2. Na co pójdą pieniądze (Use of Funds)

| Kategoria | % kwoty | Przykładowe zastosowanie |
|---|---|---|
| **Rozwój produktu** | 40% | Procurement Brain, Supplier Intelligence, RFQ Agent, integracje z drukarniami |
| **Zespół** | 30% | Full-stack dev, AI/ML engineer, product manager, fractional CFO |
| **Pilotaże i wdrożenia** | 15% | Onboarding pierwszych klientów, wsparcie techniczne, case studies |
| **Marketing i sprzedaż** | 10% | Content, demo, outbound, eventy branżowe |
| **Operacje i prawo** | 5% | Kancelaria, due diligence, compliance, tooling |

### 2.3. Wycena i ile oddać

| Scenariusz | Pre-money valuation | Przy 500 000 EUR | Udział inwestora |
|---|---|---|---|
| MVP + niewielka trakcja | 1,5 – 2,5 mln EUR | ~17–25% |  |
| Działający produkt + pierwsi klienci | 2,5 – 5 mln EUR | ~10–17% |  |
| Mocna wizja platformowa + LOI | 4 – 8 mln EUR | ~6–11% |  |

**Rekomendacja:** Celuj w **pre-money 2,0–2,5 mln EUR** przy rundzie 500 000 EUR. To realna wycena przy obecnym stanie produktu i pozwala uniknąć zbyt dułego rozwodnienia.

### 2.4. Forma finansowania (priorytetowo)

1. **Equity round (seed)** — najbardziej standardowa dla tego etapu.
2. **Convertible note / SAFE** — jeśli chcesz szybko zamknąć rundę z aniołami bez ustalania wyceny.
3. **Granty UE / NCBR** — dofinansowanie na R&D AI, ale długi czas oczekiwania; traktować jako uzupełnienie.
4. **Revenue-based financing** — tylko jeśli masz już stabilny ARR > 50 000 EUR/rok.

---

## 3. NARRACJA INWESTORSKA — JAK OPOWIEDZIEĆ HISTORIĘ

### 3.1. Nowa kategoria produktu
Nie jesteś:
- systemem dla drukarni,
- web2print,
- kalkulatorem wycen,
- chatbotem.

Jesteś:
> **AI Business Process Platform / Autonomous Service Marketplace Engine**

Twoim produktem docelowym jest **silnik do budowania platform opartych na AI i workflow**, a "Print Pack" to pierwszy, najbardziej dopracowany pakiet branżowy.

### 3.2. Architektura wizji (3 warstwy)

**Warstwa 1 — Core Engine (nigdy się nie zmienia)**
AgentOS, VCMS, Workflow Engine, AI Memory, Event Bus, Identity, Role, Integracje (Stripe, ERP, CRM), Dashboard, API, Analytics, Marketplace pluginów.

**Warstwa 2 — Business Engine (konfiguracja, nie kod)**
Marketplace → Klient → Agent sprzedaży → Dobór produktu → Wycena → Dostawca → Płatność → Realizacja → Prowizja. Zamieniany na inne procesy branżowe przez konfigurację.

**Warstwa 3 — Industry Packi**
- Print Pack: papiery, maszyny, drukarnie, finishing, preflight
- Food Pack: restauracje, menu, kierowcy, dostawy, strefy
- Beauty Pack: salony, usługi, kalendarze, pracownicy
- Medical Pack: gabinety, terminy, dokumentacja

**Warstwa 4 — AI Agents (do wyboru)**
Sales Agent, Procurement Agent, Designer Agent, Marketing Agent, Finance Agent, Support Agent, Negotiation Agent, Analytics Agent.

### 3.3. Największa przewaga konkurencyjna
> **Modelowanie procesów biznesowych, a nie samo AI.**

AI samo w sobie nie będzie przewagą na długo. Przewagą jest to, że klient nie musi zatrudniać programistów na rok, żeby zbudować platformę jak Uber Eats dla cateringu dietetycznego. Wybiera szablon, konfiguruje agentów, podłącza płatności, dodaje dostawców, uruchamia platformę.

### 3.4. WordPress — używać ostrożnie
Porównanie do WordPressa jest dobre, ale nie może brzmieć jak obietnica *"zbudujemy nowego WordPressa"*. Lepiej:
> *"Chcemy uprościć tworzenie autonomicznych platform usługowych, podobnie jak WordPress uprościł tworzenie stron internetowych."*

### 3.5. Co pokazać na spotkaniu (3 filary)
1. **Co działa dziś** — demo systemu, AI, wizard, VCMS, AgentOS.
2. **Dlaczego druk to tylko pierwszy rynek** — architektura modułowa, wspólne elementy dla różnych branż.
3. **Plan na 3–5 lat** — Print Pack, kolejne Industry Packi, marketplace agentów, rozwój platformy.

---

## 4. MATERIAŁY DO PRZYGOTOWANIA

### 4.1. Pitch deck (10–12 slajdów, standard VC)

| Slajd | Treść |
|---|---|
| 1. Hook | Problem: budowa platform usługowych zajmuje rok i setki tys. EUR. Rozwiązanie: silnik AI + workflow, który pozwala uruchomić platformę w tygodnie. |
| 2. Problem | Właściciele firm usługowych tracą czas na ręczne wyceny, koordynację dostawców, chaos operacyjny. Brakuje narzędzi do autonomicznego zarządzania procesem end-to-end. |
| 3. Rozwiązanie | QuietForge — AI Business Process Platform. Modułowy silnik: Core Engine + Business Engine + Industry Pack + AI Agents. |
| 4. Demo / Live Proof | Wizard Cash Engine, Agent OS, VCMS, Jadzia COI — pokaz z produkcyjnego systemu. |
| 5. Traction | Liczby: płacący klienci usługowi, leady, conversion, ARR, liczba repozytoriów, live systems. |
| 6. Rynek | TAM/SAM/SOM dla platform usługowych + głęboki dive w druk (print procurement). |
| 7. Model biznesowy | SaaS + prowizje od transakcji + marketplace pluginów + Industry Packi. |
| 8. Konkurencja | Gelato, Vistaprint, Printful, Canva, custom dev. Gdzie nasza przewaga. |
| 9. Produkt i roadmap | Co działa, co budujemy, etapy na 12/24/36 miesięcy. |
| 10. Zespół | Founder, techniczne kompetencje, kluczowe role do zatrudnienia. |
| 11. Finanse | Rundown, use of funds, wycena, runway. |
| 12. Ask | Ile potrzebujemy, na co, co osiągniemy do kolejnej rundy. |

### 4.2. One-pager
Jedna strona A4 z: problemem, rozwiązaniem, traction, modelem, rynkiem, ask, kontakt.

### 4.3. Executive Summary (3-4 strony)
Rozszerzony one-pager do wysyłania e-mailem.

### 4.4. Model finansowy (Excel)
- 3-letni P&L, cash flow, runway
- Założenia: liczba klientów, ARPU, churn, CAC, LTV
- Scenariusze: pessimistic / base / optimistic
- Kiedy osiągamy PMF, kiedy szukamy rundy A

### 4.5. Demo video (2–3 minuty)
Scenka: klient wchodzi na stronę, rozmawia z AI, konfiguruje produkt, dostaje mockup, płaci, zamówienie leci do dostawcy, człowiek zatwierdza HITL, status w Mission Control.

### 4.6. Data room
- Cap table
- Umowy spółki, IP, licencje
- Repozytoria (read-only lub summary)
- KPI i metryki
- Case studies / referencje
- Roadmap techniczny
- Badania rynku
- Finanse historyczne
- Biznes plan

### 4.7. Market research
- Print-on-demand / web2print market size
- AI agent platforms / workflow automation market
- Service marketplace trends
- Porównanie z Gelato, Canva, custom software dev agencies

### 4.8. Competitive landscape
Macierz: cecha vs konkurenci. Wyraźnie zaznaczyć, gdzie QuietForge wygrywa (AgentOS, Procurement, workflow, HITL, multi-vertical).

---

## 5. SZTAB PROFESJONALISTÓW — KOGO ZEBRAĆ

| Rola | Po co | Gdzie szukać / kto może to być |
|---|---|---|
| **Fundraising Lead / Advisor** | Prowadzi rundę, przygotowuje deck, kontaktuje inwestorów, negocjuje term sheet | Ty + zewnętrzny doradca (startup advisor, były founder po exit, VC principal) |
| **Startup Lawyer** | Prawo spółek, term sheet, due diligence, IP, umowy | Kancelaria startupowa: Grynhoff, Łojan & Partners, Wardyński & Wspólnicy, MKZ, Sołtysiński Kawecki & Szlęzak |
| **Fractional CFO / Finansowy doradca** | Model finansowy, wycena, KPI, negocjacje z inwestorem | Ekspert z VC/PE, platforma jak SiliconCFO, Founders CFO |
| **Technical Advisor / CTO** | Ocena architektury, skalowalności, AI roadmap, rekrutacja devów | Znany techniczny lider, np. AI engineer z doświadczeniem SaaS/Marketplace |
| **Industry Advisor (Print / Procurement)** | Weryfikacja rynku druku, sieć dostawców, validacja procesów | Były CEO drukarni, procurement manager z korporacji, branżowy broker |
| **AI / ML Advisor** | Validacja agentów, architektury LangGraph, HITL, bezpieczeństwo | AI researcher, były tech lead z OpenAI/Anthropic ecosystem, AI startup founder |
| **Sales / GTM Advisor** | Strategia pozyskiwania pierwszych klientów B2B, cennik, pipeline | SaaS sales leader, były VP Sales marketplace |
| **Pitch Coach** | Trening prezentacji, Q&A, body language, storytelling | Doradca dla founderów, coach VC |
| **PR / Marketing** | Content, SEO, case studies, wizerunek founder-expert | Freelancer / agencja B2B tech |

### Rekomendacja zespołu do zatrudnienia na finansowanie
| Rola | Etat | Kiedy |
|---|---|---|
| Full-stack / AI Engineer | 1 FTE | Od startu rundy |
| Product Manager | 0,5–1 FTE | Miesiąc 1–2 |
| Fractional CFO | 0,2–0,5 FTE | Od przygotowania rundy |
| Sales / Customer Success | 0,5 FTE | Miesiąc 3–4 |

---

## 6. PLAN DZIAŁANIA WEDŁUG FAZ

### FAZA 1: FUNDAMENTY I DUE DILIGENCE (tydzień 1–3)

**Cel:** być gotowym na pytania inwestorów i zbudować wiarygodność operacyjną.

- [ ] Sporządzić aktualny cap table i strukturę własnościową spółki.
- [ ] Potwierdzić formę prawną (sp. z o.o., BV, SA? holding?). Zdecydować, gdzie będzie spółka inwestycyjna.
- [ ] Zebrać umowy: założycielskie, IP, licencje, NDA, umowy z klientami, umowy z dostawcami.
- [ ] Wyjaśnić relację Flexgrafik vs QuietForge — czy to jedna spółka, dwie, holding? Inwestor musi to rozumieć w 30 sekund.
- [ ] Przygotować historyczne finanse: P&L, cash flow, bilans (jeśli dostępne).
- [ ] Zdefiniować dokładną kwotę rundy i use of funds.
- [ ] Wybrać strategię wyceny (target pre-money).
- [ ] Przeprowadzić audyt repozytoriów: co jest live, co jest demo, co jest roadmap.
- [ ] Sporządzić listę kluczowych ryzyk i jak je adresujesz.

**Deliverables:**
- Cap table
- Struktura grupy (1 strona)
- Finanse historyczne
- Lista ryzyk + mitigacje
- Target rundy i wycena

### FAZA 2: NARRACJA I MATERIAŁY (tydzień 2–5)

**Cel:** stworzyć materiały, które przekonują inwestorów w sposób, do którego są przyzwyczajeni.

- [ ] Zdefiniować finalną pozycjonowanie: *AI Business Process Platform* / *Autonomous Service Marketplace Engine*.
- [ ] Napisać pitch deck (10–12 slajdów) w języku angielskim (główny) i polskim (lokalni aniołowie).
- [ ] Stworzyć one-pager i executive summary.
- [ ] Zbudować model finansowy (3 lata, 3 scenariusze).
- [ ] Przygotować demo video (2–3 min) pokazujące end-to-end flow.
- [ ] Przygotować market research i competitive landscape.
- [ ] Napisać 2–3 case studies z obecnych klientów / pilotów.
- [ ] Zbudować podstawową data room (Drive / Notion / DocSend).
- [ ] Przeprowadzić wewnętrzny dry-run pitch z feedback loop.

**Deliverables:**
- Pitch deck v1
- One-pager
- Executive summary
- Model finansowy
- Demo video
- Data room
- Case studies

### FAZA 3: ZESPÓŁ I TRAKCJA (równolegle z fazą 2 i 4)

**Cel:** zbudować dowody, że produkt ma chwytliwość rynku (traction), i pokazać, że zespół potrafi to wykonać.

- [ ] Zatrudnić / zakontraktować full-stack AI engineer.
- [ ] Zakontraktować fractional CFO.
- [ ] Znaleźć 2–3 advisorów (AI, print/procurement, SaaS GTM) — najlepiej z widocznym nazwiskiem, które zadziała jako social proof.
- [ ] Uruchomić 2–3 pilotaże w druku z prawdziwymi dostawcami i klientami.
- [ ] Zdobyć 2–3 LOI (listy intencyjne) od potencjalnych klientów platformy.
- [ ] Udokumentować wyniki: oszczędność czasu, wzrost konwersji, redukcja błędów.
- [ ] Przygotować publiczne case studies / testimonials.
- [ ] Uruchomić landing page pod nową pozycjonowanie produktowe (osobno od strony usługowej).
- [ ] Rozpocząć content marketing pod kątem "AI procurement" / "autonomous print".

**Deliverables:**
- Zespół + advisorzy
- LOI od klientów
- Case studies z wynikami
- Landing page produktowa
- Pipeline contentowy

### FAZA 4: MAPOWANIE INWESTORÓW I OUTREACH (tydzień 4–6)

**Cel:** zbudować listę inwestorów i zaplanować ciepłe wprowadzenia.

- [ ] Zbudować listę 30–50 target investorów podzieloną na:
  - VC seed (Polska, NL, DE, Nordics, generalist CEE)
  - Angel investors (tech, SaaS, marketplace, print/procurement)
  - Strategic investors (drukarnie, software houses, marketplace operators)
  - Granty i akceleratory
- [ ] Przygotować tiering: Tier 1 (marzenie), Tier 2 (realne), Tier 3 (prawdopodobne).
- [ ] Dla każdego inwestora przygotować 1–2 zdania personalizacji: dlaczego akurat oni.
- [ ] Zidentyfikować warm intros przez znajomych, advisorów, byłych klientów, inkubatory.
- [ ] Przygotować szablony e-maili: cold intro, warm intro, follow-up, pitch request.
- [ ] Zaplanować 2–4 eventy / konferencje, gdzie można spotkać inwestorów (np. Wolves Summit, TechCrunch Disrupt, The Next Web, SaaStr, Web Summit).
- [ ] Rozważyć akcelerator seed (np. Y Combinator, Techstars, Startupbootcamp, local CEE accelerators).

**Deliverables:**
- Investor CRM (HubSpot / Notion / Airtable)
- Tiered lista 30–50 inwestorów
- Szablony outreach
- Plan eventowy

### FAZA 5: WYKONANIE — SPOTKANIA I ZAMKNIĘCIE (miesiąc 3–6)

**Cel:** przeprowadzić rundę od pierwszego spotkania do podpisania term sheet i zamknięcia.

- [ ] Rozpocząć outreach: ciepłe wprowadzenia priorytetowo, cold e-mail jako uzupełnienie.
- [ ] Przeprowadzić 20–40 spotkań inwestorskich (VC, aniołowie, strategiczni).
- [ ] Po każdym spotkaniu: wysłać follow-up, odpowiedzieć na pytania, zaktualizować CRM.
- [ ] Iterować deck na podstawie feedbacku.
- [ ] Przygotować room dla due diligence.
- [ ] Negocjować term sheet: valuation, liquidation preference, board seat, anti-dilution, vesting.
- [ ] Przeprowadzić due diligence techniczne i prawne.
- [ ] Podpisać term sheet.
- [ ] Zamknąć rundę (przelew, notarialne, aktualizacja KRS/CEIDG).
- [ ] Komunikacja wewnętrzna i zewnętrzna po zamknięciu.

**Deliverables:**
- Term sheet
- Zamknięta runda
- PR / announce

---

## 7. TARGET INWESTORÓW — LISTA STARTOWA

### 7.1. VC seed (Polska / CEE)
- **bValue** (PL) — seed, SaaS, marketplace, B2B
- **Inventure** (PL) — seed/Series A, B2B SaaS
- **SpeedInvest** (AT) — fintech, marketplace, industrial tech, AI
- **Point Nine** (DE) — B2B SaaS, marketplace (trudny, ale marzenie)
- **Partech** (FR/DE) — B2B SaaS, marketplace
- **Hoxton Ventures** (UK) — seed, B2B software
- **Cavalry Ventures** (DE) — seed, B2B SaaS
- **Market One Capital** (PL) — marketplace, network effects
- **Freigeist Capital** (DE) — deeptech, B2B software
- **Vestigio Ventures** (PL) — B2B, SaaS, AI
- **PKO VC** (PL) — polskie fundusze VC
- **Titanum** (PL) — seed/AI

### 7.2. Angel investors (do szukania indywidualnie)
- Founders SaaS/Marketplace z exit (PL, NL, DE)
- Byli CEO drukarni / print-on-demand
- Eksperci od AI agents (LangChain, LangGraph, OpenAI ecosystem)
- Doradcy z VC / PE
- Znajomi founderzy, którzy pozyskali VC

### 7.3. Strategic investors
- Duże drukarnie / grupy poligraficzne szukające digitalizacji
- Software houses budujące custom platformy
- Operatorzy marketplace B2B
- Dostawcy maszyn drukarskich (Mimaki, Roland, HP Indigo partners)

### 7.4. Granty i akceleratory
- **NCBiR** (Polska) — programy dla AI, R&D
- **PARP / FENG** — wsparcie dla startupów
- **Horizon Europe** (EIC Accelerator) — bardzo trudny, ale duże kwoty
- **Y Combinator** — jeśli chcesz globalną skalę
- **Techstars** / **Startupbootcamp** — regionalne akceleratory
- **Google for Startups**, **AWS Activate** — credits, nie cash

### 7.5. Holenderscy / niemieccy inwestorzy (ze względu na obecny rynek NL)
- **Rubio Impact Ventures** (NL)
- **Peak Capital** (NL)
- **KPN Ventures** (NL) — strategiczny
- **Vogel Ventures** (DE)
- **High-Tech Gründerfonds** (DE)

---

## 8. RYZYKA I JAK JE ADRESOWAĆ PRZED INWESTOREM

| Ryzyko | Jak inwestor to widzi | Jak adresować |
|---|---|---|
| **Scope creep** | Chce zbudować za dużo naraz | Jasna roadmap: Print Pack first, potem platforma. Pokazać, że druk sam w sobie jest dużym rynkiem. |
| **Services vs product** | Czy to konsulting czy produkt? | Wyraźnie oddzielić usługi (dzisiejszy cash flow) od produktu (platforma). Usługi jako sposób finansowania R&D. |
| **Brak zespołu** | Czy single-founder/mały zespół da radę? | Pokazać advisorów, plan rekrutacji, dowody wykonania (8 repo, live systems). |
| **Konkurencja** | Gelato, Canva, Vistaprint | Nie konkurencja. Nasza przewaga: workflow + procurement + HITL + multi-vertical. |
| **Rynek niszowy** | "Druk to mały rynek" | Druk to tylko vertical proof. Produkt docelowy to platform builder dla wielu branż. |
| **Technical risk** | Czy AI naprawdę działa? | Demo, live systems, metryki, case studies. Nie obietnice, tylko produkcyjny kod. |
| **Regulacyjne** | AI Act, GDPR, prawo druku | EU-hosted, HITL, compliance-first, umowy, audyt. |
| **Customer acquisition** | Skąd klienci? | Wykazać pierwszych klientów, LOI, content SEO, outbound, sieć branżowa. |

---

## 9. PILNE KROKI NA START (najbliższe 7 dni)

1. **Zdecyduj, jaką spółką inwestujesz.** Flexgrafik czy QuietForge? Czy to jedno? Czy robisz holding? To pierwsze pytanie każdego inwestora.
2. **Potwierdź kwotę rundy i use of funds.** Ile dokładnie potrzebujesz na 18 miesięcy runway?
3. **Zrób cap table i strukturę własnościową.** Nawet jeśli jesteś jedynym właścicielem — zrób to profesjonalnie.
4. **Zbierz umowy i dokumenty do data room.** IP, umowy z klientami, rejestracja spółki, domeny.
5. **Zrób listę 3–5 advisorów, których chcesz zaprosić.** Wybierz ludzi z nazwiskiem w AI, SaaS lub druku.
6. **Przygotuj wstępny pitch deck v0.1** — nawet szkic, żeby zacząć iterować.
7. **Zidentyfikuj 3 ciepłe wprowadzenia do inwestorów** przez znajomych / LinkedIn.

---

## 10. HARMONOGRAM PODSUMOWUJĄCY

| Okres | Co robimy | Kluczowe milestone |
|---|---|---|
| **Tydzień 1–2** | Due diligence, struktura, finanse, target rundy | Cap table, struktura spółki, target kwoty i wyceny |
| **Tydzień 3–4** | Pitch deck, one-pager, model finansowy | Deck v1, model finansowy, data room start |
| **Tydzień 5–6** | Advisorzy, pilotaże, LOI, landing page | 2–3 advisorzy, 2–3 LOI, landing page produktowa |
| **Miesiąc 2** | Outreach, pierwsze spotkania, iteracja decku | 10–15 spotkań, feedback, deck v2 |
| **Miesiąc 3** | Term sheet talks, due diligence | 3–5 poważnych procesów, term sheet od lead |
| **Miesiąc 4–6** | Zamknięcie rundy, PR, rekrutacja | Rundę zamknięta, zespół onboardowany |

---

## 11. KOMUNIKACJA Z INWESTOREM — JEDNA STRONA A4

Zawsze miej przy sobie:

**Wizja:** Budujemy silnik AI do tworzenia autonomicznych platform usługowych. Druk to pierwszy vertical.

**Dowód:** 8 repozytoriów, 6 systemów w produkcji, live checkout, AI Agent OS, VCMS governance, 77 SKU, Mollie płatności, EU-hosted.

**Rynek:** Globalny trend: firmy usługowe chcą działać jak marketplace bez zatrudniania programistów na rok.

**Model:** SaaS + transakcyjne prowizje + Industry Packi + marketplace pluginów.

**Pytanie:** Czy inwestor chce zobaczyć demo, deck czy case study?

---

## 12. KOLEJNE KROKI — CO ROBIMY TERAZ

Po akceptacji tego planu:
1. Szczegółowy audit obecnego stanu (1 sesja 2h).
2. Przygotowanie cap table i struktury własnościowej.
3. Napisanie pitch deck v1.
4. Budowa listy 30 inwestorów.
5. Zatrudnienie / zakontraktowanie fractional CFO i technical advisor.

---

*Dokument przygotowany w roli doradcy ds. pozyskiwania finansowania. Wymaga weryfikacji z kluczowymi osobami i dostosowania do rzeczywistej struktury spółki, stanu finansowego oraz celów founderów.*
