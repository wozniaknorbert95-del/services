# Handoff — Coherence wave 2: PDF/OG + honesty + home funnel (2026-07-19)

**Repo:** services.flexgrafik.nl · **Build:** `npm run build` ✅ (36 routes) · **Shipped:** `65a2903` → `master` · Vercel success · prod smoke OK

## Cel / Goal

Close remaining Truth×Offer audit items (P0→P1): public artefacts/OG honesty, Inbox/Advisory/How-it-works wording, home quote-first funnel, LI/FB SKU 167, blog sitemap + solutions metadata.

## Co zrobiono / What changed

**P0 — artefacts & OG**
- Public MD/SVG: `AI Systems Architect` → `Conversion Systems Architect`
- Inbox PDF source: test-environment process proof (not production-mailbox claim)
- Regenerated all `generate:artefacts` PDFs
- OG: `about.svg` (CSA), `managed-automation.svg` (€349–€890/mo), new `solutions-sales-funnel.svg` + `solutions-web-upgrade.svg`

**P0 — honesty copy**
- Inbox case card: no “2+ years in production” mailbox claim
- Advisory: `Target state — in delivery` label via `CaseStudyLayout.problemAfterLabel`
- `/how-it-works/`: removed “runs itself”; qualified days/two-weeks timeline

**P1 — home + sync**
- `PainGrid` order quote-first; `site-map.md` §3 updated (anti-chaos)
- Home Pricing: “Most popular” on Automation Map
- IntentRouter: single primary CTA + text link to results
- LI/FB profile-copy + related strategy docs: **167** SKUs
- Blog MDX honesty note; sitemap includes 3 blog slugs (26 URLs)
- `/solutions/` layout metadata matches Wizard spearhead ladder

**Excluded:** LinkedIn/m0b media bulk + assemble scripts (still untracked)

## Pliki / Files

| File | Action |
|------|--------|
| `public/artefacts/*`, `public/gratka/*.md|svg|pdf` | update + PDF regen |
| `public/og/about.svg`, `managed-automation.svg` | update |
| `public/og/solutions-sales-funnel.svg`, `solutions-web-upgrade.svg` | new |
| `public/sitemap.xml`, `scripts/generate-sitemap.mjs` | update |
| `src/app/how-it-works/page.tsx` | update |
| `src/app/results/advisory-modernisation/page.tsx` | update |
| `src/app/solutions/layout.tsx` | update |
| `src/components/casestudy/CaseStudyLayout.tsx` | update |
| `src/components/home/IntentRouter.tsx` | update |
| `src/components/sections/Pricing.tsx` | update |
| `src/content/ecosystem.ts` | update |
| `src/lib/case-studies.ts` | update |
| `src/app/blog/posts/under-the-hood-*.mdx` | update |
| `docs/strategy/site-map.md` §3 | update |
| `docs/strategy/linkedin/*`, `facebook/*` | SKU 167 |

## Weryfikacja / Verification

```bash
npm run typecheck   # pass
npm run build       # pass (36 routes)
npm run generate:artefacts  # pass
rg 'hello@|AI Systems Architect|€99' public/   # 0 matches
```

## Post-deploy smoke (Dowódca)

1. `/` — PainGrid starts with Quotes; Pricing badge on Automation Map; IntentRouter one primary CTA  
2. `/how-it-works/` — no “runs itself”  
3. `/results/advisory-modernisation/` — “Target state — in delivery”  
4. `/results/inbox-killer/` + PDF download — test-environment wording  
5. OG share preview: `/solutions/sales-funnel/`, `/solutions/managed-automation/`, `/about/`  
6. Paste LI/FB profile-copy (167) when ready  

## Post-ship verification (2026-07-19)

- GitHub Actions `Deploy to Vercel` run `29678161445` — success  
- Prod needles cleared: `runs itself`, `Most popular entry`, Managed OG €99, AI Systems Architect  
- Inbox MD: test-environment proof live (denies production-mailbox claim)  

## Następny krok / Next steps

- Commander: paste LI/FB profile-copy (**167**) · Featured V2 · INSPIRE v3 · Facebook FlexGrafik-only  
- Do not bulk-commit LinkedIn media (still untracked by design)  
- P2 optional: founder/trust OG polish; meta `eco-polish-01-meta` merge  

