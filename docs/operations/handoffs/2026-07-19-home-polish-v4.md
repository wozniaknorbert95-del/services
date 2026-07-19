# Handoff — Home polish v4 sections + Pain router (2026-07-19)

**Repo:** quietforge.flexgrafik.nl (services) · **Build:** `npm run build` ✅ (26 sitemap routes)

## Cel / Goal

Polerka każdej sekcji home + PainGrid routera po IA v4 — copy, spacing, qf-* tokens, zero inline styles, design-system compliance.

## Co zrobiono / What changed

- **PainGrid:** `data-intent` accents (no `style={{}}`), flex cards + CTA at bottom, lead badge, focus ring, tighter copy
- **Spearhead / Honesty / Why / Pricing / Final:** shared `qf-home-*` + section CSS; buttons `qf-btn-fill` / `qf-btn-ghost`
- **Pricing:** removed glow shadow; Eyebrow + featured border only
- **WhyItWorks:** copy from `WHY_IT_WORKS`; safety block under one H2
- **Content:** Pain / Spearhead / Readiness / Final / Pricing strings tightened
- **Hero:** dual-brand muted; visual wrap spacing

## Pliki / Files

| File | Action |
|------|--------|
| `src/app/globals.css` | polish tokens (pain, spearhead, honesty, why, final, btn) |
| `src/components/home/PainGrid.tsx` | polish |
| `src/components/home/SpearheadSpotlight.tsx` | polish |
| `src/components/home/BuiltVsPlanned.tsx` | polish |
| `src/components/home/WhyItWorks.tsx` | polish |
| `src/components/home/FinalCtaBand.tsx` | polish |
| `src/components/sections/Pricing.tsx` | polish |
| `src/content/conversion-copy.ts` | WHY_IT_WORKS, FINAL_CTA, PRICING_SECTION, SPEARHEAD |
| `src/content/ecosystem.ts` | PAIN_GRID copy |
| `src/content/readiness.ts` | honesty eyebrow/lead |

## Weryfikacja / Verification

```bash
npm run typecheck   # pass
npm run build       # pass
rg 'style=\{\{' src/components/home  # 0
```

## Post-deploy smoke (Dowódca)

1. `/` — Pain cards: intent left border + Quote first lead  
2. Spearhead CTAs + 4 metrics align  
3. Honesty 4 cards + link  
4. Why: one H2, safety + objections  
5. Pricing: Map featured, no glow shadow  
6. Final CTA Book Map  

## Następny krok / Next steps

- **Ship** na komendę Dowódcy  
- Optional: IntentRouter polish na `/solutions/`
