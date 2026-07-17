# Handoff — Quietforge Email Unification (2026-07-17)

**Repo:** services.flexgrafik.nl · **Build:** `npm run build` ✅ (36 routes, 2 dynamic API)

## Cel / Goal
Replace all public `hello@flexgrafik.nl` references with `quietforge@flexgrafik.nl` and ensure form intake/waitlist delivery targets the Quietforge mailbox even when env fallbacks are missing.

## Co zrobiono / What changed
- `EMAIL` constant in `src/lib/constants.ts` → `quietforge@flexgrafik.nl` (SSoT for footer, legal, JSON-LD, mailto fallbacks)
- Footer nav Contact link uses `EMAIL` via `navigation.ts` (removed hardcoded hello@)
- Legal page Contact section uses `EMAIL` constant (removed hardcoded hello@)
- `src/lib/email.ts` — `intakeFrom()` / `intakeTo()` fall back to `EMAIL` when `INTAKE_FROM` / `INTAKE_TO` env vars absent; SMTP config no longer requires those env keys
- All `public/gratka/*.md`, `public/artefacts/*.md`, `public/gratka/inbox-killer-flow.svg` — hello@ replaced
- Form submission path unchanged: `/api/intake` + `/api/waitlist` → SMTP → `INTAKE_TO` (Vercel: `quietforge@flexgrafik.nl`)

## Pliki / Files

| File | Action |
|------|--------|
| `src/lib/constants.ts` | update — EMAIL SSoT |
| `src/lib/navigation.ts` | update — Contact mailto |
| `src/lib/email.ts` | update — intake fallbacks |
| `src/app/legal/page.tsx` | update — Contact section |
| `public/gratka/*.md` (8 files) | update — footer contact |
| `public/artefacts/*.md` (3 files) | update — footer contact |
| `public/gratka/inbox-killer-flow.svg` | update — footer text |
| `docs/operations/handoffs/2026-07-17-quietforge-email-unification.md` | new |

## Weryfikacja / Verification
```bash
npm run typecheck   # pass
npm run build       # pass (36 routes, 2 dynamic API)
rg 'hello@flexgrafik' # 0 matches repo-wide
```

## Post-deploy smoke (Dowódca)
1. Footer + `/legal/` — contact shows `quietforge@flexgrafik.nl`
2. `/book-discovery/` — submit test form → mailbox `quietforge@flexgrafik.nl` receives email
3. Waitlist form (if visible) — same delivery check
4. JSON-LD in page source — `email` field = `quietforge@flexgrafik.nl`

## Następny krok / Next steps
- [ ] Commit + push to `master` (Vercel auto-deploy)
- [ ] Live smoke on production after deploy
- [ ] Optional: regenerate PDF artefacts if downloaded copies still show old email
