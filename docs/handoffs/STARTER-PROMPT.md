# Quietforge — Starter Prompt for Next Session

> **Read this first.** Single source of truth for where we are and what to do next.

---

## Current state

- **Brand:** Quietforge (was FlexGrafik Digital)
- **Phases completed:** 0 (Foundation) ✅ + 1 (Home) ✅
- **Build:** `npm run build` + `npm run typecheck` — zero errors
- **Deploy:** Vercel CD on push to `master`

---

## Architecture (memorise before coding)

### Design system
- **Tokens:** `src/app/globals.css` — `--qf-bg #0e0c0a`, `--qf-accent #e8a33d`, `--qf-text #e9e2d4`
- **Font:** JetBrains Mono everywhere. Sharp 2px radius. No rounded pills.
- **Rules:** `DESIGN-SYSTEM.md` + `style-guide.html` (open in browser) + `quietforge.css`

### Shared layout
- `src/app/layout.tsx` — wraps all pages with `<Header />` + `<main>{children}</main>` + `<Footer />`
- `Header.tsx` — sticky, Solutions dropdown, "Book Automation Map →" CTA, mobile hamburger
- `Footer.tsx` — 4-column mini-sitemap, Pillar 3 bridge

### UI primitives (`src/components/ui/`)
- `Button` (primary/secondary/ghost/link, withArrow, xl), `Card` (default/accent/spearhead/hover/interactive), `Section` (motion wrapper), `Badge`
- `Eyebrow`, `IconTile`, `ProcessStep`, `PricingCard`, `FaqItem`

### Lib utilities
- `src/lib/constants.ts` — `ROUTES`, `NAV_ITEMS`, `SOLUTION_DROPDOWN`, `PRICING` (€ SSoT)
- `src/lib/motion.ts` — `fadeIn`, `slideUp`, `staggerContainer`, `scaleIn`
- `src/lib/utils.ts` — `cn()` helper

### Copy source
- All copy lives in `Tak to ma być/*.md` — **paste verbatim, do not invent.**

---

## Next: Phase 2 — Solutions Hub + Inbox Killer

### Route map (from `todo.json` / plan v2)

```
/solutions/                    ← NEW — Solutions Hub (ladder layout)
/solutions/inbox-killer/     ← NEW — Spearhead (rewrite old /inbox-killer/)
```

### Phase 2 tasks

1. **Create `/solutions` hub page**
   - Ladder layout: STEP 1 (Inbox Killer, largest, `.qf-panel--spearhead`) → STEP 2 (3 smaller cards: Web, Funnel, Lead) → KEEP IT RUNNING (Managed Automation banner)
   - Copy from `Mapa Strony Filar 2.md` §3.0
   - OG image: `/public/og/solutions.svg`

2. **Create `/solutions/inbox-killer` page**
   - Sections: Hero → Problem → How It Works (5 steps) → What You Get → Control & Safety → Setup + MRR seed → Under the Hood → FAQ → Final CTA
   - Copy from `Inbox Killer — Copy & Wireframe (Filar 2).md`
   - OG image: `/public/og/solutions-inbox-killer.svg`

3. **Redirect old `/inbox-killer/` → `/solutions/inbox-killer/`**
   - Add to `next.config.ts` `redirects()`
   - Old `/digital-modernization/` → redirect to `/solutions/web-upgrade/` or 410

4. **Build gate:** `npm run build` + `npm run typecheck` pass
5. **Handoff:** `docs/handoffs/YYYY-MM-DD-phase-2-solutions.md`

---

## Critical rules (do not break)

1. **One component per session.** No mega-diffs.
2. **TypeScript strict** — zero `any`.
3. **Tailwind utility-first** — no inline styles, no CSS Modules.
4. **Dark theme default** — CSS vars from `globals.css`.
5. **Mobile-first** — grids collapse to 1col < 820px.
6. **`prefers-reduced-motion`** respected globally.
7. **Every new route** needs `Metadata` export + unique OG image.
8. **Build must pass** before any commit.

---

## Files to read before coding

1. `docs/plans/quietforge-rebuild-plan-v2.md` — full phased plan
2. `todo.json` — master task list
3. `Tak to ma być/Mapa Strony Filar 2.md` — sitemap
4. `Tak to ma być/Inbox Killer — Copy & Wireframe (Filar 2).md` — spearhead copy
5. `DESIGN-SYSTEM.md` — visual rules
6. `src/lib/constants.ts` — routes & pricing

---

> **Begin by verifying build passes, then implement Phase 2 in order.**
