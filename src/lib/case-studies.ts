import { ROUTES } from '@/lib/constants';
import type { CaseMeasurementKey, IntentId } from '@/content/ecosystem';
import { caseMeasurements } from '@/content/proof';
import { agentOsDisplayName } from '@/content/agent-os-case-study';
import { leadMagnetDisplayName } from '@/content/lead-magnet-case-study';
import { jadziaCoiDisplayName, JADZIA_COI_SLUG } from '@/content/jadzia-coi-case-study';

export interface CaseStudy {
  slug: string;
  number: string;
  title: string;
  meta: string;
  context: string;
  system: string;
  real: string;
  measurement: string;
  intents: IntentId[];
  manifestKey: CaseMeasurementKey;
  detailHref: string;
}

/** Display order: owner ecosystem + wizard first (LinkedIn / investor path) */
export const CASE_STUDIES: CaseStudy[] = [
  {
    slug: 'owner-ecosystem',
    number: '01',
    title: 'Eight repos, one supervised system',
    meta: 'Owner ecosystem · governance',
    context:
      'A multi-repo business stack without a governance layer drifts — conflicts, duplicate truth, deploy surprises.',
    system:
      'VCMS scans all repos, detects SSoT conflicts, and enforces handoffs before changes reach production.',
    real: '8 repos governed · Conflicts: 0 target · live scan pipeline.',
    measurement: '8-repo scan status with conflict detection before deploy.',
    intents: ['order', 'calm'],
    manifestKey: 'ownerEcosystem',
    detailHref: ROUTES.resultsOwnerEcosystem,
  },
  {
    slug: JADZIA_COI_SLUG,
    number: '02',
    title: jadziaCoiDisplayName,
    meta: 'Jadzia COI · PARTIAL',
    context:
      'Running a print business on eight repos without an operating brain means orders, leads and ops live in separate tools — and WordPress edits stay risky.',
    system:
      'FastAPI COI on EU VPS — jadzia.db unifies leads and ops; customer_agent powers wizard and portal chat; Paramiko SSH agent supervises WordPress with Telegram HITL. WC order sync: PLANNED.',
    real: 'COI live — widget chat, WP SSH pipeline, worker queue, hot-lead alerts and weekly strategy brief.',
    measurement: caseMeasurements.jadziaCoi.value ?? '',
    intents: ['time', 'calm', 'order', 'efficiency'],
    manifestKey: 'jadziaCoi',
    detailHref: ROUTES.resultsJadziaCoi,
  },
  {
    slug: 'sales-funnel',
    number: '03',
    title: 'Self-service quote & onboarding',
    meta: 'Wizard Cash Engine · zzpackage · live',
    context: 'My own sales funnel — the same "what do you charge?" questions, answered by the system.',
    system:
      'Wizard Cash Engine on zzpackage.flexgrafik.nl — 9 UI screens, Mollie checkout from €199, calm form or designer handoff.',
    real: 'Working funnel — pick options → upload logo → see price → pay via Mollie.',
    measurement: '9 UI screens · 7 business decision stages → quote → payment, live.',
    intents: ['money', 'efficiency'],
    manifestKey: 'salesFunnel',
    detailHref: ROUTES.resultsSalesFunnel,
  },
  {
    slug: 'agent-orchestrator',
    number: '04',
    title: agentOsDisplayName,
    meta: 'Agent OS · jadzia-core · Flex-VCMS',
    context:
      'A multi-repo stack needs named layers — not one generic “AI engine”. Engineering execution, business ops and governance must stay separable with human gates.',
    system:
      'Agent OS — 5-node LangGraph HITL on VPS. Sits alongside jadzia-core (ops) and Flex-VCMS (governance) — three named layers, one ecosystem.',
    real: 'Prod smoke PASS — HITL approve/reject/cancel, Langfuse costs, E2E handoff on disk. Guided agency demo; not public SaaS.',
    measurement: caseMeasurements.agentOs.value ?? '',
    intents: ['time', 'efficiency', 'order'],
    manifestKey: 'agentOs',
    detailHref: ROUTES.resultsAgentOrchestrator,
  },
  {
    slug: 'lead-magnet',
    number: '05',
    title: leadMagnetDisplayName,
    meta: 'Gamified lead system · live',
    context:
      'Dutch ZZP contractors ignore static forms. The brief: turn cold traffic into qualified wizard handoffs without a brochure-site feel.',
    system:
      'Discount + sticker → shirt → hoodie ladder → register gate → five acts → leaderboard season → coupon bridge into self-service quoting.',
    real: 'Live on app.flexgrafik.nl — full funnel instrumented in GA4.',
    measurement: caseMeasurements.leadMagnet.value ?? '',
    intents: ['money'],
    manifestKey: 'leadMagnet',
    detailHref: ROUTES.resultsLeadMagnet,
  },
  {
    slug: 'inbox-killer',
    number: '06',
    title: 'The self-running back-office',
    meta: `Inbox Killer · B2B · live ops`,
    context:
      'Deployed in my own NL print-business ecosystem (2+ years in production). Same architecture I deploy for clients — not theory.',
    system:
      'Reads mail via OAuth, classifies into lanes, drafts replies, and stops at a human approval gate before anything sends.',
    real: caseMeasurements.inboxKiller.value ?? '',
    measurement: caseMeasurements.inboxKiller.value ?? '',
    intents: ['time', 'calm'],
    manifestKey: 'inboxKiller',
    detailHref: ROUTES.resultsInboxKiller,
  },
  {
    slug: 'advisory-modernisation',
    number: '07',
    title: 'Modernisation + AI assistant for an advisory firm',
    meta: 'Web Upgrade + assistant · anonymised',
    context:
      'Scope designed for advisory-firm modernisation (anonymised reference brief) — same delivery patterns as my live stack.',
    system:
      'Site modernisation + a lead-qualifying AI assistant (qualification only, no tax advice) + a human-approved content engine, with a signed data-processing agreement.',
    real: 'Full scope designed, security & AVG layer specified, staged delivery.',
    measurement: '6-phase delivery, AVG layer specified · anonymised · in delivery.',
    intents: ['money', 'order'],
    manifestKey: 'advisory',
    detailHref: ROUTES.resultsAdvisoryModernisation,
  },
  {
    slug: 'whatsapp-discovery-pilot',
    number: '08',
    title: 'WhatsApp discovery pilot',
    meta: 'Pilot · async qualification',
    context:
      'Cold calls waste time. A chat agent asks 6–8 questions, scores fit, and delivers a brief — same path used for discovery.',
    system:
      'Async WhatsApp qualification with scored brief output — human review before any follow-up.',
    real: 'Pilot walkthrough — screen recording and brief PDF output path documented.',
    measurement: '6–8 question flow · scored brief · pilot stage.',
    intents: ['time', 'money'],
    manifestKey: 'ownerEcosystem',
    detailHref: ROUTES.resultsWhatsappPilot,
  },
];

export function getCaseStudyBySlug(slug: string): CaseStudy | undefined {
  return CASE_STUDIES.find((c) => c.slug === slug);
}

/** Home ResultsTeaser — wizard + ecosystem first */
export const FEATURED_CASE_SLUGS = [
  'jadzia-coi',
  'owner-ecosystem',
  'sales-funnel',
] as const;
