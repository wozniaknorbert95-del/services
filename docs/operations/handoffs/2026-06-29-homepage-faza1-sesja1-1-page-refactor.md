# Handoff — Homepage Faza 1 Sesja 1.1 page.tsx refactor (2026-06-29)

**Repo:** services.flexgrafik.nl · **Build:** ✅ PASS (34 routes) · **Typecheck:** ✅ PASS · **Branch:** master

## Cel / Goal

Sesja 1.1 (`page-feature`) — refactor `src/app/page.tsx` do nowej kolejności 9 sekcji per `site-map.md §3 v3.0`. Usunięcie `LivingSystemTeaser` + `BehindTheScenes` z importów i użycia. Zasada 1-1-1: 1 file (`page.tsx`).

## Co zrobiono / What changed

### `src/app/page.tsx` — refactor

| Zmiana | Szczegóły |
|--------|-----------|
| Usunięte importy | `LivingSystemTeaser`, `BehindTheScenes` (2 imports) — pliki komponentów zostają (dead code, cleanup w sesji 2.3) |
| Usunięte użycie | `<LivingSystemTeaser variant="teaser" />`, `<BehindTheScenes />` (2 linie) |
| Swap kolejności | `SystemMetrics` ↔ `SpearheadSpotlight` — Spearhead teraz pierwszy (sekcja 5 "Live proof — Wizard" per v3.0 row 5: `SpearheadSpotlight` + `SystemMetrics` compact) |
| Comment update | `/** Home section order: docs/strategy/site-map.md §3 */` → `/** Home section order: docs/strategy/site-map.md §3 v3.0 (9 sections, 2026-06-29) */` |
| ResultsTeaser | Zostaje tymczasowo (merge do sekcji 6 w sesji 1.3 per §12) |

### Nowa kolejność renderowanych komponentów (13 = 9 sekcji logicznych + chrome)

| # | Komponent | Sekcja logiczna (v3.0) | Status |
|---|-----------|------------------------|--------|
| 1 | `HeroSection` | §1 Hero | bez zmian |
| 2 | `DualBrandBand` | §2 Dual-brand | bez zmian |
| 3 | `FeaturedStrip` | §3 Featured paths | bez zmian |
| 4 | `PainGrid` | §4 Pain router | bez zmian |
| 5 | `SpearheadSpotlight` | §5 Live proof — Wizard (a) | swap z #6 |
| 6 | `SystemMetrics variant="compact"` | §5 Live proof — Wizard (b) | swap z #5 |
| 7 | `BuiltVsPlanned variant="compact"` | §6 Honesty gate | bez zmian (refactor w 1.3) |
| 8 | `ResultsTeaser` | TEMPORARY — merge do §6 w sesji 1.3 | zostaje |
| 9 | `IntentRouter` | §7 Pick your module | bez zmian (refactor w 1.4) |
| 10 | `HowIWork` | §8 How it works | bez zmian (refactor w 1.5) |
| 11 | `TrustAndObjections` | §9 Trust + Pricing + Final CTA (a) | bez zmian (refactor w 1.6) |
| 12 | `Pricing` | §9 Trust + Pricing + Final CTA (b) | bez zmian |
| 13 | `FinalCtaBand` | §9 Trust + Pricing + Final CTA (c) | bez zmian (refactor w 1.6) |
| chrome | `SectionProgress` + `StickyCta` | — | bez zmian |

**Redukcja:** 15 → 13 komponentów renderowanych (-2). Docelowo 9 sekcji logicznych po sesjach 1.2–1.6 (merging).

## Strategy Check

| Rule | Status |
|------|--------|
| Home order (site-map §3 v3.0 LOCKED, 9 sections) | ✅ transitional (ResultsTeaser temp per §12) |
| Page arc Problem→System→Effect | ✅ |
| Single L3 / header = L3 Book | ✅ |
| Intent badge on every card (§4) | ✅ |
| Positioning (Conversion Systems Architect) | ✅ |
| Anti-chaos: site-map.md updated w/ page.tsx | ✅ (sesja 1.0 upfront) |

**Verdict:** COMPLIANT (transitional state)

## Pliki / Files

| File | Action |
|------|--------|
| `src/app/page.tsx` | edit — refactor (remove 2 imports + 2 usage, swap Spearhead/SystemMetrics, comment v3.0) |
| `docs/operations/handoffs/2026-06-29-homepage-faza1-sesja1-1-page-refactor.md` | new — ten handoff |

## Weryfikacja / Verification

```bash
npm run typecheck   # PASS
npm run build       # PASS (34 routes, bez zmian)
git diff src/app/page.tsx  # 2 imports removed, 2 usage removed, 1 swap, 1 comment update
```

## Post-deploy smoke (Commander)

Po push master → Vercel CD:
1. `https://quietforge.flexgrafik.nl/` — home renderuje bez błędów
2. Sekcja LOS teaser (Sense/Decide/Act/Learn) NIE obecna na home (usunięte LivingSystemTeaser)
3. Sekcja governance (VCMS dashboard screenshots) NIE obecna na home (usunięte BehindTheScenes)
4. Spearhead (Wizard Cash Engine) pojawia się PRZED metrykami (swap)
5. ResultsTeaser nadal widoczne (temporary, merge w sesji 1.3)
6. Mobile: brak horizontal scroll, sticky CTA po BuiltVsPlanned

## Następne kroki

1. **Commit + push** (czeka na GO Dowódcy)
2. **Sesja 1.2** (`page-feature`) — refactor sekcji #5: `SpearheadSpotlight` + `SystemMetrics` compact połączone. **W2: terminal mock → screenshot only**. Skrócić do 4–5 punktów.
3. **Sesja 1.3** — refactor sekcji #6: `BuiltVsPlanned` compact 4 rows (Wizard, Jadzia COI, Agent OS, Governance) + merge `ResultsTeaser`. **W3 de-jargon `LangGraph`**. **T4**.
4. **Sesja 1.4** — `IntentRouter` 6 kart (hide `flex-vcms` + `flexgrafik-meta`)
5. **Sesje 1.5–1.6** — `HowIWork` skrócony, `TrustAndObjections` + `Pricing` + `FinalCtaBand` połączone
6. **Sesja 1.7** — W1 copy polish ResultsTeaser (jeśli zostaje w sekcji 6)

## Uwagi

- `SectionProgress` PROGRESS_GROUPS (hardcoded 4 grupy z 15 section ids) — functionally OK (IntersectionObserver filtruje null), ale "proof" group ma teraz tylko `repo-router` (było 4 sekcje). Update w sesji 2.1 (UX).
- `HOME_SECTIONS` w `ecosystem.ts` (15 entries) — stale list, nie breaks runtime. Update w sesji 2.1.
- `LivingSystemTeaser.tsx` + `BehindTheScenes.tsx` — pliki zostają (dead code, cleanup w sesji 2.3 po weryfikacji że nie są importowane nigdzie).
- Anti-chaos rule 1 (page.tsx → site-map §3): ✅ site-map zaktualizowane w sesji 1.0 upfront
- Anti-chaos rule 2 (HARD rule → skill): N/A — brak canon edit w tej sesji
- Anti-chaos rule 4 (handoff): ✅ ten plik
