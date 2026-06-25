# Handoff — E-5b Inbox Killer Solutions SSoT (2026-06-25)

**Repo:** services.flexgrafik.nl · **Build:** `npm run build` ✅ (34 routes)

## Cel / Goal

Close commercial loop: `/solutions/inbox-killer/` (nav „Start here”) shares SSoT with case study module — zero copy drift between proof and product ladder.

## Co zrobiono / What changed

- Extended `inbox-killer-case-study.ts` with solution-page exports (meta, problem, system items, effect before/after, price label)
- System step titles anchored to `inboxKillerFlowSteps` (Read → Approve)
- `solutions/inbox-killer/page.tsx` — thin imports only
- Removed duplicate metadata from `layout.tsx` (single source on page)

## Pliki / Files

| File | Action |
|------|--------|
| `src/content/inbox-killer-case-study.ts` | update — solution exports |
| `src/app/solutions/inbox-killer/page.tsx` | refactor |
| `src/app/solutions/inbox-killer/layout.tsx` | strip duplicate metadata |

## Weryfikacja / Verification

```bash
npm run typecheck   # pass
npm run build       # pass (34 routes)
```

## Post-deploy smoke

- [ ] `/solutions/inbox-killer/` — H1 „sorted, drafted, and gated”; 4 system steps; case study link
- [ ] `/results/inbox-killer/` → solution bridge CTA works
- [ ] Nav „Start here” → solutions page unchanged IA

## Next steps

- **E-6** — `advisory-modernisation` case study SSoT (last hardcoded results page)
- **BL-02** — commercial traction (Commander)
