# SESSION-ANCHOR — Live Session Pointer

**Updated:** 2026-06-28 · **Status:** CLOSED · **Handoff:** [`handoffs/2026-06-28-ga4-full-closure.md`](./handoffs/2026-06-28-ga4-full-closure.md)

---

## WYNIK

GA4 Quietforge **FULL CLOSURE**. Property `543331587` · Measurement `G-LY0E7MW0HF` · prod `page_view` + canon events verified.

| ID | Wartość |
|----|---------|
| Property | `543331587` (Quietforge) |
| Measurement | `G-LY0E7MW0HF` |
| Stream | Quietforge Web `15155226236` |
| Legacy (App only) | `528764186` / `G-M24NL622DF` |

## WERYFIKACJA (2026-06-28)

- `npm run ga4:gate` PASS (smoke + audit strict + audit JSON)
- MCP realtime + funnel PASS
- SSoT: [`architecture/ga4-property-map.md`](../architecture/ga4-property-map.md)

## DOWÓDCA (≤2 min, poza repo)

1. **Vercel Preview** — `NEXT_PUBLIC_GA_MEASUREMENT_ID=G-LY0E7MW0HF` → [dashboard env vars](https://vercel.com/wozniaknorbert95-dels-projects/flexgrafik-services/settings/environment-variables)
2. **GA exploration** (opcjonalnie) — `node scripts/ga4-create-exploration.mjs` lub ręcznie w Explorations hub

## WEEKLY

```bash
GOOGLE_APPLICATION_CREDENTIALS=~/.config/quietforge-ga-sa.json npm run ga4:gate
```

[`RESTART-PROMPT-GA4-MCP.md`](./RESTART-PROMPT-GA4-MCP.md) — property **543331587**.

---

*Maintainer: update at end of every session*
