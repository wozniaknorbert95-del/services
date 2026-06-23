# Nielsen Heuristics Audit — Quietforge Portfolio

**Skill:** `nielsen-heuristics-audit`  
**URL:** https://flexgrafik-services.vercel.app/  
**Flows tested:** Home scroll · Solutions → Inbox Killer · Pricing · Book discovery · About · Founder

---

## Summary

| # | Heuristic | Score | Severity issues |
|---|-----------|-------|-----------------|
| H1 | Visibility of system status | **4** | Sticky header, active nav; no loading on long home |
| H2 | Match system / real world | **3.5** | "Telegram Deployment Agent" jargon; good SMB pain copy elsewhere |
| H3 | User control & freedom | **4** | Clear back-nav, footer escape hatches, no modal traps |
| H4 | Consistency & standards | **3.5** | Inbox Killer vs Telegram naming; otherwise uniform chrome |
| H5 | Error prevention | **3.5** | Budget qualification copy; wizard not walked in audit |
| H6 | Recognition over recall | **4.5** | Intent badges, repeated CTA labels, footer mirrors nav |
| H7 | Flexibility & efficiency | **3.5** | No skip-to-pricing; power users scroll 14 sections |
| H8 | Aesthetic & minimalist design | **3.5** | Strong aesthetic but dense home; placeholders break polish |
| H9 | Error recognition & recovery | **2.5** | Silent PDF 404 prefetch (console); no user-visible error |
| H10 | Help & documentation | **4.5** | Trust, legal, artefacts, how-it-works, blog |
| **Average** | | **3.9** | |

**Heuristic verdict:** **Conditional Pass** — no catastrophic usability failures; fix H9 (404) and H8 (placeholders).

---

## Detailed findings

### H1 — Visibility of system status (4/5)

**Pass:** Sticky header with L3 CTA always visible; section eyebrows (`// SOLUTION`) orient user; pricing shows `from €X`.

**Issue AUD-N01 (Low):** 14-section home — no progress or "you are here" beyond scroll position.

---

### H2 — Match between system and real world (3.5/5)

**Pass:** Problem statements use business language ("hour of friction for a one-line hotfix"). Automation Map described in minutes and ROI terms.

**Issue AUD-N02 (Medium):** Solution page title **"Telegram Deployment Agent"** — internal implementation name, not buyer language. ICP searches "inbox automation" / "lead qualification", not Telegram.

**Issue AUD-N03 (Low):** Metrics like "142 messages/scan" on LinkedIn not yet on live site hero (post AUD-S01 deploy will help).

---

### H3 — User control and freedom (4/5)

**Pass:** No forced modals; Solutions dropdown dismisses on mouse leave; external links open new tab with `rel=noopener`.

**Minor:** Mobile menu — verify focus trap (not fully exercised in automated crawl).

---

### H4 — Consistency and standards (3.5/5)

**Pass:** Amber primary CTA everywhere; `Book your Automation Map` consistent; Lucide icons uniform.

**Issue AUD-N04 (Medium):** Product naming map:

| Surface | Name used |
|---------|-----------|
| Nav / footer | Inbox Killer |
| Solution H1 | Telegram Deployment Agent |
| Case study H1 | The self-running back-office |

---

### H5 — Error prevention (3.5/5)

**Pass:** `/book-discovery/` sets €290 expectation; pricing qualification string in canon; website-only exception documented.

**Not tested:** Wizard checkout on zzpackage (external).

---

### H6 — Recognition rather than recall (4.5/5)

**Pass:** Intent color legend on home; proof screenshots with captions; footer repeats all solution names.

---

### H7 — Flexibility and efficiency (3.5/5)

**Pass:** Header jumps to Pricing, Systems, About.

**Issue AUD-N05 (Medium):** Cold visitor must scroll full home before second proof+CTA rhythm — canon wants sticky CTA after first proof block.

---

### H8 — Aesthetic and minimalist design (3.5/5)

**Pass:** Restrained palette, no gradient soup, monospace discipline.

**Issue AUD-N06 (High):** Visible `[FILL: … video]` placeholders on `/founder/` and solution pages read as **unfinished** — worse than omitting video per `site-map.md` forbidden list.

---

### H9 — Help users recognize, diagnose, recover from errors (2.5/5)

**Issue AUD-N07 (High):** Footer PDF links caused console 404 via RSC prefetch — fixed locally in `Footer.tsx`.

---

### H10 — Help and documentation (4.5/5)

**Pass:** `/trust/` AVG/HITL; `/legal/`; downloadable artefacts; `/how-it-works/` 3-step process; blog nurture.

---

*Evidence: Playwright crawl, `scripts/audit-404s.mjs`, screenshots in `../assets/desktop/`*
