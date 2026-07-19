# Handoff — Commercial packages P3–P5 (2026-07-19)

**Repo:** services.flexgrafik.nl · **Build:** `npm run build` ✅ (36 routes)

## Cel / Goal
Align public P3–P5 package claims with the July ecosystem truth matrix and commercial packaging map. Keep Jadzia, portal qualification, Inbox Killer proof, and Managed Automation boundaries explicit.

## Co zrobiono / What changed
- Reframed Jadzia as the **Operations Command Layer**: Commander cockpit, ~93% operational spine, weekly HITL brief and supervised content publishing.
- Kept Jadzia separate from Agent OS/LangGraph and excluded full autonomy; labelled portal qualification as API-live but UX-partial.
- Reclassified the 142-message Inbox Killer metric as test-environment process proof.
- Added Care / Manage / Partner inclusions and boundaries to the Managed Automation solution page.

## Pliki / Files

| File | Action |
|------|--------|
| `src/content/jadzia-coi.ts` | update |
| `src/content/jadzia-coi-case-study.ts` | update |
| `src/content/readiness.ts` | update |
| `src/content/ecosystem.ts` | update |
| `src/content/proof.ts` | update |
| `src/content/owner-ecosystem.ts` | update |
| `src/content/module-showcase.ts` | update |
| `src/content/inbox-killer-case-study.ts` | update |
| `src/content/web-upgrade-case-study.ts` | update |
| `src/content/managed-automation-case-study.ts` | update |
| `src/app/results/jadzia-coi/page.tsx` | update |
| `src/app/solutions/managed-automation/page.tsx` | update |

## Weryfikacja / Verification
```bash
npm run typecheck  # pass
npx eslint <changed files>  # pass
npm run build  # pass (36 routes)
rg '\[FILL:' src/  # 0 matches
```

`npm run lint` is not usable in this Next.js 16 project because its script calls the removed `next lint` command.

## Post-deploy smoke (Dowódca)
1. Open `/results/jadzia-coi` and confirm the Operations Command Layer copy and INT-012 PARTIAL label render correctly.
2. Open `/solutions/managed-automation` at mobile width and confirm the inclusions table scrolls horizontally without clipping.
3. Open `/results/inbox-killer` and confirm the 142-message measurement is labelled test-environment process proof.

## Następny krok / Next steps
- Commander HITL approval remains pending for the July truth matrix and commercial packaging map.
- Do not publish broader qualification-agent or autonomous-COI claims until the portal UX and approved evidence support them.
