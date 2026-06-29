# Handoff — Git ship GA4 split + UX/UI pro audit (2026-06-26)

**Repo:** services.flexgrafik.nl · **Build:** `npm run build` ✅ (34 routes)

## Cel / Goal

1. Domknąć **niewypchnięty** GA4 Quietforge property split w git (Vercel CD z `master`).
2. Zapisać **audyt UX/UI pro** (źródła w repo, bez kodu) jako trwały artefakt.
3. SESSION-ANCHOR → CLOSED z jednym wskaźnikiem handoff.

## Co zrobiono / What changed

- **Git ship:** commit + push wszystkich plików GA4 split (SSoT, skrypty smoke/audit, handoffs, plan EXECUTED, ops-rules, SESSION-ANCHOR).
- **UX audit:** pełny audyt P0/P1/P2 na kanonach + `src/` → [`docs/audits/2026-06-26/ux-ui-pro-audit.md`](../../audits/2026-06-26/ux-ui-pro-audit.md).
- **Werdykt audytu:** Book Discovery P0 z 25.06 naprawiony w kodzie; następny skok = Pain Grid + dyscyplina CTA w top funnel.
- **Deploy:** auto via push `master` → Vercel (env `G-LY0E7MW0HF` już ustawione w poprzedniej sesji).

## Pliki / Files

| File | Action |
|------|--------|
| `docs/architecture/ga4-property-map.md` | new — GA4 SSoT |
| `config/ga4-quietforge.ids.json` | new — ID bundle |
| `scripts/ga4-prod-smoke.mjs` | new |
| `scripts/ga4-api-audit.py` | new |
| `scripts/ga4-create-quietforge-property.mjs` | new |
| `scripts/ga4-provision-ui.mjs` | new |
| `scripts/launch-chrome-devtools.ps1` | new — MCP Chrome helper |
| `scripts/setup-ga-mcp-credentials.ps1` | update |
| `docs/operations/runbooks/RESTART-PROMPT-GA4-MCP.md` | update |
| `docs/operations/SESSION-ANCHOR.md` | update — CLOSED |
| `docs/operations/plans/2026-06-26-ga4-quietforge-property-split.md` | new — EXECUTED |
| `docs/operations/handoffs/2026-06-26-ga4-*.md` | new — split + closure |
| `docs/operations/artefacts/ga4-audit-2026-06-26*.json` | new — audit output |
| `docs/canons/ops-rules.md` | new |
| `docs/audits/2026-06-26/ux-ui-pro-audit.md` | new — UX audit |
| `docs/operations/handoffs/2026-06-26-git-ship-ux-audit.md` | new — this file |
| `brain.md`, `AGENTS.md`, `docs/canons/README.md` | update |
| `docs/strategy/conversion-pipeline.md` | minor update |

## Weryfikacja / Verification

```bash
npm run typecheck   # PASS
npm run build       # PASS (34 routes)
rg '\[FILL:' src/   # 0 matches
node scripts/ga4-prod-smoke.mjs   # PASS (prod G-LY0E7MW0HF) — run post-push
```

## Post-deploy smoke (Dowódca)

1. `node scripts/ga4-prod-smoke.mjs` → PASS, tylko `G-LY0E7MW0HF` w prod HTML.
2. Live `/` — 13 sekcji home, sticky CTA po built-vs-planned (mobile).
3. Vercel Production: `NEXT_PUBLIC_GA_MEASUREMENT_ID=G-LY0E7MW0HF` (już ustawione).
4. Weekly: [`RESTART-PROMPT-GA4-MCP.md`](../runbooks/RESTART-PROMPT-GA4-MCP.md) na property **543331587**.

## Następny krok / Next steps

**UX (z audytu, P0):**
- Filtr intencji przy Pain Grid
- Koszt problemu na pain cards (`ecosystem.ts`)
- Ujednolicenie copy L3 hero ↔ book-discovery ↔ `conversion-pipeline.md`
- Hero: jeden filled CTA (Wizard → text link)

**GA4 (opcjonalne):**
- Saved exploration „Quietforge Map funnel” w GA UI
- Vercel Preview env dla `G-LY0E7MW0HF`

**Plan reference:** [`2026-06-26-ga4-quietforge-property-split.md`](../plans/2026-06-26-ga4-quietforge-property-split.md) — EXECUTED
