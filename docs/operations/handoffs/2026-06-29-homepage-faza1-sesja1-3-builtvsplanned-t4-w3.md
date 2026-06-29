# Handoff — Homepage Faza 1 Sesja 1.3 BuiltVsPlanned T4+W3 + ResultsTeaser removal (2026-06-29)

**Repo:** services.flexgrafik.nl · **Build:** ✅ PASS (34 routes) · **Typecheck:** ✅ PASS · **Branch:** master

## Cel / Goal

Sesja 1.3 (`page-feature`) — refactor sekcji #6 `BuiltVsPlanned` compact per `mapa.txt` sekcja 6 + `site-map.md §3 v3.0` row 6:
- **T4:** 4 rows = Wizard, Jadzia COI, Agent OS, Governance (zamień Lead Magnet → Governance)
- **W3:** de-jargon `5-node LangGraph HITL pipeline` → "5-step supervised workflow"
- Merge `ResultsTeaser` — decyzja: **usunięte z home** (nie w v3.0 9 sekcjach; proof na `/results/` via Featured card #2)

## Co zrobiono / What changed

### `src/content/readiness.ts` — HOME_ROW_KEYS + homeCapability

| Dodane | Szczegóły |
|--------|-----------|
| `homeCapability?: string` | Nowe optional pole w `ReadinessRow` — de-jargonised dla home compact; fallback do `capability` |
| `HOME_ROW_KEYS` | `['zzpackage', 'jadzia-core', 'agent-os', 'flex-vcms']` — 4 biznesowe rows per T4 |
| `getHomeReadinessRows()` | Helper — filtruje READINESS_ROWS by HOME_ROW_KEYS, zachowuje order |

### `homeCapability` values (de-jargonised per mapa.txt §4 "Zero nazw narzędzi")

| Module | `capability` (full, /results/owner-ecosystem/) | `homeCapability` (home compact) |
|--------|------------------------------------------------|--------------------------------|
| Wizard Cash Engine | `161 SKU catalog, Mollie checkout, 9-screen configurator` | `Self-service configurator with open pricing — calm order form or designer handoff.` |
| Jadzia COI | `Phase A+B LIVE: orders INT-002, leads, GA4, content calendar · Procurement Brain Phase C` | `Orders, leads and content tracked live — procurement brain on roadmap.` |
| Agent OS | `5-node LangGraph HITL pipeline, hybrid VPS` (**W3 VIOLATION**) | `5-step supervised workflow with human approval before deploy — EU VPS.` (**W3 fixed**) |
| VCMS governance | `8-repo scan, KODA assistant, conflict detection, audit trail` | `Catches content and repo drift before deploy — Conflicts: 0 target.` |

**Pozostałe 4 rows** (Lead Magnet, Trust Portal, Constitution, Mission Control) — bez `homeCapability` (nie na home compact; zostają w pełnej tabeli na `/results/owner-ecosystem/`).

### `src/components/home/BuiltVsPlanned.tsx` — compact używa getHomeReadinessRows()

| Zmiana | Old | New |
|--------|-----|-----|
| Import | `READINESS_ROWS, type ReadinessStatus` | + `getHomeReadinessRows` |
| `COMPACT_ROW_LIMIT = 4` | hardcoded slice | ❌ removed |
| Compact rows | `READINESS_ROWS.slice(0, COMPACT_ROW_LIMIT)` (first 4: Wizard, Lead Magnet, Jadzia, Agent OS) | `getHomeReadinessRows()` (T4: Wizard, Jadzia COI, Agent OS, Governance) |
| Compact capability | `{row.capability}` | `{row.homeCapability ?? row.capability}` |
| Comment | "Compact on home (max 4 rows)" | "Compact on home (4 rows per site-map §3 v3.0: Wizard, Jadzia COI, Agent OS, Governance)" |

### `src/app/page.tsx` — ResultsTeaser removal

| Zmiana | Szczegóły |
|--------|-----------|
| Import | ❌ removed `import ResultsTeaser from '@/components/home/ResultsTeaser'` |
| Usage | ❌ removed `<ResultsTeaser />` z sekcji 6 |

**ResultsTeaser.tsx** plik zostaje (dead code, cleanup w sesji 2.3). W1 (de-jargon effect lines) — N/A, komponent nie na home.

## Strategy Check

| Rule | Status | Note |
|------|--------|------|
| Home order (site-map §3 v3.0 LOCKED, 9 sections) | ✅ | sekcja 6 = BuiltVsPlanned compact; ResultsTeaser removed (nie w v3.0) |
| Page arc Problem→System→Effect | ✅ | BuiltVsPlanned = honesty gate (proof); P→S→E w hero beats + /results/ |
| Single L3 / header = L3 Book | ✅ | no CTA change |
| Intent badge on every card (§4) | N/A | BuiltVsPlanned = status badges (LIVE/PARTIAL), nie intent |
| Positioning (Conversion Systems Architect) | ✅ | no positioning change |
| Anti-chaos: site-map.md updated w/ page.tsx | ✅ | site-map v3.0 zaktualizowane w sesji 1.0 upfront |
| SR-16 (4 rows: Wizard, Jadzia COI, Agent OS, Governance) | ✅ | T4 implemented via HOME_ROW_KEYS |
| MR-11 (no LangGraph/MCP/LLM SMB-facing) | ✅ | W3 fixed: homeCapability de-jargonised |

**Verdict:** COMPLIANT

## Pliki / Files

| File | Action |
|------|--------|
| `src/content/readiness.ts` | edit — + `homeCapability` field (4 rows), + `HOME_ROW_KEYS`, + `getHomeReadinessRows()` |
| `src/components/home/BuiltVsPlanned.tsx` | edit — compact używa `getHomeReadinessRows()` + `homeCapability ?? capability`; remove `COMPACT_ROW_LIMIT` |
| `src/app/page.tsx` | edit — remove ResultsTeaser import + usage |
| `docs/operations/handoffs/2026-06-29-homepage-faza1-sesja1-3-builtvsplanned-t4-w3.md` | new — ten handoff |

## Weryfikacja / Verification

```bash
npm run typecheck   # PASS
npm run build       # PASS (34 routes)
git diff --stat     # 3 files changed, 25 ins / 7 del
```

## Post-deploy smoke (Commander)

Po push master → Vercel CD:
1. `https://quietforge.flexgrafik.nl/` — sekcja 6 (BuiltVsPlanned) renderuje 4 rows: Wizard, Jadzia COI, Agent OS, Governance
2. Brak "Lead magnet game" w compact (T4 — zastąpione Governance)
3. Brak "5-node LangGraph HITL pipeline" (W3 — zastąpione "5-step supervised workflow")
4. Brak "161 SKU catalog, Mollie checkout" (de-jargon — "Self-service configurator with open pricing")
5. Brak "Phase A+B LIVE: orders INT-002, leads, GA4" (de-jargon — "Orders, leads and content tracked live")
6. Brak sekcji ResultsTeaser (3 P→S→E cards) — proof na /results/ via Featured card #2
7. "View full built vs planned map →" link działa → /results/owner-ecosystem/
8. Pełna 8-row tabela na /results/owner-ecosystem/ bez zmian (capability, nie homeCapability)

## Następne kroki

1. **Commit + push** (czeka na GO Dowódcy)
2. **Sesja 1.4** (`page-feature`) — refactor sekcji #7: `IntentRouter` 6 kart (hide `flex-vcms` + `flexgrafik-meta`). Mocno skrócone opisy (1–2 zdania). Zachować outcome-first labels + StatusBadge + filter dim.
3. **Sesja 1.5** — `HowIWork` skrócony (bez "AI agents orchestrate", "fixed rules")
4. **Sesja 1.6** — `TrustAndObjections` + `Pricing` + `FinalCtaBand` połączone + LOS link
5. **Sesja 1.7** — W1 N/A (ResultsTeaser usunięte z home)
6. **Faza 2** — UX, mobile, cleanup (dead code: ResultsTeaser, LivingSystemTeaser, BehindTheScenes), seo

## Uwagi

- `ResultsTeaser.tsx` + `LivingSystemTeaser.tsx` + `BehindTheScenes.tsx` — 3 martwe komponenty po sesjach 1.1+1.3; cleanup w sesji 2.3
- `SectionProgress` PROGRESS_GROUPS — "proof" group ma teraz tylko `repo-router` (było 4 sekcje); update w sesji 2.1
- `HOME_SECTIONS` w `ecosystem.ts` (15 entries) — stale list; update w sesji 2.1
- `caseMeasurements` w `proof.ts` z `LangGraph`/`Langfuse`/`WP SSH` — nie na home (ResultsTeaser usunięte); zostają na /results/* case study pages (deep pages, tech details OK)
- Anti-chaos rule 1 (page.tsx → site-map §3): ✅ site-map v3.0 zaktualizowane w sesji 1.0
- Anti-chaos rule 2 (HARD rule → skill): N/A — brak canon edit
- Anti-chaos rule 4 (handoff): ✅ ten plik
