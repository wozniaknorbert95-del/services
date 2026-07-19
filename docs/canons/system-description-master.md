---
status: "[ACTIVE — pending Commander HITL]"
title: "FlexGrafik × Quietforge — System Description Master"
owner: "Norbert Wozniak (Dowódca)"
updated: "2026-07-19"
version: "1.1"
classification: "L0 — Canonical system narrative (copy SSoT)"
language: "EN (public); PL notes in §19"
references:
  - "./system-description-research-notes.md"
  - "./vision-system.md"
  - "../../flexgrafik-meta/docs/core/living-system-architecture.md"
  - "../../flexgrafik-meta/docs/core/integration-contracts.md"
  - "../../flexgrafik-meta/docs/core/as-is-inventory.md"
  - "../operations/artefacts/2026-07-ecosystem-truth-matrix.md"
  - "../operations/artefacts/2026-07-commercial-packaging-map.md"
commander_hitl: "[x] Approved for public use (LinkedIn, site, investor) — Commander green-light 2026-07-19 (Truth × Offer sync)"
---

# FlexGrafik × Quietforge — System Description Master

> **Purpose:** Single canonical description of the full system — depth for architects, investors, and derivative copy (LinkedIn, site, diagrams).  
> **Rule:** Every LIVE claim has evidence. Commercial revenue metrics are Commander-only ([`traction-honesty-framework.md`](../../flexgrafik-meta/docs/core/traction-honesty-framework.md) §2.2).

---

## §0 Executive layers

### §0a — One sentence (headline)

I design governance-first conversion and automation systems for Dutch small businesses — built on a live eight-repo Living Operating System with human approval on every important action, proven first inside my Netherlands-registered company FlexGrafik and deployed for clients through Quietforge.

### §0b — One paragraph (LinkedIn About seed, ~600 chars)

I help ZZP and small businesses in the Netherlands replace manual quotes, inbox chaos, and unqualified traffic with **supervised conversion systems** — not chatbots or brochure sites. My stack connects acquisition (portal, game, wizard), operations (orders, leads, analytics), engineering (Agent OS with review gates), and governance (VCMS scans across eight repos). The system proposes; **you approve** before anything sends, publishes, or deploys. I run this architecture inside **FlexGrafik**, my own print and design business, before offering the same patterns through **Quietforge** — starting with a paid Automation Map (€290), then scoped builds and optional maintenance.

### §0c — One page (founder / investor intro)

FlexGrafik is a Wizard-first, AI-operated branding business for Dutch ZZP in construction and trades. Revenue flows through a self-service configurator with open pricing and Mollie checkout (target AOV €400–700, minimum checkout €199, gross margin ≥60%). Around that Cash Engine sits a **Living Operating System (LOS)**: applications that customers touch, a governance layer that keeps documentation and code aligned, an operations brain (Jadzia COI) that senses business signals and proposes actions, and an engineering factory (Agent OS) that implements verified changes behind human-in-the-loop gates.

Quietforge is the **service layer** on top: Conversion Systems Architect for SMB clients who need the same discipline — qualification paths, inbox triage, quote automation, and controlled AI — without building a full ecosystem from scratch. Engagements start with an Automation Map, proceed to one or more productized modules, and end with handover documentation and optional Managed Automation.

This document describes **what exists today**, **what is on the roadmap**, and **how the pieces connect** — without inflated traction claims.

---

## §1 Problem → System → Effect

### Problem (SMB)

Dutch small businesses lose time and revenue when:

- Quotes happen by email ping-pong with no structured path to payment.
- The inbox mixes leads, invoices, and noise — opportunities slip through.
- Websites attract visitors but do not qualify or route them.
- Automation projects remove human control and create risk.

### System (what Quietforge deploys)

A **supervised conversion system**: bounded AI and automation wired into clear buying paths, with governance (scan, contracts, handoffs), operations intelligence (orders, leads, analytics — expanding), and engineering execution (Agent OS pipeline) — all under **human-in-the-loop** rules.

### Effect (outcomes)

- Fewer missed leads and faster quoting.
- Repeat admin reduced; humans stay in control of sends and deploys.
- A documented, evolvable stack — not a one-off integration held together in one inbox.

---

## §2 Two-brand model

| Brand | Asset | Audience | Role |
|-------|-------|----------|------|
| **FlexGrafik** | Wizard, portal, game, ops stack | NL ZZP consumer (branding/print) | **Live proof** — revenue + operational laboratory |
| **Quietforge** | `quietforge.flexgrafik.nl` (repo `services`) | SMB B2B, tech-curious buyers | **Deploy layer** — Map → build → handover |

**Rules:**

- Quietforge is **not** a demo — it deploys patterns proven on FlexGrafik.
- FlexGrafik is **not** the primary LinkedIn offer — it is the operating proof.
- Consumer print marketing stays on Facebook / flexgrafik.nl; B2B systems on LinkedIn / Quietforge.

**Commercial entry (Quietforge):**

| Step | Offer | Price (public) |
|------|-------|----------------|
| 1 | Automation Map (60–90 min working session) | €290 (credited toward build) |
| 2 | Scoped module build | from €1,200+ per module |
| 3 | Managed Automation (optional) | from €349/mo |

Source: [`pricing.ts`](../../src/content/pricing.ts), [`profile-copy.md`](../strategy/linkedin/profile-copy.md).

---

## §3 Living Operating System (LOS)

### Definition

**Living** = a continuous, measurable loop — **not** full autonomy:

```text
Sense → Interpret → Propose → Verify → Decide (0% AI) → Act → Learn
```

- **Sense:** read-only signals (GA4, orders, scans, game events).
- **Interpret / Propose:** AI suggests anomalies, briefs, kaizen (max 3/week).
- **Verify:** Agent OS or trusted sources produce evidence.
- **Decide:** Commander HITL — always human for strategic and deploy decisions.
- **Act:** bounded nodes and approved engineering tasks.
- **Learn:** handoffs, kaizen log, doc updates.

Upstream: [`living-system-architecture.md`](../../flexgrafik-meta/docs/core/living-system-architecture.md).

### Five layers (+ Memory)

| Layer | Function | FlexGrafik components |
|-------|----------|------------------------|
| **Sense** | Read-only inputs | GA4, WC events, game telemetry, VCMS scan |
| **Think** | Cross-module synthesis | Jadzia-Strategist (TO-BE weekly brief) |
| **Orchestrate** | Decompose + delegate | Jadzia-Planner, Agent OS, VCMS |
| **Act** | Bounded writes | order/lead/analytics nodes, Agent OS coder |
| **Guard** | Always on | global-rules, Kaizen filter, HITL, Zasada 11 |
| **Memory** | Truth persistence | jadzia.db, handoffs, meta docs |

---

## §4 Three brains

| Brain | Systems | Operational question |
|-------|---------|----------------------|
| **Governance** | VCMS + flexgrafik-meta | Does documentation match code? Are conflicts visible before deploy? |
| **Operations** | Jadzia COI | What is happening in the business? What should we do next? |
| **Engineering** | Agent OS + Mission Control | How do we implement safely? Do tests pass? Who approves the diff? |

### Governance brain

VCMS scans eight registered product repos, generates ecosystem map and conflict reports (target: **Conflicts: 0**), indexes knowledge for KODA assistant. Meta holds constitution: global rules, agent hierarchy, integration contracts, investor docs.

### Operations brain (Jadzia COI)

**Target:** Chief Operating Intelligence — orders, leads, analytics, content calendar, weekly strategy brief, Kaizen guard.

**AS-IS:** FastAPI on EU VPS; WP SSH agent; sales chat widget; worker queue with HITL; Phase A+B nodes (orders, leads, analytics) deployed; strategist automation PLANNED.

**Critical honesty:** Jadzia is **not** a chatbot brand — it is the operations layer. *Inbox Killer* is a **Quietforge B2B product** that may use similar patterns; it is not synonymous with the entire `jadzia-core` repository.

### Engineering brain

Agent OS runs a **five-node LangGraph pipeline** (Planner → Coder → Tester → Reviewer → Summarizer) with hybrid execution: VPS orchestration + Local Runner on Commander PC for git/code work. Mission Control (`os.flexgrafik.nl`) provides HITL approve/reject before changes ship.

---

## §5 Modules (eight repos + Quietforge)

*Narrative order: revenue first, then acquisition, trust, operations, engineering, governance, constitution, observability, service layer.*

---

### §5.1 zzpackage.flexgrafik.nl — Wizard Cash Engine

#### §5.1.1 North Star

The only purchase path in the FlexGrafik ecosystem — self-service branding packages from configuration to Mollie payment.

#### §5.1.2 For SMB clients (Quietforge deliverable)

Guided quote and checkout flow: prospects configure scope, see open pricing, and pay without phone ping-pong — with optional designer handoff for complex jobs.

#### §5.1.3 In the FlexGrafik ecosystem

Cash Engine; product SSoT; hosts widget chat API proxy used by portal; WC order source for Jadzia order ingestion.

#### §5.1.4 AS-IS LIVE

| Capability | Evidence |
|------------|----------|
| 9-screen SPA configurator | `wizard-1-3.js` steps array (Intro + 7 categories + Checkout) |
| 7 business decision stages | Steps 1–7: Fundament → Premium |
| 167 active SKU catalog | `product-master-table.json` (`active=True`; 175 rows total, 2026-07-19) |
| WooCommerce + Mollie checkout | Production URL; COD disabled; Gate D real-paid parked |
| Customer chat widget API | `POST /api/v1/widget/chat` (INT-001) |
| Order webhook to Jadzia | INT-002 LIVE — ops ledger sync (not revenue proof) |
| Design Agent INSPIRE (PARTIAL) | Intake → confirmed brief → Standard/Premium mockups → Wizard handoff — `/voertuigreclame-ontwerp/` |

**Demo:** https://zzpackage.flexgrafik.nl · INSPIRE: https://zzpackage.flexgrafik.nl/voertuigreclame-ontwerp/

#### §5.1.5 TO-BE / PLANNED

- INSPIRE sales persona GO (chat quality gate) before presenting as polished consultant.
- Deeper Jadzia revenue analytics loop (AOV alerts in weekly brief) after Gate D.
- Graphics/SKU completion per product roadmap.

#### §5.1.6 Tech stack

WordPress + `flexgrafik-wizard-theme`; Vanilla JS SPA; JSON product master; WooCommerce; Mollie; GHA deploy (manual trigger, Zasada 11).

#### §5.1.7 Integrations

INT-001 (chat), INT-002 (orders), INT-003 (game coupons inbound), INT-005 (portal CTA inbound).

#### §5.1.8 Public metrics (verified)

| Metric | Value |
|--------|-------|
| SPA screens | 9 |
| Business stages | 7 |
| SKUs (active) | 167 |
| Readiness | ~90% LIVE |
| INSPIRE Design Agent | PARTIAL (supervised lab proof) |

#### §5.1.9 Scope lock (does NOT)

- Classic product listing shop.
- Post-order fulfillment UI (Jadzia/ops).
- Portal brand content hosting.

#### §5.1.10 Portfolio proof

https://quietforge.flexgrafik.nl/results/sales-funnel/

---

### §5.2 app.flexgrafik.nl — Lead Magnet Game

#### §5.2.1 North Star

Experience-first lead capture for Dutch ZZP — play, earn tiered rewards, bridge to Wizard with coupon attribution.

#### §5.2.2 For SMB clients

Gamified lead system: registration gate, engagement loop, reward ladder, and measurable handoff to self-service quoting.

#### §5.2.3 In the FlexGrafik ecosystem

Top-of-funnel engagement; GA4 telemetry; lead records to Jadzia; coupon deep links to Wizard.

#### §5.2.4 AS-IS LIVE

| Capability | Evidence |
|------------|----------|
| Bouwpas + Turnstile gate | Production app |
| Canvas gameplay + PWA | React 19 + Vite |
| 4-tier reward ladder | wizardBridge, GAME10 minimum |
| Leaderboard seasons | WP `fg-game-api.php` |
| GA4 events | Analytics integration |
| Lead sync to Jadzia | INT-004 LIVE — `POST /api/v1/leads` |
| Wizard coupon bridge | INT-003 LIVE — `wizardBridge.ts` |

**Demo:** https://app.flexgrafik.nl

#### §5.2.5 TO-BE / PLANNED

- INT-013 growth attribution (TikTok-first loop per `growth-engine-spec.md`).
- Deeper COI weekly creative/CAC proxy reporting.

#### §5.2.6 Tech stack

React 19, Vite 6, TypeScript, custom Canvas, PWA SW v4, WP REST backend, Vitest + Playwright.

#### §5.2.7 Integrations

INT-003, INT-004; CORS to Jadzia configured.

#### §5.2.8 Public metrics

| Metric | Value |
|--------|-------|
| Game acts / levels | 5 (Beginner → Boss) |
| Readiness | ~85% LIVE |

#### §5.2.9 Scope lock

- No direct checkout (Wizard-only).
- No consumer print catalog.

#### §5.2.10 Portfolio proof

https://quietforge.flexgrafik.nl/results/lead-magnet/

---

### §5.3 flexgrafik.nl — Trust Portal

#### §5.3.1 North Star

Brand trust and SEO entry — portfolio, process, blog — routing visitors to Wizard (primary) and Game (secondary).

#### §5.3.2 For SMB clients

Website conversion upgrade: clear CTAs, mobile-ready trust content, supervised chat — not a static brochure.

#### §5.3.3 In the FlexGrafik ecosystem

Authority surface; asset sync from zzpackage; homepage chat widget (shared sales agent today).

#### §5.3.4 AS-IS LIVE

| Capability | Evidence |
|------------|----------|
| Dark Premium WP theme | `flexgrafik-child` |
| Wizard + Game CTAs | `front-page.php` |
| Asset sync from zzpackage | Python sync scripts |
| Chat widget UI | `chat-widget.js` → INT-001 proxy (**generic sales**, not industry qualification) |

**Demo:** https://flexgrafik.nl

#### §5.3.5 TO-BE / PLANNED

- **Portal Qualification Agent** (INT-012) — industry Q&A → SKU recommendation → Wizard deep link (post-angel).
- SEO/blog playbook; finalize `brain.md`.

#### §5.3.6 Tech stack

WordPress, Astra child, custom PHP templates, Elementor removed from prod (2026-05-18).

#### §5.3.7 Integrations

INT-005 (outbound CTAs); INT-001 (chat AS-IS); INT-012 PLANNED.

#### §5.3.8 Public metrics

Readiness ~75% LIVE.

#### §5.3.9 Scope lock

- No prices or checkout on portal (Wizard-only).
- No gameplay hosting.

#### §5.3.10 Portfolio proof

https://quietforge.flexgrafik.nl/solutions/web-upgrade/

---

### §5.4 jadzia-core — Chief Operating Intelligence (COI)

#### §5.4.1 North Star

Business operating intelligence — sense cross-module signals, propose actions, delegate to nodes and Agent OS, never bypass Commander HITL.

#### §5.4.2 For SMB clients

Operations layer behind conversion systems: lead and order truth, analytics snapshots, content calendar drafts, inbox-style triage patterns (Inbox Killer product) — all with approval gates.

#### §5.4.3 In the FlexGrafik ecosystem

Central ops API on EU VPS; `jadzia.db` SQLite; bridges WC, game, GA4, Telegram, WP SSH; **not** the LangGraph engineering pipeline (that is Agent OS).

#### §5.4.4 AS-IS LIVE

| Capability | Evidence |
|------------|----------|
| FastAPI + health | `:8000` VPS |
| Sales chat widget | `customer_agent.py`, INT-001 |
| WP SSH agent + rollback | `ssh_orchestrator.py`, Telegram |
| Worker queue + HITL | `api/routes/worker.py` |
| Order ingestion | `order_node.py`, INT-002 LIVE |
| Lead ingestion | `lead_node.py`, INT-004 LIVE |
| GA4 analytics snapshot | `analytics_node.py`, INT-009 LIVE |
| Content calendar | `content_calendar_node.py`, INT-010 LIVE |
| Weekly COI brief (HITL drafts) | `brief_node.py` LIVE |
| COI Commander cockpit | `commander-ui/` + commander API LIVE |
| Facebook publish HITL | INT-011 text/photo/video LIVE |
| Design Agent INSPIRE host | `agent/inspire/` LIVE (sales UX PARTIAL) |
| Portal qualification API | INT-012 API LIVE · portal UI still generic (PARTIAL E2E) |
| Token/cost tracking | `api/routes/costs.py` |

#### §5.4.5 TO-BE / PLANNED

- Jadzia-Strategist auto-act (brief exists; no autonomous execution).
- Jadzia-Planner → Agent OS spawn (INT-006 full automation).
- Portal qualification **UX** rollout on flexgrafik.nl (API already LIVE).
- Payment read-only node; procurement brain Phase C.
- Marketing scorecard as public Quietforge proof (Commander HITL on CPL/CPA first).

#### §5.4.6 Tech stack

Python 3.11+, FastAPI, Anthropic/Gemini LLMs, Paramiko, SQLite, PyJWT, custom node pipeline (`core/agent.py`) — **not** LangGraph (that is Agent OS).

#### §5.4.7 Integrations

INT-001, 002, 004 LIVE; 006 PARTIAL; 009, 010, 011 LIVE; 012 PARTIAL (API LIVE / portal UX pending); 013 PLANNED.

#### §5.4.8 Public metrics

| Metric | Value |
|--------|-------|
| Operational spine readiness | ~93% LIVE |
| Full COI vision | PARTIAL (strategist auto-act, procurement, INT-006) |
| Inbox throughput (B2B process proof) | 142 msgs/scan — **test-environment** operational proof, not a client production mailbox claim |

#### §5.4.9 Scope lock

- No autonomous production deploy (Zasada 11).
- No commits in product repos (Agent OS / Cursor).
- No Mollie refunds; no changing global-rules without Commander.

#### §5.4.10 Portfolio proof

https://quietforge.flexgrafik.nl/results/jadzia-coi/ (if routed) · https://quietforge.flexgrafik.nl/results/inbox-killer/ (B2B product)

---

### §5.5 agent-os — Engineering Factory

#### §5.5.1 North Star

Safe multi-repo code evolution — plan, implement, test, review, summarize — with mandatory human gate before merge.

#### §5.5.2 For SMB clients

“AI workforce” behind delivery: faster builds because orchestration and review are systematized — not because quality is skipped.

#### §5.5.3 In the FlexGrafik ecosystem

Implements COI-approved changes across zzpackage, app, portal, jadzia, meta, VCMS, UI; Langfuse cost tracking; SESSION-ANCHOR workflow.

#### §5.5.4 AS-IS LIVE

| Capability | Evidence |
|------------|----------|
| 5-node LangGraph | `src/graph.py` |
| FastAPI on EU VPS | `os-api.flexgrafik.nl` |
| PostgreSQL + hybrid WAITING_RUNNER | SESSION-ANCHOR |
| Multi-repo targeting | `src/modules.py` |
| HITL Reviewer gate | Pipeline design + Mission Control |

#### §5.5.5 TO-BE / PLANNED

- Automated spawn from Jadzia-Planner (INT-006).
- zzpackage E2E smoke proof in portfolio (PARTIAL).

#### §5.5.6 Tech stack

Python 3.13+, FastAPI, LangGraph, PostgreSQL, OpenRouter, Langfuse, Docker/Nginx VPS, Local Runner on Commander PC.

#### §5.5.7 Integrations

INT-006 (PARTIAL), INT-011 LIVE; consumes meta rules via session context.

#### §5.5.8 Public metrics

5 workflow nodes; ~90% LIVE.

#### §5.5.9 Scope lock

- No business order/marketing strategy ownership (Jadzia).
- No VCMS scan ownership.
- No touching jadzia VPS service from coder tasks.

#### §5.5.10 Portfolio proof

https://quietforge.flexgrafik.nl/results/agent-orchestrator/

---

### §5.6 flex-vcms — Governance Layer

#### §5.6.1 North Star

Immunological system for the ecosystem — detect doc/code drift before it becomes client-facing bugs.

#### §5.6.2 For SMB clients

Governance and handover discipline: scan reports, repo maps, audit trails — so the operation does not depend on one developer’s memory.

#### §5.6.3 In the FlexGrafik ecosystem

Registers eight product repos; generates map, conflicts, repo pages, governance JSONL; KODA read-only assistant; session-start scan ritual.

#### §5.6.4 AS-IS LIVE

| Capability | Evidence |
|------------|----------|
| `vcms-scan.js` | 8 repos, Conflicts: 0 (2026-06-24 snapshot) |
| Knowledge index SQLite | `data/vcms.db` |
| Dashboard :8001 / cmd.flexgrafik.nl | `server.js` |
| Handoff index culture | 57+ handoffs ecosystem-wide |

#### §5.6.5 TO-BE / PLANNED

- Business roles on repo pages.
- Optional registration of `services` repo (GAP-V05 decision).
- Remote VPS portfolio truth scan.

#### §5.6.6 Tech stack

Node.js, VitePress docs, SQLite, `repos.yaml`, `scan-rules.json`.

#### §5.6.7 Integrations

INT-007 LIVE; INT-008 feeds from meta.

#### §5.6.8 Public metrics

8 repos scanned; Conflicts: 0 target; ~85% LIVE.

#### §5.6.9 Scope lock

- Does not execute product code changes.
- Does not deploy to production autonomously.

#### §5.6.10 Portfolio proof

https://quietforge.flexgrafik.nl/results/owner-ecosystem/

---

### §5.7 agent-os-ui — Mission Control

#### §5.7.1 North Star

Operator cockpit for Agent OS — queue, diffs, history, costs — HITL before ship.

#### §5.7.2 For SMB clients

Transparency: see what the AI workforce did, approve or reject, audit trail for handover.

#### §5.7.3 In the FlexGrafik ecosystem

UI for engineering brain only — **not** Jadzia COI business dashboard (future separate surface).

#### §5.7.4 AS-IS LIVE

Mission Control at https://os.flexgrafik.nl (access on request); task queue, approve/reject, Langfuse costs via backend.

#### §5.7.5 TO-BE / PLANNED

Standalone ADR; deeper UX audit integration.

#### §5.7.6 Tech stack

Next.js 16, React 19, Tailwind v4, OpenAPI client, Docker standalone.

#### §5.7.7 Integrations

agent-os REST LIVE; parent workflows in `agent-os/.agents/workflow/`.

#### §5.7.8 Public metrics

~85% LIVE.

#### §5.7.9 Scope lock

- No backend orchestration logic.
- No VCMS views.

#### §5.7.10 Portfolio proof

https://quietforge.flexgrafik.nl/trust/

---

### §5.8 flexgrafik-meta — Constitution

#### §5.8.1 North Star

DNA of the ecosystem — rules, plans, agent contracts, integration specs, investor pack — documentation-only SSoT.

#### §5.8.2 For SMB clients

Method and safety: Automation Map aligns to documented workflow; global rules (pricing floors, wizard-only, HITL deploy) propagate to every build.

#### §5.8.3 In the FlexGrafik ecosystem

Loaded at every agent session; enterprise suite (`ecosystem-blueprint`, `living-system-architecture`, `investor-vision-angel`, module specs, futures).

#### §5.8.4 AS-IS LIVE

Markdown/JSON canon; OpenCode agent YAML; referenced by all repo `AGENTS.md` files.

#### §5.8.5 TO-BE / PLANNED

master-plan sync; MCP tools expansion; full investor data room population.

#### §5.8.6 Tech stack

Markdown, JSON, no runtime.

#### §5.8.7 Integrations

INT-008 LIVE to all modules.

#### §5.8.8 Public metrics

~80% LIVE (README stale in places).

#### §5.8.9 Scope lock

- No product runtime.
- No autonomous deploy.

#### §5.8.10 Portfolio proof

https://quietforge.flexgrafik.nl/how-it-works/

---

### §5.9 services / Quietforge — Service Layer

#### §5.9.1 North Star

B2B portfolio and conversion surface — prove the architect can deploy systems, route to Automation Map, separate from ZZP consumer brand.

#### §5.9.2 For SMB clients

The commercial front door: case studies, pricing, book-discovery, founder story, honest Built vs Planned.

#### §5.9.3 In the FlexGrafik ecosystem

Sibling asset **outside** VCMS `repos.yaml` (GAP-V05); expresses LOS for buyers; links to live demos; does not share jadzia.db.

#### §5.9.4 AS-IS LIVE

Next.js 16 static export on `quietforge.flexgrafik.nl`; ecosystem map; case studies; readiness table; LOS teaser; LinkedIn-aligned profile copy v3+.

#### §5.9.5 TO-BE / PLANNED

- Interactive architecture diagram (§17).
- Investor pack redirect / request flow.
- Optional VCMS registration decision.

#### §5.9.6 Tech stack

Next.js 16, React 19, Tailwind v4, Framer Motion, Vercel deploy.

#### §5.9.7 Integrations

Loose coupling — HTTPS links only to product demos; copy SSoT in this document.

#### §5.9.8 Public metrics

8-repo narrative; 6 production-touching systems (`proof.ts`).

#### §5.9.9 Scope lock

- No ZZP consumer checkout on Quietforge.
- No merge into flexgrafik.nl consumer portal.

#### §5.9.10 Portfolio proof

https://quietforge.flexgrafik.nl/

---

## §13 Data flows

### §13.1 Customer funnel

```text
flexgrafik.nl (trust + chat)
  → app.flexgrafik.nl (game + lead gate)  [optional path]
  → zzpackage.flexgrafik.nl (configure + pay)
  → WooCommerce / Mollie
  → jadzia.db (orders via INT-002)
```

### §13.2 Operations loop

```text
Sense: GA4 + WC + game + VCMS scan
  → Jadzia analytics / order / lead nodes
  → Strategist brief (TO-BE) → Commander HITL
  → Planner tasks → Agent OS spawn (PARTIAL auto)
  → Summarizer → handoff
```

### §13.3 Governance loop

```text
VCMS scan → conflicts.md + map.md
  → Kaizen filter on proposals
  → Commander approve deploy (Zasada 11)
  → handoff archived → next scan
```

---

## §14 Built vs Planned (summary)

| Module | Repo | Readiness | Status | Key LIVE capability |
|--------|------|-----------|--------|---------------------|
| Wizard Cash Engine | zzpackage | ~90% | LIVE | Checkout + 167 active SKUs · INSPIRE Design Intake PARTIAL |
| Lead magnet game | app | ~85% | LIVE | PWA + wizard bridge + INT-004 leads |
| Jadzia COI / Ops Command Layer | jadzia-core | ~93% spine | LIVE | Commander, spine, brief, publish HITL (full COI vision PARTIAL) |
| Agent OS | agent-os | ~90% | LIVE | 5-node HITL pipeline |
| Trust portal | flexgrafik-nl | ~75% | LIVE | CTAs + generic supervised chat |
| Constitution | flexgrafik-meta | ~80% | LIVE | Rules + investor docs |
| VCMS governance | flex-vcms | ~85% | LIVE | 8-repo scan |
| Mission Control | agent-os-ui | ~85% | LIVE | HITL dashboard |

**PARTIAL / PLANNED highlights:** INSPIRE sales persona GO; portal qualification UX E2E (API LIVE); growth attribution (INT-013); strategist auto-act; TikTok growth loop.

Sync source: [`readiness.ts`](../../src/content/readiness.ts) + [`2026-07-ecosystem-truth-matrix.md`](../operations/artefacts/2026-07-ecosystem-truth-matrix.md).

---

## §15 Anti-goals and honesty gate

From [`vision-system.md`](./vision-system.md) §7 and [`traction-honesty-framework.md`](../../flexgrafik-meta/docs/core/traction-honesty-framework.md):

| Never claim | Why |
|-------------|-----|
| MRR / paid order counts without Commander data | GAP-V04 |
| Portal qualification agent LIVE | GAP-V01 — generic sales chat today |
| Full autonomous AI operations | LOS requires HITL |
| Autonomous production deploy | Zasada 11 |
| “Inbox Killer = entire jadzia-core” | Product vs platform confusion |
| Fake uptime % or invented client logos | Audit honesty rules |

**Commercial traction:** see meta `traction-honesty-framework.md` §2.2 — **UNKNOWN until Commander fills**.

---

## §16 Derivative copy matrix

| Derivative | Max size | Source sections | Target file |
|------------|----------|-----------------|-------------|
| LinkedIn About | ~1500 chars | §0b, §1, §2, CTA | `strategy/linkedin/profile-copy.md` |
| LinkedIn Experience Quietforge | ~3000 chars | §2, §5 (as services), pricing | `profile-copy.md` |
| LinkedIn Experience FlexGrafik | ~2000 chars | §14, proof metrics | `profile-copy.md` |
| Hero subline | 2 sentences | §0a, §1 | `conversion-copy.ts` |
| Owner ecosystem intro | 1 paragraph | §3, §4, §13 | owner-ecosystem page (code session) |
| Investor blurb | 1 page | §0c, §3, §14, §15 | Featured / on request |
| Interactive diagram node copy | per node | §5.x.4–5.x.5 | §17 implementation |

---

## §17 Interactive diagram — Phase 2 spec

**Prerequisite:** Commander HITL on this document §5–§14.

### Nodes (minimum)

- 8 repo nodes (§5.1–5.8)
- Quietforge service node (§5.9)
- 5 LOS layer groups (§3)
- 3 brain groups (§4)

### Edges

Label with INT-001…INT-013 from [`integration-contracts.md`](../../flexgrafik-meta/docs/core/integration-contracts.md); style LIVE solid, PLANNED dashed.

### Interaction

| State | UI behaviour |
|-------|----------------|
| Hover | AS-IS one-liner + status badge |
| Click | Panel: §5.x.4 + §5.x.5 + demo link |
| Toggle | View: `SMB Funnel` vs `Architecture` |

### Mobile

Accordion list by layer; no horizontal-only graph.

### Implementation options (decision later)

- React component in `services` (`LivingSystemDiagram.tsx`)
- Canvas artifact (cursor canvas skill)
- Static SVG fallback for LinkedIn PDF

**Copy SSoT:** this file — diagram must not invent node text.

---

## §18 Validation checklist (Faza 2 — HITL)

### Agent cross-review (2026-07-08)

- [x] Each LIVE claim in §5 has file/URL evidence cited
- [x] INT-002/004/009 reflected (newer than as-is-inventory §5 table)
- [x] Wizard 9/7 footnote applied
- [x] SKU **167** active aligned with proof.ts (2026-07-19 recount)
- [x] Portal chat ≠ qualification stated
- [x] Inbox Killer ≠ jadzia-core identity stated
- [x] No fabricated MRR/revenue
- [x] global-rules respected (€199, 60%, wizard-only, Zasada 11)
- [x] §14 Built vs Planned synced to ~93% Ops Command Layer spine

### Commander actions required

- [x] Approve document for public use (checkbox top matter) — 2026-07-19 green-light
- [ ] Fill `traction-honesty-framework.md` §2.2 if commercial metrics needed
- [ ] Confirm Mission Control public access policy for investor demos
- [ ] Approve `vision-system.md` Commander HITL checkbox

---

## §19 Commander notes (PL)

**Co to jest:** L0 kanon opisu systemu — baza pod LinkedIn, stronę, diagram. Nie zastępuje `flexgrafik-meta` konstytucji.

**Twój stary opis (3 akapity)** był poprawny co do pain i HITL, ale nie pokazywał LOS, trzech mózgów, 8 repo ani uczciwego podziału LIVE/PLANNED.

**Następny krok po approve:** Faza 3 — `profile-copy.md` v4.0 z §16; potem diagram interaktywny z §17.

---

## Changelog

| Date | Change |
|------|--------|
| 2026-07-08 | v1.0 — initial master per plan; research in `system-description-research-notes.md` |
