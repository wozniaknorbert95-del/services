# Next Session Prompt — Meta SSoT cleanup

> Load [`SESSION-ANCHOR.md`](../SESSION-ANCHOR.md) first.

---

## Start (copy to agent)

```
Repo: services.flexgrafik.nl · HEAD: git log -1

PROBLEM: Site presents the FlexGrafik stack as fully complete. Truth lives in flexgrafik-meta/docs/core/ — we show ~90% readiness while AS-IS says e.g. Jadzia ~35% vs vision.

HARD RULES (read ALL before editing copy):
- flexgrafik-meta/docs/core/ecosystem-blueprint.md
- flexgrafik-meta/docs/core/as-is-inventory.md
- flexgrafik-meta/docs/core/to-be-target-state.md
- flexgrafik-meta/docs/core/jadzia-operating-charter.md
- flexgrafik-meta/docs/core/kaizen-framework.md
- flexgrafik-meta/docs/core/integration-contracts.md
- flexgrafik-meta/docs/core/modules/*.md (8 files)

Also: docs/architecture/authority-chain.md · docs/canons/proof-rules.md

TASK (simple — NO mega-audit):
1. Draft a SHORT plan: what on /results/ and src/content/* must change to match AS-IS (LIVE/PARTIAL/PLANNED visible).
2. List files in services repo that CONFLICT with meta and should be cleaned (readiness.ts, case-studies.ts, stale audits, etc.).
3. Execute in 1-1-1 sessions — max one content module per commit, npm run build gate.

DO NOT: invent metrics, pretend system is 100% done, or expand scope to video/outbound.

Handoff: docs/operations/handoffs/2026-06-25-meta-ssot-alignment-brief.md
```

---

## Stan repo

| Item | Status |
|------|--------|
| Git | clean · `master` = `origin/master` |
| Deploy | Vercel ✅ |
| Video | 3/7 — deferred |
| BL-02 commercial | public UNKNOWN |

---

## Commander gate

Approve plan before bulk copy changes on `/results/`.
