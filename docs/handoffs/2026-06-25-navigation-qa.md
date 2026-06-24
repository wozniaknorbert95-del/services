# Handoff — LOS gap closure + navigation QA (2026-06-25)

**Repo:** services.flexgrafik.nl · **Build:** `npm run build` ✅ (34 routes) · **Ship:** `b4a6d89` on `master`

## Cel / Goal

Close remaining LOS/nav gaps from the diagrams + footer audit, verify navigation and home sections comprehensively, ship to production, and confirm live smoke.

## Co zrobiono / What changed

- **LOS PDF:** `los-architecture.md` → `los-architecture.pdf` via `generate:artefacts`; `losArchitecturePdf` in `gratka.ts`; download buttons on `/results/` and owner-ecosystem page
- **Hash scroll:** `HashScroll` in root layout + `scroll-padding-top` / `section[id] scroll-margin-top` — fixes `/#los-teaser`, `/#repo-router`, etc. after Next.js hydration
- **Section ids:** `id="los-teaser"`, `id="built-vs-planned"` for anchor targets
- **Footer:** restored **About** → `/about/` (header stays Founder's System); `site-map.md` §6 synced
- **Results hub:** every case card always shows “Read full case study” (fixes orphan WhatsApp #08); LOS footnote on all non–owner-ecosystem cards
- **Assets:** `public/og/legal.svg` (was 404 on `/legal/`)
- **QA scripts:** `scripts/audit-navigation.mjs`, `scripts/audit-navigation-extended.mjs`

## Pliki / Files

| File | Action |
|------|--------|
| `src/components/layout/HashScroll.tsx` | new |
| `src/app/layout.tsx` | update — mount HashScroll |
| `src/app/globals.css` | update — scroll padding/margin |
| `src/components/home/LivingSystemTeaser.tsx` | update — `id="los-teaser"` |
| `src/components/home/BuiltVsPlanned.tsx` | update — `id="built-vs-planned"` |
| `src/lib/gratka.ts` | update — `losArchitecturePdf` |
| `src/lib/navigation.ts` | update — About in footer |
| `src/app/results/page.tsx` | update — case card links + PDF |
| `src/app/results/owner-ecosystem/page.tsx` | update — LOS copy + PDF button |
| `public/gratka/los-architecture.md` | new |
| `public/gratka/los-architecture.pdf` | new |
| `public/og/legal.svg` | new |
| `scripts/generate-artefact-pdfs.mjs` | update — LOS md, deprecate old map |
| `scripts/audit-navigation.mjs` | new |
| `scripts/audit-navigation-extended.mjs` | new |
| `docs/strategy/site-map.md` | update — §6 footer About |
| `docs/handoffs/2026-06-25-diagrams-nav-audit.md` | update — follow-up table |

## Weryfikacja / Verification

```bash
npm run typecheck   # pass
npm run build       # pass (34 routes)
node scripts/audit-navigation.mjs http://localhost:3001          # PASS
node scripts/audit-navigation-extended.mjs http://localhost:3001 # PASS
```

## Post-deploy smoke (executed 2026-06-25)

**Production:** https://quietforge.flexgrafik.nl · deploy from `b4a6d89`

| Check | Result |
|-------|--------|
| `node scripts/audit-navigation.mjs https://quietforge.flexgrafik.nl` | **PASS** — 25 routes, 15 home sections, 5 anchors, `#los` |
| `node scripts/audit-navigation-extended.mjs https://quietforge.flexgrafik.nl` | **PASS** — footer 10 routes, 3 assets, mobile menu, intent router |
| HEAD `/gratka/los-architecture.svg` | 200 |
| HEAD `/gratka/los-architecture.pdf` | 200 |
| HEAD `/og/legal.svg` | 200 |
| GET `/results/whatsapp-discovery-pilot/` | 200 |

Note: audit script may log `?_rsc=` prefetch 404s during case-study page loads — direct asset HEAD checks return 200; not a production asset failure.

## Następny krok / Next steps

- Optional: remove deprecated `owner-ecosystem-map.svg/.pdf` after external bookmark check
- Deferred: desktop StickyCta pill
- Re-run `node scripts/audit-navigation.mjs https://quietforge.flexgrafik.nl` after any nav/home change
