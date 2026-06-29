# Handoff — GA4 Quietforge full closure (2026-06-28)

**Repo:** services.flexgrafik.nl · **Commits:** `4df5297` (page_view) · `fa63267` (tooling) · closure gate PASS  
**Status:** OR-02 CLOSED — repo + prod + API gates complete

## Cel / Goal

Domknąć GA4 Quietforge bez półśrodków: property `543331587`, measurement `G-LY0E7MW0HF`, canon events, funnel monitoring, SSoT, zero starych ID w aktywnych docs.

## Definition of Done (OR-02)

| # | Kryterium | Status |
|---|-----------|--------|
| 1 | Prod tag `G-LY0E7MW0HF`, brak `G-M24NL622DF` w HTML | ✅ |
| 2 | `page_view` na route load (`gtag.ts` explicit event) | ✅ commit `4df5297` |
| 3 | Custom dimension `location` + key events `cta_book_map_click`, `intake_submit` | ✅ MCP + Admin API |
| 4 | `npm run ga4:smoke` — canon collect asserts | ✅ |
| 5 | `npm run ga4:audit` — funnel_7d bez błędu SDK | ✅ |
| 6 | `npm run ga4:gate` — smoke + strict realtime (retry) | ✅ |
| 7 | MCP realtime + funnel zapisane w audit JSON | ✅ |
| 8 | SSoT: `ga4-property-map.md`, SESSION-ANCHOR, plany EXECUTED | ✅ |
| 9 | Vercel Production + Development env | ✅ |
| 10 | Vercel **Preview** env | ⏳ Dowódca — 30s w dashboard (CLI blocked) |
| 11 | GA UI exploration „Quietforge Map funnel” | ⏳ opcjonalnie — API funnel działa; helper script gotowy |

## Co zrobiono / What changed

- **`ga4-api-audit.py`** — funnel `data_v1alpha`, canon steps, `--strict` z realtime retry (lag API)
- **`ga4-prod-smoke.mjs`** — POST body + dataLayer asserts dla wszystkich canon events
- **`npm run ga4:gate`** — jeden gate: smoke → audit strict → zapis audit JSON
- **`ga4-provision-ui.mjs`** → property `543331587`
- **`ga4-create-exploration.mjs`** — Playwright helper (property guard)
- **`vercel-ga-preview-env.ps1`** — Preview env + dashboard fallback
- **SSoT** — `ga4-property-map.md`, `config/ga4-quietforge.ids.json`
- **Superseded** — `2026-06-26-ga4-mcp-audit-p1.md` (stary property `528764186`)

## Pliki / Files

| File | Action |
|------|--------|
| `scripts/ga4-api-audit.py` | update — funnel_7d, strict retry, key_events |
| `scripts/ga4-prod-smoke.mjs` | update — canon event gate |
| `scripts/ga4-provision-ui.mjs` | rewrite — Quietforge admin |
| `scripts/ga4-create-exploration.mjs` | new |
| `scripts/vercel-ga-preview-env.ps1` | new |
| `package.json` | `ga4:smoke`, `ga4:audit`, `ga4:gate` |
| `config/ga4-quietforge.ids.json` | update |
| `docs/architecture/ga4-property-map.md` | update — cutover COMPLETE |
| `docs/operations/artefacts/ga4-audit-2026-06-28-quietforge.json` | audit + MCP snapshot |
| `docs/operations/handoffs/2026-06-28-ga4-full-closure.md` | this file |

## Weryfikacja / Verification

```bash
npm run typecheck          # PASS
npm run build              # PASS (34 routes)
npm run ga4:gate           # PASS — smoke + audit strict (realtime row_count >= 1)
```

Prod HTML (`quietforge.flexgrafik.nl`): tylko `G-LY0E7MW0HF`.

## Dowódca — 2 kroki poza repo (≤2 min)

### 1. Vercel Preview env (wymagane dla preview deployów)

Dashboard: [flexgrafik-services → Environment Variables](https://vercel.com/wozniaknorbert95-dels-projects/flexgrafik-services/settings/environment-variables)

- Name: `NEXT_PUBLIC_GA_MEASUREMENT_ID`
- Value: `G-LY0E7MW0HF`
- Environment: **Preview** → All Preview Deployments

CLI zwraca `git_branch_required` / `branch_not_found` — to limitacja integracji Git↔Vercel, nie błąd repo.

### 2. GA exploration (opcjonalnie — monitoring już działa przez API)

[Explorations hub](https://analytics.google.com/analytics/web/#/a337818458p543331587/analysis/explorations) → Funnel → 4 kroki canon → Save jako **Quietforge Map funnel**.

Lub: `node scripts/ga4-create-exploration.mjs` (zalogowany Chrome).

## Weekly gate

```bash
GOOGLE_APPLICATION_CREDENTIALS=~/.config/quietforge-ga-sa.json npm run ga4:gate
```

Prompt: [`RESTART-PROMPT-GA4-MCP.md`](../runbooks/RESTART-PROMPT-GA4-MCP.md) · property **543331587**.

## Następny krok / Next steps

GA4 zamknięte. Kolejna sesja: UX P0 (Pain Grid intent filter) — osobny scope.
