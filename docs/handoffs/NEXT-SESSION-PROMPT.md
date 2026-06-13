# Next Session Prompt — CS-2 Orchestrator gratka

> **Start here.** CS-1 (Inbox Killer) complete. Portfolio 100% closure complete.

---

## Stan

| Session | Status |
|---|---|
| Portfolio repositioning | Done (merged) |
| Portfolio 100% (Hero, OG, PDF) | Done |
| **CS-1 Inbox Killer gratka** | **Done** — `/results/inbox-killer/` |
| CS-2 Orchestrator | **Next** |
| CS-3 Wizard | Planned |
| CS-4 Advisory (KFA) | Planned (after milestones) |

**Last handoff:** `docs/handoffs/2026-06-13-cs1-inbox-killer-gratka.md`

---

## Cel sesji CS-2: Multi-agent orchestrator gratka

**1 case = 1 sesja.** Scope from `ROADMAP-case-study-expansion.md` § Case 02.

### Deliverables

1. **Page** `/results/agent-orchestrator/` (or slug TBD in `case-studies.ts`)
2. **Architecture one-pager PDF** — FastAPI + LangGraph + VPS, SSoT, anonymised
3. **Agent card sample PDF** — planner / coder / tester / review contracts
4. **Workflow map** — 5-phase client view (reuse `HowIWork` logic)

### Source of truth

- `flexgrafik-meta/docs/core/workflow-manual.md`
- `flexgrafik-meta/docs/core/agents.md`
- Case 02 card in `src/lib/case-studies.ts`

### DoD

- [ ] Downloadable PDFs, no fake uptime %
- [ ] Links from `/results` card 02
- [ ] CTA → `/book-discovery/`
- [ ] `npm run build` pass
- [ ] Handoff `docs/handoffs/YYYY-MM-DD-cs2-orchestrator-gratka.md`

### Pattern to reuse from CS-1

- `src/lib/case-studies.ts` — add `slug: 'agent-orchestrator'`
- `src/lib/gratka.ts` — new asset paths
- `public/gratka/` — SVG + MD → PDF via `npm run generate:artefacts`
- OG image per route

---

> **Begin:** Read CS-1 handoff + roadmap § Case 02 → implement page + 2 PDFs → wire card 02 → build → handoff.
