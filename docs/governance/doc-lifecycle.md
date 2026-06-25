---
status: "[ACTIVE]"
title: "Documentation Lifecycle Policy"
owner: "Norbert Wozniak"
updated: "2026-06-25"
classification: "Governance — binding for doc maintenance"
---

# Documentation Lifecycle Policy

## Status definitions

| Status | Meaning | Agent behaviour |
|--------|---------|-----------------|
| **ACTIVE** | Current truth — load before work | Must read when trigger matches |
| **STALE** | Superseded but not yet archived — may mislead | Do not cite; follow pointer to ACTIVE doc |
| **ARCHIVE** | Historical session output — context only | Read only when debugging a past decision |
| **REFERENCE** | Indexed snapshots, plans, Commander data | Never treat as binding rules |

## Frontmatter standard

Every canon and governance doc MUST include:

```yaml
---
status: "[ACTIVE]"
title: "Human-readable title"
owner: "Norbert Wozniak"
updated: "YYYY-MM-DD"
classification: "Layer — purpose"
supersedes: "optional/path.md"
---
```

Handoffs use simpler header (date + goal) — no frontmatter required.

## Archival rules

| Artifact type | When to archive | Where |
|---------------|-----------------|-------|
| Handoff | Immediately after session ships | `docs/operations/handoffs/` + INDEX |
| Audit report | After remediation shipped or 30 days | `docs/archive/audits/` |
| Plan | After plan executed or superseded | `docs/archive/plans/` |
| Legacy copy wireframes | When strategy canon locks | `docs/archive/legacy/` |
| Workspace snapshots | After implementation merged | `docs/archive/legacy/workspace-snapshots/` |

## Versioning

- Bump `updated` on any HARD rule change in `docs/canons/*-rules.md`
- Same session: update affected skill (`strategy-check`, `proof-check`) if rule is enforceable
- Major canon restructure: note in `docs/operations/SESSION-ANCHOR.md`

## Delete candidates

Do NOT delete without Commander approve. Prefer `git mv` to archive.  
Candidates: duplicate generated plans, empty stubs, ephemeral workspace after 90 days.
