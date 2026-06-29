---
status: "[ACTIVE]"
title: "LinkedIn Strategy — Quietforge B2B"
owner: "Norbert Wozniak"
updated: "2026-06-29"
version: "1.0 — channel split"
classification: "L3 — LinkedIn strategy"
---

# LinkedIn Strategy

---

## 1. Channel purpose

LinkedIn is the **primary B2B acquisition channel** for Quietforge. It exists to:

1. Position Norbert as **Conversion Systems Architect** for NL small businesses
2. Show **production proof** via FlexGrafik (live ops, not demo)
3. Drive qualified traffic to **Automation Map** (€290) → `quietforge.flexgrafik.nl/book-discovery/`

**Not for:** selling print services, investor fundraising, consumer products, freelancer gigs.

---

## 2. Two-brand model on LinkedIn

| Brand | Role on LinkedIn |
|-------|------------------|
| **Quietforge** | Primary identity — sells B2B conversion systems |
| **FlexGrafik** | Proof layer only — "this system runs in my own business" |

**Rule:** Every mention of FlexGrafik on LinkedIn must serve as **production evidence**, never as a consumer offer. The buyer must understand: *Norbert built this for his own print business first, now deploys the same pattern for other SMBs.*

---

## 3. Target audience (ICP)

| Attribute | Target |
|---|---|
| Geography | Netherlands; English-friendly SMB |
| Entity | ZZP, small BV, professional services, specialist e-commerce |
| Pain | Inbox chaos, manual quotes, weak lead capture, scattered tools, no repeatable sales process |
| Budget signal | Willing to pay €290 for strategic mapping; project budget normally €1,200+ |
| Decision style | Wants proof before call; values safety and control |
| Not for | Pure brochure site, sub-€199 impulse buyers, enterprise procurement |

Full ICP: [`../marketing-strategy.md`](../marketing-strategy.md) §3

---

## 4. Core question

Every post must help the buyer answer:

> **Can Norbert design and deploy a system that improves my business?**

Not: *"Can he build a nice website?"* or *"Is he looking for investors?"*

---

## 5. Message hierarchy

```text
Problem → System → Effect
```

Every post follows this structure:

1. **Hook** — NL SMB pain (1–2 lines, no tech jargon)
2. **System** — what was built (outcome-first, no repo dump)
3. **Proof** — 1 number or screenshot + LIVE/PARTIAL status
4. **Effect** — what changes for the business
5. **CTA** — in first comment: Book Automation Map + URL + UTM

---

## 6. Content pillars

| Pillar | Proportion | Purpose |
|--------|-----------|---------|
| **P1 — Proof in production** | 40% | Wizard, inbox, Jadzia, Agent OS — live systems with screenshots |
| **P2 — Qualification / objections** | 25% | HITL, EU/AVG, "not a chatbot", €290 as filter |
| **P3 — Founder / builder** | 20% | Human story without funding ask |
| **P4 — Process / method** | 15% | Map → Architect → Build → Verify → Handover |
| **P5 — Investor** | 0% | Deferred — [`../gtm/08-investor-track.md`](../gtm/08-investor-track.md) |

### Pillar rules

- Never 2× P3 (founder) in a row — always sandwich with P1 or P2
- P1 must include visual proof (screenshot, metric, diagram)
- P2 must address a specific objection from `/trust/` or pricing
- P4 must show process safety, not just speed

Full pillars: [`../gtm/05-content-pillars.md`](../gtm/05-content-pillars.md)

---

## 7. Buyer terminology

Business outcome first. System name second. Tech stack third.

| Weak / too technical | Stronger framing |
|---|---|
| Jadzia COI | Know which leads, orders and messages need action first — powered by Jadzia COI |
| VCMS | Governance layer that catches drift before deploy |
| Agent OS | Fixed agent workflow for build, test and review |
| LangGraph / MCP / OpenRouter | Mention only in details, never as the headline value |
| 8 repos | One supervised system with 8 production-touching parts |

---

## 8. CTA ladder

| Level | Action | URL |
|-------|--------|-----|
| **L3 (primary)** | Book Automation Map | `/book-discovery/` |
| **L2 (secondary)** | See live systems | `/results/` |
| **L1 (exploration)** | How it works | `/how-it-works/` |

**CTA placement rule:** Always in the **first comment** within 2h of publishing — never in the post body (algorithm penalty).

---

## 9. Comment CTA template

```text
If this matches how your business runs today — start with a paid Automation Map (€290, credited toward your build):
https://quietforge.flexgrafik.nl/book-discovery/?utm_source=linkedin&utm_medium=organic&utm_campaign=<slug>

Live systems: https://quietforge.flexgrafik.nl/results/
```

Replace `<slug>` with post identifier: `inbox-killer`, `wizard-proof`, `lead-magnet`, etc.

---

## 10. UTM strategy

All links from LinkedIn to quietforge:

`?utm_source=linkedin&utm_medium=organic&utm_campaign=<post_slug>`

| Source | `utm_campaign` example | Landing |
|--------|----------------------|---------|
| Post P1 Inbox | `inbox-killer` | `/` or `/book-discovery/` |
| Post P1 Wizard | `wizard-proof` | `/results/` |
| Featured slot 1 | `featured-map` | `/book-discovery/` |
| Featured slot 2 | `featured-results` | `/results/` |
| Services click | `services-map` | `/book-discovery/` |

---

## 11. Profile structure (strategic)

| Element | Job | Quietforge | FlexGrafik |
|---------|-----|------------|------------|
| Banner | Identity + LOS diagram | Primary visual | Ecosystem proof in diagram |
| Headline | SEO + first impression | Architect @ Quietforge | Not "drukarnia" in headline |
| About | Dual-brand story | B2B offer | Founder + live stack |
| Featured | Conversion | Quietforge links + Map + case studies | Owner ecosystem as proof |
| Activity / feed | Reach + narrative | B2B pillar posts | Only as case / screenshot |
| Services | Product ladder | Map + builds | Self-as-client framing |

### Featured slots (recommended)

| Slot | URL | Label |
|------|-----|-------|
| 1 | `/book-discovery/` | Book Automation Map — €290 |
| 2 | `/results/` | Live systems on FlexGrafik |
| 3 | `/how-it-works/` | How it works |
| 4 (opt.) | `/artefacts/automation-map-sample.pdf` | Sample Automation Map |

**Rule:** LinkedIn Featured = **mirror** homepage Featured strip — same order, same URLs.

---

## 12. Homepage sync

Every LinkedIn post with CTA in comments must land on a homepage section that **matches the post's message** within 5 seconds on mobile.

**5-second test:** Open URL from comment on mobile — can you see:
- (a) What Quietforge sells
- (b) Where FlexGrafik proves it
- (c) Where to click for Map

If any answer is "no" — do not publish the post until homepage is fixed.

---

## 13. Investor track (deferred)

**0% investor content on main feed** until all gates are met:

| Gate | Requirement |
|------|------------|
| G1 | Min. 8 Track A posts with quietforge CTA |
| G2 | Feed B2B ≥ 80% slots P1–P4 (rolling 4 weeks) |
| G2b | Homepage sync complete (dual-brand, Featured, de-jargon) |
| G3 | Commercial traction ≥ 3 metrics |
| G4 | Investor deck / one-pager ready |
| G5 | Conscious Commander decision to start series |

Until gates met: investor conversations = **DM only**.

---

## 14. Metrics of success

| Metric | Baseline (2026-06-29) | Direction |
|--------|----------------------|-----------|
| B2B readiness score | 2.4 / 5 | ≥ 3.5 |
| Posts with quietforge CTA | 0% | 100% of new posts |
| Feed mix investor vs B2B | Investor-heavy | ≥ 80% P1–P4 |
| Homepage conversion (audit) | 6.5 / 10 | ≥ 8 / 10 |
| Homepage ↔ LI Featured sync | 0% | 1:1 mirror |
| Connections | 16 | Trend up |
| Map bookings attributed to LI | UNKNOWN | ≥ 1 |

---

*Established: 2026-06-29 · Repo: services (quietforge.flexgrafik.nl)*
