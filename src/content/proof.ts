// ============================================================================
// PROOF MANIFEST — single source of truth for all client-fillable proof.
// Cursor: build all proof components to READ from this file. Do NOT hardcode.
// Client: fill every `null` with real data at the end. Every number must be TRUE.
// ============================================================================

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

export type VideoSlot = {
  url: string | null;        // FILL: youtube/vimeo/loom embed url
  duration: string;          // set: "90s", "60s", etc.
  poster: string | null;     // FILL: /gratka/xxx.jpg poster image path
  ready: boolean;            // false until client fills url
};

export const videos: Record<string, VideoSlot> = {
  ecosystem:   { url: null, duration: "90s", poster: null, ready: false },  // "How the whole ecosystem works"
  inboxKiller: { url: null, duration: "60s", poster: null, ready: false },
  wizard:      { url: null, duration: "45s", poster: null, ready: false },
  leadMagnet:  { url: null, duration: "45s", poster: null, ready: false },
  agentOs:     { url: null, duration: "60s", poster: null, ready: false },
  vcms:        { url: null, duration: "75s", poster: null, ready: false }, // Fill after Loom — see flex-vcms/docs/VCMS_DEMO_SCRIPT.md
  founder:     { url: null, duration: "120s", poster: null, ready: false },
};

export type ScreenShot = {
  src: string | null;        // FILL: /gratka/xxx.png
  alt: string;               // descriptive alt (accessibility)
  caption: string;           // one line: "what you see + why it matters"
  ready: boolean;
};

export const screens: Record<string, ScreenShot> = {
  wizardCheckout:  { src: "/gratka/wizard-checkout.png", alt: "Configurator checkout with live price", caption: "Configure → see price → pay, no phone call.", ready: true },
  leadMagnet:      { src: "/gratka/lead-magnet.png", alt: "Gameplay with email capture and leaderboard", caption: "A lead magnet that earns the contact.", ready: true },
  inboxLanes:      { src: "/gratka/inbox-lanes.png", alt: "Inbox classification lanes with approval gate", caption: "Lead · client · invoice · noise, with approval gate.", ready: true },
  auditLog:        { src: "/gratka/audit-log.png", alt: "Activity audit log", caption: "Who did what, when — available on request.", ready: false },
  agentCards:      { src: "/gratka/agent-cards.png", alt: "Agent cards", caption: "Every agent has a role, rules and a review gate.", ready: true },
  workflowMap:     { src: "/gratka/workflow-map.png", alt: "Agent pipeline workflow", caption: "Plan → code → test → review → approve.", ready: true },
  vcmsDashboard:   { src: "/gratka/vcms-dashboard.png", alt: "VCMS governance dashboard", caption: "Ecosystem scan status, 8-repo coverage and conflict report — governance orchestrator.", ready: true },
  portalAssistant: { src: "/gratka/portal-assistant.png", alt: "Customer-facing portal assistant", caption: "Qualification assistant in the customer portal.", ready: true },
  adminDashboard:  { src: "/gratka/admin-dashboard.png", alt: "Admin monitoring dashboard", caption: "Task approvals and system health, visible at all times.", ready: true },
};

// Case studies: measurement line (honest reframe)
export const caseMeasurements: Record<string, { value: string | null; ready: boolean }> = {
  inboxKiller: { value: "Live mailbox, 142 msgs/scan, human approval on every send.", ready: true },
  agentOs:     { value: "5-node LangGraph, real E2E flow via OpenRouter.", ready: true },
  salesFunnel: { value: "9-step configurator → quote → payment, live.", ready: true },
  leadMagnet:  { value: "5-level game, email capture on win.", ready: true },
};

// Pricing tiers — placeholders null
export const pricing = {
  discovery: { price: "€290", note: "Credited toward your project." },  // known, keep
  singleSystem: { from: null, timeline: null, includes: null },   // FILL
  ecosystem:    { from: null, timeline: null, includes: null },   // FILL
  maintenance:  { from: null, perMonth: true, note: "No lock-in." },   // FILL
};
