---
status: "[ACTIVE]"
title: "Facebook Hard Rules — FlexGrafik ZZP"
owner: "Norbert Wozniak"
updated: "2026-07-01"
version: "2.0"
classification: "L3 — Facebook hard rules"
---

# Facebook Hard Rules

Non-negotiable rules for the FlexGrafik ZZP channel.

---

## FB-R01 — Language

| Rule | Detail |
|---|---|
| Page language | **Nederlands only** — remove English from page settings |
| Post language | NL only |
| English | Forbidden on main feed |
| Polish | Internal notes only — never public feed |

---

## FB-R02 — Brand boundary

| Rule | Detail |
|---|---|
| Primary brand | FlexGrafik — ZZP brandingpartner |
| Quietforge as main CTA | Forbidden |
| Automation Map €290 | Forbidden as Facebook CTA |
| quietforge.flexgrafik.nl | Do not link as primary action |

---

## FB-R03 — Forbidden content

Never publish on Facebook main feed:

- Investor asks, funding requests, `#investorready`
- 8-repo architecture, Agent OS, LangGraph, MCP
- Long “living operating system” narratives
- Reposted LinkedIn B2B posts without NL ZZP rewrite
- Generic AI agency positioning

---

## FB-R04 — Mandatory post structure

Every post must include:

```text
1. Need or hook — recognisable for NL ZZP'er
2. What FlexGrafik delivers
3. Real proof (photo preferred)
4. One clear CTA in Dutch
```

If there is no real photo or product proof, do not publish (except P3 how-to with wizard screenshot).

Each post in [content-themes.md](./content-themes.md) has a **Publish gate** — do not skip.

---

## FB-R05 — Proof honesty

| Must say | Never say |
|---|---|
| Real project photos (client permission) | Stock photos as “our work” |
| Actual product capabilities | “200+ SKUs” if site says 167 — use **167** |
| Wizard LIVE status | Fake urgency (“2 months left”) |
| Live sales chat on portal + wizard | “AI adviseur regelt alles” — qualification agent is PLANNED |
| 5 speelniveaus / season leaderboard (game) | “Logo op podium” — not in SSoT |
| Consumer “3 stappen” | Implying wizard is only 3 screens — footnote: 9 UI screens internally |

SKU count SSoT: `src/content/proof.ts` (167).  
Game SSoT: `src/content/lead-magnet-case-study.ts` (5 acts, 4-tier ladder, season ranking).  
Chat SSoT: `src/content/owner-ecosystem.ts` (customer_agent LIVE; qualification agent PLANNED).

---

## FB-R06 — Cross-channel discipline

| Rule | Detail |
|---|---|
| Consumer / ZZP post on LinkedIn | Forbidden — belongs on Facebook |
| B2B post on Facebook | Forbidden — belongs on LinkedIn |
| Same photo, two channels | OK only with different copy and CTA per channel rules |
| Game post same week as LinkedIn M0-F | Forbidden — stagger channels |

---

## FB-R07 — Cadence

| Rule | Detail |
|---|---|
| Target | 1–3 posts / week |
| Launch series | 10 posts · 2–3/week · ~4 weeks — [content-themes.md](./content-themes.md) |
| Minimum gap | 1 day between posts |
| Reply to comments/messages | Same day when possible |

Solo operator rule: **consistency beats volume**. One good post with real photo beats three generic posts.

---

## FB-R08 — Publication checklist

Before posting:

- [ ] NL language
- [ ] FlexGrafik as offer — not Quietforge
- [ ] Real photo or wizard screenshot (see post Publish gate)
- [ ] One CTA only — wizard L1 unless custom project (L3)
- [ ] No investor or B2B automation pitch
- [ ] No technical architecture jargon
- [ ] Client permission for identifiable work
- [ ] No partner company name (erkapremium etc.)
- [ ] Chat claims = LIVE sales chat only — not full qualification agent

---

## FB-R09 — Operational claims (Mimaki · montagepartner)

| Claim | Allowed | Not allowed |
|-------|---------|-------------|
| Mimaki ecosolvent druk | UV-bestendig · weerbestendig · professionele kwaliteit | Invented dpi, speed, or certification numbers |
| Montagepartner | “Vakkundige montage via onze partner” | Naming erkapremium or third-party logo without permission |
| Mimaki in post | Quality proof alongside real project photo | Mimaki as sole claim without visual proof |

These are **operational** claims (Commander-verified production setup) — not in `proof.ts` code manifest. Do not add new machine specs without verification.

---

## FB-R10 — Consumer simplification footnote

When posts say **“3 stappen”** for the wizard:

- Marketing OK for Facebook ZZP audience.
- Do not contradict if asked: full journey = **9 UI screens · 7 business decision stages** (`proof.ts`).

---

*Established: 2026-06-30 · v1.0 · v2.0 ZZP rebrand: 2026-07-01*
