# Handoff — Phase 4 Trust Pages Batch

**Date:** 2026-05-31
**Features:** `/how-it-works` + `/results` + `/about` (Phase 4 P4.3–P4.5)
**Branch:** master
**Commits:** 3 (1 per page)
**Build:** ✅ `npm run build` + `npm run typecheck` both pass

---

## What was built

### 1. `/how-it-works` (P4.3)
- **Hero:** "Three clear steps. No surprises."
- **Step 1:** Automation Map (paid discovery) — €290, credited, bullets
- **Step 2:** Build — productized, fixed price, tested
- **Step 3:** Run — Managed Automation teaser, link to `/solutions/managed-automation`
- **Control Block:** HITL reassurance
- **Timeline:** Day 0 → Day 1-3 → Day 3-14 → Go-live → Ongoing
- **FAQ:** 3 items (technical knowledge, what I need, only Step 1)
- **Final CTA:** "Start with clarity — Step 1 is the Automation Map."

### 2. `/results` (P4.4)
- **Hero:** "What changes."
- **4 Use Cases:** Problem → System → Result + [X] metric placeholder
  1. Inbox chaos → Inbox Killer → hours saved, fewer lost leads
  2. Site 2012 → Web Upgrade → more enquiries
  3. Manual quotes → Sales Funnel → structured pipeline
  4. Dead landing → Lead Magnet Game → more contacts
- **Final CTA:** "Let's find what's worth automating in your business."

### 3. `/about` (P4.5)
- **Hero:** "Enterprise-grade systems, built for a business your size."
- **My Story:** branding → systems, on a live business
- **3 Moat Pillars:** AI workforce, branding+UX+automation, no hype/HITL
- **Why it matters:** enterprise architecture, SMB package
- **Principles:** outcome first, built to last, you decide, honest numbers
- **Bridge to Pillar 3:** one-way external link to portfolio.flexgrafik.nl
- **Final CTA:** "Let's find what's worth automating."

## Files touched (batch)

- `src/app/how-it-works/page.tsx` — new
- `src/app/results/page.tsx` — new
- `src/app/about/page.tsx` — new
- `public/og/how-it-works.svg` — new
- `public/og/results.svg` — new
- `public/og/about.svg` — new
- `public/sitemap.xml` — 3 routes added

## Key decisions

- `/results` uses `[X]` placeholders for all metrics — per copy doc, no fabricated numbers.
- `/about` uses "Norbert Wozniak" as name (from `constants.ts` / `brain.md`).
- `/how-it-works` timeline uses vertical dot-line layout (simple CSS, no extra components).
- All OG images 1200×630, Quietforge branded, consistent with existing ones.

## Git log

```
3f39b1d feat: /about page + OG + sitemap
abf552e feat: /results page + OG + sitemap
27e9959 feat: /how-it-works page + OG + sitemap
3d86376 feat: /pricing page (Phase 4 P4.2) + OG + sitemap
7ebc0d4 feat: managed-automation page + OG + sitemap
```

## Phase 4 — COMPLETE ✅

| Page | Status |
|---|---|
| `/solutions/managed-automation` | ✅ Done |
| `/pricing` | ✅ Done |
| `/how-it-works` | ✅ Done |
| `/results` | ✅ Done |
| `/about` | ✅ Done |

## Next up: Phase 5

- **P5.1–P5.4:** Blog (MDX config, listing, post template, seed posts)
- **P5.5:** `/book-discovery` (paid checkout page with Mollie/Stripe + form + calendar)

Or: fix deploy na Vercel (404 issue — `VERCEL_PROJECT_ID` / `npx vercel link`).
