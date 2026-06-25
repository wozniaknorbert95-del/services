# Handoff — E-5 Inbox Killer Case Study SSoT (2026-06-25)

**Repo:** services.flexgrafik.nl · **Build:** `npm run build` ✅ (34 routes)

## Cel / Goal

Extract Inbox Killer results case study copy to SSoT module; thin page; `142 msgs/scan` from `proof.ts`; MR-16 product boundaries (B2B product ≠ Wizard spearhead ≠ jadzia-core).

## Co zrobiono / What changed

- **NEW** `inbox-killer-case-study.ts` — meta, before/after, flow steps, lanes, solution + jadzia bridges, stack
- Page refactored — zero hardcoded copy blocks; architecture bridges + lanes table
- Hub #06 — meta `Inbox Killer · B2B · live ops`; measurement/real from `caseMeasurements.inboxKiller`

## Pliki / Files

| File | Action |
|------|--------|
| `src/content/inbox-killer-case-study.ts` | new |
| `src/app/results/inbox-killer/page.tsx` | refactor |
| `src/lib/case-studies.ts` | update #06 |

## Weryfikacja / Verification

```bash
npm run typecheck   # pass
npm run build       # pass (34 routes)
rg '\[FILL:' src/   # 0 matches
# no const BEFORE/AFTER/FLOW in page; no hardcoded 142 in page
```

## Post-deploy smoke

- [ ] `/results/inbox-killer/` — 5 flow steps, lanes table, solution + jadzia bridges
- [ ] `/results/` hub #06 — measurement from proof
- [ ] `/solutions/inbox-killer/` — no regression (unchanged)
- [ ] `/results/jadzia-coi/` → inbox-killer link still works

## Next steps

- **E-5b** — solutions/inbox-killer copy SSoT (optional shared partial)
- **E-6** — advisory-modernisation SSoT
- **BL-02** — commercial traction (Commander)
