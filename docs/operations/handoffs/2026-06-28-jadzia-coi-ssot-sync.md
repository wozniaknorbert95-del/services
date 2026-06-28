# Handoff — Jadzia COI SSoT sync + SKU alignment (2026-06-28)

**Repo:** services.flexgrafik.nl · **Build:** `npm run build` ✅ (34 routes)  
**Prior ship:** `5bcab17` results honesty + Pain Grid

## Cel / Goal

Domknąć niespójność Jadzia COI: case study mówił INT-002 LIVE, ale `jadzia-coi.ts`, ecosystem, module-showcase i agent-os nadal PLANNED. Zsynchronizować cały SSoT + SKU 161 z `proof.ts`.

## Co zrobiono / What changed

- **`jadzia-coi.ts`** — Phase A+B LIVE: orders INT-002, GA4 INT-009, content calendar, Procurement Brain Phase C PLANNED
- **`jadzia-coi-case-study.ts`** — INT-002 metrics (było lokalnie, teraz w commicie)
- **`proof.ts`** — `jadziaCoi` measurement + `skus: 161`
- **`readiness.ts`** — Jadzia ~55% PARTIAL; wizard SKU z `metrics.skus`
- **`ecosystem.ts`**, **`case-studies.ts`**, **`module-showcase.ts`**, **`agent-os-case-study.ts`**, **`owner-ecosystem.ts`**
- **`conversion-copy.ts`** — SKU z metrics; founder story bez „pays the bills” (align z honest results)

## Pliki / Files

| File | Action |
|------|--------|
| `src/content/jadzia-coi.ts` | rewrite — capabilities + summary LIVE |
| `src/content/jadzia-coi-case-study.ts` | update — INT-002 Phase A+B |
| `src/content/proof.ts` | update — jadziaCoi + skus 161 |
| `src/content/readiness.ts` | update — Jadzia PARTIAL ~55% |
| `src/content/ecosystem.ts` | update — jadzia statusNote |
| `src/lib/case-studies.ts` | update — jadzia hub card |
| `src/content/module-showcase.ts` | update — jadzia + SKU |
| `src/content/agent-os-case-study.ts` | update — jadzia boundary copy |
| `src/content/conversion-copy.ts` | update — SKU + honest founder |
| `src/content/owner-ecosystem.ts` | update — SKU in flow step 02 |

## Weryfikacja / Verification

```bash
npm run typecheck   # PASS
npm run build       # PASS (34 routes)
rg 'order sync.*PLANNED|PLANNED.*WC order' src/  # 0 matches
rg '\[FILL:' src/   # 0 matches
```

## Post-deploy smoke (Dowódca)

1. `/results/jadzia-coi/` — Order sync LIVE (INT-002), GA4, content calendar metrics
2. `/results/` — jadzia card: Phase A+B spine copy
3. Home readiness table — Jadzia PARTIAL ~55%, wizard 161 SKU
4. `npm run ga4:gate` — weekly GA4 gate (optional)

## Następny krok / Next steps

- Procurement Brain Phase C (jadzia) — osobna sesja w jadzia-core repo
- UX P0-3/P0-4: hero CTA + L3 copy alignment
