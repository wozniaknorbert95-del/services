# Handoff — Home v5 Router + Jadzia-first (2026-07-19)

**Repo:** quietforge.flexgrafik.nl (services) · **Build:** `npm run build` ✅ (26 sitemap routes)  
**Status:** CLOSED — prod verified 2026-07-19  
**Ship:** `b7bf240` + hotfix `26cca8c` (solutions nav-by-href)  
**Canon:** `docs/strategy/site-map.md` §3 **v5.0**

## Cel / Goal

Przywrócić IntentRouter + chipy na home, podnieść Jadzia jako Live proof #1, VCMS strip #2, Wizard+Design Intake jako kompakt secondary — wg research inventory + planu DoD.

## Co zrobiono / What changed

- **Canon F0:** site-map §3 v5.0, ui-ux Spearhead = Jadzia, strategy-check skill, `HOME_SECTIONS` / markers, SESSION-ANCHOR
- **Home stack:** `HomeIntentProvider` → Hero → PainGrid (6) → IntentRouter (chips + ≥7 cards incl. VCMS) → JadziaSpearhead → VcmsTrustStrip → WizardVisualizerCompact → BuiltVsPlanned → Why → Pricing → Final
- **SectionProgress:** Start → Pick → Proof → Close
- **Nav:** Ops Command Layer → `/results/jadzia-coi/` (badge `Ops`); Wizard badge `Cash`
- **Content:** `JADZIA_SPEARHEAD`, `VCMS_STRIP`, `WIZARD_VISUALIZER`; Jadzia `videoKey` misbind removed; `HOME_ROW_KEYS` = jadzia → vcms → wizard → agent-os
- **audit-navigation.mjs:** markers v5

## Pliki / Files

| File | Action |
|------|--------|
| `docs/strategy/site-map.md` | §3 → v5.0 |
| `docs/strategy/ui-ux-principles.md` | Spearhead = Jadzia |
| `.agents/skills/strategy-check/SKILL.md` | home order v5 |
| `docs/operations/SESSION-ANCHOR.md` | READY TO SHIP |
| `src/app/page.tsx` | v5 mount + Provider |
| `src/components/home/JadziaSpearhead.tsx` | new |
| `src/components/home/VcmsTrustStrip.tsx` | new |
| `src/components/home/WizardVisualizerCompact.tsx` | new |
| `src/components/home/PainGrid.tsx` | 6 cards + intent highlight, no chips |
| `src/components/layout/SectionProgress.tsx` | Pick group |
| `src/content/ecosystem.ts` | sections, PAIN×6, VCMS homeVisible |
| `src/content/conversion-copy.ts` | Jadzia / VCMS / Wizard compact |
| `src/content/readiness.ts` | HOME_ROW_KEYS order |
| `src/lib/navigation.ts` | Ops Command in SOLUTIONS_NAV |
| `src/lib/analytics.ts` | `cta_jadzia_proof_click` |
| `src/app/globals.css` | wizard-viz + muted spearhead card |
| `scripts/audit-navigation.mjs` | markers v5 |

Legacy `SpearheadSpotlight.tsx` remains unused on home (not deleted).

## Weryfikacja / Verification

```bash
npm run typecheck   # pass
npm run build       # pass (26 sitemap routes)
# local smoke :3010
# chips=5, pain=6, router modules=7 (+VCMS), sections order v5
# /solutions/ IntentRouter mirror OK
# nav Ops Command Layer present
```

## Post-deploy smoke (Dowódca)

1. `/` — 5 intent chips; filter dims non-match; toggle clear
2. `/` — 6 pain cards; Quote first lead; no chips in Pain
3. `/` — IntentRouter ≥7 cards incl. Governance/VCMS
4. `/` — Jadzia H2 before Wizard compact; VCMS strip between them
5. `/` — Design Intake labelled PARTIAL
6. `/solutions/` — IntentRouter still works
7. Nav Solutions → **Ops Command Layer** → `/results/jadzia-coi/`

## Następny krok / Next steps

- Jawne **ship** → commit + push `master` (Vercel CD)
- Backlog (poza zakresem v5): fresh Jadzia cockpit screenshot; optional `/solutions/ops-command` page
