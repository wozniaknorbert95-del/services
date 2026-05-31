# Next Session Prompt — Phase 6 QA + OG Audit

> **Start here.** Build passes. Deploy live on Vercel. All Phases 0–5 complete.

## ✅ State (2026-05-31)

- **Phases done:** 0 (Foundation) + 1 (Home) + 2 (Solutions + Inbox Killer) + 3 (Ladder) + 4 (Trust/Conversion) + 5 (Blog + Book Discovery) — all build-clean
- **Latest deploy:** `ef94785` on `master` → `https://flexgrafik-services.vercel.app/`
- **Brand:** Quietforge · **Stack:** Next.js 16.2.6, React 19, Tailwind v4, @next/mdx
- **Routes live (22):** Home, Solutions hub, 5 solution pages, Pricing, How It Works, Results, About, Blog (listing + 3 posts), Book Discovery, Legal, 2 redirects

## 🗺️ Architecture (memorise)

- **Tokens:** `globals.css` — CSS custom properties
- **Layout:** `layout.tsx` wraps `<Header />` + `<main>` + `<Footer />`
- **Primitives:** `src/components/ui/` — Button, Card, Section, Eyebrow, FaqItem, PricingCard, WaitlistForm
- **Lib:** `constants.ts` (ROUTES, PRICING, NAV_ITEMS), `motion.ts`, `utils.ts` (cn)
- **Blog:** `@next/mdx` + `mdx-components.tsx` + `src/app/blog/posts/*.mdx`
- **Deploy:** Vercel native Next.js (no static export), `.next/` build output

## 🎯 Next: Phase 6 — QA, SEO & Deploy Gate

**Goal:** Wszystkie 22 strony mają pełne Metadata + OG image. Zero broken links. Lighthouse green.

### Tasks in order (1 session)

1. **OG Image Audit (P6.1)** — 10 stron bez OG image
   - Brakujące: `/blog`, `/blog/[slug]`, `/solutions`, `/solutions/*` (4), `/legal`, `/digital-modernization`, `/inbox-killer`
   - Stworzyć SVG 1200×630 per strona, dodać do `metadata.openGraph.images`

2. **Meta Audit (P6.3)** — zweryfikować każda strona
   - `title`, `description`, `openGraph`, `twitter` na każdej route
   - Unikalne tytuły — nie duplikaty

3. **Sitemap Verification (P6.2)** — upewnić się że wszystkie 22 route są w `sitemap.xml`
   - Priority hierarchy: Home 1.0, Book Discovery 0.9, spearhead 0.9, trust 0.8, blog 0.6, legal 0.3

4. **Broken Link Check (P6.6)** — `npm run audit:links` lub manual check
   - Wszystkie CTA flow działają (Home → Book Discovery)
   - External links mają `target="_blank" rel="noopener noreferrer"`

**Build gate:** `npm run build` + `npm run typecheck` must pass.
**Commit:** jeden zbiorczy `feat: OG images + meta audit for all routes`.

## ⚠️ Rules

1. TypeScript strict — zero `any`
2. Tailwind utility-first — no inline styles
3. Every route needs `Metadata` export + unique OG image
4. OG images: 1200×630 SVG, Quietforge branded, consistent style
5. Build must pass before commit

## 📚 Read before coding

1. `docs/handoffs/2026-05-31-phase-5-complete-deploy-fixed.md` — stan + blockers
2. `todo.json` — phase-6 tasks (P6.1–P6.7)
3. `src/lib/constants.ts` — ROUTES (source of truth dla wszystkich URL)
4. Istniejące OG w `public/og/` — kopiuj pattern (home.svg, pricing.svg itd.)

## 🔴 Blockers (tylko użytkownik może rozwiązać)

| Bloker | Co potrzeba |
|---|---|
| `services.flexgrafik.nl` DNS | Rekord A `76.76.21.21` w panelu Cyber-Folks dla subdomeny `services` |
| Mollie payment | `MOLLIE_API_KEY` do `.env.local` + GitHub secrets |

---

> **Begin: verify `npm run build` passes locally, then run OG audit — stwórz brakujące SVG i podpin je do metadata na każdej stronie bez OG.**
