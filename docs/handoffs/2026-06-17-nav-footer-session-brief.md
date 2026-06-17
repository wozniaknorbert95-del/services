# Session brief — Nav + Footer (professional pass)

**Priorytet:** P1 — global chrome musi być spójny z `site-map.md` i `conversion-pipeline.md`  
**Scope:** 1 moduł = `src/lib/navigation.ts` + `Header.tsx` + `Footer.tsx` + `layout.tsx` OG fix  
**Nie w scope:** gratka PDF footers, `/founder` rewrite, sticky CTA

---

## Problem

Nav i footer są **poza warstwą content** — duplikują linki, nie czytają `conversion-copy.ts`, rozjazd z canonem IA.

| Plik | Issue |
|------|-------|
| `constants.ts` | `NAV_ITEMS` + `SOLUTION_DROPDOWN` |
| `Footer.tsx` | Osobne `SOLUTION_LINKS` + `COMPANY_LINKS` (3× duplikacja) |
| `Header.tsx` | Hardcoded CTA string |
| `layout.tsx` | OG/twitter = „Done-for-you systems” (stare pozycjonowanie) |

---

## Target canon (binding)

Źródła: `conversion-pipeline.md` §6, `site-map.md` §5–6, `ui-ux-principles.md` §4

### Header — max 5 items + 1 CTA

| # | Label | Route | Uwaga |
|---|-------|-------|-------|
| 1 | **Systems** | `/results/` | Było „Results” — label canon = Systems |
| 2 | How It Works | `/how-it-works/` | |
| 3 | Solutions | dropdown | |
| 4 | Pricing | `/pricing/` | |
| 5 | About | `/about/` | Canon dopuszcza `/founder/` — wybrać jeden primary |
| — | **Blog** | `/blog/` | **Wyrzucić z header** → tylko footer |
| CTA | Book your Automation Map | `/book-discovery/` | Z `CTAS.bookAutomationMap` |

### Solutions dropdown — kolejność

1. Inbox Killer — badge `Start here`
2. Sales Funnel
3. Web Upgrade
4. Lead Magnet Game
5. Managed Automation — badge `MRR`

Link do hubu: `/solutions/` (opcjonalnie pierwszy item „All solutions”)

### Footer — 4 kolumny

| Col | Zawartość |
|-----|-----------|
| Brand | quietforge + **Conversion Systems Architect** (1 linia z `POSITIONING.label`) + micro-trust z `HERO.microTrust` lub skrót |
| Solutions | Ten sam dropdown co header (import z nav manifest) + link `/solutions/` |
| Company | How It Works · Results · Pricing · Trust · About · Founder · Blog |
| Get started | L3 CTA · email (`EMAIL`) · opcjonalnie WhatsApp (`WHATSAPP`) |

### Footer bottom bar

- Legal → `/legal/`
- Artefakty (3 PDF z `ARTEFACTS`)
- Portfolio link **bez** „Pillar 3” — copy: „See the full architecture →” (EN, B2B)
- © year Quietforge

---

## Implementacja (1 sesja)

### Krok 1 — `src/lib/navigation.ts` (nowy)

```ts
// Single source: header nav, solutions dropdown, footer columns
export const HEADER_NAV = [...]
export const SOLUTIONS_NAV = [...]
export const FOOTER_SOLUTIONS = SOLUTIONS_NAV
export const FOOTER_COMPANY = [...]
export const FOOTER_LEGAL = [{ label: 'Legal', href: ROUTES.legal }]
export const FOOTER_ARTEFACTS = [...]
```

Import `ROUTES`, `ARTEFACTS` z `constants.ts`.  
CTA label z `CTAS` z `conversion-copy.ts`.

### Krok 2 — `Header.tsx`

- Czyta `HEADER_NAV`, `SOLUTIONS_NAV`, `CTAS.bookAutomationMap`
- Mobile: accordion solutions, CTA na dole (już jest — tylko podłączyć manifest)
- Tap targets ≥ 44px (sprawdzić padding mobile links)

### Krok 3 — `Footer.tsx`

- Usunąć lokalne `SOLUTION_LINKS` / `COMPANY_LINKS`
- Brand column: positioning line
- Dodać Legal + artefakty
- Email z `EMAIL` constant

### Krok 4 — `layout.tsx`

- `openGraph.title` / `twitter.title` → Conversion Systems (spójne z `metadata.title.default`)
- `openGraph.description` → jak root `description`

### Krok 5 — `constants.ts`

- `NAV_ITEMS` / `SOLUTION_DROPDOWN` → re-export z `navigation.ts` LUB usuń i migruj importy

### Krok 6 — Docs

- `site-map.md` §5: dopisać nav/footer binding → `navigation.ts`
- Handoff po sesji

---

## Definition of Done

- [ ] Jedna tablica linków — zero duplikacji między Header a Footer
- [ ] Header: 5 items + CTA, Blog tylko w footer
- [ ] Dropdown order zgodny z canonem
- [ ] Footer: legal + 3 artefakty + positioning line
- [ ] Brak „Pillar 3” / „Done-for-you” w chrome
- [ ] CTA z `conversion-copy.CTAS`
- [ ] `npm run typecheck` + `npm run build`
- [ ] Manual: mobile menu + desktop dropdown

---

## Decyzja dla Dowódcy (przed kodem)

1. **About vs Founder** w header — rekomendacja: **About** (`/about/`) w nav, Founder tylko footer (głębsza historia)
2. **Header CTA** — site-map §6 = L3 Book (zostaje); conversion-pipeline cold/warm = Phase 2 (session flag)

---

*Brief: 2026-06-17 · po audycie content-layer-polish*
