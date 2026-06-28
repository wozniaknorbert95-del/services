# Handoff — GA4 Quietforge full closure (2026-06-28)

**Repo:** services.flexgrafik.nl · **Build:** `npm run build` ✅ (34 routes)

## Cel / Goal

Domknąć GA4 Quietforge bez półśrodków (OR-02): Admin verify, tooling, smoke/audit gates, SSoT, funnel monitoring.

## Co zrobiono / What changed

- **page_view fix** (prior commit `4df5297`) — verified end-to-end
- **`ga4-api-audit.py`** — funnel via `data_v1alpha`, canon steps, `key_events`, `--strict`, `--output`
- **`ga4-prod-smoke.mjs`** — POST body parse + dataLayer asserts for all canon events
- **`npm run ga4:smoke`** + **`npm run ga4:audit`** added
- **`ga4-provision-ui.mjs`** — points to property `543331587`
- **`ga4-create-exploration.mjs`** — funnel exploration UI helper (property guard)
- **`vercel-ga-preview-env.ps1`** — Preview env helper (CLI limitation documented)
- **SSoT** — `ga4-property-map.md`, `config/ga4-quietforge.ids.json` updated
- **Superseded** — `2026-06-26-ga4-mcp-audit-p1.md` (old property `528764186`)

## Pliki / Files

| File | Action |
|------|--------|
| `scripts/ga4-api-audit.py` | update — funnel_7d, key_events, CLI flags |
| `scripts/ga4-prod-smoke.mjs` | update — canon event gate |
| `scripts/ga4-provision-ui.mjs` | rewrite — Quietforge admin |
| `scripts/ga4-create-exploration.mjs` | new |
| `scripts/vercel-ga-preview-env.ps1` | new |
| `package.json` | update — ga4:smoke, ga4:audit |
| `config/ga4-quietforge.ids.json` | update — exploration hub, vercel status |
| `docs/architecture/ga4-property-map.md` | update — full closure |
| `docs/operations/ga4-audit-2026-06-28-quietforge.json` | new — API audit output |
| `docs/operations/handoffs/2026-06-28-ga4-full-closure.md` | new — this file |

## Weryfikacja / Verification

```bash
npm run typecheck   # PASS
npm run build       # PASS (34 routes)
npm run ga4:smoke   # PASS — page_view, cta_book_map_click, pricing_view, book_discovery_view
npm run ga4:audit   # exit 0 — realtime row_count >= 1, funnel_7d no SDK error
```

| Check | Result |
|-------|--------|
| MCP `get_account_summaries` | Quietforge `543331587` separate from App |
| MCP `run_realtime_report` | `page_view`, `session_start`, `first_visit` |
| MCP `run_funnel_report` | OK (empty rows — low volume, expected) |
| Custom dimension `location` | OK |
| Key events | `cta_book_map_click`, `intake_submit` present |
| Prod HTML | `G-LY0E7MW0HF` only, no legacy ID |
| Vercel Production + Development | `G-LY0E7MW0HF` |
| Vercel Preview | **1 dashboard click** — see below |

## Jedyny krok Dowódcy (Preview env)

Vercel CLI returns `git_branch_required` for Preview on this project.

**Vercel Dashboard** → project `flexgrafik-services` → Settings → Environment Variables:

- Name: `NEXT_PUBLIC_GA_MEASUREMENT_ID`
- Value: `G-LY0E7MW0HF`
- Environment: **Preview** (All Preview Deployments)

Or run `scripts/vercel-ga-preview-env.ps1` after Git integration exposes preview branches.

## Opcjonalnie (GA UI)

Saved exploration **Quietforge Map funnel**: open [Explorations hub](https://analytics.google.com/analytics/web/#/a337818458p543331587/analysis/explorations) → Funnel template → 4 canon steps → Save. Or: `node scripts/ga4-create-exploration.mjs` (logged-in Chrome).

Weekly: [`RESTART-PROMPT-GA4-MCP.md`](../RESTART-PROMPT-GA4-MCP.md) on property **543331587**.

## Następny krok / Next steps

UX P0 from audit (Pain Grid intent filter) — separate session. GA4 closed.
