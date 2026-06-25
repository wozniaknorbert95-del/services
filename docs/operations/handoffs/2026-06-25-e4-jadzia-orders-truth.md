# Handoff — E-4 Jadzia Orders Truth Sync (2026-06-25)

**Repo:** services.flexgrafik.nl · **Build:** `npm run build` ✅ (34 routes)

## Cel / Goal

Portfolio-wide MR-16 fix: qualify „orders” claims — WooCommerce/Mollie checkout LIVE on zzpackage; WC order sync to jadzia.db PLANNED per meta AS-IS.

## Co zrobiono / What changed

- Case study SSoT (`jadzia-coi-case-study.ts`) — meta, after items, loop Act node, integrations, supervision note, Order sync PLANNED metric
- Capabilities (`jadzia-coi.ts`) — `status` on all pillars; orders pillar PLANNED
- Home honesty gate (`readiness.ts`) — jadzia-core → PARTIAL ~90%
- Hub + proof + ecosystem + module-showcase aligned with E-2b canonical template
- UI: capability status badges on jadzia-coi + owner-ecosystem; `CaseStudyLayout` optional status on build modules

## Pliki / Files

| File | Action |
|------|--------|
| `src/content/jadzia-coi-case-study.ts` | rewrite copy + metric types |
| `src/content/jadzia-coi.ts` | capabilities + status helpers |
| `src/content/readiness.ts` | jadzia → PARTIAL |
| `src/content/proof.ts` | jadziaCoi measurement |
| `src/content/ecosystem.ts` | statusNote |
| `src/lib/case-studies.ts` | hub #02 |
| `src/content/module-showcase.ts` | jadzia effect |
| `src/app/results/jadzia-coi/page.tsx` | metric colors + status badges |
| `src/app/results/owner-ecosystem/page.tsx` | capability status badges |
| `src/components/casestudy/CaseStudyLayout.tsx` | optional build module status |

## Weryfikacja / Verification

```bash
npm run typecheck   # pass
npm run build       # pass (34 routes)
rg 'unifies orders|jadzia\.db holds orders' src/   # 0 matches
```

## Post-deploy smoke

- [ ] Home §3 — Jadzia COI badge **PARTIAL**
- [ ] `/results/jadzia-coi/` — Order intelligence PLANNED; Order sync metric amber
- [ ] `/results/agent-orchestrator/` — jadzia card PARTIAL (no regression)
- [ ] `/results/owner-ecosystem/#jadzia-coi` — capability badges

## Next steps

- **E-5** — `inbox-killer-case-study.ts` SSoT extraction
- **BL-02** — commercial traction (Commander)
