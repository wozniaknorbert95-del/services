# Handoff — GA4 Quietforge property split (2026-06-26)

**Repo:** services.flexgrafik.nl · **Build:** `npm run build` ✅ (34 routes)

## Cel / Goal

Osobna usługa GA4 **Quietforge** — selektor GA pokazuje „Quietforge”, prod B2B bez ruchu z app game. Cutover z legacy `G-M24NL622DF` / property `528764186`.

## Stary vs nowy

| | Legacy | Current |
|--|--------|---------|
| Display name (GA UI) | FlexGrafik App | **Quietforge** |
| Property ID | `528764186` | **`543331587`** |
| Measurement ID | `G-M24NL622DF` | **`G-LY0E7MW0HF`** |
| Stream | Quietforge Web (w App) | Quietforge Web `15155226236` |

## Co zrobiono / What changed

- Utworzono property **Quietforge** + stream **Quietforge Web** (TZ NL, EUR, enhanced measurement)
- Custom dimension **CTA location** (`location`, scope Event)
- Key events: `cta_book_map_click`, `intake_submit`
- SA `quietforge-ga-reader-712@…` → **Przeglądający** na property Quietforge
- Vercel `NEXT_PUBLIC_GA_MEASUREMENT_ID` → `G-LY0E7MW0HF` (Production + Development)
- Production redeploy (`vercel deploy --prod`)
- SSoT: `ga4-property-map.md`, `config/ga4-quietforge.ids.json`
- Skrypty + RESTART-PROMPT + brain zaktualizowane na `543331587`

## Pliki / Files

| File | Action |
|------|--------|
| `docs/architecture/ga4-property-map.md` | new — SSoT IDs |
| `config/ga4-quietforge.ids.json` | new — ID bundle |
| `scripts/ga4-prod-smoke.mjs` | new — smoke `G-LY0E7MW0HF` |
| `scripts/ga4-api-audit.py` | new — audit property `543331587` |
| `scripts/setup-ga-mcp-credentials.ps1` | update — Quietforge property URL |
| `docs/operations/runbooks/RESTART-PROMPT-GA4-MCP.md` | update — new IDs |
| `docs/operations/artefacts/ga4-audit-2026-06-26-quietforge.json` | new — audit output |
| `docs/canons/ops-rules.md` | new — OR-01..OR-05 |
| `brain.md` | update — env table |
| `docs/operations/plans/2026-06-26-ga4-quietforge-property-split.md` | EXECUTED |

## Weryfikacja / Verification

```bash
npm run typecheck   # PASS
npm run build       # PASS (34 routes)
node scripts/ga4-prod-smoke.mjs   # PASS — G-LY0E7MW0HF, cta_book_map_click+location, pricing_view, book_discovery_view
python scripts/ga4-api-audit.py   # exit 0 — property 543331587, location dim, credentials_ok
```

**Werdykt**

| Check | Result |
|-------|--------|
| GA selector **Quietforge** | PASS |
| Prod gtag `G-LY0E7MW0HF` only | PASS (brak `G-M24NL622DF` w HTML) |
| Prod smoke | PASS |
| MCP/SA `get_account_summaries` | PASS — Quietforge + FlexGrafik App osobno |
| API audit JSON | PASS |

**Uwagi lag:** Standard reports 28d mogą pokazywać 0 do 24–48h po cutover. Realtime + smoke = dowód natychmiastowy.

**Exploration GA UI:** Saved exploration „Quietforge Map funnel” nie została utworzona w tej sesji (przerwanie automacji). Funnel canon jest w `RESTART-PROMPT-GA4-MCP.md` §MCP `run_funnel_report`; weekly audit wystarczy do monitoringu.

## Weekly (jedyna rekomendacja)

Po 48h lag: uruchom prompt z [`RESTART-PROMPT-GA4-MCP.md`](../runbooks/RESTART-PROMPT-GA4-MCP.md) — sprawdź canon events na property **543331587** (nie App).
