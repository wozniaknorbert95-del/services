# Handoff — Quietforge Email Unification (2026-07-17)

**Repo:** services.flexgrafik.nl · **Build:** `npm run build` ✅ (36 routes, 2 dynamic API) · **Status:** CLOSED ✅

## Cel / Goal
Replace all public `hello@flexgrafik.nl` references with `quietforge@flexgrafik.nl` and ensure form intake/waitlist delivery targets the Quietforge mailbox even when env fallbacks are missing.

## Co zrobiono / What changed
- `EMAIL` constant in `src/lib/constants.ts` → `quietforge@flexgrafik.nl` (SSoT for footer, legal, JSON-LD, mailto fallbacks)
- Footer nav Contact link uses `EMAIL` via `navigation.ts` (removed hardcoded hello@)
- Legal page Contact section uses `EMAIL` constant (removed hardcoded hello@)
- `src/lib/email.ts` — `intakeFrom()` / `intakeTo()` fall back to `EMAIL` when `INTAKE_FROM` / `INTAKE_TO` env vars absent; SMTP config no longer requires those env keys
- All `public/gratka/*.md`, `public/artefacts/*.md`, `public/gratka/inbox-killer-flow.svg` — hello@ replaced
- Form submission path: `/api/intake` + `/api/waitlist` → SMTP → `quietforge@flexgrafik.nl`
- Shipped to production: `a8132e5` + `f2ae16e` on `master` (Vercel CD)

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
| `public/sitemap.xml` | update — lastmod from build |
| `docs/operations/SESSION-ANCHOR.md` | update |
| `docs/operations/handoffs/2026-07-17-quietforge-email-unification.md` | new |

## Weryfikacja / Verification
```bash
npm run typecheck   # pass
npm run build       # pass (36 routes, 2 dynamic API)
rg 'hello@flexgrafik' # 0 matches repo-wide
rg '\[FILL:' src/   # 0 matches
```

## Post-deploy smoke (Dowódca) — WERYFIKOWANE 2026-07-17 ✅

| Test | Target | Oczekiwany | Wynik |
|---|---|---|---|
| Home email grep | `/` | hello=0, quietforge>0 | **hello=0 quietforge=8** ✅ |
| Legal email grep | `/legal/` | hello=0, quietforge>0 | **hello=0 quietforge=16** ✅ |
| Book Discovery grep | `/book-discovery/` | hello=0, quietforge>0 | **hello=0 quietforge=12** ✅ |
| JSON-LD email | `/` view-source | quietforge@flexgrafik.nl | **quietforge@flexgrafik.nl** ✅ |
| Intake POST | `/api/intake/` | 200 ok:true | **200 {"ok":true}** ✅ |
| Waitlist POST | `/api/waitlist/` | 200 ok:true | **200 {"ok":true}** ✅ |
| Mailbox delivery | `quietforge@flexgrafik.nl` | testowe maile dotarły | **CONFIRMED by Commander** ✅ |
| 404 audit | `node scripts/audit-404s.mjs` | failed:[] per route | **PASS** (pre-existing PDF RSC link on book-discovery — unrelated) |

**Deploy:** `a8132e5` → `f2ae16e` on `master` · Vercel CD · production live.

## Następny krok / Next steps
- [x] Commit + push to `master`
- [x] Live smoke on production
- [x] Mailbox `quietforge@flexgrafik.nl` — testowe maile (intake + waitlist) dotarły
- [ ] Optional: regenerate PDF artefacts if cached downloads still show old email
- [ ] Monitor first real lead submissions for formatting/deliverability

**Session closed.** Next session: outbound P0 (Facebook profile paste, LinkedIn profile, Featured V2) per `SESSION-ANCHOR.md`.
