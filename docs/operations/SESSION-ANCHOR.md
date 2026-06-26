# SESSION-ANCHOR — Live Session Pointer

**Updated:** 2026-06-26 · **Status:** CLOSED · **Handoff:** [`handoffs/2026-06-26-git-ship-ux-audit.md`](./handoffs/2026-06-26-git-ship-ux-audit.md)

---

## WYNIK

GA4 Quietforge property split **DONE**. Selektor GA → **Quietforge** (`543331587`). Prod → `G-LY0E7MW0HF`.

| ID | Wartość |
|----|---------|
| Property | `543331587` (Quietforge) |
| Measurement | `G-LY0E7MW0HF` |
| Stream | Quietforge Web `15155226236` |
| Legacy (App only) | `528764186` / `G-M24NL622DF` |

## WERYFIKACJA (2026-06-26)

- `npm run build` PASS (34 routes) · `typecheck` PASS
- Vercel Production env + redeploy PASS
- `node scripts/ga4-prod-smoke.mjs` PASS (nowy G-, canon events)
- `python scripts/ga4-api-audit.py` exit 0 · SA widzi Quietforge + App osobno
- SSoT: [`architecture/ga4-property-map.md`](../architecture/ga4-property-map.md)

## WEEKLY

Użyj [`RESTART-PROMPT-GA4-MCP.md`](./RESTART-PROMPT-GA4-MCP.md) — property `543331587`, nie `528764186`.

---

*Maintainer: update at end of every session*
