// ============================================================================
// SYSTEM DIAGRAM — interactive LOS map (nodes, edges, copy).
// Binding: docs/canons/system-description-master.md §3–§5, §13
// Layout: docs/design/los-diagram-layout.json
// ============================================================================

import { ROUTES, EXTERNAL, SITE_URL } from '@/lib/constants';
import layout from '../../docs/design/los-diagram-layout.json';

export type DiagramNodeId =
  | 'zzpackage'
  | 'app.flexgrafik.nl'
  | 'jadzia-core'
  | 'agent-os'
  | 'flex-vcms'
  | 'flexgrafik-nl'
  | 'flexgrafik-meta'
  | 'agent-os-ui'
  | 'quietforge';

export type DiagramView = 'architecture' | 'smb_funnel';

export type DiagramLayerId =
  | 'sense'
  | 'think'
  | 'orchestrate'
  | 'act'
  | 'guard'
  | 'memory'
  | 'service';

export type DiagramBrainId = 'governance' | 'operations' | 'engineering';

export type DiagramStatus = 'LIVE' | 'PARTIAL' | 'PLANNED';

export interface DiagramNode {
  id: DiagramNodeId;
  label: string;
  shortLabel: string;
  layer: DiagramLayerId;
  brain?: DiagramBrainId;
  status: DiagramStatus;
  readiness: string;
  northStar: string;
  hoverLine: string;
  asIs: readonly string[];
  toBe: readonly string[];
  demoUrl?: string;
  proofRoute?: string;
  architecturePosition: { x: number; y: number };
  smbFunnelPosition: { x: number; y: number };
  smbFunnelOrder?: number;
  architectureVisible: boolean;
  smbFunnelVisible: boolean;
}

export interface DiagramEdge {
  id: string;
  from: DiagramNodeId;
  to: DiagramNodeId;
  label: string;
  status: DiagramStatus | 'PARTIAL';
  architectureVisible: boolean;
  smbFunnelVisible: boolean;
}

export const DIAGRAM_CANVAS = layout.canvas as { width: number; height: number };

export const LOS_LAYER_BANDS = layout.layers as Record<
  DiagramLayerId,
  { y: number; height: number; label: string }
>;

const archPos = layout.architecturePositions as Record<string, { x: number; y: number }>;
const smbPos = layout.smbFunnelPositions as Record<string, { x: number; y: number }>;

export const LIFE_LOOP_PHASES = [
  { id: 'sense', label: 'Sense' },
  { id: 'interpret', label: 'Interpret' },
  { id: 'propose', label: 'Propose' },
  { id: 'verify', label: 'Verify' },
  { id: 'hitl', label: 'HITL' },
  { id: 'act', label: 'Act' },
  { id: 'learn', label: 'Learn' },
] as const;

export const DIAGRAM_NODES: readonly DiagramNode[] = [
  {
    id: 'zzpackage',
    label: 'Wizard Cash Engine',
    shortLabel: 'zzpackage',
    layer: 'act',
    brain: 'operations',
    status: 'LIVE',
    readiness: '~90%',
    northStar: 'The only purchase path — self-service branding packages from configuration to Mollie payment.',
    hoverLine: '9-screen configurator · 161 SKUs · Mollie checkout LIVE',
    asIs: [
      '9-screen SPA configurator with 7 business decision stages',
      '161 SKU catalog (product-master-table.json)',
      'WooCommerce + Mollie checkout from €199',
      'Customer chat widget API (INT-001)',
      'Order webhook to Jadzia (INT-002)',
    ],
    toBe: ['Deeper COI revenue analytics', 'Qualification scoring in wizard session'],
    demoUrl: EXTERNAL.zzpackageWizard,
    proofRoute: ROUTES.resultsSalesFunnel,
    architecturePosition: archPos.zzpackage,
    smbFunnelPosition: smbPos.zzpackage,
    smbFunnelOrder: 3,
    architectureVisible: true,
    smbFunnelVisible: true,
  },
  {
    id: 'app.flexgrafik.nl',
    label: 'Lead Magnet Game',
    shortLabel: 'app',
    layer: 'sense',
    brain: 'operations',
    status: 'LIVE',
    readiness: '~85%',
    northStar: 'Experience-first lead capture — play, earn rewards, bridge to Wizard with coupons.',
    hoverLine: 'Bouwplaats Chaos PWA · Turnstile gate · wizard bridge LIVE',
    asIs: [
      'Canvas gameplay + PWA',
      '4-tier reward ladder (GAME10 minimum)',
      'Lead sync to Jadzia (INT-004)',
      'Coupon deep link to Wizard (INT-003)',
      'GA4 telemetry',
    ],
    toBe: ['TikTok growth attribution loop (INT-013)'],
    demoUrl: EXTERNAL.leadMagnetGame,
    proofRoute: ROUTES.resultsLeadMagnet,
    architecturePosition: archPos['app.flexgrafik.nl'],
    smbFunnelPosition: smbPos['app.flexgrafik.nl'],
    smbFunnelOrder: 2,
    architectureVisible: true,
    smbFunnelVisible: true,
  },
  {
    id: 'flexgrafik-nl',
    label: 'Trust Portal',
    shortLabel: 'portal',
    layer: 'sense',
    status: 'LIVE',
    readiness: '~75%',
    northStar: 'Brand trust and SEO entry — routes visitors to Wizard and Game.',
    hoverLine: 'CTAs LIVE · sales chat LIVE (generic, not qualification agent)',
    asIs: [
      'Dark Premium WP portal with Wizard + Game CTAs',
      'Homepage chat → customer_agent via INT-001 proxy',
      'Asset sync from zzpackage',
    ],
    toBe: ['Portal Qualification Agent (INT-012 post-angel)', 'SEO/blog playbook'],
    demoUrl: 'https://flexgrafik.nl/',
    proofRoute: ROUTES.webUpgrade,
    architecturePosition: archPos['flexgrafik-nl'],
    smbFunnelPosition: smbPos['flexgrafik-nl'],
    smbFunnelOrder: 1,
    architectureVisible: true,
    smbFunnelVisible: true,
  },
  {
    id: 'jadzia-core',
    label: 'Jadzia COI',
    shortLabel: 'jadzia',
    layer: 'think',
    brain: 'operations',
    status: 'PARTIAL',
    readiness: '~55%',
    northStar: 'Chief Operating Intelligence — sense signals, propose actions, delegate with HITL.',
    hoverLine: 'Orders · leads · analytics LIVE · strategist brief PLANNED',
    asIs: [
      'FastAPI on EU VPS :8000',
      'order_node + WC webhook (INT-002)',
      'lead_node (INT-004)',
      'analytics_node + GA4 (INT-009)',
      'WP SSH agent + sales chat + worker HITL',
    ],
    toBe: [
      'Jadzia-Strategist weekly brief',
      'Automated Agent OS spawn (INT-006)',
      'Portal qualification node (INT-012)',
    ],
    proofRoute: ROUTES.resultsJadziaCoi,
    architecturePosition: archPos['jadzia-core'],
    smbFunnelPosition: smbPos['jadzia-core'],
    smbFunnelOrder: 4,
    architectureVisible: true,
    smbFunnelVisible: true,
  },
  {
    id: 'agent-os',
    label: 'Agent OS',
    shortLabel: 'agent-os',
    layer: 'orchestrate',
    brain: 'engineering',
    status: 'LIVE',
    readiness: '~90%',
    northStar: 'Safe multi-repo code evolution — 5-node LangGraph with mandatory human gate.',
    hoverLine: 'Planner→Coder→Tester→Reviewer→Summarizer · hybrid VPS LIVE',
    asIs: [
      '5-node LangGraph pipeline',
      'FastAPI on os-api.flexgrafik.nl',
      'Hybrid WAITING_RUNNER + Local Runner',
      'Multi-repo code changes (INT-011)',
    ],
    toBe: ['Automated spawn from Jadzia-Planner (INT-006)'],
    proofRoute: ROUTES.resultsAgentOrchestrator,
    architecturePosition: archPos['agent-os'],
    smbFunnelPosition: smbPos['agent-os'],
    smbFunnelOrder: 5,
    architectureVisible: true,
    smbFunnelVisible: true,
  },
  {
    id: 'flex-vcms',
    label: 'VCMS Governance',
    shortLabel: 'vcms',
    layer: 'guard',
    brain: 'governance',
    status: 'LIVE',
    readiness: '~85%',
    northStar: 'Immunological system — detect doc/code drift before client-facing bugs.',
    hoverLine: '8-repo scan · Conflicts: 0 target · KODA assistant',
    asIs: [
      'vcms-scan.js across 8 product repos',
      'conflicts.md + ecosystem map generation',
      'Governance audit JSONL',
      'KODA read-only assistant',
    ],
    toBe: ['Business roles on repo pages', 'Optional services repo registration'],
    proofRoute: ROUTES.resultsOwnerEcosystem,
    architecturePosition: archPos['flex-vcms'],
    smbFunnelPosition: smbPos['flex-vcms'],
    smbFunnelOrder: 6,
    architectureVisible: true,
    smbFunnelVisible: true,
  },
  {
    id: 'flexgrafik-meta',
    label: 'Constitution',
    shortLabel: 'meta',
    layer: 'guard',
    brain: 'governance',
    status: 'LIVE',
    readiness: '~80%',
    northStar: 'DNA of the ecosystem — global rules, agent contracts, integration specs.',
    hoverLine: 'global-rules · LOS docs · investor pack',
    asIs: [
      'Markdown/JSON constitution loaded by all repos',
      'Enterprise doc suite (blueprint, AS-IS, LOS)',
      'Integration contracts INT-001–013',
    ],
    toBe: ['master-plan sync', 'Full investor data room'],
    proofRoute: ROUTES.howItWorks,
    architecturePosition: archPos['flexgrafik-meta'],
    smbFunnelPosition: smbPos['flexgrafik-meta'],
    smbFunnelOrder: 7,
    architectureVisible: true,
    smbFunnelVisible: false,
  },
  {
    id: 'agent-os-ui',
    label: 'Mission Control',
    shortLabel: 'os-ui',
    layer: 'orchestrate',
    brain: 'engineering',
    status: 'LIVE',
    readiness: '~85%',
    northStar: 'Operator cockpit — queue, diffs, history, costs — HITL before ship.',
    hoverLine: 'Task queue · approve/reject · Langfuse costs',
    asIs: [
      'Mission Control at os.flexgrafik.nl',
      'HITL approve/reject for Agent OS pipeline',
      'Cost tracking via backend',
    ],
    toBe: ['Standalone ADR', 'Deeper UX audit integration'],
    proofRoute: ROUTES.trust,
    architecturePosition: archPos['agent-os-ui'],
    smbFunnelPosition: smbPos['agent-os-ui'],
    smbFunnelOrder: 8,
    architectureVisible: true,
    smbFunnelVisible: false,
  },
  {
    id: 'quietforge',
    label: 'Quietforge',
    shortLabel: 'quietforge',
    layer: 'service',
    status: 'LIVE',
    readiness: 'B2B',
    northStar: 'Service layer — deploy governed conversion systems for SMB clients.',
    hoverLine: 'Automation Map €290 → scoped build → handover',
    asIs: [
      'B2B portfolio at quietforge.flexgrafik.nl',
      'Case studies + honest Built vs Planned',
      'Automation Map entry (€290 credited)',
    ],
    toBe: ['Interactive diagram (this map)', 'Investor pack redirect'],
    demoUrl: SITE_URL,
    proofRoute: ROUTES.founder,
    architecturePosition: archPos.quietforge,
    smbFunnelPosition: smbPos.quietforge,
    smbFunnelOrder: 9,
    architectureVisible: true,
    smbFunnelVisible: false,
  },
] as const;

export const DIAGRAM_EDGES: readonly DiagramEdge[] = [
  {
    id: 'INT-001',
    from: 'zzpackage',
    to: 'jadzia-core',
    label: 'Widget chat',
    status: 'LIVE',
    architectureVisible: true,
    smbFunnelVisible: false,
  },
  {
    id: 'INT-002',
    from: 'zzpackage',
    to: 'jadzia-core',
    label: 'WC order webhook',
    status: 'LIVE',
    architectureVisible: true,
    smbFunnelVisible: true,
  },
  {
    id: 'INT-003',
    from: 'app.flexgrafik.nl',
    to: 'zzpackage',
    label: 'Coupon bridge',
    status: 'LIVE',
    architectureVisible: true,
    smbFunnelVisible: true,
  },
  {
    id: 'INT-004',
    from: 'app.flexgrafik.nl',
    to: 'jadzia-core',
    label: 'Lead sync',
    status: 'LIVE',
    architectureVisible: true,
    smbFunnelVisible: true,
  },
  {
    id: 'INT-005',
    from: 'flexgrafik-nl',
    to: 'zzpackage',
    label: 'Portal CTAs',
    status: 'LIVE',
    architectureVisible: true,
    smbFunnelVisible: true,
  },
  {
    id: 'INT-006',
    from: 'jadzia-core',
    to: 'agent-os',
    label: 'Verification spawn',
    status: 'PARTIAL',
    architectureVisible: true,
    smbFunnelVisible: false,
  },
  {
    id: 'INT-007',
    from: 'flex-vcms',
    to: 'flexgrafik-meta',
    label: 'Repo scan',
    status: 'LIVE',
    architectureVisible: true,
    smbFunnelVisible: false,
  },
  {
    id: 'INT-008',
    from: 'flexgrafik-meta',
    to: 'jadzia-core',
    label: 'Constitution',
    status: 'LIVE',
    architectureVisible: true,
    smbFunnelVisible: false,
  },
  {
    id: 'INT-009',
    from: 'jadzia-core',
    to: 'jadzia-core',
    label: 'GA4 analytics',
    status: 'LIVE',
    architectureVisible: false,
    smbFunnelVisible: false,
  },
  {
    id: 'INT-010',
    from: 'jadzia-core',
    to: 'jadzia-core',
    label: 'Content calendar',
    status: 'PARTIAL',
    architectureVisible: false,
    smbFunnelVisible: false,
  },
  {
    id: 'INT-011',
    from: 'agent-os',
    to: 'zzpackage',
    label: 'Code changes',
    status: 'LIVE',
    architectureVisible: true,
    smbFunnelVisible: false,
  },
  {
    id: 'INT-012',
    from: 'flexgrafik-nl',
    to: 'jadzia-core',
    label: 'Qualification agent',
    status: 'PLANNED',
    architectureVisible: true,
    smbFunnelVisible: false,
  },
  {
    id: 'INT-013',
    from: 'app.flexgrafik.nl',
    to: 'jadzia-core',
    label: 'Growth attribution',
    status: 'PLANNED',
    architectureVisible: true,
    smbFunnelVisible: false,
  },
] as const;

export function getVisibleNodes(view: DiagramView): DiagramNode[] {
  return DIAGRAM_NODES.filter((n) =>
    view === 'architecture' ? n.architectureVisible : n.smbFunnelVisible
  ).sort((a, b) => {
    if (view === 'smb_funnel') {
      return (a.smbFunnelOrder ?? 99) - (b.smbFunnelOrder ?? 99);
    }
    return 0;
  });
}

export function getVisibleEdges(view: DiagramView): DiagramEdge[] {
  const visibleIds = new Set(getVisibleNodes(view).map((n) => n.id));
  return DIAGRAM_EDGES.filter((e) => {
    const viewOk = view === 'architecture' ? e.architectureVisible : e.smbFunnelVisible;
    if (!viewOk) return false;
    if (e.from === e.to) return visibleIds.has(e.from);
    return visibleIds.has(e.from) && visibleIds.has(e.to);
  });
}

export function getNodeById(id: DiagramNodeId): DiagramNode | undefined {
  return DIAGRAM_NODES.find((n) => n.id === id);
}

export function getNodePosition(node: DiagramNode, view: DiagramView) {
  return view === 'architecture' ? node.architecturePosition : node.smbFunnelPosition;
}

export const THREE_BRAINS = [
  {
    id: 'governance' as const,
    label: 'Governance',
    detail: 'VCMS + meta — does documentation match code?',
    nodeIds: ['flex-vcms', 'flexgrafik-meta'] as DiagramNodeId[],
  },
  {
    id: 'operations' as const,
    label: 'Operations',
    detail: 'Jadzia COI — what is happening in the business?',
    nodeIds: ['jadzia-core', 'zzpackage', 'app.flexgrafik.nl'] as DiagramNodeId[],
  },
  {
    id: 'engineering' as const,
    label: 'Engineering',
    detail: 'Agent OS + Mission Control — how do we change code safely?',
    nodeIds: ['agent-os', 'agent-os-ui'] as DiagramNodeId[],
  },
] as const;
