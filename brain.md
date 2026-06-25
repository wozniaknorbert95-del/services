# Brain — services.flexgrafik.nl

## Canonical project memory | v2.0 | 2026-06-25

---

## 0) READ ORDER FOR AGENTS

**Marketing, conversion, UX, and direction are NOT owned by this file.**

| Step | Document |
|------|----------|
| 1 | [`docs/README.md`](docs/README.md) — knowledge map |
| 2 | [`docs/canons/vision-system.md`](docs/canons/vision-system.md) — north star |
| 3 | [`docs/canons/*-rules.md`](docs/canons/README.md) — HARD rules |
| 4 | [`docs/strategy/`](docs/strategy/README.md) — detailed canon |
| 5 | This file — tech, deploy, guardrails only |
| 6 | [`docs/operations/SESSION-ANCHOR.md`](docs/operations/SESSION-ANCHOR.md) — live session |

**Ecosystem constitution:** `flexgrafik-meta/docs/core/` (upstream — wins on AS-IS truth)

---

## 1) IDENTITY

| | |
|---|---|
| **Domain** | `quietforge.flexgrafik.nl` (legacy: `services.flexgrafik.nl`) |
| **Repo** | `wozniaknorbert95-del/services` (standalone sibling asset) |
| **Role** | B2B Conversion Systems Portfolio — qualify SMB leads + LOS investor bridge |
| **Positioning** | Conversion Systems Architect — see [`marketing-rules.md`](docs/canons/marketing-rules.md) |
| **Language** | English (all public B2B assets) |
| **Audience** | ZZP, small BV, professional services + tech/investor via `/results/owner-ecosystem/` |

---

## 2) TECH STACK

| Layer | Technology |
|---|---|
| Framework | Next.js 16.2.6 (App Router) |
| React | 19.2.4 |
| TypeScript | strict, `noEmit` |
| Styling | Tailwind CSS v4 (utility-first) |
| Animation | Framer Motion + `prefers-reduced-motion` |
| Icons | Lucide React |
| Deploy | Vercel static export (`output: 'export'`) |
| Build artifact | `dist/` (not `.next/`) |

---

## 3) DESIGN TOKENS

**Source of truth:** `src/app/globals.css` — CSS custom properties.

**Also read:** [`DESIGN-SYSTEM.md`](DESIGN-SYSTEM.md) · [`quietforge.css`](src/app/quietforge.css)

**Rule:** No inline styles, no hardcoded colors, no CSS Modules. Tailwind + `var(--color-*)` / `qf-*` classes.

**Intent colors:** `--fx-time`, `--fx-money`, `--fx-order`, `--fx-calm`, `--fx-efficiency` — see [`ux-rules.md`](docs/canons/ux-rules.md) UR-09.

---

## 4) GUARDRAILS (HARD)

1. **`npm run build` must pass before every commit.**
2. **TypeScript strict — zero `any`.** `npm run typecheck` for verification.
3. **One primary CTA above the fold** — see [`strategy-rules.md`](docs/canons/strategy-rules.md) SR-04.
4. **Animations respect `prefers-reduced-motion`.**
5. **Mobile-first.** Tap targets ≥ 44px.
6. **Zero secrets in repo.** Keys in `.env.local` (gitignored).
7. **Deploy:** Vercel auto on push to `master` (marketing asset exception to global Zasada 11).
8. **OG image for every new route** — `scripts/generate-og.mjs`.
9. **Sitemap** regenerates on build — `scripts/generate-sitemap.mjs`.
10. **Handoff every session** — `docs/operations/handoffs/YYYY-MM-DD-*.md`.
11. **WhatsApp AVG:** opt-in, 90-day retention, delete webhook, privacy before agent launch.
12. **Build fail = PR blocked.** Missing prod env blocks deploy.
13. **Images:** WebP preferred; screenshots max 1600px; lazy below fold.

---

## 5) DEPLOY

### Vercel

```bash
# Project: wozniaknorbert95-dels-projects/flexgrafik-services
npx vercel projects ls
npx vercel dist --prod --yes
```

### DNS

- A record `services` → `76.76.21.21` OR CNAME → `cname.vercel-dns.com`
- Verify: `npx vercel domains inspect quietforge.flexgrafik.nl`

---

## 6) POST-DEPLOY VERIFICATION

```bash
curl -sI https://quietforge.flexgrafik.nl/ | head -1
npm run audit:links
npm run lighthouse:ci   # A11y <95 or Perf <85 blocks merge
```

| Checkpoint | Target |
|---|---|
| Lighthouse Performance | ≥ 90 |
| Lighthouse Accessibility | ≥ 95 |
| Lighthouse Best Practices | ≥ 95 |
| Lighthouse SEO | ≥ 95 |
| Mobile 375px | No horizontal scroll |
| OG images | All main routes |

---

## 7) SOURCE OF TRUTH (quick links)

| Topic | Path |
|---|---|
| Knowledge map | `docs/README.md` |
| Vision / direction | `docs/canons/vision-system.md` |
| HARD rules | `docs/canons/*-rules.md` |
| Strategy detail | `docs/strategy/` |
| Content SSoT | `src/content/*.ts` — see `docs/architecture/content-ssot.md` |
| Routes & pricing | `src/lib/constants.ts` |
| Ecosystem meta | `flexgrafik-meta/docs/core/` |
| Handoffs | `docs/operations/handoffs/` |

---

## 8) KEY FILES

| File | Purpose |
|---|---|
| `src/app/globals.css` | Design tokens |
| `src/app/layout.tsx` | Root metadata, JSON-LD |
| `src/app/page.tsx` | Home composition — binding: site-map §2 |
| `src/content/ecosystem.ts` | Modules, repos, home sections |
| `src/content/proof.ts` | Metrics, proof manifest |
| `public/og/*.svg` | OG images |

---

## 9) COMMANDS

| Command | Purpose |
|---|---|
| `npm run build` | Static export to `dist/` |
| `npm run typecheck` | TypeScript check |
| `npm run lint` | ESLint |
| `npm run audit:links` | Broken link check |
| `npx vercel dist --prod` | Production deploy |

---

*Last updated: 2026-06-25 · Owner: Norbert Wozniak · Next review: quarterly or post-Phase B*
