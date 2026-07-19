# Handoff — Home proof truth sync v6.0 (2026-07-19)

**Repo:** quietforge.flexgrafik.nl (services) · **Build:** `npm run build` ✅ (26 sitemap routes)

## Cel / Goal

Home v6: usuń stale sekcje cash/governance/honesty; przepisz Jadzia z MKT-BRAIN-PRO; zsynchronizuj Design Intake z flexgrafik-inspire TRUTH-SNAPSHOT; amend HARD SR-12/16/17.

## Co zrobiono / What changed

- **Canon:** SR-12/16/17 + `site-map.md` §3 **v6.0** + strategy-check skill
- **Home prune:** OUT `VcmsTrustStrip`, `WizardVisualizerCompact`, `BuiltVsPlanned` (komponenty zostają w repo)
- **Hero / SectionProgress:** proof strip + Proof group = tylko `jadzia-spearhead`
- **Jadzia spearhead:** Marketing Brain shadow F0–F3 · HITL · no Act; drift sync na `/results/jadzia-coi/`
- **INSPIRE /results:** drop „lab/prototype”; PARTIAL live supervised path

## Pliki / Files

| File | Action |
|------|--------|
| `docs/canons/strategy-rules.md` | SR-12/16/17 amend |
| `docs/strategy/site-map.md` | §3 v6.0 |
| `.agents/skills/strategy-check/SKILL.md` | v6.0 lock |
| `src/app/page.tsx` | prune 3 sections |
| `src/components/layout/SectionProgress.tsx` | proof = Jadzia only |
| `src/content/conversion-copy.ts` | HERO + JADZIA_SPEARHEAD |
| `src/content/jadzia-coi.ts` + case-study | MB shadow |
| `src/content/results-page.ts` | Design Intake lead |
| `src/content/sales-funnel-case-study.ts` | INSPIRE badge/limits |
| `src/content/proof.ts`, `ecosystem.ts`, `module-showcase.ts` | truth sync |
| `src/lib/case-studies.ts`, `constants.ts`, `solutions/page.tsx` | lab→live path |

## Weryfikacja / Verification

```bash
npm run typecheck   # pass
npm run build       # pass (26 routes)
rg "lab proof|supervised prototype" src/   # 0 (home-facing)
```

## Post-deploy smoke (Dowódca)

1. `/` — brak eyebrows `cash engine · secondary`, `governance`, `honesty`
2. `/` — IntentRouter → Jadzia (MB shadow copy) → Why → Pricing → Final
3. `/results/#design-intake` — lead bez „lab”; Open Design Intake → prod URL
4. `/results/jadzia-coi/` — Marketing Brain shadow metric widoczny
5. `/solutions/sales-funnel/` — INSPIRE badge `PARTIAL — live supervised path`

## Następny krok / Next steps

- Opcjonalnie: soft-scroll chip→modules (deferred z v5.2)
- Owner-ecosystem pełny rewrite nie w zakresie
