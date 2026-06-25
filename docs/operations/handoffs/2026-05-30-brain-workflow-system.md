# Handoff: Brain + Workflow System for services.flexgrafik.nl

## Context

After deploying the rebuilt `services.flexgrafik.nl` landing page, the project needed canonical documentation and operational workflows to transition from ad-hoc builds to a maintainable, sellable B2B asset.

## Deliverables

### 1. brain.md — Canonical Project Brain

`services/brain.md` — 14 sections covering:
- Identity (domain, repo, Vercel project, role)
- Goal (sell Inbox Killer — one product)
- Audience separation (Track 3 vs Track 4 rules)
- Tech stack (Next.js 16, React 19, TS strict, Tailwind v4, Framer Motion)
- Information Architecture (flat: `/`, `/inbox-killer/`, `/digital-modernization/`, `/legal/`)
- Design tokens (source of truth: `globals.css`)
- Hard guardrails (8 rules — build must pass, one product, no `any`, mobile-first, etc.)
- Deploy rules (Vercel static export, DNS configuration)
- Post-deploy verification (Lighthouse targets, manual checklist)
- Source of Truth links (strategy docs, portfolio AGENTS.md)
- Backlog recommendation (`TODO.md` in repo root)
- Do's & Don'ts (sales copy first, no tech jargon, etc.)
- Key files reference
- Command reference table

### 2. Workflow Files (`.agents/workflows/`)

| Workflow | Purpose |
|---|---|
| `build-check.md` | Pre-commit build + TypeScript verification protocol |
| `deploy-vercel.md` | Vercel deploy with linked project + domain verification |
| `new-page.md` | Scaffold for adding a route (metadata, OG, sitemap, section composition) |
| `seo-audit.md` | Lighthouse + manual SEO/conversion checklist (Performance ≥90, SEO ≥95) |
| `component-scaffold.md` | Creating a new UI component with proper structure (Tailwind, CSS vars, `'use client'`) |

### 3. package.json Scripts

Added:
- `"lint": "next lint"` (was `"eslint"`)
- `"typecheck": "tsc --noEmit"`
- `"audit:links": "npx broken-link-checker https://services.flexgrafik.nl --ordered"`

## Build Results

- `npm run build`: ✅ 7/7 static pages, TypeScript clean, zero errors
- Routes: `/`, `/inbox-killer/`, `/digital-modernization/`, `/legal/`
- Output: `dist/` with `index.html` and all route folders

## Files Changed

| File | Action |
|---|---|
| `services/brain.md` | **New** |
| `services/.agents/workflows/build-check.md` | **New** |
| `services/.agents/workflows/deploy-vercel.md` | **New** |
| `services/.agents/workflows/new-page.md` | **New** |
| `services/.agents/workflows/seo-audit.md` | **New** |
| `services/.agents/workflows/component-scaffold.md` | **New** |
| `services/package.json` | **Modified** — added `typecheck`, `audit:links`, fixed `lint` |

## State

- portfolio: 47/47 pages, clean, live at `portfolio.flexgrafik.nl`
- services: rebuilt, 7/7 pages, brain + workflows documented, deployed to `https://flexgrafik-services.vercel.app`
- DNS: `services.flexgrafik.nl` requires A record → `76.76.21.21` in Cyber-Folks panel

## Next Steps

1. Add DNS A record for `services.flexgrafik.nl`
2. Create `services/TODO.md` with Phase 2 items
3. Run first `seo-audit.md` workflow after DNS propagation
4. KFA meeting: June 6 — use `/inbox-killer/` as live proof
