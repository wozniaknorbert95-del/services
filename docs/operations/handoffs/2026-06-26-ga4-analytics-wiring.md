# Handoff — GA4 analytics wiring (2026-06-26)

**Repo:** services.flexgrafik.nl · **Build:** `npm run build` ✅ (34 routes)

## Cel / Goal

Wire existing `qf_analytics` conversion events to GA4 via gtag — closes SESSION-ANCHOR item #2.

## Co zrobiono / What changed

- `GoogleAnalytics` client component loads gtag (`afterInteractive`), disables auto page_view
- `AnalyticsListener` forwards `qf_analytics` CustomEvents → `gtag('event', …)` per conversion-pipeline §10
- App Router page views tracked on `pathname` + `searchParams` change
- No GA script when `NEXT_PUBLIC_GA_MEASUREMENT_ID` is unset (safe local dev)
- `brain.md` — Vercel env table updated

## Pliki / Files

| File | Action |
|------|--------|
| `src/components/analytics/GoogleAnalytics.tsx` | new |
| `src/lib/gtag.ts` | new |
| `src/types/gtag.d.ts` | new |
| `src/app/layout.tsx` | update — mount `<GoogleAnalytics />` |
| `brain.md` | update — env docs |
| `docs/operations/SESSION-ANCHOR.md` | update — mark GA shipped |

## Weryfikacja / Verification

```bash
npm run typecheck   # pass
npm run build       # pass (34 routes)
```

## Post-deploy smoke (owner)

1. Vercel → Settings → Environment Variables → `NEXT_PUBLIC_GA_MEASUREMENT_ID` = `G-…` from GA4 Admin → Data streams → quietforge web stream
2. Redeploy production
3. GA4 → Reports → Realtime — open site, confirm active user
4. Click **Book Automation Map** — Realtime → Event count by Event name → `cta_book_map_click`
5. Navigate `/` → `/pricing/` — page_path updates in DebugView (optional)

## Next steps

- MCP: optional `analytics-mcp` in `~/.cursor/mcp.json` for agent-side reporting (service account + Viewer on property `528764186`)
- Cookie consent / Consent Mode v2 if legal requires before EU tracking
- Register custom events as conversions in GA4 Admin for funnel dashboards
