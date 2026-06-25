# 04 — Remediation Backlog (post-E-6 audit)

**Max 10 items · Prioritized by sales impact**  
**Date:** 2026-06-25

| ID | Priority | Item | Owner | Effort | Sales impact |
|----|----------|------|-------|--------|--------------|
| BL-02 | **P0** | Fill commercial traction snapshot (min. 2–3 metrics: paid orders, game leads, chat sessions) per `proof-rules.md` PR-08 | **Commander** | S | Unblocks LinkedIn/investor |
| BL-03 | **P0** | Record + ship wizard Loom (45s) → `videos.wizard.ready: true` | **Commander** | M | Cold traffic L2 proof |
| E-8 | **P1** | Solutions SSoT: `sales-funnel-case-study.ts` + `web-upgrade` module (pattern E-5b) | **Agent** | M | Product ladder consistency |
| AUD-01 | **P1** | Wire `WEBSITE_ONLY_EXCEPTION` to `/solutions/web-upgrade/` + `/pricing/` | **Agent** | S | Filters wrong-fit leads |
| AUD-02 | **P1** | Move `FieldReports.tsx` copy to `proof.ts` or `conversion-copy.ts`; Commander verifies numbers | **Agent + Commander** | S | PR-07 compliance |
| E-7 | **P2** | `whatsapp-discovery-pilot` content module + video slot | **Agent** | M | Mobile L3 credibility |
| AUD-03 | **P2** | Hub `case-studies.ts` — import titles/measurements from CS modules; fix whatsapp `manifestKey` | **Agent** | S | Hub/detail parity |
| BL-03b | **P2** | Inbox Killer 60s screen record → `videos.inboxKiller` | **Commander** | M | B2B product proof |
| E-8b | **P2** | `managed-automation` content module + proof screen | **Agent** | M | MRR ladder |
| AUD-04 | **P2** | Filter `?_rsc=` from `audit-navigation.mjs` asset404 | **Agent** | S | CI signal quality |

---

## Recommended execution order

```
BL-02 (Commander, 30 min WC/GA4)
    ↓
BL-03 wizard Loom (Commander, 1 session)
    ↓
E-8 solutions SSoT (Agent, 1 session)
    ↓
AUD-01 + AUD-02 (Agent, same session)
    ↓
LinkedIn pilot post (Commander) — 1 CS + book-discovery CTA
```

---

## Explicitly NOT in backlog (working as designed)

- Self-as-client framing on results hub — strategy-compliant
- PARTIAL jadzia / PLANNED WC order sync — honesty per PR-01
- `EcosystemVideo` absent from home — site-map forbidden until real URLs
- Advisory “in delivery” — MR-16; no invented client outcomes

---

## Session handoff pointer

After remediation starts, update `docs/operations/SESSION-ANCHOR.md` and ship via standard verify + handoff skills.
