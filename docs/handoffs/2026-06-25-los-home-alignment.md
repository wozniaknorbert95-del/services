# Handoff — LOS Home Alignment (2026-06-25)

**Repo:** services.flexgrafik.nl · **Build:** `npm run build` ✅ (34 routes)

## Cel / Goal

Align the home page with `flexgrafik-meta/docs/core/living-system-architecture.md`: full LOS section (6 layers + Memory, life loop, three brains, diagram), always-visible 8-repo router with LOS layer badges, remove competing SMB pipeline from home.

## Co zrobiono / What changed

- **LOS content SSoT:** `src/content/los-architecture.ts` — definition, 6 layers, life loop, three brains, repo layer map.
- **LivingSystemTeaser:** upgraded to full LOS — diagram SVG, layer grid, life loop strip, three brains, CTAs to `#repo-router`.
- **IntentRouter:** refactored to `ECOSYSTEM_REPOS` — always 8 cards, intent filter dim/highlight (never hide), LOS layer badges, `id="repo-router"`.
- **Home:** removed `SystemArchitecture` from `page.tsx` (component file retained).
- **Canon sync:** `site-map.md` §2 (14 sections), `ecosystem.ts` HOME_SECTIONS + `losLayers` on repos, `SectionProgress`, `brain.md`, strategy-check skill.

## Pliki / Files

| File | Action |
|------|--------|
| `src/content/los-architecture.ts` | new |
| `src/content/los-copy.ts` | re-export shim |
| `src/content/ecosystem.ts` | `losLayers`, HOME_SECTIONS, markers |
| `public/gratka/los-architecture.svg` | new |
| `src/components/home/LivingSystemTeaser.tsx` | rewrite |
| `src/components/home/IntentRouter.tsx` | rewrite (8 repos) |
| `src/app/page.tsx` | remove SystemArchitecture |
| `src/app/globals.css` | `qf-los-*` helpers |
| `src/components/layout/SectionProgress.tsx` | 14-section groups |
| `docs/strategy/site-map.md` | §2 LOCKED order |
| `brain.md` | LOS home note |
| `.agents/skills/strategy-check/SKILL.md` | home order update |

## Weryfikacja / Verification

```bash
npm run typecheck   # pass
npm run build       # pass (34 routes)
```

## Post-deploy smoke (Dowódca)

1. `https://quietforge.flexgrafik.nl/` — LOS section shows 6 layers + life loop + three brains + diagram.
2. Scroll to `#repo-router` — **8 repo cards** visible with and without intent filter active.
3. Click intent filter — matching cards highlight, non-matching dim (count stays 8).
4. `data-home-section="los-teaser"` and `data-home-section="repo-router"` present in HTML.
5. Section progress rail: System group no longer references `system-architecture`.

## Następny krok / Next steps

- Optional: relocate `SystemArchitecture` SMB pipeline to `/how-it-works` as buyer-journey subsection.
- PF-12+ from portfolio plan if any remain (LinkedIn polish, etc.).
