# Handoff — GA4 MCP audit + P1 instrumentation (2026-06-26)

**Repo:** services.flexgrafik.nl · **Build:** `npm run build` ✅ (34 routes)

## Cel / Goal

Domknąć sesję GA4: MCP audit raportów + P1 instrumentacja (`location`, `book_discovery_view`).

## Wyniki sesji

### MCP analytics-mcp
- **Status:** tools widoczne ✅ · `mcp.json` → `GOOGLE_APPLICATION_CREDENTIALS` ✅
- **OAuth:** usunięte (`setup-ga-mcp-oauth.py` deleted) — Google blokował public client
- **Bloker:** brak `C:/Users/FlexGrafik/.config/quietforge-ga-sa.json`
- **Fix:** Chrome → GCP service account JSON → GA4 Viewer → restart Cursor

### Prod smoke (browser MCP, bez credentials)
- gtag `G-M24NL622DF` ✅
- `cta_book_map_click` + `page_path` ✅

### P1 kod (shipped lokalnie, deploy pending)
- `location` na wszystkich głównych CTA (hero, header, sticky, pricing, solutions, results, intent_router, final_cta, form)
- `book_discovery_view` + `AnalyticsPageView` na `/book-discovery/`
- `intake_submit` z `location: book_discovery_form`

### Gap analysis (kod vs canon §10)

| Event | Status |
|-------|--------|
| `cta_book_map_click` | ✅ + location |
| `cta_whatsapp_click` | ✅ + location |
| `wizard_demo_click` | ✅ + location |
| `case_study_open` | ✅ + href + location |
| `pricing_view` | ✅ |
| `book_discovery_view` | ✅ **new** |
| `sample_map_download` | ✅ + location |
| `intake_submit` | ✅ + location |
| `book_payment_*` | ⏸ deferred (Mollie) |

### GA Admin (agent po odblokowaniu MCP)
- Key events: `cta_book_map_click`, `intake_submit`
- Funnel: home → pricing_view|case_study → cta_book_map_click → intake_submit
- Custom dimension: zarejestruj param `location` (Admin → Custom definitions)

## Pliki / Files

| File | Action |
|------|--------|
| `src/lib/analytics.ts` | +`book_discovery_view` |
| `src/app/book-discovery/page.tsx` | AnalyticsPageView |
| `src/components/Header.tsx` | header CTA tracking |
| `src/components/home/*` | location params |
| `src/components/layout/StickyCta.tsx` | location params |
| `src/app/pricing/page.tsx` | location params |
| `src/app/solutions/page.tsx` | location params |
| `src/app/results/page.tsx` | location params |
| `src/components/solutions/SolutionLayout.tsx` | location params |
| `src/app/book-discovery/BookDiscoveryForm.tsx` | intake location |
| `src/components/FooterArtefactLinks.tsx` | footer sample_map location |

## Weryfikacja / Verification

```bash
npm run typecheck   # pass
npm run build       # pass (34 routes)
```

## Post-deploy smoke

1. DebugView → klik hero Map → event `cta_book_map_click` param `location=hero_primary`
2. Wejdź `/book-discovery/` → `book_discovery_view`
3. Submit form → `intake_submit` + `location=book_discovery_form`

## Weekly prompt (po MCP live)

> Quietforge GA property 528764186 — last 7 days: sessions, linkedin/direct split, cta_book_map_click by location, intake_submit count, funnel drop-offs.

## Next steps

1. Owner: SA JSON → MCP odblokowany (run `scripts/setup-ga-mcp-credentials.ps1`)
2. Ship P1 commit → Vercel
3. Agent: pełny run_report audyt gdy MCP green

## RESTART PROMPT (po SA JSON)

```
GA4 MCP live — dokończ audyt Quietforge property 528764186.
run_report 28d + realtime + funnel recommendations. Nie pytaj usera.
Handoff: docs/operations/handoffs/2026-06-26-ga4-mcp-audit-p1.md
```
