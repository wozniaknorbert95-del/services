# Next Session Prompt — Portfolio 100% Closure (Polish + Artefacts)

> **Start here.** Repositioning merged to `master` (2026-06-13). Deploy live via Vercel CD.
> **This session goal:** domknąć pozostałe ~5% z briefu repositioning — NIE rozbudowa case studies (to osobne sesje).

---

## Stan po merge (dziś)

| Element | Status |
|---|---|
| About — AI Systems Architect | Live |
| How I work (5 faz) | Live |
| Trust & Safety (6 kart) | Live |
| `/results` — 4 case studies, zero `[X]` | Live |
| Artefakty `.md` + linki | Live |
| Hero repositioning | **Otwarte** |
| OG `home.svg` + alt | **Otwarte** |
| PDF artefakty (branded A4) | **Otwarte** |
| Visual polish (spacing, mobile timeline) | **Otwarte** |

**Merge:** PR #1 → `master` @ `8d6322e`  
**Deploy:** Vercel CD — status `success`  
**Handoff:** `docs/handoffs/2026-06-13-portfolio-repositioning-ai-architect.md`

---

## Cel sesji: 100% closure (1 moduł)

Jedna sesja = jeden moduł. Scope **ściśle** poniżej — bez case study expansion.

### Task A — Hero repositioning (priorytet 1)

**Problem:** Górny fold nadal mówi „Done-for-you" / „See what we fix" — pierwsze wrażenie = freelancer, dopiero niżej Norbert.

**Pliki:** `src/components/home/HeroSection.tsx`, ewentualnie `HeroSection` metadata w `page.tsx`

**Copy direction (nie wymyślać faktów):**
- H1: systems architect angle, nie „autopilot generic"
- Sub: named voice lub bezpośrednie „I design…" — spójne z `AboutArchitect`
- Secondary CTA: „See how I work" → `#how-i-work` zamiast „See what we fix"
- Zachować terminal panel + status bar (sygnał systemowca)

**DoD:** Hero + About brzmią jak jedna osoba, jedna pozycja.

---

### Task B — OG image + meta alignment (priorytet 2)

**Problem:** `page.tsx` metadata = „AI Systems Architect", ale `home.svg` alt nadal „Done-for-you systems".

**Pliki:** `public/og/home.svg`, `src/app/page.tsx` (openGraph alt)

**DoD:** Social preview = nowe positioning. Opcjonalnie `results.svg` — „Real systems, already running".

---

### Task C — PDF artefakty (priorytet 3)

**Problem:** Klient dostaje `.md` — nie „enterprise forwardable" PDF.

**Pliki:** `public/artefacts/*.pdf` (nowe), update `ARTEFACTS` w `constants.ts`

**Approach:**
- Export z istniejących `.md` — dark/mono header lub clean light A4
- Spójny header: Norbert · AI Systems Architect · Quietforge · contact
- Linki na stronie → `.pdf` (fallback `.md` opcjonalnie)

**DoD:** 3 PDFy downloadowalne, branded, bez `[X]` w sample (zamienić na „[your estimate]" lub example ranges).

---

### Task D — Visual polish pass (priorytet 4, jeśli czas)

**Scope minimalny:**
- `HowIWork` timeline — mobile 360px, brak horizontal scroll
- Hover/focus states na kartach About/Trust
- Spacing między sekcjami — spójność `qf-alt` bands

**DoD:** Responsive 360/768/1280, axe Critical/Serious = 0, build pass.

---

## Poza scope tej sesji (kolejne sesje — gratka sprzedażowa)

Każdy case study = **osobna sesja** (Reguła 1-1-1). Przygotowane pod rozbudowę:

| Sesja | Case | Docelowa „gratka" | Źródło prawdy |
|---|---|---|---|
| CS-1 | Inbox Killer | Mini landing / downloadable „Inbox audit checklist" + diagram flow | `blog/under-the-hood-how-inbox-killer-works`, live spearhead |
| CS-2 | Multi-agent orchestrator | Architecture one-pager (anonim.) + „agent card" sample | `jadzia-core`, `agents.md`, `workflow-manual.md` |
| CS-3 | Sales Funnel / Wizard | „Configurator ROI" sheet + 7-step screenshot flow | `zzpackage.flexgrafik.nl`, `global-rules.md` §1.3 |
| CS-4 | Advisory firm (KFA) | „Web + AI assistant scope" (anonim.) + AVG layer summary | KFA engagement, anonymised |

**Zasada:** zero fabricated metrics. Każda gratka = process-proof + CTA → `/book-discovery/`.

Szczegóły: `docs/handoffs/ROADMAP-case-study-expansion.md`

---

## Build gate

```bash
npm run typecheck
npm run build
```

Commit style: `feat: hero repositioning`, `feat: branded PDF artefacts`, etc. — osobne commity per task.

---

## Read before coding

1. `docs/handoffs/2026-06-13-portfolio-repositioning-ai-architect.md`
2. `docs/workspace-.../portfolio-sekcje/IMPLEMENTATION-PLAN.generated.md` — Out of scope section
3. `src/components/home/AboutArchitect.tsx` — voice reference
4. `src/app/globals.css` — tokens only, no parallel CSS

---

> **Begin:** `git checkout master && git pull` → Task A (Hero) → build → commit → Task B → …
