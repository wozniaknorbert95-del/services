# Handoff — Portfolio Truth Sync (2026-06-25)

**Repo:** services.flexgrafik.nl · **Build:** `npm run build` ✅ (33 routes)

## SESSIONANCHOR

```
TASK: P0 portfolio truth sync (PF-01 … PF-06)
CANON: flexgrafik-meta/docs/core/ snapshot 2026-06-24
STATUS: COMPLETE — build gate passed, deploy pending (Zasada 11 manual)
BLOCKER: BL-01 Mission Control URL — default os.flexgrafik.nl used in proof.ts (unchanged)
```

## Cel / Goal

Align quietforge.flexgrafik.nl with canonical ecosystem truth: honest LIVE/PARTIAL/PLANNED labels, Wizard-first spearhead, LOS investor bridge, Built vs Planned table — ready for LinkedIn launch.

## Co zrobiono / What changed

- **PF-01:** jadzia-core → COI framing; flagship moved to zzpackage; Inbox Killer remains B2B product module with honest effect copy.
- **PF-03:** `wizardBusinessSteps` + footnote; `workflowSteps` removed; Agent OS shown as 5 nodes; `productionTouching` replaces vague `systemsLive`.
- **PF-02:** Owner ecosystem flow rewritten with `StatusBadge` per step; portal chat + Jadzia disclaimers; repo grid reads `ECOSYSTEM_REPOS`.
- **PF-05:** `readiness.ts` + `BuiltVsPlanned.tsx` on home (8 rows, LIVE/PARTIAL badges).
- **PF-04:** `los-copy.ts` + `LivingSystemTeaser.tsx` — 5 LOS layers, `data-home-section="los-teaser"`.
- **PF-06:** Spearhead → Wizard Cash Engine with live zzpackage CTA; Inbox secondary link to `/solutions/inbox-killer/`.
- **Canon:** `docs/strategy/site-map.md` §2 + §3 updated (15 home sections).

## Pliki / Files

| File | Action |
|------|--------|
| `src/content/ecosystem.ts` | update — COI, flagship, HOME_SECTIONS |
| `src/content/proof.ts` | update — metrics honesty, portal caption |
| `src/content/owner-ecosystem.ts` | new — flow steps + disclaimers |
| `src/content/readiness.ts` | new — 8-repo AS-IS table |
| `src/content/los-copy.ts` | new — LOS 5 layers |
| `src/content/metrics-display.ts` | update — agentNodes, productionTouching |
| `src/content/conversion-copy.ts` | update — SPEARHEAD block |
| `src/components/ui/StatusBadge.tsx` | new |
| `src/components/home/BuiltVsPlanned.tsx` | new |
| `src/components/home/LivingSystemTeaser.tsx` | new |
| `src/components/home/SpearheadSpotlight.tsx` | rewrite — Wizard first |
| `src/components/home/HeroSection.tsx` | update — wizard footnote |
| `src/components/home/SystemMetrics.tsx` | update — footnote |
| `src/app/page.tsx` | update — wire new sections |
| `src/app/results/owner-ecosystem/page.tsx` | rewrite — honest flow + table |
| `src/components/layout/SectionProgress.tsx` | update — new section IDs |
| `docs/strategy/site-map.md` | update — §2 order + §3 repos |

## Weryfikacja / Verification

```bash
npm run typecheck   # pass
npm run build       # pass (33 routes)
```

Grep checks (prompt):
```powershell
Select-String -Path src -Pattern "Inbox Killer — spearhead" -Recurse  # 0 hits
Select-String -Path src -Pattern "orders, automation, jadzia.db" -Recurse  # 0 hits
```

## Screenshots checklist (Dowódca)

- [ ] Home — LOS teaser visible after pipeline section
- [ ] Home — Built vs Planned table (8 rows, jadzia PARTIAL)
- [ ] Home — Spearhead = Wizard CTA → zzpackage.flexgrafik.nl
- [ ] `/results/owner-ecosystem/` — flow badges LIVE/PARTIAL/PLANNED
- [ ] `/results/owner-ecosystem/` — no “orders live” without PLANNED note
- [ ] Hero terminal — “9 UI screens · 7 business decision stages” footnote
- [ ] Mobile 375px — no horizontal scroll on new sections

## Post-deploy smoke (Dowódca — manual deploy Zasada 11)

```powershell
Set-Location C:\Users\FlexGrafik\FlexGrafik\github\services
npm run build
npx serve dist
```

1. https://quietforge.flexgrafik.nl/ — LOS + Built vs Planned sections
2. https://quietforge.flexgrafik.nl/results/owner-ecosystem/ — honest Jadzia + portal copy
3. Wizard CTA → https://zzpackage.flexgrafik.nl/
4. Console: 0 × 404 for `/gratka/` images on home

## Następny krok / Next steps (P1)

- PF-07: Fix m7/m8 module names (Mission Control, Trust Portal)
- PF-08: Investor links block on owner-ecosystem
- PF-09: brain.md §3 STALE marker
- PF-10: OG/meta refresh
- PF-11: Case study ordering (Wizard first)
