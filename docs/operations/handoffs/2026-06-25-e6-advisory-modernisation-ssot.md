# Handoff — E-6 Advisory Modernisation Case Study SSoT (2026-06-25)

**Repo:** services.flexgrafik.nl · **Build:** `npm run build` ✅ (34 routes)

## Cel / Goal

Last standard `CaseStudyLayout` results page moved to content SSoT. Anonymised reference — no invented client outcomes (MR-16).

## Co zrobiono / What changed

- **NEW** `advisory-modernisation-case-study.ts` — meta, before/after, pillars, phases, safety, hard boundary, web-upgrade bridge
- Page refactored — structural JSX only (pillar/safety grids); copy from content module
- Hub #07 — measurement from `caseMeasurements.advisory`; meta `in delivery`

## Pliki / Files

| File | Action |
|------|--------|
| `src/content/advisory-modernisation-case-study.ts` | new |
| `src/app/results/advisory-modernisation/page.tsx` | refactor |
| `src/lib/case-studies.ts` | update #07 |

## Weryfikacja / Verification

```bash
npm run typecheck   # pass
npm run build       # pass (34 routes)
# no const BEFORE/AFTER in advisory page
```

## Post-deploy smoke

- [ ] `/results/advisory-modernisation/` — 3 pillars, 6 phases, hard boundary card, Web Upgrade bridge
- [ ] PDF/SVG download buttons work
- [ ] Hub #07 measurement line matches proof.ts

## Next steps

- **E-7** — whatsapp-discovery-pilot (custom layout, optional)
- **BL-02** — commercial traction (Commander)
