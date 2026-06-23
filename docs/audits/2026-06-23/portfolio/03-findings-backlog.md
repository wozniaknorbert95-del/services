# Portfolio Findings Backlog

**Site:** https://flexgrafik-services.vercel.app/  
**Date:** 2026-06-23

---

## Fixed this session (deploy required)

| ID | Fix | File |
|----|-----|------|
| AUD-S01 | FlexGrafik = live proof copy on hero + about | `conversion-copy.ts` |
| AUD-L01 | JSON-LD `sameAs` LinkedIn + flexgrafik.nl | `layout.tsx` |
| AUD-W01 | `authors` URL → `/founder/` | `layout.tsx` |
| AUD-P01 | PDF footer links: `Link` → `<a download>` | `Footer.tsx` |

---

## P1 — Before marketing push

| ID | Finding | Fix | Effort |
|----|---------|-----|--------|
| AUD-P02 | `[FILL: founder video]` on `/founder/` | Record video OR remove `EcosystemVideo`/video slot | M |
| AUD-P03 | `[FILL: InboxKiller video]` on solution page | Poster + diagram only, or hide VideoSlot | S |
| AUD-P06 | WhatsApp only in footer | Hero ghost button + env var | S |
| AUD-P01-deploy | Push to Vercel | `git push` when ready | S |

---

## P2 — Polish

| ID | Finding | Fix | Effort |
|----|---------|-----|--------|
| AUD-P04 | Telegram Deployment Agent naming | Rename to Inbox Killer | S |
| AUD-P05 | 14-section home length | Sticky CTA or MVP trim | M |
| AUD-N05 | Second CTA late on home | Same as AUD-P05 | M |
| AUD-U04 | FILL placeholders ugly | Designed empty states | S |

---

## P3 — Backlog

| ID | Finding | Fix |
|----|---------|-----|
| AUD-P07 | Footer `portfolio.flexgrafik.nl` link | Verify or replace with owner-ecosystem |
| AUD-W10 | Lighthouse CI on Linux | GitHub Action |
| AUD-N01 | Home scroll progress | Optional section nav |

---

## Re-audit command

```bash
node scripts/audit-capture.mjs https://flexgrafik-services.vercel.app
node scripts/audit-404s.mjs
```

**Pass criteria:** console errors = 0; no `[FILL:` visible on money pages; Nielsen avg ≥4.0.
