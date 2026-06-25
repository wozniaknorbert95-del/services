# Handoff — Pricing Page

**Date:** 2026-05-31
**Feature:** `/pricing` (Phase 4, P4.2)
**Branch:** master
**Build:** ✅ `npm run build` + `npm run typecheck` both pass

---

## What was built

New page at `src/app/pricing/page.tsx` with 8 sections per copy doc §A:

1. **Hero** — H1 "Clear pricing. No surprises.", subhead, CTA with €290
2. **The Path** — 3 cards: Map (€290) → Build (from €1,200) → Run (from €99/mo)
3. **Step 1: Automation Map** — bullets, CTA
4. **Step 2: Build** — HTML table with 4 setup tiers (Inbox Killer ★, Web Upgrade, Lead Magnet, Sales Funnel) + 2 bundle cards (Growth €3,900 / Pro €6,500)
5. **Step 3: Run** — MRR tiers table (Care/Manage/Partner) + CTA to `/solutions/managed-automation`
6. **Why it's priced this way** — 3 pillars (outcome not hours, enterprise-grade, proven)
7. **Pricing FAQ** — 5 collapsible items
8. **Final CTA** — "Start with €290 and total clarity."

## Files touched

- `src/app/pricing/page.tsx` — new
- `public/og/pricing.svg` — new
- `public/sitemap.xml` — added `/pricing/` entry

## Key decisions

- Used plain HTML `<table>` for setup/MRR tiers (cleaner than recreating table layout with divs).
- All prices from `PRICING` SSoT.
- "Inbox Killer ★" first in table (spearhead hierarchy per copy doc).
- Bundles as Card components below table (visual separation from individual systems).

## Deploy note

Vercel production URL still returns 404 — workflow GitHub Actions deploys successfully but output is not linked to `flexgrafik-services` project. Needs manual fix in Vercel dashboard or `VERCEL_PROJECT_ID` secret verification.

Local preview: `npm run build && npx serve dist`

## Next up (Phase 4 remaining)

- **P4.3** — `/how-it-works` process page
- **P4.4** — `/results` use cases page
- **P4.5** — `/about` page
