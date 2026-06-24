# Agent Implementation Prompt — Quietforge Portfolio Truth Sync

> **Copy-paste ten prompt do agenta w repo `services`.**  
> Plan szczegółowy: [`portfolio-update-plan-2026-06-25.md`](./portfolio-update-plan-2026-06-25.md)  
> Kanon techniczny: `../flexgrafik-meta/docs/core/as-is-inventory.md`, `living-system-architecture.md`, `verification-audit.md`, `investor-vision-angel.md`

---

## Context

You are implementing **P0 tasks** for Quietforge (`quietforge.flexgrafik.nl`) — a Next.js 16 static export B2B portfolio. The live site presents an **outdated picture** of the FlexGrafik ecosystem. Canonical truth was documented 2026-06-24 in `flexgrafik-meta/docs/core/`.

**Deadline:** Deploy tomorrow for LinkedIn. Quality bar: enterprise engineering — honest LIVE vs PLANNED labels, no fabricated metrics, minimal diff scope (1-1-1).

**Brand model (locked):** Two-brand bridge — Quietforge = consulting deploy; FlexGrafik = registered company running the live stack.

---

## Hard constraints

- ❌ No deploy to production (Zasada 11) — build only; Dowódca deploys manually
- ❌ No secrets, no `.env` commits
- ❌ No fabricated MRR, order counts, or lead numbers
- ❌ Do not claim portal qualification agent is LIVE (it's PLANNED — GAP-V01)
- ❌ Do not claim jadzia `order_node` / WC webhooks are LIVE
- ✅ UI copy: **English** (B2B audience NL/EU)
- ✅ Code comments: **English**
- ✅ Read module data from `src/content/ecosystem.ts` and `src/content/proof.ts` — avoid new hardcoded lists in components
- ✅ Run `npm run build` before finishing
- ✅ Match existing Quietforge design tokens (`--qf-*`, no new gradient/rounded styles)

---

## Task order (execute sequentially)

### PF-01 — Fix jadzia-core mapping in ecosystem manifest

**Files:** `src/content/ecosystem.ts`, grep entire `src/` for `Inbox Killer — spearhead`

**Changes:**
1. `ECOSYSTEM_REPOS` repo #3 (`jadzia-core`): change role from "Inbox Killer — spearhead" to COI framing:
   - `role: 'Chief Operating Intelligence (COI)'`
   - Add optional `statusNote` field or extend `role` string: `LIVE: WP agent + sales chat · TO-BE: order/lead/analytics`
2. Move `flagship: true` from jadzia-core to zzpackage repo entry if present
3. Keep `ECOSYSTEM_MODULES` m3 "Inbox Killer" as **B2B product** but ensure `repoKey: 'jadzia-core'` has honest `effect` copy — Inbox is a **service offering**, not what the repo solely does in production

**DoD:**
- [ ] Zero grep hits for `Inbox Killer — spearhead`
- [ ] jadzia repo describes COI, not inbox product
- [ ] Build passes

---

### PF-03 — Unify wizard steps + fix workflow metrics

**Files:** `src/content/proof.ts`, `src/components/home/HeroSection.tsx`, `src/components/home/SystemMetrics.tsx`

**Changes:**
1. In `proof.ts`:
   - Keep `wizardSteps: "9"` (matches UI "Stap X van 9")
   - Add `wizardBusinessSteps: "7"` with comment referencing business strategy
   - Rename/replace misleading `workflowSteps: "7"` → use `agentOsNodes: "5"` (already exists) in display components
2. Update Hero terminal and SystemMetrics to use consistent labels
3. Add footnote component or `qf-hint` where both numbers appear: *"9 UI screens · 7 business decision stages"*

**DoD:**
- [ ] No unexplained 7 vs 9 contradiction on same page
- [ ] Agent OS shown as 5-node pipeline, not "7 workflow steps"
- [ ] Build passes

---

### PF-02 — Rewrite owner-ecosystem page (honesty labels)

**Files:** `src/app/results/owner-ecosystem/page.tsx`

**Optional refactor:** extract `FLOW_STEPS` to `src/content/owner-ecosystem.ts` shared with page

**Changes to FLOW_STEPS:**
1. **01 Entry:** flexgrafik.nl portal — generic sales chat LIVE; qualification agent PLANNED
2. **02 Revenue:** zzpackage wizard — use `metrics.wizardSteps` + business steps footnote
3. **03 Leads:** app game — LIVE
4. **04 Operations:** jadzia-core COI — honest AS-IS (chat + WP SSH); order ingestion PLANNED
5. **05 Execution:** Agent OS 5-node — LIVE hybrid
6. **06 Supervision:** VCMS — LIVE, Conflicts: 0 target

Add `StatusBadge` component or inline: `LIVE` | `PARTIAL` | `PLANNED` per step (reuse pattern from `proof.ts` `FeatureClaimStatus`).

Import repo list from `ECOSYSTEM_REPOS` — do not duplicate repo roles in page.

**DoD:**
- [ ] No "orders live" without PLANNED badge
- [ ] Portal chat honestly described
- [ ] Repo grid uses ecosystem.ts data
- [ ] Build passes

---

### PF-05 — Built vs Planned table

**Files:** New `src/content/readiness.ts`, new `src/components/home/BuiltVsPlanned.tsx`, add to `src/app/page.tsx` after `SystemArchitecture` or inside `OwnerEcosystemTeaser`

**Data (from as-is-inventory.md §1):**

| Module | Readiness | Status |
|--------|-----------|--------|
| zzpackage | ~90% | LIVE |
| jadzia-core | ~35% | PARTIAL |
| app | ~85% | LIVE |
| flexgrafik-nl | ~75% | LIVE |
| flexgrafik-meta | ~80% | LIVE |
| flex-vcms | ~85% | LIVE |
| agent-os | ~90% | LIVE |
| agent-os-ui | ~85% | LIVE |

**DoD:**
- [ ] 8 rows with LIVE/PARTIAL badges
- [ ] Header references honest positioning
- [ ] No revenue/MRR numbers
- [ ] Build passes

---

### PF-04 — LOS teaser section

**Files:** New `src/content/los-copy.ts`, new `src/components/home/LivingSystemTeaser.tsx`, wire in `src/app/page.tsx`

**Content:** 5 layers from LOS — Sense, Think (Jadzia Strategist), Orchestrate (Planner + Agent OS + VCMS), Act (bounded nodes), Guard (HITL + Kaizen + Zasada 11). One sentence: *"Governance-first — AI proposes, humans approve."*

CTA link to `/results/owner-ecosystem/`

**DoD:**
- [ ] `data-home-section="los-teaser"`
- [ ] 5 layers named
- [ ] Framer motion respects `prefers-reduced-motion`
- [ ] Build passes

---

### PF-06 — Spearhead rebalance (Wizard first)

**Files:** `src/components/home/SpearheadSpotlight.tsx`, `src/content/conversion-copy.ts`

**Recommended:** Change spearhead spotlight to **Wizard Cash Engine** (live checkout proof) with primary CTA to `https://zzpackage.flexgrafik.nl/`. Move Inbox Killer mention to secondary link → `/solutions/inbox-killer/`

**DoD:**
- [ ] Home spearhead = Wizard/Cash Engine
- [ ] Live wizard link works
- [ ] Inbox still reachable via Solutions
- [ ] Build passes

---

## Verification (run all)

```powershell
Set-Location C:\Users\FlexGrafik\FlexGrafik\github\services
npm run lint
npm run build
```

**Grep checks:**
```powershell
# Must be zero:
Select-String -Path src -Pattern "Inbox Killer — spearhead" -Recurse
Select-String -Path src -Pattern "orders, automation, jadzia.db" -Recurse
# Unless accompanied by PLANNED badge nearby
```

**Manual smoke (local `npx serve dist`):**
- [ ] Home loads, new LOS + Built vs Planned sections visible
- [ ] `/results/owner-ecosystem/` shows honest Jadzia + portal copy
- [ ] Wizard CTA opens zzpackage
- [ ] No console 404s for `/gratka/` images on home

---

## What NOT to change

- `master-plan.md`, `global-rules.md` in flexgrafik-meta
- Pricing floors in `src/lib/constants.ts` unless Dowódca requests
- LinkedIn profile (out of repo scope)
- VCMS `repos.yaml` (separate decision)
- Full home section reorder (14 sections) — P1 only

---

## Handoff when done

Create `docs/handoffs/2026-06-25-portfolio-truth-sync.md` with:
- SESSIONANCHOR block
- List of files changed
- Screenshots checklist for Dowódca
- Deploy reminder (manual)
- Blockers if BL-01 Mission Control URL unconfirmed

---

## Reference excerpts (canonical truth)

**Jadzia AS-IS (`as-is-inventory.md`):**
> WP SSH agent + sales chat widget. No order_node, no WC webhook. ~35% vs COI vision.

**Portal chat (`verification-audit.md` GAP-V01):**
> Same endpoint as Wizard — `customer_agent` — NOT qualification agent.

**Wizard steps (`verification-audit.md` GAP-V02):**
> UI shows 9 screens; business strategy references 7 steps — document both.

**LOS (`living-system-architecture.md`):**
> Sense → Interpret → Propose → Verify → HITL → Act → Learn. Not full autonomy.
