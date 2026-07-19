# Handoff — Truth × Offer CLOSE + next-wave backlog (2026-07-19)

**Repo:** services.flexgrafik.nl · **Build:** `npm run build` ✅ (36 routes) · **Shipped:** `59d88be` + `3077669` → `master` · Vercel success

## Cel / Goal

Close Quietforge System Coherence × Sales Lift (Truth × Offer), ship to prod, audit remaining surfaces for the next session.

## Co zrobiono / What changed

- Dual matrices + Commander HITL; SKU **167** active; master §14 synced  
- Solutions ladder: Wizard spearhead; Inbox = operate  
- INSPIRE / Design Intake PARTIAL on sales-funnel + `/results/#design-intake` (+ screens)  
- Operations Command Layer (~93% spine) across readiness/case studies  
- Managed Care/Manage/Partner; Map sample on book-discovery  
- LI drafts deep-link `#design-intake`; GTM claim-lock artefact  
- Prod smoke: ladder + design-intake live  

**Prior handoff (detail):** [`2026-07-19-system-coherence-sales-lift.md`](./2026-07-19-system-coherence-sales-lift.md)  
**Artefacts:** `docs/operations/artefacts/2026-07-*.md`

## Pliki / Files (shipped highlights)

| Area | Action |
|------|--------|
| `src/app/solutions/*`, `pricing`, `book-discovery`, `results/*` | update |
| `src/content/*`, `src/lib/navigation.ts`, `case-studies.ts` | update |
| `public/gratka/inspire/*` | new proof screens |
| `docs/canons/system-description-master.md` | new/sync |
| `docs/strategy/site-map.md` | solutions ladder |
| LinkedIn draft CTAs | `#design-intake` |

**Excluded from git (still untracked):** LinkedIn/m0b media bulk + assemble scripts — do not mix into next copy PR.

**Meta:** `flexgrafik-meta` commit `6a2e4b2` on branch `eco-polish-01-meta` (as-is Jul sync) — not merged to meta main.

## Weryfikacja / Verification

```bash
npm run typecheck   # pass
npm run build       # pass (36 routes)
# prod: /solutions/ Spearhead; /results/#design-intake screens; no Start here
```

## Post-deploy smoke (Dowódca)

1. `/solutions/` — Wizard spearhead, not Inbox Step 1  
2. `/solutions/sales-funnel/` — Design Intake PARTIAL + 3 screens  
3. `/results/#design-intake` — LI-R10 landing  
4. `/book-discovery/#map-sample` — sample Map PDF  
5. `/pricing/` — scope examples  

## Następny krok / Next steps (P0 → P1)

**P0**
1. Regen customer PDFs (`public/artefacts` + `public/gratka/*.pdf`) — `quietforge@` + Conversion Systems Architect; fix Inbox PDF production-mailbox wording  
2. Align Inbox Killer hub claim („2+ years in production”) with test-environment SSoT  
3. Advisory case: After → Target state if still in delivery  
4. `/how-it-works/` — remove „runs itself”; qualify „days/two weeks”  

**P1**
5. PainGrid order vs Wizard spearhead; home Pricing „Most popular”  
6. LI/FB profile-copy **161 → 167**  
7. OG: missing solutions-*.svg; managed €99→€349; about AI Systems Architect  
8. Blog MDX + sitemap blog slugs; `/solutions/` route metadata  
9. Merge meta `eco-polish-01-meta` → main when ready  

**Commander outbound (parallel):** LinkedIn Featured V2 · INSPIRE v3 publish · Facebook FlexGrafik-only  

## Start prompt (next session)

See below / paste into new chat.
