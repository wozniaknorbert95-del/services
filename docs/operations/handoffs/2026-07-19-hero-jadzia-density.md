# Handoff — Hero Jadzia visual + density (2026-07-19)

**Repo:** quietforge.flexgrafik.nl · **Build:** `npm run build` ✅ (36 routes / sitemap 26) · **Shipped:** pending commit hash below

## Cel / Goal
Align home hero proof with ops-cockpit strip (Jadzia, not Wizard) and shrink Problem/System/Effect into one compact row.

## Co zrobiono / What changed
- `HERO.proofVisual` → `/gratka/jadzia-commander-home.png` + plain-language caption (no Wizard / zzpackage trial)
- Shortened `HERO.beats` + trimmed subline; dualBrand unchanged
- PSE layout: 3-column grid ≥640px; tighter strip/beat spacing; image max-height + `object-fit: contain`
- site-map §4 recommended copy synced (strip + proof visual note)

## Pliki / Files

| File | Action |
|------|--------|
| `src/content/conversion-copy.ts` | update |
| `src/components/home/HeroSection.tsx` | image dims 994×909 |
| `src/app/globals.css` | `.qf-hero-*` density |
| `docs/strategy/site-map.md` | §4 sync |
| `docs/operations/SESSION-ANCHOR.md` | pointer update |

## Weryfikacja / Verification (deploy-ready)
```bash
npm run typecheck   # pass
npm run build       # pass (36 routes)
rg '\[FILL:' src/   # 0 matches
```
Local DOM smoke (prior): `imgSrc=/gratka/jadzia-commander-home.png`, beats `display:grid` 3-col, caption ops/approve.

## Post-deploy smoke (Dowódca)
1. Hard refresh `https://quietforge.flexgrafik.nl/` — hero visual = COI Commander Start (not Wizard)
2. Desktop ~1280: Book Map + proof strip + PSE one row + Jadzia panel
3. Mobile ~390: beats hidden; Book Map above fold
4. Caption/alt: no Wizard / zzpackage trial

## Następny krok / Next steps
- Optional: landscape crop of Commander if square frame still feels tall on hero
- Deferred from home audit: `?intent=` URL sync; Jadzia spearhead jargon trim
