// ============================================================================
// PROOF MANIFEST — single source of truth for all client-fillable proof.
// Cursor: build all proof components to READ from this file. Do NOT hardcode.
// Client: fill every `null` with real data at the end. Every number must be TRUE.
// ============================================================================

export const metrics = {
  repos: null,            // FILL: number of production repos (e.g. 8)
  systemsLive: null,     // FILL: systems running in production
  msgsPerScan: null,     // FILL: messages classified per scan (e.g. "100+")
  wizardSteps: null,     // FILL: configurator steps (e.g. 7)
  dynamicFields: null,   // FILL: dynamic form fields (e.g. "30+")
  workflowSteps: null,   // FILL: agent pipeline steps (e.g. 12)
  integrations: null,    // FILL: number of integrations
  hosting: "EU-hosted VPS · FastAPI + LangGraph",  // example, client to confirm
} as const;

export type VideoSlot = {
  url: string | null;        // FILL: youtube/vimeo/loom embed url
  duration: string;          // set: "90s", "60s", etc.
  poster: string | null;     // FILL: /gratka/xxx.jpg poster image path
  ready: boolean;            // false until client fills url
};

export const videos: Record<string, VideoSlot> = {
  ecosystem:     { url: null, duration: "90s",  poster: null, ready: false }, // "How the whole ecosystem works"
  inboxKiller:   { url: null, duration: "60s",  poster: null, ready: false },
  wizard:        { url: null, duration: "45s",  poster: null, ready: false },
  vcms:          { url: null, duration: "75s",  poster: null, ready: false },
  agentOs:       { url: null, duration: "60s",  poster: null, ready: false },
  founder:       { url: null, duration: "120s", poster: null, ready: false },
};

export type ScreenShot = {
  src: string | null;        // FILL: /gratka/xxx.png
  alt: string;               // descriptive alt (accessibility)
  caption: string;           // one line: "what you see + why it matters"
  ready: boolean;
};

export const screens: Record<string, ScreenShot> = {
  vcmsDashboard:   { src: null, alt: "VCMS admin dashboard",          caption: "Where content, forms and flows are governed.", ready: false },
  inboxLanes:      { src: null, alt: "Inbox Killer classification lanes", caption: "Lead · client · invoice · noise, with approval gate.", ready: false },
  agentCards:      { src: null, alt: "Agent cards",                    caption: "Every agent has a role, rules and a review gate.", ready: false },
  workflowMap:     { src: null, alt: "Agent pipeline workflow",        caption: "Plan → code → test → review → approve.", ready: false },
  wizardCheckout:  { src: null, alt: "Self-service configurator checkout", caption: "Configure → see price → pay, no phone call.", ready: false },
  auditLog:        { src: null, alt: "Activity audit log",             caption: "Who did what, when — available on request.", ready: false },
  portalAssistant: { src: null, alt: "Customer-facing AI assistant",  caption: "Qualification assistant in the customer portal.", ready: false },
};

// Case studies: measurement line (honest reframe)
export const caseMeasurements: Record<string, { value: string | null; ready: boolean }> = {
  inboxKiller: { value: null, ready: false },   // FILL: real metric or capability metric
  agentOs:     { value: null, ready: false },
  salesFunnel: { value: null, ready: false },
  advisory:    { value: null, ready: false },
};

// Pricing tiers — placeholders null
export const pricing = {
  discovery: { price: "€290", note: "Credited toward your project." },  // known, keep
  singleSystem: { from: null, timeline: null, includes: null },   // FILL
  ecosystem:    { from: null, timeline: null, includes: null },   // FILL
  maintenance:  { from: null, perMonth: true, note: "No lock-in." },   // FILL
};
