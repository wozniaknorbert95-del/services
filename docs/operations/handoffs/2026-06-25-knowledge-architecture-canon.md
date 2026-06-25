# Handoff — Knowledge Architecture Canon (2026-06-25)

**Repo:** services.flexgrafik.nl · **Build:** `npm run typecheck` ✅ · `npm run build` ✅ (34 routes)  
**Meta sync:** `flexgrafik-meta` ecosystem-blueprint pointer + `module-services-quietforge.md`

## SESSIONANCHOR

```
TASK: Knowledge Architecture & Canon Cleanup (Phases 0–6)
STATUS: COMPLETE
NEXT: E-2 CS-02 agent-orchestrator copy (see NEXT-SESSION-PROMPT.md)
HITL: Commander review vision-system.md § HITL checkbox
```

## Cel / Goal

Establish professional documentation architecture: knowledge layers, extracted HARD rules, vision steering doc, physical folder reorganization, meta bridge — so agents stop drifting across 65+ scattered handoffs.

## Co zrobiono / What changed

### Phase 0 — Inventory
- `docs/governance/inventory-2026-06-25.md` — full audit + conflict table
- `docs/governance/doc-lifecycle.md` — ACTIVE/STALE/ARCHIVE policy

### Phase 1 — Knowledge map
- `docs/README.md` — entry point + 10-step read order
- `docs/architecture/authority-chain.md` — conflict resolution

### Phase 2 — Canons (L1+L2)
- `docs/canons/vision-system.md` — north star, three brains, phases, anti-goals
- `docs/canons/strategy-rules.md` — 17 HARD IA/funnel rules
- `docs/canons/marketing-rules.md` — 18 copy/proof rules
- `docs/canons/ux-rules.md` — 15 UI rules
- `docs/canons/proof-rules.md` — honesty gates
- `docs/canons/README.md` — index

### Phase 3 — Operational memory
- `brain.md` v2.0 — slim tech/deploy only
- `AGENTS.md` — new read order
- `docs/strategy/README.md` — L2/L3 split
- Skills: vibeinit, strategy-check, section-build, handoff
- `docs/strategy/site-map.md` §7 — vision-system hierarchy

### Phase 4 — Reorganization (`git mv`)
- `docs/handoffs/` → `docs/operations/handoffs/` (66 files)
- `docs/audits/` → `docs/archive/audits/`
- `docs/plans/` → `docs/archive/plans/`
- `Tak to ma być/` → `docs/archive/legacy/tak-to-ma-byc/`
- `inspiracja pro.md` → `docs/archive/legacy/`
- Reference docs → `docs/archive/reference/`
- `docs/workspace-*` → `docs/archive/legacy/workspace-snapshots/`
- `docs/operations/SESSION-ANCHOR.md` — live pointer
- `docs/operations/handoffs/INDEX.md` — handoff index
- `NEXT-SESSION-PROMPT.md` — updated for post-canon E-2
- `docs/architecture/ecosystem-bridge.md` + `content-ssot.md`

### Phase 5 — Meta sync
- `flexgrafik-meta/docs/core/ecosystem-blueprint.md` — portfolio pointer
- `flexgrafik-meta/docs/core/modules/module-services-quietforge.md` — AS-IS module spec

## Pliki / Files (summary)

| Area | New/updated |
|------|-------------|
| `docs/canons/` | 6 files NEW |
| `docs/architecture/` | 3 files NEW |
| `docs/governance/` | 2 files NEW |
| `docs/README.md` | NEW |
| `docs/operations/` | SESSION-ANCHOR + moved handoffs |
| `docs/archive/` | moved audits, plans, legacy, reference |
| Root | `brain.md`, `AGENTS.md` updated |
| `.agents/skills/` | 4 skills path/read order |
| Meta repo | 2 files |

## Weryfikacja / Verification

```bash
npm run typecheck   # pass
npm run build       # pass (34 routes)
rg '\[FILL:' src/  # 0 hits
Test-Path docs/handoffs  # False (moved)
Test-Path docs/operations/handoffs  # True
```

## Commander checklist

- [ ] 15 min — read `docs/canons/vision-system.md`, tick HITL checkbox
- [ ] Optional — fill commercial traction in `proof-rules.md` template / meta §2.2
- [ ] Next code session — E-2 CS-02 per `NEXT-SESSION-PROMPT.md`

## Next steps

1. **E-2:** `/results/agent-orchestrator/` copy refresh (named stack)
2. **E-3:** zzpackage wizard case study depth
3. Quarterly review: vision-system + meta master-plan sync

---

*Program DOD: read order <10 steps ✅ · brain v2 no stale conflicts ✅ · 5 canons ACTIVE ✅ · handoffs indexed ✅ · legacy archived ✅ · meta pointer ✅*
