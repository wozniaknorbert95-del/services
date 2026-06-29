# Commercial Traction Snapshot — Commander fill (PR-08)

> **Owner:** Commander only (PR-07). Agents do not publish values in `proof.ts` without sign-off from this doc.  
> **Gate:** Required before LinkedIn outbound or investor call.  
> **Source canon:** [`docs/canons/proof-rules.md`](../canons/proof-rules.md) PR-08

**Date filled:** _YYYY-MM-DD_  
**Period:** _e.g. last 90 days / YTD 2026_

---

## Metrics table

| Metryka | Wartość | Źródło | Okres | Public on site? |
|---------|---------|--------|-------|-----------------|
| Zamówienia opłacone (count) | UNKNOWN | WooCommerce admin | | ☐ |
| GMV brutto (€) | UNKNOWN | WC reports | | ☐ |
| AOV średni (€) | UNKNOWN | WC / target 400–700 | | ☐ |
| Leady gra (email) | UNKNOWN | WP game API / DB | | ☐ |
| Leady chat (sessions) | UNKNOWN | jadzia logs / GA4 | | ☐ |
| MRR recurring | N/A (one-time Wizard) | — | — | ☐ |
| Konwersja portal→wizard | UNKNOWN | GA4 | | ☐ |
| Konwersja game→wizard | UNKNOWN | GA4 + UTM | | ☐ |

**Minimum to unblock outbound:** ≥3 rows with real values + source + period.

---

## Public vs private

| Metric | Show on site / LinkedIn? | Where allowed |
|--------|--------------------------|---------------|
| _example: paid orders count_ | ☐ Yes / ☐ No | field report / founder only |
| | | |
| | | |

---

## Commander checklist (FIND-01 DoD)

- [ ] ≥3 metrics filled from WC / GA4 / jadzia (not invented)
- [ ] Public vs private list signed off
- [ ] If any metric goes live → update `proof.ts` `fieldReports` or dedicated export in same session
- [ ] Mark BL-02 in [`SESSION-ANCHOR.md`](./SESSION-ANCHOR.md) resolved or `partial (investor-only)`

---

*Copy completed rows to `flexgrafik-meta` traction-honesty §2.2 when ready. Portfolio may state "tech MVP LIVE, commercial TBD" until filled.*
