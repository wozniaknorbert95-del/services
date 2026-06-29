# Handoff — Audit remediation phase 1 (2026-06-25)

**Repo:** services.flexgrafik.nl · **Scope:** FIND-01…11 agent batch + Commander templates

## Goal

Close post-audit remediation items implementable by Agent; document Commander gates (BL-02, BL-03, BL-03b).

## Files changed

| File | Action |
|------|--------|
| `docs/operations/commercial-traction-template.md` | new — PR-08 for Commander |
| `docs/audits/2026-06-25/07-remediation-plan-dod.md` | new — DoD checkboxes |
| `docs/operations/handoffs/2026-06-25-bl03-*.md` | new — video Commander steps |
| `src/content/sales-funnel-case-study.ts` | solutions exports E-8a |
| `src/content/web-upgrade-case-study.ts` | new E-8b |
| `src/content/whatsapp-discovery-pilot-case-study.ts` | new E-7 |
| `src/content/managed-automation-case-study.ts` | new E-8c |
| `src/content/owner-ecosystem.ts` | hub card exports |
| `src/content/proof.ts` | fieldReports, whatsappPilot, wizard poster |
| `src/content/ecosystem.ts` | whatsappPilot key |
| `src/lib/case-studies.ts` | hub sync AUD-03 |
| `src/components/results/FieldReports.tsx` | thin AUD-02 |
| `src/app/solutions/sales-funnel/page.tsx` | thin E-8a |
| `src/app/solutions/web-upgrade/page.tsx` | thin E-8b + exception |
| `src/app/solutions/managed-automation/page.tsx` | thin E-8c |
| `src/app/results/whatsapp-discovery-pilot/page.tsx` | thin E-7 |
| `src/app/pricing/page.tsx` | WEBSITE_ONLY_EXCEPTION |
| `scripts/audit-navigation.mjs` | AUD-04 RSC filter |
| `docs/architecture/content-ssot.md` | new modules |
| `docs/operations/SESSION-ANCHOR.md` | remediation pointer |

## Verification

```bash
npm run typecheck
npm run build
rg WEBSITE_ONLY_EXCEPTION src/   # web-upgrade + pricing + conversion-copy
rg '14 leads' src/               # expect 0 (PR-07)
```

## Commander next

1. ~~BL-02~~ → **partial** — see [`../commander/commercial-traction-2026-06-25.md`](../commander/commercial-traction-2026-06-25.md) (private; public UNKNOWN)
2. Record wizard Loom → [`bl03-wizard-video-commander.md`](./2026-06-25-bl03-wizard-video-commander.md)
3. Outbound when BL-03 + partner alignment — [`07-remediation-plan-dod.md`](../audits/2026-06-25/07-remediation-plan-dod.md)

## DoD summary

| FIND | Agent | Commander |
|------|-------|-----------|
| 01 BL-02 | policy + docs ✅ | **partial** ✅ (no public metrics) |
| 02 BL-03 | poster ✅ | video ⏳ |
| 03–10 | ✅ | — |
| 11 BL-03b | handoff ✅ | video ⏳ |
