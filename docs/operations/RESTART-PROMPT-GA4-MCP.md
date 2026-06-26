# RESTART PROMPT — GA4 MCP (Quietforge)

## After SA JSON is in place

```
GA4 MCP credentials live at C:/Users/FlexGrafik/.config/quietforge-ga-sa.json.
Quietforge property 543331587 · G-LY0E7MW0HF · P1 location params shipped.

Run MCP audit: get_account_summaries, run_report 28d (sessions, source/medium, landing, canon events + location), run_realtime_report, run_funnel_report.
Gap analysis + weekly prompt. Nie pytaj usera.
```

## WEEKLY (run every Monday or on demand)

```
Quietforge GA4 property 543331587 — last 7 days:
sessions, activeUsers, sessionSourceMedium (linkedin/direct),
landingPage top 5, eventCount for canon events,
cta_book_map_click breakdown by location param,
intake_submit count, funnel step 3→4 drop-off.
Recommend one action only. Nie pytaj usera.
```

### Canon events to query

`cta_book_map_click`, `cta_whatsapp_click`, `sample_map_download`, `wizard_demo_click`, `case_study_open`, `pricing_view`, `book_discovery_view`, `intake_submit`

Deferred (expect 0): `book_payment_start`, `book_payment_complete`

### MCP tool sequence

1. `get_account_summaries` — confirm **Quietforge** property `543331587` (separate from FlexGrafik App `528764186`)
2. `run_report` — `sessionSourceMedium` × `sessions`, `activeUsers` (7d)
3. `run_report` — `landingPage` × `sessions` (7d, limit 5)
4. `run_report` — `eventName` × `eventCount` (filter canon list, 7d)
5. `run_report` — `eventName`, `customEvent:location` × `eventCount` (filter `cta_book_map_click`, 7d)
6. `run_funnel_report` — book_discovery_view → cta_book_map_click → pricing_view|case_study_open → intake_submit

### Terminal fallback (no Cursor MCP)

```powershell
python scripts/ga4-api-audit.py
```

Same property, same reports — uses `GOOGLE_APPLICATION_CREDENTIALS` at `C:/Users/FlexGrafik/.config/quietforge-ga-sa.json`.
