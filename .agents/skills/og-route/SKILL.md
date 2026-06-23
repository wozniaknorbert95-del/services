---
name: og-route
description: New-route checklist for services.flexgrafik.nl — generate an OG image, regenerate the sitemap, confirm robots, and add route metadata. Enforces AGENTS.md §9 (OG image per new route) and §10 (sitemap/robots updated). Invoke whenever a new page/route is added under src/app.
---

# og-route — New Route Completeness

A new route isn't "done" until it is crawlable and shareable. `AGENTS.md` §9–10 require an OG image per route and an updated sitemap/robots. This skill is the checklist that prevents shipping orphaned pages.

## When to Use This Skill

Invoke this skill when:
- Adding a new page under `src/app/**/page.tsx`
- Adding or renaming a route that should appear in the sitemap
- Auditing whether existing routes have OG images + metadata

## Procedure

### Step 1 — Route metadata

Add a `layout.tsx` or `metadata` export for the route: title, description, and `openGraph` block. Follow `marketing-strategy.md` tone (outcome-oriented, Conversion Systems Architect). Title should match the page's H1 intent.

### Step 2 — OG image

```bash
npm run generate:og      # node scripts/generate-og.mjs
```

Confirm an OG asset exists for the new route (1200×630, per `public/og/`). If the generator is route-driven, ensure the new route is registered; otherwise add the asset and reference it in the route's `openGraph.images`.

### Step 3 — Sitemap

```bash
npm run generate:sitemap   # node scripts/generate-sitemap.mjs (also runs in prebuild)
```

`npm run build` runs this automatically via the `prebuild` hook — but run it explicitly to confirm the new route is included before committing. Verify the route appears in the generated `sitemap.xml`.

### Step 4 — Robots & route map

- Confirm the route is allowed (not disallowed) in `robots.txt` unless intentionally hidden.
- Add the route to `docs/strategy/site-map.md` §5 (Route map) so the canon stays in sync.

### Step 5 — Verify

Run `verify` (`npm run build` regenerates sitemap and must pass). Optionally smoke the new route with MCP `user-chrome-devtools` (`navigate_page` + `list_network_requests` for missing OG/asset 404s).

## Output Format

```markdown
## OG Route — <route path>

| Item | Status |
|------|--------|
| Metadata (title/desc/openGraph) | ✅ / ❌ |
| OG image present (1200×630) | ✅ / ❌ |
| Route in sitemap.xml | ✅ / ❌ |
| robots.txt allows | ✅ / ❌ |
| site-map.md §5 updated | ✅ / ❌ |
| Build pass | ✅ / ❌ |
```

## Guardrails

- No new route ships without an OG image (§9) and sitemap/robots update (§10).
- Keep OG copy consistent with positioning — no portfolio framing.
- Add the route to `site-map.md` §5 in the same session (canon sync).
- Don't expose internal/draft routes in sitemap; disallow in robots if not public.
