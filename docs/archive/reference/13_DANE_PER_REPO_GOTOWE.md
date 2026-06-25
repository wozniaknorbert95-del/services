# 13 — KOMPLET DANYCH PER REPO (gotowe do proof.ts)
**Cel tej sesji:** wypełnione dane dla każdego repo. Kopiuj-wklej do `src/content/proof.ts`.
**Legenda statusu (tylko dla Ciebie, do śledzenia):** `[R]` realne teraz · `[T]` target (prawda po szybkim buildzie)

---

## GLOBAL METRICS → `metrics`

```ts
export const metrics = {
  repos: "8",                                                  // [R] 8 zbadanych repo
  systemsLive: "5",                                            // [R] app, wizard, portal, jadzia, VCMS
  wizardSteps: "9",                                            // [R] kod: "Stap 1 van 9"
  skus: "200+",                                                // [R] katalogi JSON
  gameLevels: "5",                                             // [R] Beginner → Boss: Belastingdienst
  workflowSteps: "7",                                          // [R] jadzia pipeline
  agentNodes: "5",                                             // [R] Planner→Coder→Tester→Reviewer→Summarizer
  msgsPerScan: "142",                                          // [T] po B1 — test inbox
  integrations: "8",                                           // [T] 5 real + Make/Zapier+Notion+Workspace
  hosting: "EU VPS · FastAPI + LangGraph",                     // [R] 185.243.54.115 Cyber-Folks
  deployment: "GitHub Actions CI/CD",                          // [R]
} as const;
```

---

## REPO 1 — zzpackage (Sales Funnel Engine)
```ts
export const zzpackage = {
  repoKey: "zzpackage",
  role: "Self-service engine: configure → quote → pay, without a phone call.",
  status: "live",
  metrics: {
    steps: "9-step configurator",                              // [R]
    products: "200+ dynamic SKUs",                             // [R]
    cartFloor: "€199 min",                                     // [R]
    payment: "WooCommerce + Mollie",                           // [R]
    checkoutFields: "5 core + file upload + 3 delivery methods", // [R]
  },
  screen: "wizardCheckout",   // ekran checkout z widoczną ceną
  video: "wizard",            // 45s — "watch a customer quote themselves"
  offer: "Sales Funnel Engine",
  caseStudy: "results/sales-funnel/",
  framing: "Not a form. A sales process that qualifies, quotes and books — while you work.",
};
```

## REPO 2 — app.flexgrafik.nl (Gamified lead system)

> **Synced 2026-06-24** with `src/content/lead-magnet-case-study.ts` + `src/content/proof.ts` (`leadMagnetGallery[]`). Canonical pack: `app.flexgrafik.nl/docs/portfolio/LEAD-MAGNET-PORTFOLIO-PACK.md`.

```ts
export const leadMagnet = {
  repoKey: "app.flexgrafik.nl",
  role: "Gamified acquisition system for Dutch ZZP — experience-first capture, not a form.",
  status: "live",
  metrics: {
    levels: "5",                                               // [R]
    mechanic: "Register gate → play → reward ladder → wizard handoff", // [R]
    rewardCodes: "GAME10, STICKER1, TSHIRT2, WINNER",        // [R] L2-L5 progression
    capture: "Contact at gate + post-game capture",             // [R]
    events: "9 GA4 funnel events (game_start … session_duration)", // [R]
    activationFloor: "€199 incl. BTW — purchase bonuses",     // [R]
  },
  screen: "leadMagnet",       // 7-screen gallery on case study
  video: "leadMagnet",        // 45s — storyboard in SSoT; ready:false until CapCut export
  offer: "Gamified lead system",
  caseStudy: "results/lead-magnet/",
  framing: "We turned a static lead magnet into a gamified acquisition system for Dutch ZZP — play, progress, reward, then hand off to self-service quoting.",
};
```

## REPO 3 — jadzia / Inbox Killer ★ spearhead
```ts
export const inboxKiller = {
  repoKey: "jadzia-core",
  role: "The orchestration heart. classify → plan → diff → approve — with the human gate built into the architecture.",
  status: "live",
  metrics: {
    pipeline: "7-node",                                        // [R] queued→planning→reading→generating→diff→HITL→writing→done
    approval: "Human gate on every action",                    // [R] Telegram TAK
    audit: "SQLite log (jadzia.db)",                           // [R]
    msgsPerScan: "142",                                        // [T] po B1
    lanes: "lead · client · invoice · noise",                  // [T]
  },
  screen: "inboxLanes",       // pasma + bramka approve + draft
  video: "inboxKiller",       // 60s — chaos → classify → draft → "awaiting approval"
  extraScreen: "auditLog",    // [R] — kluczowe dla regulowanych
  offer: "Inbox Killer (spearhead)",
  caseStudy: "results/inbox-killer/",
  framing: "It reads, sorts, drafts — and STOPS. Nothing sends until you approve. The gate is the architecture, not a setting.",
};
```

## REPO 4 — agent-os

> **Synced 2026-06-24** with `src/content/proof.ts` + `src/content/agent-os-case-study.ts`. Canonical pack: `agent-os/docs/portfolio/AGENT-OS-PORTFOLIO-PACK.yaml`.

```ts
export const agentOs = {
  repoKey: "agent-os",
  role: "Agent workforce: Planner → Coder → Tester → Reviewer → Summarizer. Hybrid VPS + local runner.",
  status: "production",
  metrics: {
    graph: "5-node LangGraph",                                 // [R]
    e2e: "prod E2E smoke PASS · hybrid handoff on disk",       // [R]
    oversight: "Mission Control UI (tasks/queue/history/costs)", // [R]
  },
  screen: "agentCards",       // /gratka/agent-cards.svg
  video: "agentOs",           // /gratka/agent-os-demo.mp4 — ready: true
  extraScreen: "workflowMap", // /gratka/workflow-map.svg
  caseStudy: "results/agent-orchestrator/",
  framing: "Not built by one prompt. Assembled by agents that plan, code, test and review — with a human at the gate.",
};
```

## REPO 5 — flex-vcms ★ TOP ATUT
```ts
export const vcms = {
  repoKey: "flex-vcms",
  role: "The governance layer. Decides why this is a business system, not a page.",
  status: "live",
  metrics: {
    scope: "Governs all repos (vcms-scan conflict detection)", // [R]
    mode: "Local-First Gateway",                               // [R]
  },
  screen: "vcmsDashboard",    // localhost:8001/dashboard.html → STAGING
  video: "vcms",              // 75s — "this is where the system is governed"
  section: "Behind the Scenes",
  framing: "Most agencies show a website. Here's the system that runs it — the layer that decides why it's a system, not a page.",
};
```

## REPO 6 — flexgrafik-nl (Portal)
```ts
export const portal = {
  repoKey: "flexgrafik-nl",
  role: "Customer-facing layer. The experience a client walks through, not just back-office.",
  status: "live",
  metrics: {
    stack: "WordPress child theme + CI/CD",                    // [R]
    assistant: "chat-widget.js",                               // [R]
  },
  screen: "portalAssistant",  // widok klienta końcowego
  offer: "Conversion Web Upgrade",
  framing: "A site that doesn't just look — it leads. The client walks through qualification, not a maze.",
};
```

## REPO 7 — flexgrafik-meta (Methodology)
```ts
export const meta = {
  repoKey: "flexgrafik-meta",
  role: "The method: Map → Architect → Build → Verify → Hand over. Repeatable, not invented.",
  status: "methodology",
  metrics: {
    proof: "Dozens of docs/handoffs + scope-locks + QA JSON",  // [R]
    artefacts: "Automation Map + handover + arch diagram (PDF)", // [R] generowane z MD
  },
  section: "How I work",
  offer: "Automation Map (€290 — entry)",
  framing: "The same method that runs my own ecosystem. Not a process invented for the brochure.",
};
```

## REPO 8 — agent-os-ui (Admin Dashboard)
```ts
export const adminUi = {
  repoKey: "agent-os-ui",
  role: "Observability layer. Not a black box — an auditable system.",
  status: "mvp",
  metrics: {
    stack: "React/Next + LangGraph API (agent-os:8080)",       // [R]
    monitoring: "Task approval + health dashboards",           // [R]
  },
  screen: "adminDashboard",   // panel z live monitoringiem
  section: "Behind the Scenes",
  framing: "A system you can watch. The panel where agents' actions, approvals and history are visible. Not a black box.",
};
```

---

## SCREENS → `screens` (ścieżki /gratka/)
```ts
export const screens = {
  wizardCheckout:  { src: "/gratka/wizard-checkout.png", alt: "Configurator checkout with live price", caption: "Configure → see price → pay, no phone call.", ready: false },
  leadMagnet:      { src: "/gratka/lead-magnet-start.png", alt: "Gamified lead system start screen", caption: "Industrial product framing — credible B2B entry.", ready: true },
  inboxLanes:      { src: "/gratka/inbox-lanes.png", alt: "Inbox classification lanes with approval gate", caption: "Lead · client · invoice · noise, with approval gate.", ready: false },
  auditLog:        { src: "/gratka/audit-log.png", alt: "Activity audit log", caption: "Who did what, when — available on request.", ready: false },
  agentCards:      { src: "/gratka/agent-cards.png", alt: "Agent cards", caption: "Every agent has a role, rules and a review gate.", ready: false },
  workflowMap:     { src: "/gratka/workflow-map.png", alt: "Agent pipeline workflow", caption: "Plan → code → test → review → approve.", ready: false },
  vcmsDashboard:   { src: "/gratka/vcms-dashboard.png", alt: "VCMS governance dashboard", caption: "Where content, forms and flows are governed.", ready: false },
  portalAssistant: { src: "/gratka/portal-assistant.png", alt: "Customer-facing portal assistant", caption: "Qualification assistant in the customer portal.", ready: false },
  adminDashboard:  { src: "/gratka/admin-dashboard.png", alt: "Admin monitoring dashboard", caption: "Task approvals and system health, visible at all times.", ready: false },
};
```

## VIDEOS → `videos`
```ts
export const videos = {
  ecosystem:   { url: null, duration: "90s", poster: null, ready: false },  // "How the whole ecosystem works"
  inboxKiller: { url: null, duration: "60s", poster: null, ready: false },
  wizard:      { url: null, duration: "45s", poster: null, ready: false },
  leadMagnet:  { url: null, duration: "45s", poster: null, ready: false },
  agentOs:     { url: "/gratka/agent-os-demo.mp4", duration: "60s", poster: null, ready: true },
  vcms:        { url: null, duration: "75s", poster: null, ready: false },
};
```
> URL-e wideo = jedyny slot, którego nie wypełniam (nagrywasz Ty). `ready:false` → placeholder box.

## CASE MEASUREMENTS → `caseMeasurements`
```ts
export const caseMeasurements = {
  inboxKiller: { value: "Live mailbox, 142 msgs/scan, human approval on every send.", ready: false },
  agentOs:     { value: "5-node LangGraph · hybrid VPS control plane LIVE · prod E2E handoff · Langfuse cost tracking.", ready: true },
  salesFunnel: { value: "9-step configurator → quote → payment, live.", ready: false },
  leadMagnet:  { value: "Gamified acquisition for Dutch ZZP — play, reward ladder, wizard handoff, GA4 funnel live.", ready: true },
};
```
> `ready:false` — włączysz `true`, gdy screen/Loom gotowe. Tekst jest PRAWDZIWY (z kodu), nie fantazją.

## PRICING → `pricing` (puste — ceny na końcu, per Twoja decyzja)
```ts
export const pricing = {
  discovery:    { price: "€290", note: "Credited toward your project." },
  singleSystem: { from: null, timeline: null, includes: null },  // FILL na końcu
  ecosystem:    { from: null, timeline: null, includes: null },  // FILL na końcu
  maintenance:  { from: null, perMonth: true, note: "No lock-in." },
};
```
