# Handoff — Portfolio skills audit + AUD-S01/L01 fixes

**Date:** 2026-06-23

---

## Zrobione w kodzie (czeka na deploy)

1. **AUD-S01** — `conversion-copy.ts`: hero proofLine + microTrust + About story z FLEXGRAFIK jako live proof
2. **AUD-L01** — `layout.tsx`: JSON-LD `sameAs` (LinkedIn + flexgrafik.nl), Person url → `/founder/`
3. **AUD-W01** — metadata `authors` → `/founder/`
4. **AUD-P01** — `Footer.tsx`: PDF artefakty jako `<a download>` zamiast `<Link>` (fix RSC 404)

`npm run build` — PASS

---

## Audyt portfolio (skills)

Zestaw: `docs/audits/2026-06-23/portfolio/`

| Plik | Skill |
|------|-------|
| `00-executive-summary.md` | Werdykt 3.9/5 B+ Conditional Pass |
| `01-nielsen-heuristics.md` | 10 heurystyk — avg 3.9 |
| `02-ui-design-review.md` | 10 wymiarów wizualnych — avg 4.2 |
| `03-findings-backlog.md` | P1–P3 + fixed items |

**Główne findingi live (Vercel):**
- Placeholdery `[FILL: video]` na founder + inbox solution — wygląda niedokończone
- Inbox Killer vs Telegram Deployment Agent — naming
- 404 console: PDF prefetch (naprawione lokalnie)
- WhatsApp tylko w footerze

---

## Następny krok

1. Deploy na Vercel (copy + JSON-LD + footer fix)
2. P1: usuń/zamień video placeholdery
3. Re-run: `node scripts/audit-404s.mjs`

---

*Norbert · portfolio audit session*
