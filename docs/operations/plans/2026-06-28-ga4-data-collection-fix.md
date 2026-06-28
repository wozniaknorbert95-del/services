# Plan — GA4 Quietforge: brak danych w Analytics (2026-06-28)

**Status:** DIAGNOSED · FIX in `src/lib/gtag.ts`  
**Property:** Quietforge `543331587` · **Measurement:** `G-LY0E7MW0HF`  
**GA UI:** [Intelligent home](https://analytics.google.com/analytics/web/?hl=pl#/a337818458p543331587/reports/intelligenthome)

---

## 1. Werdykt diagnozy (potwierdzony testami)

### Objaw w GA UI

> „Twoja witryna nie przesłała jeszcze danych” + identyfikator `G-LY0E7MW0HF`

### Co NIE jest przyczyną

| Hipoteza | Werdykt | Dowód |
|----------|---------|-------|
| Brak tagu na prod | ❌ | HTML zawiera `G-LY0E7MW0HF`, `gtag.js` ładuje się |
| Zły measurement ID w Vercel | ❌ | Prod HTML + collect `tid=G-LY0E7MW0HF` |
| Zła property w GA UI | ❌ | `543331587` = Quietforge, stream Quietforge Web |
| Tag w ogóle nie wysyła requestów | ❌ częściowo | Custom events (`cta_book_map_click`) **wysyłają** `/g/collect` |

### Prawdziwa przyczyna (P0)

**`send_page_view: false` + `gaPageView()` przez `gtag('config', …, { page_path })` nie generuje hitów sieciowych.**

| Test Playwright | Collect hits (`en=`) |
|-----------------|----------------------|
| Samo wejście na `/` + 6s wait | **0** |
| Po `gtag('event', 'page_view', …)` | **1** (`page_view`) |
| Po `gtag('event', 'cta_book_map_click', …)` | **1** (`cta_book_map_click`) |

Kod:

- `GoogleAnalytics.tsx` L53: `send_page_view: false`
- `gtag.ts` (przed fixem): `gtag('config', …, { page_path })` — tylko dataLayer, **bez collect**

**Skutek:** GA Home i Realtime czekają na `page_view`. Użytkownik który nie klika CTA = **zero danych w raportach**. Nawet przy nawigacji SPA każda zmiana route wołała `config`, nie `page_view`.

### API audit (SA)

```bash
GOOGLE_APPLICATION_CREDENTIALS=... python scripts/ga4-api-audit.py
```

Wynik 2026-06-28: `traffic_28d`, `canon_events_28d`, `realtime` → **0 rows** (spójne z brakiem page_view od cutover 2026-06-26).

---

## 2. Plan naprawy

### Faza A — Kod (P0, ta sesja)

| # | Akcja | Plik |
|---|--------|------|
| A1 | `gaPageView` → `gtag('event', 'page_view', { page_path, page_location, page_title })` | `src/lib/gtag.ts` |
| A2 | Zostaw `send_page_view: false` na init (unikamy podwójnego PV przy SSR) | `GoogleAnalytics.tsx` |
| A3 | Rozszerz smoke: assert `collect` z `en=page_view` **bez kliknięcia** | `scripts/ga4-prod-smoke.mjs` |
| A4 | `npm run build` + push `master` → Vercel CD | — |

### Faza B — Weryfikacja po deploy (15–30 min)

| # | Check | Oczekiwany wynik |
|---|--------|------------------|
| B1 | `node scripts/ga4-prod-smoke.mjs` | `pageViewCollect: true` przed interakcją |
| B2 | GA → **Realtime** → otwórz prod w Chrome (bez adblock) | 1 active user, `page_view` |
| B3 | GA → **Admin → Data streams → Quietforge Web** | Status „Receiving data” w ciągu 24h |
| B4 | `python scripts/ga4-api-audit.py` → `realtime` | `row_count >= 1` po wizycie |

### Faza C — GA Admin (opcjonalne, 30 min)

| # | Akcja |
|---|--------|
| C1 | DebugView: tymczasowo `debug_mode: true` w dev — potem wyłączyć |
| C2 | Saved exploration „Quietforge Map funnel” (z `RESTART-PROMPT-GA4-MCP.md`) |
| C3 | Vercel **Preview** env: `NEXT_PUBLIC_GA_MEASUREMENT_ID=G-LY0E7MW0HF` |
| C4 | Internal traffic filter — upewnij się że nie filtruje całego ruchu NL |

### Faza D — Monitoring (weekly)

- Prompt z `docs/operations/RESTART-PROMPT-GA4-MCP.md` na property **543331587**
- Canon events: `cta_book_map_click`, `intake_submit`, `pricing_view`, `book_discovery_view`

---

## 3. Dlaczego smoke wcześniej „PASS” wprowadzał w błąd

`ga4-prod-smoke.mjs` sprawdzał:

- obecność `gtag` / `dataLayer` / ID w HTML ✅
- collect po **kliknięciu** hero CTA ✅

Nie sprawdzał **`en=page_view` na samym page load** — więc przechodził mimo zerowego ruchu dla typowej wizyty.

---

## 4. Ryzyko resztkowe (niskie)

- **Consent Mode / EEA:** collect ma `dma=1`, `npa=1` — pingi i tak lecą (cookieless); po fixie page_view powinien być widoczny w Realtime.
- **Ad blockery użytkowników:** ~20–30% NL — nie naprawimy w kodzie; Realtime z własnej przeglądarki bez uBlock = dowód.
- **Lag raportów standardowych:** 24–48h; Realtime = minuty.

---

## 5. Definition of Done

- [ ] GA Intelligent home **nie** pokazuje „nie przesłała danych” (po 1–24h)
- [ ] Realtime pokazuje `page_view` dla `quietforge.flexgrafik.nl`
- [ ] `ga4-prod-smoke.mjs` wymaga `page_view` collect bez kliknięcia
- [ ] `ga4-api-audit.py` → realtime > 0 po testowej wizycie
