# Executive Summary — Post-E-6 Strategy, SSoT & Sales Audit

**Date:** 2026-06-25  
**Site:** [quietforge.flexgrafik.nl](https://quietforge.flexgrafik.nl)  
**Repo HEAD:** `78dbb4f` (deploy CI: success)  
**Prior audit:** 2026-06-23 (superseded by this report)

---

## One-line verdict

**The site is technically sound, strategy-canon compliant on home and results, and can sell high-ticket discovery to warm ICP traffic today — but cold outbound and investor narratives remain gated on commercial proof (BL-02) and L2 video (BL-03).**

---

## What we audited

1. **SSoT integrity** — live HTML vs `src/content/*.ts` after case-study series E-2…E-6  
2. **Strategy canon** — home order, funnel, 15-block marketing framework, ICP objections  
3. **Sales potential** — warm vs cold vs investor scenarios  
4. **UX sample** — money path + mobile case-study bridges  

Full artefacts: [`01-ssot-consistency-matrix.md`](./01-ssot-consistency-matrix.md) through [`06-ux-heuristics.md`](./06-ux-heuristics.md).

---

## Key findings

### Strengths (protect)

- **E-2…E-6 complete:** All standard `CaseStudyLayout` results pages read from `*-case-study.ts`; live string checks 7/7 PASS.
- **Home LOCKED order** matches `site-map.md` §2; positioning and anti-positioning active.
- **Honest proof:** PARTIAL jadzia, PLANNED WC sync, advisory “in delivery” — no fake client outcomes.
- **Funnel design:** Recognition → proof → paid qualification → strategy call is correctly implemented.
- **Technical gates:** typecheck, build (34 routes), production navigation audit PASS.

### Gaps (fix in priority order)

| # | Gap | Sales impact |
|---|-----|--------------|
| 1 | **BL-02** commercial traction empty | Blocks LinkedIn/investor |
| 2 | **BL-03** wizard/inbox/ecosystem videos not ready (2/7) | Weak cold-traffic L2 |
| 3 | Solutions pages **sales-funnel**, **web-upgrade**, **managed-automation** hardcoded — drift from results CS | Generic product ladder |
| 4 | `WEBSITE_ONLY_EXCEPTION` in `conversion-copy.ts` **not wired** to any page | Wrong-fit web-only leads |
| 5 | Field report metrics hardcoded in component — not in `proof.ts` | PR-07 traceability |
| 6 | WhatsApp pilot page — no content module, placeholder video | Mobile L3 story incomplete |

---

## Scorecard snapshot

| Dimension | Score |
|-----------|-------|
| SSoT maturity | 4.0 / 5 |
| Strategy canon | 4.3 / 5 |
| Sales-readiness index | 3.1 / 5 |
| Nielsen UX (money path) | 4.0 / 5 |

---

## Sales potential by channel

| Channel | Verdict |
|---------|---------|
| **Warm / referral** | **HIGH** — live wizard + ecosystem proof sufficient for €290 discovery |
| **Cold NL SMB** | **MEDIUM** — needs wizard Loom + solutions SSoT + min. BL-02 |
| **Investor / angel** | **MEDIUM-LOW** until commercial snapshot filled; tech/LOS story strong |

---

## Top 5 recommended actions

1. **Commander — BL-02:** Fill 2–3 rows in commercial traction template (`proof-rules.md`).
2. **Commander — BL-03:** Ship 45s wizard walkthrough → `videos.wizard.ready: true`.
3. **Agent — E-8:** Solutions SSoT for sales-funnel + web-upgrade (E-5b pattern).
4. **Agent — AUD-01:** Surface brochure-only exception on Web Upgrade + pricing.
5. **Agent — AUD-02:** Move field reports to content SSoT; Commander verifies numbers.

Details: [`04-remediation-backlog.md`](./04-remediation-backlog.md).

---

## Audit success criteria (plan)

| Criterion | Met? |
|-----------|------|
| Every sitemap route has SSoT status | ✅ |
| 15-block scorecard with evidence | ✅ |
| Sales verdict for warm/cold/investor | ✅ |
| Backlog ≤10 items with owners | ✅ (10 items) |
| build + audit-404s PASS on audit day | ✅ |

---

*Next: Commander picks BL-02 + BL-03, then Agent session E-8.*
