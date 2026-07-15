# Handoff — Intake Email Integration (2026-07-15)

**Repo:** services.flexgrafik.nl · **Build:** `npm run build` ✅ (36 routes, 2 dynamic API)

## Cel / Goal
Connect BookDiscoveryForm and WaitlistForm to real SMTP email delivery (`quietforge@flexgrafik.nl`) via Nodemailer, replacing the previous `setSubmitted(true)` that silently discarded submissions.

## Co zrobiono / What changed
- Dodano `src/lib/email.ts` — SMTP transport singleton (Cyberfolks s34.cyber-folks.pl:465), rate-limit 3/10min/IP, honeypot check, `sendIntakeEmail` + `sendWaitlistEmail`
- Dodano 2 endpointy API: `/api/intake` (BookDiscovery) + `/api/waitlist` — POST, JSON validation, honeypot guard (422), rate-limit (429), SMTP send (502 on failure)
- BookDiscoveryForm: maszyna stanów `idle/submitting/success/error`, `fetch('/api/intake')`, ukryte pole honeypot `website`, fallback `mailto:` przy błędzie
- WaitlistForm: email state, `fetch('/api/waitlist')`, disabled during submit
- Button: dodano `disabled` prop
- globals.css: dodano token `--qf-error: var(--text-danger)`
- brain.md: §2 tech stack (nodemailer), §4 guardrail 14 (form intake), §5 env table (8 vars), date

## Pliki / Files

| File | Action |
|------|--------|
| `src/lib/email.ts` | new |
| `src/app/api/intake/route.ts` | new |
| `src/app/api/waitlist/route.ts` | new |
| `src/app/book-discovery/BookDiscoveryForm.tsx` | rewrite |
| `src/components/WaitlistForm.tsx` | rewrite |
| `src/components/ui/Button.tsx` | update |
| `src/app/globals.css` | update |
| `brain.md` | update |
| `package.json` | update (+nodemailer, +@types/nodemailer) |
| `package-lock.json` | update |
| `docs/operations/handoffs/2026-07-15-intake-email.md` | new |

## Weryfikacja / Verification
```bash
npm run typecheck   # pass
npm run build       # pass (36 routes, 2 dynamic API)
npx eslint src/     # 1 pre-existing error in LivingSystemDiagram.tsx (not from this change)
```

## Post-deploy smoke (Dowódca) — WERYFIKOWANE
| Test | Endpoint | Oczekiwany | Wynik |
|---|---|---|---|
| Intake POST | `/api/intake/` | 200 | **200 OK** ✅ |
| Waitlist POST | `/api/waitlist/` | 200 | **200 OK** ✅ |
| Honeypot (bot fill) | `/api/intake/` | 422 | **422 BOT_DETECTED** ✅ |
| Validation (puste pola) | `/api/intake/` | 422 | **422 VALIDATION** ✅ |
| Rate limit (przekroczony) | `/api/intake/` | 429 | **429 RATE_LIMIT** ✅ |
| Home page | `/` | 200 | **200 OK** ✅ |
| Book Discovery page | `/book-discovery/` | 200 | **200 OK** ✅ |

## Env vars (Vercel — Production + Preview) — USTAWIONE ✅
| Variable | Value |
|---|---|
| `SMTP_HOST` | `s34.cyber-folks.pl` ✅ |
| `SMTP_PORT` | `465` ✅ |
| `SMTP_SECURE` | `true` ✅ |
| `SMTP_USER` | `quietforge@flexgrafik.nl` ✅ |
| `SMTP_PASS` | _(hasło mailboxa — ustawione w Vercel)_ ✅ |
| `INTAKE_FROM` | `quietforge@flexgrafik.nl` ✅ |
| `INTAKE_TO` | `quietforge@flexgrafik.nl` ✅ |
| `INTAKE_DISABLED` | `false` ✅ |

## Następny krok / Next steps
- [ ] Sprawdź mailbox `quietforge@flexgrafik.nl` — powinny przyjść testowe maile z smoke testów
- [ ] Test end-to-end przez formularz na `/book-discovery/` z rzeczywistymi danymi
- [ ] Monitoruj pierwsze realne zgłoszenia pod kątem formatowania/dostarczalności
- [ ] Rozważ dodanie email delivery logging/metrics dla GA4 tracking
- [ ] Pre-existing lint error w `LivingSystemDiagram.tsx:196` — osobna sesja
