# Agent card sample (anonymised)

> One-page sample of how execution agents are contracted in a production orchestrator.
> Forward internally — shows roles, boundaries and outputs. No client names.

---

## Why agent cards matter

A multi-agent system without contracts drifts fast. Each agent gets:
- a **single role** (no mega-agent),
- **least-privilege tools** (only what the task needs),
- a **clear output** (plan, diff, test report, sign-off request).

This sample mirrors a live production engine — names anonymised.

---

## Sample cards (execution layer)

| Agent | Core role | Allowed scope | Typical output |
|---|---|---|---|
| **Planner** | Break work into atomic tasks | Read SSoT docs, task list | Implementation plan + file list |
| **Coder** | Implement one module per session | Target folder only, git diff | Working code in test environment |
| **Tester** | Verify behaviour & regressions | Test scripts, read logs | Pass/fail report with reproduction steps |
| **Review** | Human gate (you or architect) | Approve / reject / request changes | Signed-off diff or blocked deploy |

**Pipeline:** `planner → coder → tester → review` — fixed order, no skipped steps.

---

## What each agent cannot do

- **Planner** cannot deploy to production or edit live customer data.
- **Coder** cannot change global business rules without schema approval.
- **Tester** cannot bypass failing checks.
- **Review** is not optional on production paths — deploy stays manual by design.

---

## Orchestration rules (SSoT)

- One **single source of truth** for schemas, agent cards and brain docs.
- If code and documentation disagree → conflict is flagged, not silently patched.
- Context packets are **minimal** — agents receive only what the task requires.

---

## Stack (process proof)

- **Runtime:** FastAPI + LangGraph on a VPS (EU)
- **Governance:** 12-step internal workflow mapped to 5 client-visible phases
- **Measurement:** architecture diagram available on request — no fabricated uptime %

---

## Next step

Want this level of structure for your business operations? Start with a paid **Automation Map**.

**Book:** services.flexgrafik.nl/book-discovery/

---
*Norbert — AI Systems Architect · Quietforge · hello@flexgrafik.nl*
