---
status: "[ACTIVE]"
title: "Documentation Inventory"
owner: "Norbert Wozniak"
updated: "2026-06-25"
classification: "Governance — doc audit output"
---

# Documentation Inventory — 2026-06-25

Full scan of `.md` files excluding `node_modules`, `.next`, `dist`.  
**Action key:** KEEP · MOVE · ARCHIVE · REFERENCE · DELETE-CANDIDATE

---

## L0 — Ecosystem constitution (external)

| Path | Lifecycle | Layer | Action |
|------|-----------|-------|--------|
| `flexgrafik-meta/docs/core/*` (42 files) | ACTIVE | L0 | KEEP upstream — do not copy |

---

## L1–L2 — Root operational + canons (this session)

| Path | Lifecycle | Layer | Action |
|------|-----------|-------|--------|
| `AGENTS.md` | ACTIVE | L2 | KEEP — update read order |
| `brain.md` | STALE | L4 | KEEP — refactor v2.0 |
| `DESIGN-SYSTEM.md` | ACTIVE | L3 | KEEP |
| `CLAUDE.md` | ACTIVE | L2 | KEEP (pointer to AGENTS) |
| `README.md` | ACTIVE | L4 | KEEP |
| `docs/canons/*` | ACTIVE | L1–L2 | NEW this session |
| `docs/README.md` | ACTIVE | L1 | NEW this session |
| `docs/architecture/*` | ACTIVE | L3 | NEW this session |
| `docs/governance/*` | ACTIVE | L5 | NEW this session |

---

## L3 — Strategy canon (binding)

| Path | Lifecycle | Layer | Action |
|------|-----------|-------|--------|
| `docs/strategy/README.md` | ACTIVE | L3 | KEEP — update pointers |
| `docs/strategy/marketing-strategy.md` | ACTIVE | L3 | KEEP |
| `docs/strategy/site-map.md` | ACTIVE | L3 | KEEP — update §7 hierarchy |
| `docs/strategy/conversion-pipeline.md` | ACTIVE | L3 | KEEP |
| `docs/strategy/ui-ux-principles.md` | ACTIVE | L3 | KEEP |

---

## L4 — Implementation content

| Path | Lifecycle | Layer | Action |
|------|-----------|-------|--------|
| `src/content/*.ts` | ACTIVE | L4 | KEEP — UI SSoT |
| `src/content/proof.README.md` | ACTIVE | L4 | KEEP |
| `public/gratka/*.md` | ACTIVE | L4 | KEEP — proof artefacts |
| `public/artefacts/*.md` | ACTIVE | L4 | KEEP |

---

## L5 — Session artifacts (65 handoffs)

| Path | Lifecycle | Layer | Action |
|------|-----------|-------|--------|
| `docs/handoffs/*.md` (63 dated + 2 prompts) | ARCHIVE | L5 | MOVE → `docs/operations/handoffs/` |
| Latest: `2026-06-25-portfolio-truth-sync.md` | ARCHIVE | L5 | INDEX as last shipped feature |

---

## Audits & plans

| Path | Lifecycle | Layer | Action |
|------|-----------|-------|--------|
| `docs/audits/**` (17 files + assets) | ARCHIVE | L5 | MOVE → `docs/archive/audits/` |
| `docs/plans/**` (6 files) | ARCHIVE | L5 | MOVE → `docs/archive/plans/` |

---

## Legacy & ephemeral

| Path | Lifecycle | Layer | Action |
|------|-----------|-------|--------|
| `Tak to ma być/**` (7 files) | STALE | L5 | MOVE → `docs/archive/legacy/tak-to-ma-byc/` |
| `inspiracja pro.md` | STALE | L5 | MOVE → `docs/archive/legacy/` |
| `docs/workspace-019ebffe-*/**` (16 files) | REFERENCE | L5 | MOVE → `docs/archive/legacy/workspace-snapshots/` |

---

## Reference (indexed, not canon)

| Path | Lifecycle | Layer | Action |
|------|-----------|-------|--------|
| `docs/COMMANDER_PLAN.md` | STALE | REFERENCE | MOVE → `docs/archive/reference/` |
| `docs/13_DANE_PER_REPO_GOTOWE.md` | REFERENCE | REFERENCE | MOVE → `docs/archive/reference/` |
| `docs/portfolio-update-plan-2026-06-25.md` | REFERENCE | REFERENCE | MOVE → `docs/archive/reference/` |
| `docs/AGENT-IMPLEMENTATION-PROMPT.md` | REFERENCE | REFERENCE | MOVE → `docs/archive/reference/` |

---

## Agent tooling

| Path | Lifecycle | Layer | Action |
|------|-----------|-------|--------|
| `.agents/skills/**/SKILL.md` (12) | ACTIVE | L2 | KEEP — update paths |
| `.agents/workflows/*.md` (7) | ACTIVE | L2 | KEEP |
| `.agents/skills/README.md` | ACTIVE | L2 | KEEP |

---

## Conflicts (docs ↔ code ↔ meta)

| ID | Conflict | Resolution |
|----|----------|------------|
| C-01 | `brain.md` §3 "zero-repo" vs live LOS home | **site-map + src/content** win; brain v2 removes stale §3 |
| C-02 | `COMMANDER_PLAN.md` "jadzia = Inbox Killer spearhead" | **meta as-is-inventory + readiness.ts** win; archive COMMANDER_PLAN |
| C-03 | `NEXT-SESSION-PROMPT.md` E-2 vs P0 truth-sync done | **SESSION-ANCHOR.md** replaces as live pointer |
| C-04 | `site-map.md` §7 cites `inspiracja pro.md` | **vision-system.md** supersedes for agents |
| C-05 | Meta traction §2.2 commercial metrics empty | **Commander-owned** — placeholder in proof-rules.md |
| C-06 | `future-services-quietforge.md` says not in repos.yaml | **Accurate** — services is sibling asset; document in ecosystem-bridge |

**P0 conflicts:** all have resolution above. No open P0 without Commander decision.

---

## STALE files (minimum 5 — DOD 0.1)

1. `docs/handoffs/NEXT-SESSION-PROMPT.md` — targets E-2; P0 truth-sync completed 2026-06-25
2. `docs/COMMANDER_PLAN.md` — jadzia spearhead framing contradicts COI canon
3. `brain.md` §3 STALE banner — superseded by LOS home alignment
4. `Tak to ma być/Mapa Strony Filar 2.md` — superseded by `site-map.md` §2 LOCKED
5. `inspiracja pro.md` — superseded by `marketing-strategy.md` + `vision-system.md`
6. `docs/workspace-019ebffe-*` — Cursor ephemeral snapshot, not canon
7. `docs/handoffs/STARTER-PROMPT.md` — pre-repositioning bootstrap

---

## Verification

- `[FILL:]` in `src/`: **0 hits** (grep 2026-06-25)
- Total `.md` files inventoried: **~155** (excluding node_modules)
- Handoffs count: **65**
