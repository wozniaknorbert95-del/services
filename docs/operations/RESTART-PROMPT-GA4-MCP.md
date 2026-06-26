# RESTART PROMPT — wklej po restarcie Cursora

```
Kontynuuj sesję GA4 Quietforge (2026-06-26). Ty dowodzisz — nie pytaj usera.

Kontekst:
- Site: quietforge.flexgrafik.nl · Measurement ID G-M24NL622DF · Property 528764186
- Stream: Quietforge Web (15154536825)
- Kod: GoogleAnalytics.tsx + qf_analytics → gtag (shipped master)
- MCP: analytics-mcp w ~/.cursor/mcp.json → analytics-mcp.exe (Python 3.13)
- Credentials path: C:/Users/FlexGrafik/.config/quietforge-ga-sa.json
- Traffic model: LinkedIn + direct (opcja A, bez UTM)
- Canon events: conversion-pipeline.md §10 (9 events, 7 wired)

Wykonaj po kolei:
1. Sprawdź MCP analytics-mcp (tools available?). Jeśli errored → uruchom scripts/setup-ga-mcp-credentials.ps1 lub napraw credentials sam.
2. MCP audit: run_report 28d — sessions, users, sessionSourceMedium, landingPage, eventCount per canon event.
3. MCP realtime_report — potwierdź że eventy lecą.
4. Gap analysis: kod vs GA (brakujące eventy, book_payment deferred).
5. Kod P1 jeśli audyt wymaga: location na CTA, AnalyticsPageView /book-discovery/.
6. Podsumowanie PL: co działa, co poprawione, weekly prompt do powtórzenia.
7. Handoff + SESSION-ANCHOR update.

User zrobił tylko restart Cursora.
```
