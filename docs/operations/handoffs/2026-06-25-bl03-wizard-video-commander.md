# Handoff — BL-03 Wizard video (Commander action)

**Status:** WAITING ON COMMANDER · **Agent prep:** poster set in `proof.ts`, `ready: false` until real URL

## Commander steps

1. Record **45–60s** screen walkthrough on zzpackage.flexgrafik.nl:
   - Welcome → 2–3 configuration steps → open price → checkout (no client PII).
2. Upload:
   - **Option A:** Loom unlisted → paste embed URL
   - **Option B:** Save as `public/gratka/wizard-demo.mp4` (pattern: `vcms-demo.mp4`)
3. Tell Agent URL or confirm file committed.

## Agent steps (after URL)

1. `src/content/proof.ts` → `videos.wizard`: `{ url, ready: true, poster: '/gratka/wizard-checkout.png' }`
2. Smoke: `/solutions/sales-funnel/`, `/results/sales-funnel/`, home Spearhead L2
3. Ship + update FIND-02 DoD in [`07-remediation-plan-dod.md`](../audits/2026-06-25/07-remediation-plan-dod.md)

## Do not

- Set `ready: true` without a working URL (PR-05)
