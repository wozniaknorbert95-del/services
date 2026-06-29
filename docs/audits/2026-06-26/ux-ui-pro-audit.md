# Audyt UX/UI Pro — Quietforge (źródła w repo)

**Zakres:** analiza na podstawie kanonów i plików źródłowych (`src/`, `docs/`, `DESIGN-SYSTEM.md`) — bez live crawl.  
**Data:** 2026-06-26  
**Odniesienie:** [quietforge-ux-ia.md](../2026-06-25/quietforge-ux-ia.md)

---

## Werdykt

Strona ma **mocny fundament produktowy** (LOCKED home order, pricing SSoT, built-vs-planned, model kwalifikacji Book Discovery), ale nadal **sprzedaje architekturę szybciej niż ulgę od bólu** — przez gęstość sekcji, rozproszone CTA i filtr intencji „od tyłu” względem scrolla.

| Obszar | Ocena | Trend vs 25.06 |
|---|---:|---|
| IA / kolejność sekcji | 8.0/10 | ↑ |
| Proof & uczciwość | 8.5/10 | = |
| Clarity dla SMB | 6.5/10 | ↑ lekko |
| Dyscyplina CTA | 6.0/10 | = |
| Zgodność ui-ux-principles §7 (karty) | 5.5/10 | = |
| Book Discovery trust | 7.5/10 | ↑ |
| Design system | 7.5/10 | ↑ |

**Główny cel UX:** *ból → koszt → dowód → jeden następny krok* — zanim 8 repo i LOS.

---

## Co już działa

1. Home = `site-map.md` §3 — `src/app/page.tsx` (13 sekcji).
2. Book Discovery — model kwalifikacji spójny: request → fit check → payment link 24h (`book-discovery/page.tsx`, `BookDiscoveryForm.tsx`).
3. Pricing SSoT — `src/content/pricing.ts` → `PRICING_MATRIX`.
4. Sticky CTA po honesty gate — `StickyCta.tsx` + `conversion-pipeline.md`.
5. Intent filter dims, nie usuwa — UR-10 (`IntentRouter`, `PainGrid`).
6. `body` na `--qf-sans` — `globals.css` (czytelność SMB).

---

## P0

### P0-1 Filtr intencji niewidoczny przy Pain Grid

`PainGrid` reaguje na `useHomeIntent()`, ale chipy tylko w `IntentRouter` (sekcja 7). Użytkownik nie wie, dlaczego karty się przyciemniają.

**Fix UX:** chipy intencji nad Pain Grid lub „Clear filter” + wspólny pain router.

### P0-2 Pain cards bez „kosztu problemu”

`ui-ux-principles.md` §7 vs `ecosystem.ts` `PAIN_GRID` — brak linii ekonomicznej pilności.

### P0-3 Konkurencja L3 przed honesty gate

Hero statusbar + Spearhead = dwa filled CTA do Wizarda obok Book Map (`HeroSection.tsx`, `SpearheadSpotlight.tsx`). UR-02 / conversion-pipeline L3.

### P0-4 Rozjazd kanonu L3 vs copy

`conversion-pipeline.md` mówi „Pay €290 and pick a slot”; kod mówi request + payment link po kwalifikacji. Ujednolicić hero ↔ landing ↔ pipeline.

---

## P1

- **Home cognitive load** — 8 repo bez expand (`IntentRouter.tsx`).
- **SectionProgress** — dekoracja, nie nawigacja (`SectionProgress.tsx`).
- **Hero statusbar** — duplikat secondary + metryki techniczne.
- **Repo cards** — `// repo_XX` przed outcome (`IntentRouter.tsx` L131–141).
- **Book Discovery form** — 7+ pól bez steppera (`BookDiscoveryForm.tsx`).
- **Zagnieżdżony `data-home-section`** — `TrustAndObjections.tsx`.

---

## P2

| ID | Problem | Plik |
|---|---|---|
| P2-1 | Inline `style={{}}` | `PainGrid.tsx`, `IntentRouter.tsx` |
| P2-2 | Brak „Show all” przy filtrze | `IntentRouter` |
| P2-3 | `h1` 3.5rem mobile | `globals.css` |
| P2-4 | EN UI / NL ICP | metadata vs marketing |

---

## Plan (UX only)

**Tydzień 1:** filtr przy Pain + koszt problemu + L3 copy + hero CTA cleanup.  
**Tydzień 2:** IntentRouter 4+expand, SectionProgress klikalny, form 2-step, Trust data attrs.  
**Tydzień 3:** inline styles → tokens, mobile hero type, audyt `/solutions/*`.

---

## Następny audyt

Route-level: `/solutions/*` pod L3 band i pricing z matrix.
