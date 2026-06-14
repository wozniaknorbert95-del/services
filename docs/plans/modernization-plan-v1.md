# Modernization Plan — services.flexgrafik.nl

**Type:** `/blast` — F2 (Full architectural plan)  
**Status:** Draft  
**Date:** 2026-06-14  
**Based on:** External audit + target structure analysis + current repo state  

---

## 1. EXECUTIVE SUMMARY

### Problem
Services portfolio komunikuje ~30% rzeczywistej wartości. Jest postrzegane jako "portfolio web designera" zamiast "Conversion Systems Architect".

### Cel
Przekształcić `services.flexgrafik.nl` z landing page SMB automation w **portfolio produktowe** które:
- W 10 sekund odpowiada: "Co dokładnie kupuję?"
- Prezentuje architekturę systemu jako główny asset
- Pokazuje dowód (metrics, case studies, diagramy)
- Pozycjonuje właściciela jako **solo technical founder / Conversion Systems Architect**

### Kluczowa zmiana
| Obecnie | Docelowo |
|---------|----------|
| "Done-for-you systems for small business" | "Conversion Systems Architect" / "AI-Powered Client Acquisition Systems" |
| Portfolio freelancera | Product company / Mini SaaS |
| Funkcja → Funkcja → Funkcja | Problem → System → Efekt |
| Design-first | Architecture-first |

---

## 2. AUDIT FINDINGS MAP

### 2.1 Critical Issues (must fix)

| # | Issue | Audit Reference | Current State | Target |
|---|-------|-----------------|---------------|--------|
| C1 | **Brak jasnego produktu** — klient nie wie co kupuje po 10s | Audit: "Nie wiadomo co jest produktem" | Hero mówi "Done-for-you systems" — zbyt ogólne | Jedno clear value proposition: "Client Acquisition Systems" lub podobne |
| C2 | **Pozycjonowanie za nisko** — freelancer zamiast technical founder | Audit: "Web Design = 500-2000 EUR vs Sales System = 2000-10000 EUR" | "AI Systems Architect for small business" | "Conversion Systems Architect" |
| C3 | **Brak proof of scale** — zero liczb, zero metryk | Audit: "Nie wiem ilu użytkowników obsłużyło" | Case studies mają [X] placeholders — brak danych | System Metrics section + realne case studies |
| C4 | **Architektura systemu niewidoczna** — najcenniejszy asset ukryty | Audit: "VCMS praktycznie niewidoczny marketingowo" | Brak diagramu architektury, VCMS nie pokazany | Diagram ekosystemu + Behind the Scenes: VCMS |
| C5 | **Case studies za słabe** — brak struktury Problem/Rozwiązanie/Efekt | Target: "Największy brak" | Case studies istnieją ale bez consistent struktury | Każdy case study: Before → Solution → Build → Result → Stack → Lessons |

### 2.2 High-Impact Issues

| # | Issue | Audit Reference | Current State | Target |
|---|-------|-----------------|---------------|--------|
| H1 | **Brak diagramu ecosystemu** | Priority 2: "To może być największy wzrost sprzedaży" | Brak | Visitor → Wizard → Qualification → Chat → VCMS → Lead → Quote |
| H2 | **Hero nie zawiera 5 elementów** | Target Blok 2: Kim jesteś, Dla kogo, Rezultat, Dowód, CTA | Tylko "systems for small business" + CTA | Full structure |
| H3 | **Video brak** | Priority 3: "90 sekund — How the whole ecosystem works" | Zero video | 1x ecosystem overview + 4x feature walkthrough |
| H4 | **Brak "Why I built my own system"** | Priority 4: "Ludzie kupują historię" | About page jest ale za mało founder story | Dedicated founder story section/page |
| H5 | **CTA tylko jeden poziom** | Target Blok 13: Muszą być trzy poziomy | Głównie "Book Automation Map" | Explore | Watch Demo | Book Strategy Call |
| H6 | **Brak wiarygodności (metrics)** | Target Blok 8: liczba ekranów, workflow, integracji, godzin | Brak | System metrics: 14-step wizard, 37 fields, 8 automations, custom VCMS |

### 2.3 Medium-Impact Enhancements

| # | Issue | Audit Reference | Current State | Target |
|---|-------|-----------------|---------------|--------|
| M1 | **Wizard pokazany jako formularz** | Target Blok 5: "To nie jest formularz. To jest proces sprzedażowy" | Screenshot bez kontekstu | Pokaż kwalifikację, personalizację, scoring, routing |
| M2 | **VCMS niewidoczny** | Target Blok 6: "To może być najcenniejszy element" | Nigdzie nie pokazany | Osobna sekcja: dashboard, konfiguracja, dane, logika |
| M3 | **Chat Assistant pokazany jako bajer** | Target Blok 11: "czego pilnuje, jakie pytania rozwiązuje" | Wzmianka bez głębi | Pokaż scope, dane, oszczędność czasu |
| M4 | **Animacje brak / nie wspierają sprzedaży** | Target Blok 10: "Tylko jeśli wspierają sprzedaż" | Framer Motion jest ale bez flow narrative | Animacja przepływu Lead → Wizard → AI → VCMS → Quote → Sale |
| M5 | **Portfolio card brak** | Target Blok 12: Każda karta projektu: Problem, Scope, Duration, Architecture, AI, Automation, Result | Obecnie tylko case study pages | Reusable portfolio card component |
| M6 | **Brak dowodów (Loom, screencasty)** | Target Blok 14: "Największa luka" | Brak | Loom, screen recordings, user flows, backend screenshots |
| M7 | **Wizualna hierarchia — wygląda jak portfolio a nie product company** | Target Blok 15: Inspiracje Linear, Vercel, Retool, Framer | Terminal/dark theme OK ale brak system presentacji | Przejść od "portfolio" do "product company" presentation |

---

## 3. TARGET ARCHITECTURE

### 3.1 New Page Structure

```
/                                    # Nowy Hero (5-elementowy) + System Metrics + Ecosystem Diagram
/about                              # Founder story: "Why I built my own system"
/solutions/                         # Solutions hub (zostaje ale updatowany positioning)
/solutions/inbox-killer/            # Zostaje, ulepszony case study format
/solutions/web-upgrade/             # Zostaje
/solutions/sales-funnel/            # Zostaje
/solutions/lead-magnet-game/        # Zostaje
/solutions/managed-automation/      # Zostaje
/results/                           # RESULTS → CASE STUDIES (rebrand + restrukturyzacja)
/results/inbox-killer/              # Nowy format: Before → Solution → Build → Result → Stack → Lessons
/results/agent-orchestrator/        # Nowy format
/results/sales-funnel/              # Nowy format
/results/advisory-modernisation/    # Nowy format
/results/owner-ecosystem/           # Zostaje (to jest dobre)
/ecosystem                          # NOWA: Diagram architektury + przepływ danych (NEW)
/behind-the-scenes                  # NOWA: VCMS, dashboard, konfiguracja, logika (NEW)
/pricing/                           # Zostaje (sprawdzić alignment z nowym positioningiem)
/how-it-works/                      # Zostaje (ew. updatować)
/blog/                              # Zostaje
/book-discovery/                    # Zostaje + Mollie payment
/legal/                             # Zostaje
```

### 3.2 Home Page — Nowa Struktura (10 sekcji)

```
1. HERO SECTION (5-elementowy)
   - Kim jesteś: "Conversion Systems Architect"
   - Dla kogo: "For productised service businesses"
   - Jaki rezultat: "Qualify leads, automate bookings, reduce admin 70%"
   - Dowód: "6 systems built • Custom VCMS • AI workflows"
   - CTA: Book Strategy Call

2. SYSTEM METRICS
   - 14-step wizard • 37 dynamic fields • 8 workflow automations
   - Custom VCMS • AI-powered support • 3 years iteration

3. ECOSYSTEM DIAGRAM (interactive SVG)
   - Visitor → Landing → Wizard → AI Assistant → Qualification → VCMS → Quote → Client
   - Każdy krok klikalny do odpowiedniego case study

4. PAIN GRID (zostaje — jest dobry)

5. CASE STUDIES (3 najlepsze w formie cards)
   - Każda card: Problem | Solution | Result

6. WHY THIS WORKS (zostaje — upgrade)

7. ARCHITECTURE TEASER
   - "Behind the Scenes" preview → link do /behind-the-scenes

8. PROCESS (zostaje)

9. TRUST & SAFETY (zostaje)

10. FINAL CTA (3-poziomowy)
    - Explore Solutions → Watch Demo → Book Strategy Call
```

### 3.3 Case Study — Nowy Format (każdy)

```yaml
BEFORE:
  - Problem klienta (before)
  - Co było broken / manual / slow

SOLUTION:
  - Architektura (jak to zbudowano)
  - Decyzje projektowe
  - Dlaczego tak a nie inaczej

BUILD:
  - Scope: [liczba ekranów, formularzy, workflow]
  - Duration: [czas]
  - Stack: [technologie]

RESULT:
  - Metrics: [lead time, conversion, time saved]
  - Screenshots / Loom
  - Cytat klienta

STACK:
  - Technologies used
  - Diagram przepływu

LESSONS:
  - Co bym zrobił inaczej
  - Co się sprawdziło

VIDEO:
  - 60-120 sekund walkthrough
  - link do Loom / YouTube
```

---

## 4. IMPLEMENTATION PLAN

### Phase 0 — Foundation (Tydzień 1)

**Priority: CRITICAL** — to odblokowuje całą resztę

| Task | Details | Files |
|------|---------|-------|
| **0.1 Hero rewrite** | Nowy 5-elementowy hero: "Conversion Systems Architect. For productised service businesses. Qualify leads, automate bookings, reduce admin 70%. 6 systems built • Custom VCMS • AI workflows. → Book Strategy Call" | `src/app/page.tsx` (HeroSection) |
| **0.2 System Metrics section** | Nowa sekcja po hero: 14-step wizard, 37 fields, 8 automations, custom VCMS, AI support, 3 years iteration | `src/app/page.tsx` (nowy komponent) |
| **0.3 Ecosystem diagram SVG** | Visitor → Landing → Wizard → AI → Qualification → VCMS → Quote → Client. Interaktywny, klikalny | `public/ecosystem/ecosystem-flow.svg` + nowy komponent |
| **0.4 Update positioning** | Zmienić tagline, meta description, og:title, header branding z "quietforge" na positioning aligned | `src/app/layout.tsx`, `Header.tsx` |

### Phase 1 — Case Studies Rebuild (Tydzień 2)

**Priority: HIGH** — największy brak

| Task | Details | Files |
|------|---------|-------|
| **1.1 Case study data model** | Nowy typ: Before/After, Solution, Build, Result, Stack, Lessons, Video | `src/lib/case-studies.ts` |
| **1.2 Case study component** | Reusable component dla nowego formatu | Nowy komponent |
| **1.3 Rewrite each case study** | 4 case studies w nowym formacie | `src/app/results/*/page.tsx` |
| **1.4 Portfolio card** | Nowy komponent karty projektu: Problem, Scope, Duration, Architecture, AI, Automation, Result | `src/components/ui/ProjectCard.tsx` |

### Phase 2 — Video & Media (Tydzień 3)

**Priority: HIGH** — buduje dowód i wiarygodność

| Task | Details | Files |
|------|---------|-------|
| **2.1 Ecosystem overview video** | 90s Loom: "How the whole ecosystem works" | External (Loom), embed w `/ecosystem` |
| **2.2 Wizard walkthrough** | 60s: kwalifikacja, personalizacja, automatyzacja | External, embed w odpowiednim case study |
| **2.3 Admin/VCMS walkthrough** | 60s: dashboard, dane, logika | External, embed w `/behind-the-scenes` |
| **2.4 Video embed components** | Loom/YouTube embed z poster image | `src/components/ui/VideoEmbed.tsx` |

### Phase 3 — New Pages (Tydzień 4)

**Priority: MEDIUM** — buduje głębię

| Task | Details | Files |
|------|---------|-------|
| **3.1 /ecosystem page** | Diagram + opis każdego komponentu + video | Nowa strona |
| **3.2 /behind-the-scenes page** | VCMS: dashboard screenshots, konfiguracja, dane, logika, automatyzacje | Nowa strona |
| **3.3 Founder story upgrade** | "Why I built my own system" — rozbudowa `/about` | `src/app/about/page.tsx` |

### Phase 4 — Conversion Polish (Tydzień 5)

**Priority: MEDIUM** — optymalizacja sprzedaży

| Task | Details | Files |
|------|---------|-------|
| **4.1 CTA 3-level** | Explore | Watch Demo | Book Strategy Call — na każdej stronie | `Button.tsx`, `FinalCtaBand.tsx` |
| **4.2 Animation flow** | Lead → Wizard → AI → VCMS → Quote → Sale animacja | Framer Motion flow |
| **4.3 Wizard highlighted** | "This is not a form — it's a sales process" — dedicated section | Nowy komponent lub sekcja |
| **4.4 Chat Assistant deep-dive** | What it guards, what questions it solves, time saved, data collected | Sekcja na home lub osobna |

### Phase 5 — Trust & Credibility (Tydzień 6)

**Priority: MEDIUM** — domyka wiarygodność

| Task | Details | Files |
|------|---------|-------|
| **5.1 Loom / screencasty** | Screen recordings każdego case study | External + embed |
| **5.2 Backend screenshots** | VCMS dashboard, configuration, data views | `public/artefacts/` |
| **5.3 Automation flow diagrams** | Każdy case study: diagram przepływu danych | SVG per case study |
| **5.4 Visual hierarchy audit** | Sprawdzić czy portfolio wygląda jak product company | Design review |

---

## 5. SPECYFICZNE ZMIANY W KODZIE

### 5.1 Nowy HeroSection

```tsx
// src/components/home/HeroSection.tsx
// OBECNIE: "Done-for-you systems for small business"
// DOCELOWO: 5-elementowy hero

interface HeroProps {
  headline: string    // "Conversion Systems Architect"
  audience: string    // "For productised service businesses"
  result: string      // "Qualify leads, automate bookings, reduce admin 70%"
  proof: string       // "6 systems built • Custom VCMS • AI workflows"
  cta: string         // "Book Strategy Call"
}
```

### 5.2 Nowa lib/case-studies.ts

```typescript
// Nowy typ danych
export interface CaseStudy {
  slug: string
  title: string
  client: string
  before: {
    problem: string
    context: string
  }
  solution: {
    architecture: string
    decisions: string[]
    diagram?: string
  }
  build: {
    scope: string
    duration: string
    stack: string[]
    screens: number
    workflows: number
    integrations: number
  }
  result: {
    metrics: Record<string, string>
    testimonial?: string
    videoUrl?: string
  }
  lessons: string[]
}
```

### 5.3 Nowy komponent EcosystemDiagram

Interaktywny SVG:
- Każdy krok (Visitor → Landing → Wizard → AI → Qualification → VCMS → Quote → Client)
- Kliknięcie → przejście do odpowiedniego case study / strony
- Responsive
- Dark theme

### 5.4 Nowy komponent SystemMetrics

Wyświetla wizualnie:
- 14-step wizard (z paskiem progress)
- 37 dynamic fields
- 8 workflow automations
- Custom VCMS
- AI-powered support
- 3 years of iteration

### 5.5 Nowy komponent ProjectCard

```tsx
interface ProjectCardProps {
  problem: string
  scope: string
  duration: string
  architecture: string
  ai: string
  automation: string
  result: string
  href: string
}
```

---

## 6. DESIGN GUIDELINES

### Nowe komponenty — spójność z Quietforge DS

- **Kolory:** `--qf-*` tokens (dark #0e0c0a, accent #e8a33d)
- **Font:** JetBrains Mono (monospace)
- **Radius:** 2px (sharp corners)
- **Borders:** 1px `--qf-border`
- **Motion:** Framer Motion (existing presets w `src/lib/motion.ts`)
- **Icons:** Lucide React (existing)

### Nowy visual language dla "product company"

- **Więcej whitespace** — sekcje z paddingiem `--qf-sp-16` do `--qf-sp-24`
- **System screenshots** z `--qf-border-bright` ramką
- **Metrics** w dużych liczbach (typography scale: 3xl-5xl)
- **Diagramy** w kolorze accent na dark tle
- **CTA** wariant "product" — mniej "book a call", więcej "explore / watch / start"

---

## 7. DEPLOYMENT & VERIFICATION

### Pre-deploy checklist (each phase)

- [ ] TypeScript: `npm run typecheck` — 0 errors
- [ ] ESLint: `npm run lint` — 0 errors
- [ ] Build: `npm run build` — succeeds
- [ ] Links: `npm run audit:links` — no broken links
- [ ] Responsive: test mobile (375px) + tablet (768px) + desktop (1440px)
- [ ] OG images: każdej nowej strony sprawdzić social preview

### Performance targets (Lighthouse)

| Metric | Target |
|--------|--------|
| Performance | ≥ 90 |
| Accessibility | ≥ 95 |
| Best Practices | ≥ 95 |
| SEO | ≥ 95 |

---

## 8. TIMELINE (6 tygodni)

```
Tydzień 1:  Foundation (Hero + Metrics + Diagram)
Tydzień 2:  Case Studies Rebuild (4 case studies + cards)
Tydzień 3:  Video & Media (5 videos + embed)
Tydzień 4:  New Pages (/ecosystem, /behind-the-scenes, /about upgrade)
Tydzień 5:  Conversion Polish (CTA, animation, wizard, chat)
Tydzień 6:  Trust & Polish (screencasts, screenshots, diagrams, audit)
```

### Quick wins (Day 1)

1. Hero rewrite — zmiana 1 komponentu
2. System Metrics section — nowy komponent
3. Positioning update — layout.tsx + header

### Big bets (weeks 2-4)

1. Ecosystem diagram SVG — największy wzrost sprzedaży
2. Case studies rebuild — największy brak
3. Video production — największy skok wiarygodności

---

## 9. SUCCESS METRICS

| Metric | Current | Target (po modernizacji) |
|--------|---------|-------------------------|
| Time to understand "what I buy" | >30s | <10s |
| Case studies quality | 4/10 | 9/10 |
| Architecture visibility | 2/10 | 9/10 |
| Proof of scale | 0/10 | 8/10 |
| Positioning (freelancer vs founder) | freelancer | technical founder |
| Avg. project value | ~1,200 EUR | 3,000-5,000 EUR |

---

## 10. APPENDIX: FILE CHANGES SUMMARY

### New files to create
```
src/components/home/SystemMetrics.tsx
src/components/home/EcosystemTeaser.tsx
src/components/ui/EcosystemDiagram.tsx
src/components/ui/VideoEmbed.tsx
src/components/ui/ProjectCard.tsx
src/components/ui/CaseStudyTemplate.tsx
src/app/ecosystem/page.tsx
src/app/behind-the-scenes/page.tsx
public/ecosystem/ecosystem-flow.svg
public/ecosystem/wizard-flow.svg
public/ecosystem/vcms-dashboard.png
```

### Existing files to modify
```
src/app/page.tsx                     # Home restrukturyzacja
src/app/layout.tsx                   # Meta, positioning
src/app/about/page.tsx               # Founder story upgrade
src/components/home/HeroSection.tsx  # 5-elementowy hero
src/components/home/FinalCtaBand.tsx # 3-poziomowy CTA
src/lib/case-studies.ts              # Nowy data model
src/lib/constants.ts                 # Update NAV, tagline
src/components/Header.tsx            # Update branding
src/app/results/inbox-killer/page.tsx
src/app/results/agent-orchestrator/page.tsx
src/app/results/sales-funnel/page.tsx
src/app/results/advisory-modernisation/page.tsx
```

### Files to redirect/remove (optional)
```
src/app/inbox-killer/page.tsx        # Redirect → /solutions/inbox-killer/
src/app/digital-modernization/page.tsx # Redirect → /solutions/web-upgrade/
```

---

## 11. BLAST ANCHOR

```
TASK_CLASSIFICATION: Feature (modernization)
TARGET_REPO: services
SCOPE: ~25 files (10 new + 15 modified)
DURATION: 6 phases
CONSTRAINTS: Conflicts:0 (flex-vcms), Zasada 11 (no autodeploy)
RISKS: Video production timeline depends on external factors
MISSING: Mollie payment integration (not in scope)
READY: YES (after F1 scan)
```
