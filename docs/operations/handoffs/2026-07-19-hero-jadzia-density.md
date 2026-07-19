# Handoff — Hero Jadzia visual + density (2026-07-19)

**Repo:** quietforge.flexgrafik.nl · **Build:** `npm run build` ✅ (36 routes / sitemap 26)  
**Shipped:** `1312301` · **Close:** `5e7ad15` · **Branch:** `master` (origin in sync)

## Cel / Goal
Home hero must tell one story: ops cockpit live + Book Map, with Jadzia (not Wizard) as the proof visual, and PSE beats that do not eat the first viewport.

## Co zrobiono / What changed
- Swapped `HERO.proofVisual` Wizard checkout → `/gratka/jadzia-commander-home.png` + plain-language caption
- Trimmed `HERO.subline`; shortened `HERO.beats` (Problem / System / Effect)
- PSE: 3-column grid ≥640px; tighter proof-strip/beat spacing; image `max-height` + `object-fit: contain`
- Canon: `site-map.md` §4 recommended strip + proof-visual note (Jadzia). §3 home order unchanged (`page.tsx` not touched)

## Pliki / Files

| File | Action |
|------|--------|
| `src/content/conversion-copy.ts` | update |
| `src/components/home/HeroSection.tsx` | update (994×909) |
| `src/app/globals.css` | update (`.qf-hero-*`) |
| `docs/strategy/site-map.md` | §4 sync |
| `docs/operations/SESSION-ANCHOR.md` | pointer |
| `docs/operations/handoffs/2026-07-19-hero-jadzia-density.md` | this handoff |

## Weryfikacja / Verification
```bash
npm run typecheck   # pass
npm run build       # pass (36 routes)
rg '\[FILL:' src/   # 0 matches
```
Local DOM smoke: `imgSrc=/gratka/jadzia-commander-home.png`, beats `display:grid` 3-col, caption ops/approve.

## Post-deploy smoke (Dowódca)
1. Hard refresh `https://quietforge.flexgrafik.nl/` — hero = COI Commander Start (not Wizard)
2. Desktop ~1280: Book Map + proof strip + PSE one row + Jadzia panel
3. Mobile ~390: beats hidden; Book Map above fold
4. Caption/alt: no Wizard / zzpackage trial

## Następny krok / Next steps
- Optional: landscape crop of Commander if square hero frame still feels tall
- Deferred (home audit): `?intent=` URL sync; Jadzia spearhead jargon trim (F0–F3 / HITL)
- Untracked LinkedIn/inspire media in working tree — out of scope; do not mix into this ship
