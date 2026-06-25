# Handoff — Site Map Canon Lock

**Data:** 2026-06-17  
**Plan:** Site Map Canon Lock (A: Conversion Systems + inspiracja pro)

## Zrobione

### FAZA 0 — Porządki
- Usunięto: `docs/poprawiony plan`, `docs/handoffs/2026-06-17-poprawiony-plan-alignment.md`, `docs/plans/modernization-plan-v1.md`
- `conversion-pipeline.md` — usunięto MVP 5 sekcji; home → `site-map.md §2`
- `docs/strategy/README.md` + `AGENTS.md` — site-map jako #2 w kolejności czytania

### FAZA 1 — Mapa
- **`docs/strategy/site-map.md`** — 14 sekcji home (LOCKED), 8 repo, intent legend, routes, CTA

### FAZA 2 — Pliki bazowe
- **`src/content/ecosystem.ts`** — moduły, repo, intenty, pain grid, HOME_SECTIONS
- **`src/content/conversion-copy.ts`** — hero, anti-positioning, objections
- **`src/content/proof.ts`** — sync nagłówka + `ownerEcosystem` measurement
- **`src/lib/case-studies.ts`** — 6 wpisów (+ lead-magnet, owner-ecosystem)
- **`src/content/proof.README.md`** — kolejność wypełniania

### FAZA 3 — Kod
- **Home** — 14 sekcji wg site-map; bez `EcosystemVideo`
- **Hero** — Conversion Systems Architect z `conversion-copy.ts`
- **IntentRouter** + **PainGrid** + **ResultsTeaser** + `/results/` — czytają `ecosystem.ts`; **IntentBadges**
- **`/results/lead-magnet/`** — nowy case study
- **`/solutions/managed-automation/`** — `SolutionLayout` + FAQ
- **layout.tsx** — Conversion Systems Architect metadata + JSON-LD

## Weryfikacja
- `npm run typecheck` — OK
- `npm run build` — OK (31 routes)

## Następny krok (poza tym planem)
- Wideo — ostatnia faza; wypełnij `proof.ts` gdy gotowe
- OG dla `/results/lead-magnet/` — obecnie `/og/results.svg` (placeholder)
