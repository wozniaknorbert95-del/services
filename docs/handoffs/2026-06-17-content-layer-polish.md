# Handoff — Content layer polish (2026-06-17)

## Cel sesji

Weryfikacja plików bazowych (`src/content/*`) i usunięcie rozjazdów między canonem, kodem a live — bez szybkich łatek.

## Co zrobiono

### Warstwa content (single source of truth)

| Plik | Status |
|------|--------|
| `ecosystem.ts` | `CaseMeasurementKey`, `HOME_SECTION_MARKERS`, 8 modułów + 8 repo |
| `conversion-copy.ts` | `ABOUT`, `CTAS`, `SITE_GOAL` — Conversion Systems Architect |
| `proof.ts` | Typy z `ecosystem.ts` (`ScreenKey`, `VideoKey`, `CaseMeasurementKey`) |
| `metrics-display.ts` | Metryki home bez hedgingu (`~12h/week` usunięte) |
| `index.ts` | Barrel export dla agentów |
| `proof.README.md` | Zaktualizowany (4 pliki + barrel) |

### Komponenty — czytają z content, nie hardcode

- `SystemMetrics` → `metrics-display.ts` + `proof.metrics`
- `ResultsTeaser` → `CASE_STUDIES` + `caseMeasurements[manifestKey]`
- `case-studies.ts` → `manifestKey` + `detailHref` per entry (6 studiów)
- `/about` → `conversion-copy.ABOUT` (zero „AI Systems Architect”)
- `/results/owner-ecosystem` → `ECOSYSTEM_REPOS` (8 repo, nie 10 hardcoded MODULES)
- `/results` hub → `c.detailHref` z case-studies (bez duplikatu w CASE_EXTRAS)

### Home — 14 sekcji + weryfikacja DOM

Wszystkie sekcje mają `data-home-section` zgodnie z `HOME_SECTION_MARKERS` / site-map §2.

Usunięto `VideoSlot` z `OwnerEcosystemTeaser` — brak `[FILL: ecosystem video]` na home.

### Martwy kod usunięty

- `EcosystemVideo.tsx`
- `AboutArchitect.tsx` (stare AI Systems copy)
- `LadderTeaser.tsx`
- `StickyCta.tsx` (nieużywany)

### Build

```
npm run typecheck  ✓
npm run build      ✓ (31 routes)
```

## Rozjazdy zamknięte

| Było | Jest |
|------|------|
| `/about` = AI Systems Architect | Conversion Systems Architect z `ABOUT` |
| owner-ecosystem: 10 MODULES vs 8 repo canon | `ECOSYSTEM_REPOS` |
| SystemMetrics hardcoded + hedging | `metrics-display.ts` |
| ResultsTeaser duplicate ROUTE maps | `case-studies.detailHref` |
| proof.ts loose `Record<string>` | Typed keys z ecosystem |
| Home bez `data-home-section` | 14 markerów w DOM |
| Video placeholder na home (ecosystem teaser) | Usunięty |

## Otwarte (świadomie poza scope)

- `[FILL: *]` na **case study** routes gdy video/screen nie ready — OK per plan (videos last phase)
- `BehindTheScenes` pokazuje VCMS video tylko gdy `videos.vcms.ready`
- `todo.json` / stare handoffy mogą wspominać usunięte komponenty — docs history, nie live

## Następny krok (propozycja)

1. Wypełnić `proof.ts` screens gdy PNG/SVG gotowe w `/public/gratka/`
2. Opcjonalnie: `FieldReports` / `/founder` audit pod Conversion Systems copy
3. Commit + push → Vercel CD

## Authority chain

```
inspiracja pro.md → docs/strategy/site-map.md → src/content/* → components/app
```
