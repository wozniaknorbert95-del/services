# Next Session Prompt — Phase 4

> **Start here.** Build passes. Deploy on Vercel. Continue from plan v2 + todo.json.

## ✅ State (2026-05-31)

- **Phases done:** 0 (Foundation) + 1 (Home) + 2 (Solutions + Inbox Killer) + 3 (3 Ladder pages) — all build-clean
- **Latest deploy:** `ea36c31` on `master` → Vercel CD
- **Brand:** Quietforge · **Stack:** Next.js 16.2.6, React 19, Tailwind v4, Framer Motion
- **Routes live (12):** Home, Solutions hub, Inbox Killer, Web Upgrade, Sales Funnel, Lead Magnet Game, Legal + 2 legacy redirects

## 🗺️ Architecture (memorise)

- **Tokens:** `globals.css` — CSS custom properties
- **Layout:** `layout.tsx` wraps `<Header />` + `<main>` + `<Footer />` on every route
- **Primitives:** `src/components/ui/` — Button, Card, Section, Eyebrow, FaqItem, ProcessStepHorizontal, PricingCard
- **Lib:** `constants.ts` (ROUTES, PRICING), `motion.ts`, `utils.ts` (cn)
- **Copy source:** `Tak to ma być/*.md` — **paste verbatim, never invent**

## 🎯 Next: Phase 4 — Conversion & Trust Pages

**Goal:** 5 pages that close the conversion loop.

### Pages in order (2–3 sessions)

1. **`/solutions/managed-automation`** — MRR core
   - 3 tiers: Care €99/mo · Manage €349/mo · Partner €890/mo
   - Copy from `Pricing & Managed Automation.md` §B
   - OG: `/public/og/managed-automation.svg`

2. **`/pricing`** — The Path visual
   - Step 1: Map (€290) → Step 2: Build (from €1,200) → Step 3: Run (from €99/mo)
   - Copy from `Pricing & Managed Automation.md` §A
   - OG: `/public/og/pricing.svg`

3. **`/how-it-works`** — Process page
   - 3 steps: Discovery → Build → Run, HITL highlight, timeline, FAQ
   - Copy from `Trust & Conversion Pages.md` §1
   - OG: `/public/og/how-it-works.svg`

4. **`/results`** — Use cases
   - 4 patterns: Problem → System → Result + [X] placeholder
   - Copy from `Mapa Strony Filar 2.md` §5
   - OG: `/public/og/results.svg`

5. **`/about`** — Why me / moat / bridge to Pillar 3
   - Copy from `Trust & Conversion Pages.md` §2
   - OG: `/public/og/about.svg`

**Build gate:** `npm run build` + `npm run typecheck` must pass per page.
**Sitemap:** update after every new route.

## ⚠️ Rules

1. One page per commit — no mega-diffs
2. TypeScript strict — zero `any`
3. Tailwind utility-first — no inline styles
4. Dark theme default — CSS vars from `globals.css`
5. Mobile-first — collapse to 1col < 820px
6. `prefers-reduced-motion` respected
7. Every route needs `Metadata` export + OG image
8. Build must pass before any commit

## 📚 Read before coding

1. `docs/plans/quietforge-rebuild-plan-v2.md` — §Phase 4
2. `todo.json` — phase-4 tasks
3. `Tak to ma być/Pricing & Managed Automation — Copy & Wireframe (Filar 2).md` — §A, §B
4. `Tak to ma być/Trust & Conversion Pages — Copy & Wireframe (Filar 2).md` — §1, §2
5. `Tak to ma być/Mapa Strony Filar 2.md` — §5 (Results)
6. `src/lib/constants.ts` — pricing SSoT

---

> **Begin: verify `npm run build` passes locally, then implement `/solutions/managed-automation`.**
