# Handoff — Wizard demo professional re-capture (2026-06-25)

**Build:** `npm run build` ✅ (34 routes)

## Problem

v1 `wizard-demo.mp4` appeared static — script stuck on Stap 3 Voertuig; no visible funnel progression.

## Fix

Rewrote `scripts/record-wizard-demo.mjs` with step-specific selectors, cart build to €210, checkout Stap 9, FFmpeg tail trim (`-sseof -68`).

## Output

| Metric | Value |
|--------|-------|
| File | `public/gratka/wizard-demo.mp4` |
| Size | ~7.8 MB |
| Duration | 68s |
| Screens | Intro → Fundament → Voertuig → Werkkleding → mid steps → Checkout form |
| Cart | €254 incl. BTW (Logo + Softshell + Werkbroek) |

`videos.wizard`: `ready: true`, `duration: '68s'`

## Verify

```bash
npm run record:wizard   # re-capture
npm run typecheck && npm run build
```

Post-deploy: `/solutions/sales-funnel/` — native video plays checkout summary.

## Commander

Visual review MP4 — confirm no PII in form placeholders; cookie banner visible is OK.
