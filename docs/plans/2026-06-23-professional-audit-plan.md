# Professional Audit Set — Quietforge (services.flexgrafik.nl) + LinkedIn

**Version:** 1.0  
**Date:** 2026-06-23  
**Owner:** Norbert Wozniak  
**Executor:** Agency-style multi-discipline audit (Hermes + Cursor agents)  
**Status:** Canonical methodology — execution outputs live in `docs/audits/2026-06-23/`

Agency-grade audit program run as a multi-discipline engagement (Google/IBM review-board model). This document is the reusable methodology + deliverable spec.

---

## Critical seed finding (the reason this audit exists)

There is a brand fracture across channels:

- Live site `https://flexgrafik-services.vercel.app/` (target `services.flexgrafik.nl`): positions Norbert as **"Conversion Systems Architect / Quietforge"** — dark/amber product-company identity, 8-repo ecosystem, WhatsApp discovery, Automation Map.
- LinkedIn `linkedin.com/in/norbert-wozniak-172b76367`: positions FlexGrafik as **print on-demand, graphic design, vehicle wrapping (ZZP branding, Rotterdam)** — no mention of Quietforge or conversion-systems positioning.
- `flexgrafik.nl`: the print/branding brand.

The supplied URL `linkedin.com/in/flexgrafik-quietforge/` returns 404 to unauthenticated fetch; LinkedIn must be opened via authenticated browser (Playwright / chrome-devtools MCP).

This cross-channel mismatch is the headline "amateurszczyzna" to eliminate. The audit must produce one coherent identity, not a patch list.

---

## Phase 0 — Tooling setup (skills.sh + local)

Install from skills.sh:

```bash
npx skills add mastepanoski/claude-skills --skill ui-design-review
npx skills add mastepanoski/claude-skills --skill heuristics-audit
```

| Skill | Source | Role |
|-------|--------|------|
| `ui-design-review` | skills.sh / mastepanoski | Visual/brand consistency (10 dimensions) |
| `heuristics-audit` | skills.sh / mastepanoski | Nielsen 10 usability heuristics |
| `ux-audit` | local `~/.agents/skills/ux-audit/` | Live walkthrough, axe, perf budget |
| `frontend-design-ui-ux` | local `~/.agents/skills/` | UX/UI spec + design-token review |

**Security:** Treat every skills.sh package as untrusted third-party code. Read `SKILL.md` before running. Independent audits report ~12% of registry skills carry prompt-injection/exfiltration risk.

**Browser:** `user-chrome-devtools` MCP (authenticated session) or Playwright for LinkedIn + live site screenshots.

---

## Phase 1 — Discovery & asset inventory

### Live site routes (from `docs/strategy/site-map.md` §5)

| Route | Priority |
|-------|----------|
| `/` | P0 |
| `/results/` + 6 case routes | P0 |
| `/solutions/` + 5 solution routes | P1 |
| `/pricing/`, `/book-discovery/` | P0 |
| `/founder/`, `/about/`, `/trust/` | P1 |
| `/how-it-works/`, `/blog/` | P2 |

**Capture per route:** desktop screenshot (1440×900), mobile screenshot (390×844), page title, meta description, primary CTA label, console errors.

### LinkedIn capture (authenticated)

Headline, About, banner, avatar, Featured, Services, Experience, Activity/posts, vanity URL, contact CTAs.

### Reference channels

- `flexgrafik.nl` — print-brand baseline
- Strategy canon: `docs/strategy/marketing-strategy.md`, `site-map.md`, `conversion-pipeline.md`, `ui-ux-principles.md`
- Implementation: `DESIGN-SYSTEM.md`, `src/app/globals.css`, `src/content/conversion-copy.ts`, `src/content/proof.ts`

---

## Phase 2 — Discipline workstreams

Each reviewer scores 0–5 and logs findings with evidence (screenshot path + suspected source file).

| # | Discipline | Canon reference | Pass gate |
|---|------------|-----------------|-----------|
| 1 | Brand & positioning | `marketing-strategy.md §2` | Single label, anti-positioning active |
| 2 | Messaging & copy | `conversion-pipeline.md`, `conversion-copy.ts` | Problem→System→Effect, named objections |
| 3 | UX & interaction | `heuristics-audit`, `ux-audit` | console=0, 5xx=0, axe Critical/Serious=0 |
| 4 | Visual design system | `ui-design-review`, `DESIGN-SYSTEM.md` | Token compliance, intent colors, Lucide spec |
| 5 | Conversion/funnel | `conversion-pipeline.md §3–§7` | L3 CTA hierarchy, pricing visibility, WhatsApp path |
| 6 | Technical | `brain.md §9`, `AGENTS.md` | Lighthouse ≥95, JSON-LD, OG per route, sitemap |
| 7 | Social presence | Phase 3 matrix | LinkedIn ↔ site alignment |

### Scoring rubric (0–5)

| Score | Meaning |
|-------|---------|
| 5 | Agency-grade — no material gaps |
| 4 | Professional — minor polish only |
| 3 | Acceptable — visible drift, fixable in 1 sprint |
| 2 | Amateur signals — undermines trust |
| 1 | Critical gaps — blocks conversion |
| 0 | Broken / missing |

---

## Phase 3 — Cross-channel consistency matrix

Score each axis: **Aligned** / **Drift** / **Conflict**

| Axis | Site (Quietforge) | LinkedIn | flexgrafik.nl |
|------|-------------------|----------|---------------|
| Brand name | | | |
| Role/headline | | | |
| Value proposition & ICP | | | |
| Visual identity | | | |
| Proof/credibility | | | |
| Primary CTA | | | |
| Language | | | |
| Outbound links | | | |

### LinkedIn consistency checklist

- [ ] Headline = Conversion Systems Architect (or deliberate two-brand bridge)
- [ ] About matches site copy register + proof
- [ ] Banner + avatar = Quietforge visual identity (or defined shared system)
- [ ] Featured → services.flexgrafik.nl + key proof routes
- [ ] Services/skills reflect conversion-systems offer
- [ ] Vanity URL consistent (fix 404 slug)
- [ ] Post tone + pinned content reinforce one positioning

---

## Phase 4 — Findings & severity

| Severity | Definition | SLA |
|----------|------------|-----|
| **P0** | Credibility/trust killer — brand fracture, broken CTA, legal/compliance | Fix before any outbound |
| **P1** | High — conversion leak, major inconsistency | Fix within 1 week |
| **P2** | Medium — polish, secondary pages | Fix within 2 weeks |
| **P3** | Low — nice-to-have | Backlog |

**Finding template:**

```
ID: AUD-###
Severity: P0|P1|P2|P3
Channel: Site | LinkedIn | Cross-channel
What: [observable issue]
Why: [business impact]
Fix: [concrete action]
Source: [file/route]
Effort: S|M|L
```

**Owner decision required:** Single unified brand (Quietforge absorbs FlexGrafik) vs two-brand bridge (FlexGrafik print + Quietforge systems). Gates most LinkedIn fixes.

---

## Phase 5 — Deliverable set

```
docs/audits/2026-06-23/
├── 00-executive-summary.md
├── 01-consistency-matrix.md
├── 02-website-audit.md
├── 03-linkedin-audit.md
├── 04-remediation-backlog.md
├── 05-scorecards.md
└── assets/
    ├── site-desktop/
    ├── site-mobile/
    ├── linkedin/
    └── flexgrafik-nl/
```

---

## Guardrails

- AGENTS.md: EN client UI/code, PL owner comms, no secrets
- Do not change strategy canon during audit — document gaps only
- Handoff: `docs/handoffs/2026-06-23-professional-audit.md` at session end
- Prior audit findings: `docs/audit-findings (1).md` (2026-06-17) — cross-reference, do not duplicate

---

*Owner: Norbert Wozniak · Methodology locked: 2026-06-23*
