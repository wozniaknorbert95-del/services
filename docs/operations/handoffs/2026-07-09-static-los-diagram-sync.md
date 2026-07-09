# Handoff — Static LOS diagram sync (Option A) (2026-07-09)

**Repo:** services.flexgrafik.nl · **Build:** `npm run build` ✅ (34 routes)

## Goal

Synchronize the shared static LOS diagram (`los-architecture.svg`) with current SSoT truth (human canvas labels, Jadzia COI LIVE copy), fix dead `/#los-teaser` links site-wide, add static validation pipeline, regenerate companion PDF.

## Files changed

| File | Change |
|------|--------|
| `public/gratka/los-architecture.svg` | Human labels (Wizard, Lead Game, Jadzia COI…), COI subtitle, bounded-writes ACT copy |
| `public/gratka/los-architecture.md` | Think = COI; links → `/founder/#system-diagram` |
| `public/gratka/los-architecture.pdf` | Regenerated via `npm run generate:artefacts` |
| `docs/design/los-diagram-layout.json` | `think.subtitle` synced |
| `scripts/validate-static-los.mjs` | **New** — static SSoT gate (labels, no Strategist, no los-teaser in `src/`) |
| `scripts/audit-los-diagram.mjs` | Imports static gate + `/how-it-works/` smoke |
| `scripts/audit-navigation.mjs` | HOME_SECTIONS/ANCHORS aligned with site-map v3 (no los-teaser) |
| `package.json` | `audit:static-los`, `audit:los-diagram` scripts |
| `src/app/how-it-works/page.tsx` | Link + alt text |
| `src/app/results/page.tsx` | Link → founder Technical map |
| `src/app/results/owner-ecosystem/page.tsx` | Button → Interactive Technical map |
| `src/components/casestudy/*` | LOS footnote links fixed |
| `src/lib/constants.ts` | `ROUTES.founderSystemDiagram` — canonical link (DRY) |

## Verification

```text
node scripts/validate-static-los.mjs  → PASS
npm run typecheck                     → PASS
npm run build                         → PASS (34 routes)
npm run generate:artefacts            → los-architecture.pdf regenerated
```

Playwright `audit:los-diagram` against localhost:3000 timed out (port busy / stale server) — re-run post-deploy against production.

## Post-deploy smoke (Commander)

1. https://quietforge.flexgrafik.nl/how-it-works/ — diagram shows **Wizard**, **Jadzia COI**, not repo keys or Strategist
2. Link **See interactive Technical map** → `/founder/#system-diagram` scrolls to diagram
3. https://quietforge.flexgrafik.nl/founder/#system-diagram — still interactive, labels match static SVG
4. Case study footnotes → founder, not home hash
5. `npm run audit:static-los` on CI or locally before ship

## Next steps

- [ ] Commit + push master (Vercel CD)
- [ ] `node scripts/audit-los-diagram.mjs https://quietforge.flexgrafik.nl` after deploy
- [ ] P2 backlog: build-time SVG export from `los-diagram-layout.json` + `system-diagram.ts` (prevent manual drift)
