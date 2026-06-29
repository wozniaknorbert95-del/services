---
status: "[ACTIVE]"
title: "LinkedIn Hard Rules — Quietforge B2B"
owner: "Norbert Wozniak"
updated: "2026-06-29"
version: "1.0 — channel split"
classification: "L3 — LinkedIn hard rules (enterprise-grade)"
---

# LinkedIn Hard Rules

> These are **non-negotiable** rules for all LinkedIn activity. Violation = post deletion and strategy review.

---

## LI-R01 — Identity integrity

| Rule | Detail |
|------|--------|
| Primary label | **Conversion Systems Architect** — never "web designer", "AI expert", "freelancer" |
| Company field | **Quietforge** |
| FlexGrafik in headline | **Forbidden** — appears only in About and Experience sections |
| Banner | Must show Quietforge identity + LOS/8-repo diagram (audit: 5/5 — keep) |
| Self-description | First person for founder credibility; "we" only for delivery partnership |

---

## LI-R02 — Single CTA discipline

| Rule | Detail |
|------|--------|
| One primary action per post | **Book Automation Map** (€290) |
| CTA location | **First comment only** — within 2h of publishing |
| CTA in post body | **Forbidden** — algorithm penalty |
| Link in post body | **Forbidden** — algorithm penalty |
| Secondary CTA | `/results/` (live systems) — mention only if relevant to post |
| Multiple CTAs | **Forbidden** — one post, one action |

---

## LI-R03 — Language and tone

| Rule | Detail |
|------|--------|
| Post language | **EN only** — no Polish on public feed |
| Tone | Professional, direct, founder voice — no agency-speak |
| "Agency" as self-description | **Forbidden** |
| Anonymous "we" in founder story | **Forbidden** |
| First person | Required for founder credibility |
| "We" usage | Only for delivery partnership: "We map your process. I design the system." |

---

## LI-R04 — Message structure (mandatory)

Every post must follow:

```text
1. Hook — NL SMB problem (1–2 lines, zero tech jargon)
2. System — what was built (outcome-first)
3. Proof — 1 number or screenshot + LIVE/PARTIAL/DEMO status
4. Effect — what changes for the business
5. CTA — in first comment (LI-R02)
```

**Forbidden patterns:**
- Feature list without problem context
- Tech stack in hook (LangGraph, MCP, OpenRouter)
- Repo dump ("8 repos", terminal mock)
- Investor language on B2B feed

---

## LI-R05 — Proof honesty gate

| Must say | Never say |
|----------|-----------|
| "Wizard checkout LIVE on zzpackage" | "System 80% complete" |
| "Jadzia COI Phase A+B LIVE; Procurement Brain PLANNED" | "Almost finished, 2 months left" |
| "161 SKUs" (site SSoT) | "200+ SKUs" if outdated |
| LIVE / PARTIAL / DEMO / PLANNED labels | Fake testimonials, fake logos |
| Real screenshots and metrics | Unlabelled demo fixtures |

**Status labels (immutable):**

| Label | Meaning |
|-------|---------|
| LIVE | Running in production |
| PARTIAL | Useful parts live; planned parts named openly |
| PILOT | Flow exists but not full production proof |
| DEMO | Fixture or illustrative asset |
| PLANNED | Not live; must not be sold as live |

---

## LI-R06 — FlexGrafik usage rule

| Allowed | Forbidden |
|---------|-----------|
| "In my NL print business, this system handles X" | "Order print services at flexgrafik.nl" |
| Screenshot of wizard/inbox/Jadzia from FlexGrafik ops | Consumer product offers (magnesy, oklejenie) |
| "Same stack I run daily — not a demo" | FlexGrafik as primary offer on LinkedIn |
| Link to `/results/` showing FlexGrafik proof | Link to flexgrafik.nl consumer pages |

---

## LI-R07 — Pillar proportion enforcement

| Pillar | Target | Enforcement |
|--------|--------|-------------|
| P1 — Proof | 40% | Must include visual proof |
| P2 — Objections | 25% | Must address specific objection |
| P3 — Founder | 20% | Max 1 per 4-post block |
| P4 — Process | 15% | Must show process safety |
| P5 — Investor | 0% | **Forbidden** until gates met |

**Anti-pattern:** Never 2× P3 (founder) in a row. Always sandwich with P1 or P2.

---

## LI-R08 — Hashtag discipline

| Rule | Detail |
|------|--------|
| Maximum | **3 hashtags** per post |
| Allowed | `#B2B`, `#automation`, `#buildinpublic`, problem-specific tags |
| Forbidden | `#investorready`, `#techstartup`, `#indiehackers`, tag spam |
| Placement | End of post body (before CTA comment) |

---

## LI-R09 — Homepage sync gate

Before publishing any post with CTA:

1. Open the landing URL from the comment on **mobile** (375px)
2. Verify within **5 seconds**:
   - (a) What Quietforge sells is clear
   - (b) Where FlexGrafik proves it is visible
   - (c) Where to click for Map is obvious
3. If any check fails — **do not publish**

**Additional checks:**
- Post language matches landing page language (EN)
- Problem→System→Effect in post = same beat on landing
- Dual-brand visible on landing (QF sell / FG proof)
- Book Discovery copy matches post pricing (€290)

---

## LI-R10 — Pricing integrity

| Rule | Detail |
|------|--------|
| Automation Map price | **€290, credited toward build** — never "free", "contact for pricing" |
| Project pricing | Reference [`../marketing-strategy.md`](../marketing-strategy.md) §8 — never invent numbers |
| "From €99/mo" for Managed Automation | **Forbidden** — use €349–€890/mo |
| Price consistency | LinkedIn Services = homepage `/pricing/` = post copy |

---

## LI-R11 — Investor content ban (until gates)

| Rule | Detail |
|------|--------|
| Investor posts on main feed | **0% until all gates met** (LI-Strategy §13) |
| #investorready hashtag | **Forbidden** |
| "Seeking investors" in Services | **Forbidden** |
| Capital ask in post body | **Forbidden** |
| Investor conversations | DM only until gates met |
| Mixing investor + B2B in one post | **Forbidden** |

---

## LI-R12 — Post frequency and timing

| Rule | Detail |
|------|--------|
| Cadence | **2 posts per week** |
| Minimum gap | 2 days between posts |
| Comment response | Within 2h of publishing |
| CTA comment timing | Within 2h of publishing |
| No posting | If homepage fails 5-second test (LI-R09) |

---

## LI-R13 — Anti-patterns (forbidden behaviors)

| Anti-pattern | Why forbidden |
|--------------|---------------|
| Selling print on LinkedIn | Wrong ICP — use Facebook for consumer |
| Deleting the 4/4 founder series | History builds trust — pivot forward |
| "80% complete" claims | Proof honesty violation (LI-R05) |
| LangGraph / MCP in hook | Tech jargon before business value |
| Posting in Polish | Audience is EN-friendly NL SMB |
| Reposting consumer video from Facebook | Wrong audience, wrong context |
| Two investor posts in a week | Dilutes B2B priority |
| Feature list without problem | No buyer resonance |
| "Free discovery call" | Devalues €290 Map |
| Consumer print as hero CTA | Confuses B2B positioning |

---

## LI-R14 — UTM enforcement

| Rule | Detail |
|------|--------|
| All links to quietforge | Must include UTM parameters |
| Pattern | `?utm_source=linkedin&utm_medium=organic&utm_campaign=<slug>` |
| Slug format | Kebab-case post identifier: `inbox-killer`, `wizard-proof` |
| Tracking | GA4 property: `G-LY0E7MW0HF` (Quietforge only) |

---

## LI-R15 — Post publication checklist

Before hitting "Post":

- [ ] Hook = SMB problem (not technology)
- [ ] Effect line present
- [ ] LIVE/PARTIAL/DEMO status if mentioning a module
- [ ] CTA prepared for first comment (not in body)
- [ ] UTM slug set on all URLs
- [ ] Homepage 5-second test passed (LI-R09)
- [ ] Pricing matches [`../marketing-strategy.md`](../marketing-strategy.md) §8
- [ ] Max 3 hashtags
- [ ] EN language only
- [ ] Track A only — no investor ask
- [ ] No forbidden anti-patterns (LI-R13)

---

*Established: 2026-06-29 · Repo: services (quietforge.flexgrafik.nl)*
