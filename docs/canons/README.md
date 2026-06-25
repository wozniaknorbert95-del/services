---
status: "[ACTIVE]"
title: "Canons Index"
owner: "Norbert Wozniak"
updated: "2026-06-25"
classification: "L2 — canon registry"
---

# Canons Index

Binding short-form rules extracted from detailed strategy docs. **HARD rules here override narrative elsewhere.**

| Canon | Layer | Purpose |
|-------|-------|---------|
| [vision-system.md](./vision-system.md) | L1 | North star, three brains, phases, anti-goals |
| [strategy-rules.md](./strategy-rules.md) | L2 | IA, home order, funnel, two-track |
| [marketing-rules.md](./marketing-rules.md) | L2 | Positioning, copy arc, forbidden claims |
| [ux-rules.md](./ux-rules.md) | L2 | Hierarchy, tokens, intent colors, motion |
| [proof-rules.md](./proof-rules.md) | L2 | LIVE/PARTIAL/PLANNED, metrics honesty |

## Versioning

- Bump `updated` in frontmatter when any HARD rule changes
- Same session: update `strategy-check` or `proof-check` skill if enforceable
- Detail / narrative stays in `docs/strategy/` — do not duplicate long-form here

## Read order

1. vision-system.md  
2. All `*-rules.md` matching your task type  
3. `docs/strategy/` for depth

*Entry point: [docs/README.md](../README.md)*
