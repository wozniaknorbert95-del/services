# Handoff — E-3 CS-03 Wizard / Sales Funnel Case Study (2026-06-25)

**Repo:** services.flexgrafik.nl · **Build:** `npm run build` ✅ (34 routes)

## Cel / Goal

Extract sales-funnel case study copy to SSoT module; align with Wizard Cash Engine meta (zzpackage, Mollie, 9 UI / 7 business footnote, €199 min). No invented conversion rates.

## Co zrobiono / What changed

- **NEW** `sales-funnel-case-study.ts` — meta, journey steps, ROI, wizard + ecosystem bridges
- Page refactored — zero hardcoded copy in JSX
- Stack corrected: WordPress · WooCommerce · Mollie · Vanilla JS SPA (removed erroneous Stripe/Next.js)
- Architecture block: footnote, live wizard CTA, owner-ecosystem bridge
- Hub card #03 aligned — zzpackage naming, footnote in measurement line

## Pliki / Files

| File | Action |
|------|--------|
| `src/content/sales-funnel-case-study.ts` | new |
| `src/app/results/sales-funnel/page.tsx` | refactor |
| `src/lib/case-studies.ts` | update #03 |
| `docs/operations/handoffs/2026-06-25-e3-cs03-prep.md` | new — prep doc (archived intent) |

## Weryfikacja / Verification

```bash
npm run typecheck   # pass
npm run build       # pass (34 routes)
rg '\[FILL:' src/   # 0 matches (sales-funnel scope)
```

## Post-deploy smoke

- [ ] `/results/sales-funnel/` — Mollie + €199 visible; no Stripe mention
- [ ] Footnote: "9 UI screens · 7 business decision stages"
- [ ] CTA → zzpackage.flexgrafik.nl opens
- [ ] Journey steps 00–08 match gratka SVG

## Next steps

- Commander: commercial traction numbers (BL-02) before investor push
- E-4 or remaining ROADMAP case studies — per ROADMAP priority
