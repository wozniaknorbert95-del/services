# Handoff — Agent OS content audit closure

**Date:** 2026-06-24  
**Route:** `/results/agent-orchestrator/`  
**Pack:** `agent-os/docs/portfolio/AGENT-OS-PORTFOLIO-PACK.yaml` v1.1

## Goal

Align case study copy, proof manifest and gratka assets with Agent OS 2.0 (5-node LangGraph, hybrid WAITING_RUNNER) — remove CS-2 remnants (Strategist, 4-node pipeline, „orchestrator” branding).

## Changes

| Area | Files |
|------|-------|
| SSoT copy | `src/content/agent-os-case-study.ts` (new) |
| Proof | `src/content/proof.ts` — 12 honesty capabilities, SVG screens |
| Case study | `src/lib/case-studies.ts`, `page.tsx`, `CaseStudyLayout.tsx` (`study.real`) |
| Gratka | `orchestrator-architecture.svg`, `workflow-map.svg`, `agent-cards.svg`, OG, MD→PDF |
| Cross-page | `owner-ecosystem/page.tsx`, `results/page.tsx`, `owner-ecosystem-map.*` |
| Docs | `docs/13_DANE_PER_REPO_GOTOWE.md` agent-os section |
| agent-os | `docs/portfolio/AGENT-OS-PORTFOLIO-PACK.yaml` v1.1 |

## Removed inconsistencies

- Strategist / 3-layer model on case study page
- „12-step engine” conflated with LangGraph pipeline
- 4-node „review” without Summarizer in OG/SVG/PDF
- `agentOsFeatureStatus` partial (7→12 capabilities)
- Stale `measurement` duplicate for agent-os (now from `caseMeasurements`)

## Verification

| Check | Result |
|-------|--------|
| `npm run typecheck` | PASS |
| `npm run build` | PASS (33 routes) |
| `rg Strategist\|12.step\|FastAPI engine` in `src/` + agent gratka + OG | 0 |
| `[FILL:]` in `src/` | 0 |
| PDF regen | `orchestrator-agent-card-sample.pdf`, `orchestrator-workflow-map.pdf` |

## Post-deploy smoke

- https://services.flexgrafik.nl/results/agent-orchestrator/
- Confirm: LangGraph pipeline section, 12 honesty badges, 5-node table, new SVG diagram

## Next

- Push `services/master` when Dowódca approves
- agent-os PACK commit if not pushed (no remote configured locally)
