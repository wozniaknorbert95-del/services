# Handoff — Lead magnet portfolio repair (2026-06-24)

**Repo:** services.flexgrafik.nl · **Build:** `npm run build` ✅ (33 routes)

## Cel / Goal

Rebuild `/results/lead-magnet/` from Agent OS clone into a professional B2B portfolio case study: one name (Gamified lead system for Dutch ZZP), Challenge/Insight/Solution narrative, Scope of work, 7-screen gallery, GA4 outcome events, custom layout — no dev jargon on client-facing copy.

## Co zrobiono / What changed

- Rewrote `lead-magnet-case-study.ts` as portfolio SSoT (hero, CIS, scope, outcome events, storyboard)
- New `LeadMagnetCaseStudyLayout` + `ProductGallery` — 7 sections, no `CaseStudyLayout`
- Captured 7 unique production screenshots via Playwright (`capture-lead-magnet-gallery.mjs`)
- Synced solution page, ecosystem m6, results hub alt, OG SVGs
- Updated `docs/13_DANE_PER_REPO_GOTOWE.md` § REPO 2 + app portfolio pack

## Pliki / Files

| File | Action |
|------|--------|
| `src/content/lead-magnet-case-study.ts` | rewrite |
| `src/content/proof.ts` | update gallery + measurements |
| `src/lib/case-studies.ts` | sync card copy |
| `src/components/casestudy/LeadMagnetCaseStudyLayout.tsx` | new |
| `src/components/casestudy/ProductGallery.tsx` | new |
| `src/app/results/lead-magnet/page.tsx` | rewrite |
| `src/app/solutions/lead-magnet-game/page.tsx` | rewrite |
| `src/app/solutions/lead-magnet-game/layout.tsx` | update metadata |
| `src/content/ecosystem.ts` | m6 effect sync |
| `src/app/results/page.tsx` | diagram alt |
| `public/gratka/lead-magnet-*.png` | 7 gallery captures |
| `public/og/results-lead-magnet.svg` | update title |
| `public/og/lead-magnet-game.svg` | update title |
| `scripts/capture-lead-magnet-gallery.mjs` | new capture script |
| `docs/13_DANE_PER_REPO_GOTOWE.md` | § REPO 2 sync |
| `app.flexgrafik.nl/docs/portfolio/LEAD-MAGNET-PORTFOLIO-PACK.md` | sync |

## Weryfikacja / Verification

```bash
npm run typecheck   # pass
npm run build       # pass (33 routes)
rg '\[FILL:' src/   # 0 matches
rg 'SSoT|Vitest|utm_|quiz widget' src/content/lead-magnet-case-study.ts src/app/solutions/lead-magnet-game/  # 0 matches
```

Strategy: Problem→System→Effect on case card + solution page · intent `money` on m6.

## Post-deploy smoke (Dowódca)

1. `/results/lead-magnet/` — H1 = "Gamified lead system for Dutch ZZP", 7 gallery cards, outcome table ≥8 events
2. `/solutions/lead-magnet-game/` — no quiz/utm jargon in body
3. `/results/` — lead-magnet card + flow diagram + "Play live game" link
4. OG previews: `results-lead-magnet.svg`, `lead-magnet-game.svg`
5. `node scripts/audit-404s.mjs` after deploy

## Następny krok / Next steps

- **Video (S6):** Export 45s CapCut per `leadMagnetVideoStoryboard` → set `videos.leadMagnet.url` + `ready: true` in `proof.ts`
- Optional: add real GA4 conversion % when Dowódca provides numbers → `leadMagnetOutcomeMetrics` in SSoT
