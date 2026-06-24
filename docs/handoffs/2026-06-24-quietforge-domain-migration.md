# Handoff — quietforge.flexgrafik.nl domain migration (2026-06-24)

**Repo:** quietforge.flexgrafik.nl · **Build:** `npm run build` ✅ (22 routes)

## Cel / Goal

Move production canonical URL from non-resolving `services.flexgrafik.nl` to `quietforge.flexgrafik.nl` — DNS, Vercel, code SSoT, SEO assets.

## Co zrobiono / What changed

- `SITE_URL` → `https://quietforge.flexgrafik.nl` (single source of truth)
- All page `openGraph.url` + root `metadataBase` / JSON-LD use `SITE_URL`
- `sitemap.xml`, `robots.txt`, gratka + OG footers updated
- `vercel.json`: 301 `services.flexgrafik.nl` → `quietforge.flexgrafik.nl`
- Vercel CLI: `quietforge.flexgrafik.nl` added to project `flexgrafik-services`
- CyberFolks: A record `quietforge` → `76.76.21.21` (owner, 2026-06-24)

## Pliki / Files

| File | Action |
|------|--------|
| `src/lib/constants.ts` | SITE_URL |
| `src/app/layout.tsx` | metadataBase, OG, authors |
| `src/app/**/page.tsx` (12 routes) | openGraph.url → SITE_URL |
| `scripts/generate-sitemap.mjs` | base URL |
| `public/sitemap.xml`, `public/robots.txt` | regenerated |
| `public/gratka/*`, `public/og/*.svg` | domain footers |
| `vercel.json` | host redirect |
| `docs/strategy/site-map.md`, `AGENTS.md` | canon header |

## Verification (pre-push)

```
npm run build   ✅
npm run typecheck ✅
nslookup quietforge.flexgrafik.nl ns1.cyberfolks.pl → 76.76.21.21 ✅
```

## Post-deploy smoke (owner / agent after DNS propagates)

- [x] Deploy `7eefcb5` → Vercel CI success (2026-06-24 ~07:20 UTC)
- [x] `flexgrafik-services.vercel.app/sitemap.xml` → `<loc>https://quietforge.flexgrafik.nl/...`
- [x] Google DNS `8.8.8.8` + Cloudflare `1.1.1.1` → `76.76.21.21`
- [x] Authoritative `ns1.cyberfolks.pl` → `76.76.21.21`
- [ ] `nslookup quietforge.flexgrafik.nl` → `76.76.21.21` (local ISP resolver still caching NXDOMAIN)
- [ ] `curl -sI https://quietforge.flexgrafik.nl/` → HTTP 200 (pending Vercel SSL verify)
- [ ] `/results/agent-orchestrator/` → title `Case study — Agent OS`
- [ ] Vercel Domains → `quietforge.flexgrafik.nl` Valid + SSL (CLI still warning; email when ready)
- [ ] Optional: `https://services.flexgrafik.nl/` → 301 to quietforge (after services A record)

## Next steps

1. Wait DNS propagation (TTL 14400s, up to ~4h)
2. Update LinkedIn Featured + external links pointing at old URL
3. Google Search Console: add `quietforge.flexgrafik.nl` property
