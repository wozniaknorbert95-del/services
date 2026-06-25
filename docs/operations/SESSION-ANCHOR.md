# SESSION-ANCHOR — Live Session Pointer

> **Single source for "what now?"** Replaces stale `NEXT-SESSION-PROMPT.md` when out of date.

**Updated:** 2026-06-25 · **Last ship:** video P0 agency (wizard MP4 + record pipeline) · **Video plan:** [`video-production-plan-2026-06-25.md`](./video-production-plan-2026-06-25.md)

---

## CO ROBIMY

**Video production** — wizard BL-03 **SHIPPED** (automated capture). Four videos remain.

## NASTĘPNY KROK (Commander)

| # | Akcja |
|---|--------|
| 1 | **Review** `public/gratka/wizard-demo.mp4` — PII check; re-run `npm run record:wizard` if trim needed |
| 2 | **P0 BL-03b** — `JADZIA_INBOX_URL=<test inbox>` → `npm run record:inbox-killer` → Agent sets `ready: true` |
| 3 | **P1** — `npm run record:lead-magnet` + `record:ecosystem` (or OBS per plan) |
| 4 | **P2** — `npm run record:founder` (screen montage; optional VO re-record) |
| 5 | Partner alignment → optional WC/GA4 for investor deck |

## Docs

- **Video plan:** [`video-production-plan-2026-06-25.md`](./video-production-plan-2026-06-25.md)
- **Agency handoff:** [`video-p0-agency`](./handoffs/2026-06-25-video-p0-agency.md)
- DoD: [`07-remediation-plan-dod.md`](../audits/2026-06-25/07-remediation-plan-dod.md)

## Blockers

| ID | Item | Status |
|----|------|--------|
| BL-02 | Commercial traction | **partial** — public UNKNOWN |
| BL-03 | Wizard video | **closed** — `wizard-demo.mp4` + `ready: true` |
| BL-03b | Inbox video | open — needs `JADZIA_INBOX_URL` |

## Video score

**3/7 ready** (`agentOs`, `vcms`, `wizard`) · record scripts in `scripts/record-*.mjs`

---

*Maintainer: update this file at end of every session*
