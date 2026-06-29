# Handoff — Homepage CTA audit + v3.0 chrome sync (2026-06-29)

**Repo:** quietforge.flexgrafik.nl · **Build:** `npm run build` ✅ (34 routes)

## Cel / Goal
Faza 2 sesja 2.1: Audyt CTA distribution po stronie server-side + sync `SectionProgress.PROGRESS_GROUPS` + `HOME_SECTIONS` / `HOME_SECTION_MARKERS` do v3.0 (9 sekcji logicznych, 13 komponentów).

## Co zrobiono / What changed
- **CTA distribution audit** — pełna inwentaryzacja CTA per sekcja (9 sekcji v3.0), weryfikacja UR-02, SR-04, SR-05. Verdict: **0 HARD violations**, 2 borderline cases OK per canonical interpretation.
- **`SectionProgress.PROGRESS_GROUPS`** — 4×15 starych sekcji → 4×12 markerów v3.0 (start: 4, proof: 3, pick: 1, close: 4)
- **`HOME_SECTIONS` + `HOME_SECTION_MARKERS`** — 15→12 wpisów (usunięte `ResultsTeaser`, `LivingSystemTeaser`, `BehindTheScenes`)
- **HowIWork L1.5 text link** — DECIDED TO SKIP: naturalny flow sekcji #8→#9 już łączy method→commercial; dodanie linku konkurowałoby z FinalCtaBand L3

## Pliki / Files

| File | Action |
|------|--------|
| `docs/audits/2026-06-29-homepage-cta-audit-v3.md` | new |
| `src/components/layout/SectionProgress.tsx` | update (PROGRESS_GROUPS v3.0) |
| `src/content/ecosystem.ts` | update (HOME_SECTIONS + HOME_SECTION_MARKERS v3.0) |

## Weryfikacja / Verification
```bash
npm run typecheck   # pass
npm run build       # pass (34 routes)
rg '\[FILL:' src/   # 0 matches
```

## Post-deploy smoke (Dowódca)
1. `curl -sI https://quietforge.flexgrafik.nl/ | head -1` → HTTP 200
2. Verify SectionProgress renders 4 groups with correct section counts (start: 4, proof: 3, pick: 1, close: 4)
3. Verify no console errors on homepage (Lighthouse DevTools)

## Następny krok / Next steps
- **Faza 2 sesja 2.2**: Mobile optimization (tabele→cards, tap targets ≥44px, no horizontal scroll 375px) — `master-brief.md §12.2`
- **Faza 2 sesja 2.3**: Dead code cleanup (7 martwych komponentów: ResultsTeaser, LivingSystemTeaser, BehindTheScenes, WhyThisWorks, TrustSafety, SystemArchitecture, OwnerEcosystemTeaser)
- **Faza 2 sesja 2.4**: Lighthouse CI + OG refresh
- **Pricing drift audit** — osobny plan (W4 verify-action)
- **3 PNG deletions** in `docs/strategy/gtm/audits/assets/` — Commander's parallel work, NOT committed (intentionally excluded per AGENTS.md)
