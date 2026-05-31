# Next Session Prompt — Phase 2

> **Start here.** Build passes. Deploy pushed to Vercel. Continue from plan v2 + todo.json.

## ✅ State (2026-05-31)

- **Phases done:** 0 (Foundation) + 1 (Home) — both build-clean
- **Deploy:** `55d002b` on `master` → Vercel CD triggered
- **Brand:** Quietforge · **Stack:** Next.js 16.2.6, React 19, Tailwind v4, Framer Motion

## 🗺️ Architecture (memorise)

- **Tokens:** `globals.css` — `--qf-bg #0e0c0a`, `--qf-accent #e8a33d`, `--qf-text #e9e2d4`
- **Layout:** `layout.tsx` wraps `<Header />` + `<main>` + `<Footer />` on every route
- **Primitives:** `src/components/ui/` — Button, Card, Section, Badge, Eyebrow, IconTile, ProcessStep, PricingCard, FaqItem
- **Lib:** `constants.ts` (ROUTES, PRICING), `motion.ts` (fadeIn, staggerContainer), `utils.ts` (cn)
- **Copy source:** `Tak to ma być/*.md` — **paste verbatim, never invent**

## 🎯 Next: Phase 2 — Solutions Hub + Inbox Killer

**Goal:** create `/solutions/` (hub) and `/solutions/inbox-killer/` (spearhead). Redirect old `/inbox-killer/`.

### Tasks in order

1. **Create `/solutions/page.tsx`** — ladder layout:
   - STEP 1: Inbox Killer (`.qf-panel--spearhead`, largest)
   - STEP 2: Web Upgrade, Sales Funnel, Lead Magnet (3 smaller `.qf-panel`)
   - KEEP IT RUNNING: Managed Automation banner
   - Copy from `Mapa Strony Filar 2.md` §3.0
   - Metadata + OG image `/public/og/solutions.svg`

2. **Create `/solutions/inbox-killer/page.tsx`** — spearhead:
   - Sections: Hero → Problem → How It Works (5 steps) → What You Get → Control & Safety → Setup + MRR seed → FAQ → Final CTA
   - Copy from `Inbox Killer — Copy & Wireframe (Filar 2).md`
   - Metadata + OG image `/public/og/solutions-inbox-killer.svg`

3. **Redirects in `next.config.ts`:**
   - `/inbox-killer/` → `/solutions/inbox-killer/` (301)
   - `/digital-modernization/` → `/solutions/web-upgrade/` (301)

4. **Build gate:** `npm run build` + `npm run typecheck` must pass
5. **Handoff:** `docs/handoffs/2026-05-31-phase-2-solutions.md`

## ⚠️ Rules

1. One component per session — no mega-diffs
2. TypeScript strict — zero `any`
3. Tailwind utility-first — no inline styles
4. Dark theme default — CSS vars from `globals.css`
5. Mobile-first — collapse to 1col < 820px
6. `prefers-reduced-motion` respected
7. Every route needs `Metadata` export + OG image
8. Build must pass before any commit

## 📚 Read before coding

1. `docs/plans/quietforge-rebuild-plan-v2.md` — §Phase 2
2. `todo.json` — phase-2 tasks
3. `Tak to ma być/Mapa Strony Filar 2.md` — §3.0, §3.1
4. `Tak to ma być/Inbox Killer — Copy & Wireframe (Filar 2).md`
5. `DESIGN-SYSTEM.md` — visual rules
6. `src/lib/constants.ts` — routes & pricing

---

> **Begin: verify `npm run build` passes locally, then implement task 1.**
