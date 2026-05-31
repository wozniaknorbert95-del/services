# Handoff — Managed Automation Page

**Date:** 2026-05-31
**Feature:** `/solutions/managed-automation` (Phase 4, P4.1)
**Branch:** master
**Build:** ✅ `npm run build` + `npm run typecheck` both pass

---

## What was built

New page at `src/app/solutions/managed-automation/page.tsx` with 7 sections per copy doc §B:

1. **Hero** — eyebrow "Managed Automation", H1 "Your systems, kept sharp — month after month.", subhead, CTA to `/book-discovery`
2. **Why a living system needs care** — reframes support as proactive care, not reactive hours
3. **The Three Plans** — Care €99/mo, Manage €349/mo (★ most popular), Partner €890/mo. Uses `Card` + `Button` primitives. Manage tier highlighted with `variant="accent"`.
4. **Always included** — 4 baseline trust items (HITL, reporting, data ownership, real person)
5. **No lock-in** — cancel-anytime messaging
6. **FAQ** — 4 collapsible `FaqItem`s
7. **Final CTA** — primary + secondary buttons

## Files touched

- `src/app/solutions/managed-automation/page.tsx` — new
- `public/og/managed-automation.svg` — new (1200×630, Quietforge branded)
- `public/sitemap.xml` — added `/solutions/managed-automation/` entry

## Key decisions

- Did **not** use `PricingCard` primitive — it lacks `tagline` / `description` support needed by the copy doc. Instead composed `Card` + custom plan layout inline, matching the inbox-killer pricing section pattern.
- All prices pulled from `lib/constants.ts` SSoT (`PRICING.care`, `PRICING.manage`, `PRICING.partner`).
- Metadata includes `openGraph.images` and `twitter.images` pointing to new OG SVG.
- Mobile-first: 1-column plans on mobile, 3-column on `md+`.

## Next up (from todo.json / NEXT-SESSION-PROMPT.md)

- **P4.2** — `/pricing` page (The Path visual: Map → Build → Run)
- **P4.3** — `/how-it-works` process page
- **P4.4** — `/results` use cases page
- **P4.5** — `/about` page

One page per session, build gate before each commit.
