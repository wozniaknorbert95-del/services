# Handoff — Video P0 agency execution (2026-06-25)

**Repo:** services.flexgrafik.nl · **Build:** `npm run build` ✅ (34 routes)

## Cel / Goal

Close BL-03 wizard video blocker and prep automated capture pipeline for remaining five video slots per [`video-production-plan-2026-06-25.md`](../video-production-plan-2026-06-25.md).

## Co zrobiono / What changed

- **Automated wizard capture:** Playwright screen record → FFmpeg H.264 → `public/gratka/wizard-demo.mp4` (54s, ~3.2 MB)
- **`videos.wizard` shipped:** `url`, `duration: '54s'`, `ready: true` (PR-05 gate satisfied)
- **Record scripts:** `scripts/record-{wizard,inbox-killer,ecosystem,lead-magnet,founder}-demo.mjs` + shared `scripts/lib/video-record.mjs`
- **npm scripts:** `record:wizard`, `record:inbox-killer`, `record:ecosystem`, `record:lead-magnet`, `record:founder`
- **Ecosystem wiring:** `VideoSlot videoKey="ecosystem"` on `/results/owner-ecosystem/#ecosystem-video` (`ready: false` until MP4)
- **inboxKiller poster:** `/gratka/inbox-lanes.png` set in `proof.ts` (prep for BL-03b)
- **DevDep:** `@ffmpeg-installer/ffmpeg` for cross-platform MP4 conversion

## Pliki / Files

| File | Action |
|------|--------|
| `public/gratka/wizard-demo.mp4` | new — automated capture |
| `scripts/lib/video-record.mjs` | new — shared capture pipeline |
| `scripts/record-wizard-demo.mjs` | new |
| `scripts/record-inbox-killer-demo.mjs` | new |
| `scripts/record-ecosystem-demo.mjs` | new |
| `scripts/record-lead-magnet-demo.mjs` | new |
| `scripts/record-founder-demo.mjs` | new |
| `src/content/proof.ts` | update — wizard ready:true, inbox poster |
| `src/app/results/owner-ecosystem/page.tsx` | update — ecosystem VideoSlot |
| `package.json` | update — record scripts + ffmpeg-installer |
| `package-lock.json` | update |
| `.gitignore` | update — `.tmp-video/` |

## Video manifest state (`proof.ts`)

| Key | ready | url | artefact |
|-----|-------|-----|----------|
| `wizard` | ✅ | `/gratka/wizard-demo.mp4` | committed |
| `vcms` | ✅ | `/gratka/vcms-demo.mp4` | committed |
| `agentOs` | ✅ | `/gratka/agent-os-demo.mp4` | committed |
| `inboxKiller` | ❌ | null | run `npm run record:inbox-killer` with `JADZIA_INBOX_URL` |
| `ecosystem` | ❌ | null | run `npm run record:ecosystem` |
| `leadMagnet` | ❌ | null | run `npm run record:lead-magnet` |
| `founder` | ❌ | null | run `npm run record:founder` or OBS re-record |

**Score:** 3/7 videos ready (was 2/7).

## Weryfikacja / Verification

```bash
npm run typecheck   # pass
npm run build       # pass (34 routes)
node scripts/audit-navigation.mjs https://quietforge.flexgrafik.nl  # verdict PASS
```

## Post-deploy smoke (Commander)

- `GET /gratka/wizard-demo.mp4` → 200
- `/solutions/sales-funnel/` — native `<video>` plays wizard demo
- `/results/sales-funnel/` — same
- `/results/owner-ecosystem/#ecosystem-video` — empty state until ecosystem MP4

## Następny krok / Next (Commander)

1. **Review wizard MP4** locally — blur any PII, confirm checkout frame; re-run `npm run record:wizard` if needed.
2. **BL-03b:** Set `JADZIA_INBOX_URL` to test inbox UI → `npm run record:inbox-killer` → Agent sets `inboxKiller` ready:true.
3. **P1 batch:** `npm run record:lead-magnet` then `record:ecosystem` (or OBS per plan shot lists).
