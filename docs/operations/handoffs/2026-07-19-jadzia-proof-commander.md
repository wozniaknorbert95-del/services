# Handoff — Jadzia COI Proof: Commander + interactive workflow (2026-07-19)

**Repo:** quietforge.flexgrafik.nl (services) · **Build:** `npm run build` ✅ (26 routes)

## Cel / Goal

Zamienić fałszywy Proof (Agent OS map + Inbox video) na prawdziwy Commander UI + interaktywny workflow (bez video — cockpit jeszcze nie do nagrania).

## Capture notes (P0)

| Item | Detail |
|------|--------|
| URL | https://api.zzpackage.flexgrafik.nl/commander/ |
| Auth | JWT session present (`coi_commander_jwt`); priorities/analytics API failed → portfolio-safe fixtures injected in chrome for shot |
| Assets | `public/gratka/jadzia-commander-home.png`, `jadzia-commander-data-health.png` |
| Bench | `docs/operations/media/jadzia-commander-bench/` |
| PII scrub | Auth panel / undo / CS form hidden; no emails/order IDs; fixture priorities are system-level only |
| Caption honesty | Captions state LIVE chrome · redacted portfolio view |

## Co zrobiono

- ScreenKeys `jadziaCommander` / `jadziaDataHealth` + proof.ts ready
- `JadziaProofGallery` (Start ↔ Data Health tabs)
- `JadziaWorkflowDiagram` (4 phases + 3 pipelines + keyboard + reduced-motion)
- `CaseStudyLayout` / `ProofMediaGrid`: `workflowSlot` + `screenSlot`
- Architecture de-dupe → link `#proof`
- Home spearhead + IntentRouter thumb → Commander Home PNG

## Pliki

| File | Action |
|------|--------|
| `public/gratka/jadzia-commander-*.png` | new |
| `src/components/results/JadziaProofGallery.tsx` | new |
| `src/components/results/JadziaWorkflowDiagram.tsx` | new |
| `src/components/ui/ProofMediaGrid.tsx` | update |
| `src/components/casestudy/CaseStudyLayout.tsx` | update |
| `src/app/results/jadzia-coi/page.tsx` | rewrite proof/architecture |
| `src/content/jadzia-coi-case-study.ts` | interactive workflow SSoT |
| `src/content/proof.ts`, `ecosystem.ts`, `conversion-copy.ts` | wire |
| `src/app/globals.css` | `.qf-coi-*` |

## Weryfikacja

```bash
npm run typecheck   # pass
npm run build       # pass
# jadzia page: no videoKey=inboxKiller / screenKey=workflowMap
```

## Post-deploy smoke

1. `/results/jadzia-coi/#proof` — gallery Start + Data Health
2. Workflow: click Sense→Guard; switch Brief / Content / MB shadow
3. Keyboard arrows on phase tabs
4. Home Jadzia spearhead shows Commander PNG (not architecture SVG)
5. No Inbox Demo empty slot

## Następny krok

- Re-capture when Commander API priorities load live (replace fixtures)
- Video when cockpit final
