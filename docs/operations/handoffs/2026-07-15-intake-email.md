# Handoff — 2026-07-15 — Intake Email Integration

## Goal
Connect BookDiscoveryForm and WaitlistForm to real SMTP email delivery (quietforge@flexgrafik.nl) via Nodemailer, replacing the previous `setSubmitted(true)` that silently discarded submissions.

## Files changed

| File | Change |
|---|---|
| `src/lib/email.ts` | **NEW** — SMTP transport singleton, rate-limit (3/10min/IP), honeypot check, `sendIntakeEmail`, `sendWaitlistEmail` |
| `src/app/api/intake/route.ts` | **NEW** — POST endpoint for BookDiscovery: JSON validation, honeypot guard, rate-limit, SMTP send |
| `src/app/api/waitlist/route.ts` | **NEW** — POST endpoint for Waitlist: email validation, rate-limit, SMTP send |
| `src/app/book-discovery/BookDiscoveryForm.tsx` | **EDIT** — state machine (`idle/submitting/success/error`), `fetch('/api/intake')`, honeypot hidden input, error fallback with `mailto:` link |
| `src/components/WaitlistForm.tsx` | **EDIT** — email state, `fetch('/api/waitlist')`, `idle/submitting/success/error` states, disabled during submit |
| `src/components/ui/Button.tsx` | **EDIT** — added `disabled` prop to interface + button element |
| `src/app/globals.css` | **EDIT** — added `--qf-error: var(--text-danger)` functional accent token |
| `brain.md` | **EDIT** — §2 tech stack (nodemailer), §4 guardrail 14 (form intake), §5 env table (8 SMTP/intake vars), date |

## Verification

| Check | Result |
|---|---|
| `npm run typecheck` | PASS |
| `npm run build` | PASS (36 routes, 2 dynamic API: `/api/intake`, `/api/waitlist`) |
| `npx eslint src/` | 1 pre-existing error in `LivingSystemDiagram.tsx` (not from this change) |
| Routes visible in build output | `ƒ /api/intake`, `ƒ /api/waitlist` confirmed |

## Env required (Vercel dashboard + .env.local)

| Variable | Value |
|---|---|
| `SMTP_HOST` | `s34.cyber-folks.pl` |
| `SMTP_PORT` | `465` |
| `SMTP_SECURE` | `true` |
| `SMTP_USER` | `quietforge@flexgrafik.nl` |
| `SMTP_PASS` | _(mailbox password — set in Vercel dashboard)_ |
| `INTAKE_FROM` | `quietforge@flexgrafik.nl` |
| `INTAKE_TO` | `quietforge@flexgrafik.nl` |
| `INTAKE_DISABLED` | `false` (set `true` to kill submissions) |

## Post-deploy smoke test

1. Deploy to Vercel (push to master)
2. Navigate to `/book-discovery`
3. Fill form with test data, submit
4. Check mailbox `quietforge@flexgrafik.nl` — should receive email with subject `[Automation Map] {company} — {name}`
5. Verify email contains all form fields, reply-to set to customer email
6. Test WaitlistForm similarly — subject `[Waitlist] {email}`
7. Test honeypot: fill hidden `website` field → should get 422 rejection
8. Test rate-limit: 4 rapid submissions → 4th should get 429

## Next steps

- [ ] Set SMTP_PASS in Vercel env (Production + Preview)
- [ ] Set remaining SMTP/intake vars in Vercel env
- [ ] Run post-deploy smoke test
- [ ] Monitor first real submissions for formatting/delivery issues
- [ ] Consider adding email delivery logging/metrics for GA4 tracking
- [ ] Pre-existing lint error in `LivingSystemDiagram.tsx:196` — separate fix
