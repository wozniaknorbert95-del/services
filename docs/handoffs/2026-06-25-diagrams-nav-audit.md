# Handoff — Diagrams LOS + Nav/Footer Audit (2026-06-25)

**Repo:** services.flexgrafik.nl · **Build:** `npm run build` ✅ (34 routes)

## Cel / Goal

Replace stale `owner-ecosystem-map.svg` with canonical LOS diagram everywhere; professional nav/footer cleanup; StickyCta alignment; orphan WhatsApp pilot linked from `/results/`.

## Co zrobiono / What changed

### Diagrams (LOS SSoT)
- All UI refs to `ownerEcosystemMapSvg` → `losArchitectureSvg` (home teaser, `/results/` hero, owner-ecosystem `#los`, case card).
- Deprecated `ownerEcosystemMap*` in `gratka.ts` (file retained, zero component imports).
- OG: `results-owner-ecosystem.svg`, `home.svg` subtitle → LOS.
- `/how-it-works/` — new „The system behind the method” section with LOS diagram.
- `CaseStudyLayout` + `LeadMagnetCaseStudyLayout` + results hub cards — LOS footnote.
- Product flow SVGs unchanged (inbox, wizard journey, etc.).

### Nav / footer
- Header: About → **Founder's System** (`/founder/`); dropdown `shadow-lg` → border-only `qf-dropdown`.
- Footer company: removed About duplicate; added **Architecture (LOS)**; WhatsApp removed from Get started (SocialLinks only).
- `StickyCta`: trigger `built-vs-planned`; WhatsApp primary; uses `HEADER_CTA`.
- `solutions/page.tsx`: routes/labels from `SOLUTIONS_NAV`.
- WhatsApp pilot → `CASE_STUDIES` #08 (hub visible).

## Pliki / Files

| File | Action |
|------|--------|
| `OwnerEcosystemTeaser.tsx`, `results/page.tsx`, `owner-ecosystem/page.tsx` | LOS diagram |
| `gratka.ts` | deprecate old map |
| `CaseStudyLayout.tsx`, `LeadMagnetCaseStudyLayout.tsx` | LOS footnote |
| `how-it-works/page.tsx` | LOS section |
| `public/og/results-owner-ecosystem.svg`, `home.svg` | regenerate copy |
| `navigation.ts`, `Header.tsx`, `Footer.tsx`, `StickyCta.tsx` | nav audit |
| `solutions/page.tsx`, `case-studies.ts` | drift + orphan fix |
| `site-map.md` §6, `conversion-pipeline.md` | canon sync |

## Weryfikacja / Verification

```bash
node scripts/sanitize-gratka-svgs.mjs  # all bad_chars=0
npm run typecheck   # pass
npm run build       # pass (34 routes)
```

## Post-deploy smoke (Dowódca)

1. Home LOS = `/results/` hero = `/results/owner-ecosystem/#los` — same `los-architecture.svg`.
2. No `owner-ecosystem-map.svg` in page HTML (view-source grep).
3. Header: Founder's System → `/founder/`; footer Architecture (LOS) link works.
4. Mobile StickyCta after Built vs Planned — WhatsApp filled, Book outline.
5. `/results/` shows WhatsApp pilot card #08.

## Następny krok / Next steps

- Desktop StickyCta floating pill (Phase 2).
## Follow-up (2026-06-25 verification pass)

| Gap | Fix |
|-----|-----|
| PDF pipeline still on stale `owner-ecosystem-map.md` | Added `los-architecture.md` + `losArchitecturePdf` in `gratka.ts`; script generates `los-architecture.pdf` |
| `/about/` removed from footer (plan: keep accessible) | Restored **About** in `FOOTER_COMPANY` (header stays Founder) |
| `/legal/` OG 404 | Added `public/og/legal.svg` |
| Results hub missing PDF download | `CASE_EXTRAS['owner-ecosystem']` + owner-ecosystem hero buttons |
| `site-map.md` §6 drift | Footer list includes About |

**Deferred (unchanged):** delete deprecated `owner-ecosystem-map.svg`; desktop StickyCta pill; live smoke on production.

