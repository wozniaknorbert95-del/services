# Handoff — BL-03 wizard manual OBS ship (2026-06-25)

**Repo:** services.flexgrafik.nl · **Build:** `npm run build` ✅ (34 routes) · **HEAD:** uncommitted

## Cel / Goal

Close BL-03 with Commander manual OBS recording (`docs/wizard video.mp4`) — replace Playwright v2 auto-capture with approved full-funnel walkthrough for cold-traffic L2 proof on `/solutions/sales-funnel/`.

## Co zrobiono / What changed

- Commander manual recording copied → `public/gratka/wizard-demo.mp4` (~41 MB, **98s**)
- `proof.ts` → `videos.wizard.duration: "98s"` (`ready: true` unchanged)
- SESSION-ANCHOR updated — BL-03 closed, next = BL-03b inbox manual OBS
- Live smoke: `quietforge.flexgrafik.nl/solutions/sales-funnel/` — `<video>` + `wizard-demo.mp4` in HTML ✅

## Pliki / Files

| File | Action |
|------|--------|
| `public/gratka/wizard-demo.mp4` | replace — Commander manual OBS (was Playwright v2 68s) |
| `src/content/proof.ts` | update — duration 68s → 98s |
| `docs/operations/SESSION-ANCHOR.md` | update — BL-03 closed, BL-03b next |

## Weryfikacja / Verification

```bash
npm run typecheck   # pass
npm run build       # pass (34 routes)
rg '\[FILL:' src/   # 0 matches
```

## Post-deploy smoke (Dowódca)

1. **`/solutions/sales-funnel/`** — video plays; journey ends Stap 9 checkout; **no client PII** in form fields
2. **`GET /gratka/wizard-demo.mp4`** — HTTP 200, ~98s, visible UI changes (not static)
3. **`/results/sales-funnel/`** — same video slot if wired
4. If unacceptable → `ready: false` + re-record per [`wizard-video-manual.md`](../runbooks/wizard-video-manual.md)

## Następny krok / Next steps

| Priority | Owner | Action |
|----------|-------|--------|
| 1 | **Commander** | Push `master` → Vercel CD (41 MB MP4) |
| 2 | **Commander** | BL-03b inbox — manual OBS → `inbox-killer-demo.mp4` |
| 3 | **Agent** | After each approved MP4: `proof.ts` + build |
| 4 | **Commander** | lead-magnet + ecosystem — same manual pattern |

**Note:** `docs/wizard video.mp4` is source only — **do not commit** (duplicate of gratka asset).

**SESSION-ANCHOR:** [`SESSION-ANCHOR.md`](../SESSION-ANCHOR.md)
