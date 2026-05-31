# Quietforge Portfolio Rebuild — v2 (Audited & Corrected Plan)

> **Status:** MASTER PLAN · **Stack:** Next.js 16.2.6 (static export), React 19, Tailwind v4, Framer Motion
> **Source docs:** `Tak to ma być/*.md` (copy + wireframe ready)
> **Design tokens:** `src/app/globals.css`

---

## 0. Executive Context

- **Brand change:** FlexGrafik Digital → **Quietforge** (name approved; token `[BRAND]` in copy docs)
- **Architecture shift:** one-pager → **12-route App Router site** with persistent shared layout
- **Conversion goal:** every page → `Book your Automation Map →` (€290 paid Discovery)
- **Deploy target:** Vercel static export (`output: 'export'` — current setting)

### 0.1. Critical Architectural Constraint — STATIC EXPORT

Current `next.config.ts` sets `output: 'export'`. This means:
- **NO API routes** (`/api/*` cannot exist in static export)
- **NO server components** that need Node runtime
- **NO SSR** — everything is pre-rendered at build time
- **NO dynamic routes** without `generateStaticParams`

**Impact on plan:**
- Mollie payment cannot use `/api/mollie/route.ts` (contradicts plan §10)
- Must use **direct Mollie Payment Link API** calls from client side (via external service or Vercel Functions deployed separately)
- Blog must use `generateStaticParams` for `[slug]` routes

### 0.2. Existing Codebase Reality (audited)

| Asset | Status | Action |
|-------|--------|--------|
| `src/app/page.tsx` | One-pager, FlexGrafik brand | Complete rewrite |
| `src/app/inbox-killer/page.tsx` | Functional page, FlexGrafik brand | Rewrite as `/solutions/inbox-killer`, reuse patterns |
| `src/app/digital-modernization/page.tsx` | Coming Soon placeholder | Remove or redirect |
| `src/app/legal/page.tsx` | GDPR/Privacy — keep | Keep, update brand |
| `src/components/ui/*` | Button, Card, Section, Badge — solid primitives | Extend, don't replace |
| `src/components/*` (feature) | 13 components (Hero, PainPoints, etc.) | Delete superseded ones (TrustBar, Solution, etc.) |
| `Tak to ma być/*.md` | 7 files with full copy + wireframes | **Use as primary content source** |
| `public/og/` | 3 SVG OG images | Scale to 12+ |
| `.env.local` | Vercel OIDC token only | Add Mollie API key later |

### 0.3. Strategy Docs Already Written (use, don't guess)

| Document | Content |
|----------|---------|
| `Home — Copy & Wireframe (Filar 2).md` | Full Home page copy, 7 sections, wireframe, H1 variants |
| `Inbox Killer — Copy & Wireframe (Filar 2).md` | Full spearhead page, 9 sections |
| `Ladder Pages — Copy & Wireframe (Filar 2).md` | Full copy for Web Upgrade, Sales Funnel, Lead Magnet |
| `Pricing & Managed Automation — Copy & Wireframe (Filar 2).md` | Full pricing + managed automation, **final prices** |
| `Trust & Conversion Pages — Copy & Wireframe (Filar 2).md` | How It Works, About, Book Discovery copy |
| `Mapa Strony Filar 2.md` | Sitemap v2.0, full IA |
| `Strategia Filar 2.md` | Full business strategy v5.0 |

### 0.4. Final Price SSoT (from Pricing doc)

| Item | Price (€) |
|------|-----------|
| Automation Map (Discovery) | **€290** — credited toward project |
| Inbox Killer setup | from €1,200 |
| Web Upgrade setup | from €1,800 |
| Sales Funnel setup | from €2,400 |
| Lead Magnet Game setup | from €2,200 |
| Bundle Growth (2 modules) | from €3,900 |
| Bundle Pro (3 modules) | from €6,500 |
| Managed Automation Care | €99/mo |
| Managed Automation Manage | €349/mo |
| Managed Automation Partner | €890/mo |

---

## 1. Full Route Map (12 routes total)

```
/                                          Home
/solutions/                                Solutions Hub
/solutions/inbox-killer                    ★ SPEARHEAD
/solutions/web-upgrade                     Ladder 1
/solutions/sales-funnel                    Ladder 2
/solutions/lead-magnet-game                Ladder 3
/solutions/managed-automation              MRR core
/pricing                                   Pricing wall
/how-it-works                              Process page
/results                                   Use cases
/about                                     About / moat
/blog + /blog/[slug]                       Blog (MDX)
/book-discovery                            Paid checkout ★ 
/legal                                     Privacy (keep existing)
```

---

## 2. Phased Execution Plan

### Phase 0 — Foundation & Brand Migration (Session 1)

**Goal:** shared layout, brand set, all primitives ready.

- [x] **Audit:** read existing codebase, strategy docs, map current state
- [ ] **Brand migration:** 
  - `layout.tsx` — Quietforge metadata, title template, JSON-LD, OG
  - `globals.css` — verify accent colours fit Quietforge identity
- [ ] **Shared layout shell:**
  - New `Header.tsx` — sticky, Solutions▾ dropdown, persistent `Book Automation Map →` CTA
  - Rewrite `Footer.tsx` — mini-sitemap, repeated CTA, Pillar 3 bridge
- [ ] **UI primitives (extend existing `src/components/ui/`):**
  - Extend `Button.tsx` → add `withArrow` prop, `size='xl'`
  - Extend `Card.tsx` → add `hover`, `interactive` variants
  - Add `Eyebrow.tsx` — section label component
  - Add `IconTile.tsx` — icon + text tile for pain grid
  - Add `ProcessStep.tsx` — numbered step component
  - Add `PricingCard.tsx` — tiered pricing display
  - Add `FaqItem.tsx` — collapsible FAQ
  - Keep existing `Section.tsx`, `Badge.tsx`
- [ ] **Error handling:**
  - `error.tsx` at root — UI error boundary
  - `not-found.tsx` at root — 404 page
  - `loading.tsx` at root — loading skeleton
- [ ] **Lib utilities:**
  - Keep `lib/utils.ts` (cn helper)
  - Add `lib/motion.ts` — shared Framer Motion variants
  - Add `lib/constants.ts` — site config, routes, social links
- [ ] **Delete old components** not used in new layout: `TrustBar.tsx`, `Solution.tsx`, `ProjectShowcase.tsx`, `RiskReversal.tsx`, `CTASection.tsx`, `Products.tsx`, `Trust.tsx`
- [ ] **Build gate:** `npm run build` + `npm run typecheck` must pass

**DoD:** Clean `layout.tsx` + `globals.css`, Header, Footer, all 4 existing primitives + 5 new, error boundaries, lib utils, build passing, brand checked.

---

### Phase 1 — Home Page (Session 2–3)

**Goal:** new `page.tsx` mapped 1:1 to `Home — Copy & Wireframe (Filar 2).md`.

**Sections (copy EXACTLY from source doc):**

1. **Hero** — H1: `Your website and back-office, running on autopilot.` + primary CTA `Book your Automation Map →`
2. **Pain Grid** — 4 tiles (Inbox / Old site / Manual quotes / No leads)
3. **Spearhead Spotlight (Inbox Killer)** — asymmetric, outcome bullets + CTA
4. **The Rest, In Order** — ladder teaser (Web Upgrade, Sales Funnel, Lead Magnet)
5. **Why This Works** — 3 pillars (live ecosystem / AI workforce / HITL)
6. **Results Teaser** — 2 mini cases with `[X]` placeholder metrics
7. **Final CTA Band** — paid Discovery value proposition

- [ ] Create `src/app/page.tsx` — compose all 7 sections
- [ ] Create section components: `HeroSection.tsx`, `PainGrid.tsx`, `SpearheadSpotlight.tsx`, `LadderTeaser.tsx`, `WhyThisWorks.tsx`, `ResultsTeaser.tsx`, `FinalCtaBand.tsx`
- [ ] OG image: `/public/og/home.png` (or SVG)
- [ ] Metadata export: title, description, OG, twitter
- [ ] Delete old `Hero.tsx`, `PainPoints.tsx`, `HowItWorks.tsx`, `CaseStudies.tsx`, `CTAFinal.tsx` (superseded)
- [ ] Build + typecheck pass

**DoD:** All 7 sections visible, copy matches source doc, CTA links work, OG image present, build passes, old components deleted.

---

### Phase 2 — Solutions Hub + Inbox Killer (Session 4–5)

**Goal:** Solutions▾ dropdown works, hub + spearhead pages ship.

#### 2a. `/solutions` (hub)
- Ladder layout: STEP 1 (Inbox Killer, largest) → STEP 2 (3 smaller cards) → KEEP IT RUNNING (Managed Automation)
- Each card: who / what / outcome / `Learn more →`
- Copy from Mapa Strony §3.0

#### 2b. `/solutions/inbox-killer` (spearhead)
- Copy from `Inbox Killer — Copy & Wireframe (Filar 2).md`
- Sections: Hero → Problem → How It Works (5 steps) → What You Get → Control & Safety → Setup + MRR seed → Under the Hood → FAQ → Final CTA
- Update existing `/inbox-killer/` content or create new route
- **Redirect:** `/inbox-killer` → `/solutions/inbox-killer` (via Vercel rewrites or meta refresh)

**DoD:** Both pages live, dropdown navigates correctly, copy matches source docs, OG images, build passes, redirect for old URL.

---

### Phase 3 — Ladder Pages (Session 6–7)

**Goal:** 3 up-sell pages with consistent template.

- `/solutions/web-upgrade` — copy from Ladder Pages doc
- `/solutions/sales-funnel` — copy from Ladder Pages doc
- `/solutions/lead-magnet-game` — copy from Ladder Pages doc

**Shared template per page:**
1. Product Hero (outcome H1 + CTA Discovery)
2. Problem (client language)
3. What It Is / How It Works (3–4 simple points)
4. What You Get (outcome cards)
5. Setup + MRR seed (price + link to Managed Automation)
6. FAQ (2–3 questions)
7. Final CTA → Book Discovery

- [ ] Extract shared `LadderPageTemplate` pattern or compose from section components
- [ ] Each page gets its own `Metadata` export + OG image
- [ ] Build passes

**DoD:** 3 ladder pages live, copy matches source docs, consistent template, OG images, build passes.

---

### Phase 4 — Conversion & Trust Pages (Session 8–9)

#### 4a. `/solutions/managed-automation`
- Copy from Pricing doc §B
- 3 tiers: Care (€99/mo) · Manage (€349/mo) · Partner (€890/mo)
- Positioning: "Your AI worker that never sleeps — kept healthy."

#### 4b. `/pricing`
- Copy from Pricing doc §A
- The Path visual: Map → Build → Run
- Step 1: Automation Map €290 (credited)
- Step 2: Setup tiers with `from €…` framing
- Step 3: Managed Automation tiers
- Why it's priced this way (value defence)
- Pricing FAQ

#### 4c. `/how-it-works`
- Copy from Trust & Conversion Pages doc §1
- 3 steps: Discovery → Build → Run
- HITL highlight block
- Timeline visual + FAQ

#### 4d. `/results`
- Copy from Mapa Strony §5 + Strategy §9
- 4 use cases: Inbox chaos, Site 2012→2026, Manual quotes, Dead landing→game
- Pattern: Problem → System → Wynik + 1 metric (`[X]` placeholder)
- Only use honest placeholders — no fabricated numbers

#### 4e. `/about`
- Copy from Trust & Conversion Pages doc §2
- Who / What makes this different / Why it matters
- Bridge to Pillar 3 (one-way link only)

**DoD:** 5 pages live, copy matches source docs, OG images, pricing SSoT consistent across all pages, build passes.

---

### Phase 5 — Blog + Book Discovery with Payment (Session 10–11)

#### 5a. Blog (`/blog` + `/blog/[slug]`)
- Add `@next/mdx` to dependencies (this IS a new dependency — acknowledged)
- Configure `next.config.ts` for MDX
- Create `src/app/blog/page.tsx` — post listing
- Create `src/app/blog/[slug]/page.tsx` with `generateStaticParams`
- 2–3 seed posts from Strategy/Insight topics
- Categories: Digital Transformation, Automation, Under the Hood, Insights
- Each post ends with CTA → Discovery
- OG image per post

#### 5b. `/book-discovery` (Paid Discovery checkout)
- Copy from Trust & Conversion Pages doc §3
- Form: name, company, email, biggest pain (checkboxes + text), URL
- **Payment strategy (corrected for static export):**
  - Since `output: 'export'` blocks API routes, use one of:
    - **Option A (recommended):** Mollie Payment Link API — client-side creates payment via direct Mollie link generation (requires Mollie API key on client with restricted permissions + Vercel environment variables)
    - **Option B:** Separate Vercel Function deployed alongside (works with `output: 'export'` as functions are independent)
    - **Option C:** External payment page (Mollie hosted checkout or Calendly paid)
  - Flow: form → generate Mollie payment link → redirect → webhook → confirm booking
  - Calendar: Calendly embed or external link (simplest)
  
- Guarantee copy: "If the Map shows nothing worth automating, you owe nothing further — and you keep the document."

**DoD:** Blog listing + 2 posts live, `/book-discovery` renders with form, payment flow works (at least Mollie link generation), build passes.

---

### Phase 6 — QA, SEO, Deploy Gate (Session 12)

- [ ] **OG images:** verify every route has 1200×630 OG image in `/public/og/`
- [ ] **Sitemap:** regenerate `sitemap.xml` with all 12+ routes + lastmod + priority
- [ ] **Robots.txt:** verify (allow all)
- [ ] **Meta audit:** every `page.tsx` exports correct `Metadata`
- [ ] **Redirect plan:**
  - `/inbox-killer` → `/solutions/inbox-killer`
  - `/digital-modernization` → `/solutions/web-upgrade` (or 410)
  - Verify via `next.config.ts` `redirects()` (static export supports redirects via Vercel)
- [ ] **Lighthouse check:** Performance ≥90 · Accessibility ≥95 · Best Practices ≥95 · SEO ≥95
- [ ] **Responsive smoke test:** mobile nav, section padding, typography scaling
- [ ] **Accessibility:** semantic headings, focus states, `prefers-reduced-motion`
- [ ] **Broken links:** `npm run audit:links` (or manual check all main CTA flows)
- [ ] **Google Analytics / tracking:** ensure existing GA4 and Meta Pixel are migrated to new pages
- [ ] **Handoff doc:** write `docs/handoffs/YYYY-MM-DD-quietforge-rebuild.md`

**DoD:** All checkpoints green, Lighthouse scores met, sitemap complete, no broken links, handoff written, build passes with zero warnings.

---

## 3. Critical Risks & Mitigations

| Risk | Impact | Mitigation |
|------|--------|------------|
| **Static export blocks API routes** | Cannot use `/api/mollie/route.ts` | Use client-side Mollie Payment Links or Vercel Functions |
| **zzpackage has no reusable Mollie Node code** | "Reuse pattern" assumption false | Build fresh Mollie integration from Mollie Node SDK |
| **Current `output: 'export'` may be intentional** | Assumption without Norbert's input | Ask before changing; static export works for this use case |
| **10+ pages = scope creep for solo** | Burnout, unfinished pages | Strictly 1–2 sessions per phase; if a phase stalls, move to next |
| **Content not reviewed** | Copy doesn't match Norbert's voice | All copy comes from approved "Tak to ma być" docs |
| **Old URLs break SEO** | Traffic loss | Redirects via Vercel config; update sitemap immediately |
| **No real metrics for Results page** | Empty placeholders look unprofessional | Use `[X]` per strategy — honest > fabricated |

---

## 4. Tooling & Config Changes

| Change | Reason |
|--------|--------|
| Add `@next/mdx` to `dependencies` | Blog requires MDX support |
| Add `mollie/node-sdk` to `dependencies` | Mollie payment integration |
| Add `redirects()` to `next.config.ts` | `/inbox-killer` → `/solutions/inbox-killer` |
| Create `docs/plan/` directory | House all planning documents |
| Add `.env.local` template: `MOLLIE_API_KEY=` | Document required env vars |

---

## 5. Deliverables Summary

| Session | Focus | Expected deliverable |
|---------|-------|---------------------|
| 1 | Phase 0 — Foundation | Shared layout, primitives, Header/Footer, error pages, build passing |
| 2–3 | Phase 1 — Home | New `page.tsx` (7 sections), OG image, old components deleted |
| 4–5 | Phase 2 — Solutions | `/solutions` hub + `/solutions/inbox-killer`, redirect, build passing |
| 6–7 | Phase 3 — Ladder | 3 ladder pages (`web-upgrade`, `sales-funnel`, `lead-magnet-game`) |
| 8–9 | Phase 4 — Trust | `/pricing`, `/how-it-works`, `/results`, `/about`, `/solutions/managed-automation` |
| 10–11 | Phase 5 — Blog + Payment | MDX blog (2 posts), `/book-discovery` with Mollie flow |
| 12 | Phase 6 — QA | OG images ×12, sitemap, Lighthouse ≥90/95/95/95, handoff doc |

---

## 6. Decision Log

| Decision | Option chosen | Rationale |
|----------|---------------|-----------|
| Static export or server-rendered | **Keep static export** for now | Works for marketing site; revisit if Mollie integration requires API |
| Mollie approach | **Client-side Payment Link** or **Vercel Function** | Static export compatible; ask Norbert for env key |
| Old `/inbox-killer` content | **Rewrite from source doc** | Brand + positioning changed; old content is FlexGrafik-branded |
| Blog MDX or CMS | **Static MDX** | No CMS dependency; speed + simplicity for low-volume SMB blog |
| Error pages | **File-system based** (`error.tsx`, `not-found.tsx`) | App Router native pattern |
