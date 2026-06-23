# LinkedIn Audit — Norbert Wozniak (v2)

**Date:** 2026-06-23  
**Revision:** v2 — full profile from owner (Services, About, FlexGrafik company block)  
**Profile URL:** https://www.linkedin.com/in/norbert-wozniak-172b76367  
**Score v1:** 1.5/5 (stale scrape — **invalid**)  
**Score v2:** **4.1 / 5**

---

## Methodology correction

v1 relied on public metadata fetch + Playwright login wall. That returned an **outdated About** (print/Mimaki only) and **did not include** LinkedIn Services section — the primary conversion surface.

v2 uses owner-provided profile content. Automated capture (`assets/linkedin/linkedin-profile.png`) remains login-wall only — **not evidentiary for content audit**.

---

## Profile headline

**Current:**
> Conversion Systems Architect @ Quietforge | Delivering Automated Solutions

| Criterion | Verdict |
|-----------|---------|
| Primary label = Conversion Systems Architect | ✅ |
| Quietforge named | ✅ |
| FlexGrafik in headline | ⚠️ Optional — bridge headline could add "& Founder FLEXGRAFIK" for search |
| NL SEO variant | ⚠️ Optional Phase 2 |

**Verdict:** ✅ **Professional — no rewrite needed.**

---

## About section (owner-provided)

**Quietforge paragraph:**
> At Quietforge, I serve as Conversion Systems Architect, deploying automation systems tailored for Dutch ZZP and SME owners. My work includes developing solutions such as inbox automation, self-service sales funnels, AI-driven web upgrades, and interactive lead-generation tools...

**FlexGrafik paragraph:**
> As the founder of FLEXGRAFIK, I built and operate a Netherlands-based digital ecosystem powered by multi-agent AI systems that I personally designed and implemented...

| Criterion | Verdict |
|-----------|---------|
| Quietforge = service arm | ✅ |
| FlexGrafik = built ecosystem | ✅ |
| ICP = Dutch ZZP/SME | ✅ |
| Product types listed | ✅ |
| Human oversight mentioned | ✅ |
| Matches `marketing-strategy.md` | ✅ |

**Verdict:** ✅ **Strong dual-brand About.** v1 finding "100% print" was **wrong**.

---

## Services — Quietforge (owner-provided)

**Positioning opener:**
> Quietforge is the consulting arm built on top of FLEXGRAFIK's proven systems — I deploy the same automation architecture that runs my own business for Dutch ZZP and SME owners.

**Product ladder:**

| Module | LinkedIn | Site canon | Match |
|--------|----------|------------|-------|
| Inbox Killer | ✅ HITL gate described | ✅ spearhead | ✅ |
| Sales Funnel Engine | ✅ self-service quoting | ✅ | ✅ |
| Web Upgrade + AI assistant | ✅ qualification-only, AVG note | ✅ advisory case | ✅ |
| Lead Magnet Game | ✅ branded interactive | ✅ | ✅ |
| Managed Automation | ✅ from €99/month | ✅ | ✅ |

**Process:**
> Every engagement starts with a paid Automation Map — 60–90 minute session... fixed-price... two weeks... human-in-the-loop non-negotiable

| Criterion | Verdict |
|-----------|---------|
| Automation Map €290 implied | ⚠️ Process described; explicit €290 not in pasted Services text |
| Fixed-price vs hourly | ✅ |
| Self-as-client proof | ✅ |
| Client reference (advisory/AVG) | ✅ Strong trust signal |
| Anti-hype positioning | ✅ Matches site tone |

**Services metadata:**

| Field | Value | Audit |
|-------|-------|-------|
| Availability | Remote or in person (Rotterdam) | ✅ |
| Pricing | Contact for pricing | ⚠️ **Drift** — site shows €290 + tiers |
| Reviews | No reviews yet | ⚠️ Invite past clients |
| Categories | Custom Software, Lead Gen, UX, Web Dev... | ✅ B2B systems mix |

**Verdict:** ✅ **Best-in-class Services copy** — primary LinkedIn conversion asset. Fix pricing line only.

---

## FLEXGRAFIK — company / overview block (owner-provided)

**Overview excerpt:**
> Built FLEXGRAFIK, a Netherlands-based print & design company, into an AI-driven digital ecosystem... multi-agent production platform, repository governance, self-service sales configurator (200+ SKUs), inbox automation, lead-generation tools while running full print operations.

**Detailed proof bullets:**
- Multi-agent orchestration (FastAPI + LangGraph), 8-repo stack
- VCMS governance, zero-conflict target
- 9-step Wizard, 200+ SKUs, zero phone calls
- Inbox agent, 142 messages/scan, human approval gate
- 5-level lead-gen game
- Full print operations (wraps, signage) while building software

| Criterion | Verdict |
|-----------|---------|
| FlexGrafik = live ops, not demo | ✅ **Exactly owner intent** |
| Metrics match site `proof.ts` | ⚠️ Verify 142 msgs, 200 SKUs on site |
| Self-taught founder arc | ✅ Strong credibility |
| Investor/partner CTA | ⚠️ Different audience than services site — OK on LinkedIn |

**Verdict:** ✅ **This is the proof layer LinkedIn does better than the site.**

---

## Gap analysis: LinkedIn vs site

| Dimension | LinkedIn | Site | Winner / action |
|-----------|----------|------|-----------------|
| Names FlexGrafik explicitly | ✅ | ⚠️ generic "live operation" | **Bring to site** |
| Product ladder detail | ✅ Services | ✅ solutions pages | Tie |
| Pricing transparency | ⚠️ Contact | ✅ €290+ | **Fix LinkedIn** |
| Ecosystem metrics | ✅ 142 msgs, 200 SKUs | partial | **Sync site metrics** |
| Visual Quietforge brand | unknown | ✅ dark/amber | Banner on LinkedIn |
| JSON-LD link back | — | ❌ no sameAs | **Fix site code** |

---

## Remaining LinkedIn improvements (not rewrites)

| ID | Item | Priority | Effort |
|----|------|----------|--------|
| AUD-L09 | Services pricing → "Automation Map from €290" + link `/pricing/` | P1 | S |
| AUD-L10 | Invite 2–3 clients for Services reviews | P2 | M |
| AUD-L04 | Featured: services.flexgrafik.nl + Automation Map PDF | P2 | S |
| AUD-L11 | Pin post: Quietforge systems intro (balance print activity) | P2 | S |
| AUD-L12 | Banner: Quietforge dark+amber + URL | P3 | S |
| AUD-X02 | Vanity URL: claim or stop using dead slug | P2 | S |
| AUD-L01 | Site JSON-LD sameAs → this profile | P2 | S |

---

## Removed findings (v1 errors)

| v1 finding | Status |
|------------|--------|
| Headline = Eigenaar FlexGrafik | **RETRACTED** |
| About 100% print | **RETRACTED** |
| Services = print only | **RETRACTED** |
| P0 full LinkedIn rewrite | **CANCELLED** |
| Not ready for outbound | **RETRACTED** — ready after site parity + 404 fix |

---

## LinkedIn audit verdict (v2)

| Category | Score |
|----------|-------|
| Positioning alignment | 4.5/5 |
| Services / funnel copy | 4.5/5 |
| FlexGrafik proof narrative | 4.5/5 |
| Pricing / CTA consistency | 3.0/5 |
| Social proof (reviews) | 2.5/5 |
| Visual / Featured | 3.0/5 (not fully captured) |
| Technical link to site | 2.5/5 |
| **Overall** | **4.1/5** |

**Status:** ✅ **Professional.** Tune pricing + site parity — not a identity crisis.

---

## Appendix — owner-provided source text

Stored for audit trail. See owner message 2026-06-23 for full Quietforge Services + FLEXGRAFIK overview text.

---

*v2 supersedes v1 LinkedIn section in all audit docs · Capture limitation documented in `00-executive-summary.md`*
