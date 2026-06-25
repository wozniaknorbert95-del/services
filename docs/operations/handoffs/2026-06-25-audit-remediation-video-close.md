# Handoff — Post-audit remediation + wizard video close (2026-06-25)

**Repo:** services.flexgrafik.nl · **Build:** `npm run build` ✅ (34 routes) · **HEAD:** `d08baa2`

## Cel / Goal

Close the post-E-6 audit remediation program (solutions SSoT, proof integrity, BL-02 pre-launch policy) and resolve BL-03 wizard video after failed v1 auto-capture. Ship honest commercial stance (no fake metrics) and a usable wizard demo for cold-traffic L2 proof.

## Co zrobiono / What changed

### Audit remediation (shipped `213e9a5` + `efeb223`)

- Solutions SSoT: `sales-funnel`, `web-upgrade`, `managed-automation` content modules + thin pages
- WhatsApp pilot content module (`whatsapp-discovery-pilot-case-study.ts`)
- `fieldReports` → `proof.ts` (process-proof; no unverified “14 leads / 3 closed”)
- `WEBSITE_ONLY_EXCEPTION` on web-upgrade + pricing
- Hub `case-studies.ts` sync + `whatsappPilot` manifestKey
- `audit-navigation.mjs` — filter `?_rsc=` false 404s
- Full audit pack: `docs/audits/2026-06-25/` + `07-remediation-plan-dod.md`

### BL-02 commercial traction (Commander policy)

- [`commercial-traction-2026-06-25.md`](../commercial-traction-2026-06-25.md) — public **UNKNOWN**; historical AOV €250–550 private note only
- No fabricated client counts on site (PR-07/PR-08)

### Video program

- [`video-production-plan-2026-06-25.md`](../video-production-plan-2026-06-25.md) — self-hosted MP4 (VCMS pattern)
- [`wizard-video-manual.md`](../wizard-video-manual.md) — Commander OBS fallback if auto quality rejected
- Wizard v1 auto-capture **rejected** (static screen) → revert `12c9210`
- Wizard v2 Playwright script — full funnel to Stap 9 checkout → `wizard-demo.mp4` 68s → `d08baa2`
- `npm run record:*` **removed** from `package.json` (Commander prefers manual for remaining slots unless v2 approved)

## Pliki / Files (session arc — key)

| File | Action |
|------|--------|
| `src/content/web-upgrade-case-study.ts` | new |
| `src/content/managed-automation-case-study.ts` | new |
| `src/content/whatsapp-discovery-pilot-case-study.ts` | new |
| `src/content/sales-funnel-case-study.ts` | update — solutions exports |
| `src/content/proof.ts` | update — fieldReports, wizard video slot |
| `src/lib/case-studies.ts` | update — hub sync |
| `src/app/solutions/*` | refactor — thin pages |
| `public/gratka/wizard-demo.mp4` | replace — v2 full-funnel (~7.8 MB) |
| `scripts/record-wizard-demo.mjs` | rewrite — v2 funnel (optional re-run) |
| `docs/audits/2026-06-25/*` | new — audit + remediation DoD |
| `docs/operations/commercial-traction-2026-06-25.md` | new |
| `docs/operations/wizard-video-manual.md` | new |

## Weryfikacja / Verification

```bash
npm run typecheck   # pass
npm run build       # pass (34 routes)
rg '\[FILL:' src/   # 0 matches
```

## Post-deploy smoke (Dowódca)

1. **`/solutions/sales-funnel/`** — wizard `<video>` plays; journey ends Stap 9 checkout; **no client PII** in form fields
2. **`/solutions/web-upgrade/`** — brochure-only exception visible
3. **`/results/`** — field reports without fake lead counts
4. **`GET /gratka/wizard-demo.mp4`** — HTTP 200, ~68s, visible UI changes (not static)
5. If video unacceptable → say **„manual OBS”** → follow `wizard-video-manual.md`, set `ready: false` until new file

## Video manifest (`proof.ts`)

| Key | ready |
|-----|-------|
| wizard | ✅ (pending Commander visual QA) |
| vcms | ✅ |
| agentOs | ✅ |
| inboxKiller | ❌ |
| ecosystem | ❌ |
| leadMagnet | ❌ |
| founder | ❌ |

## Następny krok / Next steps

| Priority | Owner | Action |
|----------|-------|--------|
| 1 | **Commander** | Approve or reject `wizard-demo.mp4` on live `/solutions/sales-funnel/` |
| 2 | **Commander** | Inbox Killer — **manual OBS** per video plan (or approve v2 script for inbox only) |
| 3 | **Commander** | lead-magnet + ecosystem + founder — same manual pattern as VCMS |
| 4 | **Agent** | After each approved MP4: `proof.ts` `ready: true` + build + push |
| 5 | **Commander** | Partner alignment; commercial traction stays private until scale |

**SESSION-ANCHOR:** [`SESSION-ANCHOR.md`](../SESSION-ANCHOR.md)
