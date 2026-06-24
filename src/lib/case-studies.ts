import { ROUTES } from '@/lib/constants';
import type { CaseMeasurementKey, IntentId } from '@/content/ecosystem';
import { caseMeasurements } from '@/content/proof';
import { agentOsDisplayName } from '@/content/agent-os-case-study';
import {
  leadMagnetDisplayName,
  leadMagnetSalesOneLiner,
} from '@/content/lead-magnet-case-study';

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

export const CASE_STUDIES: CaseStudy[] = [
  {
    slug: 'inbox-killer',
    number: '01',
    title: 'The self-running back-office',
    meta: 'Inbox Killer · live',
    context:
      'Deployed in my own NL print-business ecosystem (2+ years in production). Same architecture I deploy for clients — not theory.',
    system:
      'An agent that reads folders, sorts by intent, drafts replies, and stops at a human approval gate before anything sends.',
    real: 'Live mailbox, 142 msgs/scan, human-in-the-loop on every send.',
    measurement: 'Live mailbox, 142 msgs/scan, human approval on every send.',
    intents: ['time', 'calm'],
    manifestKey: 'inboxKiller',
    detailHref: ROUTES.resultsInboxKiller,
  },
  {
    slug: 'agent-orchestrator',
    number: '02',
    title: agentOsDisplayName,
    meta: 'Agent OS 2.0 · hybrid · production',
    context:
      'My own multi-repo business stack — orders, content, CRM — coordinated by a VPS control plane that runs 24/7 while code execution stays on a supervised local runner.',
    system:
      'FastAPI + LangGraph + PostgreSQL on an EU VPS. Hybrid routing via WAITING_RUNNER: orchestration and HITL online; git/code work on the dev PC. Mission Control UI for tasks, queue, history and costs.',
    real: 'Prod smoke PASS — HITL approve/reject/cancel, Langfuse cost tracking, E2E handoff on disk. Guided demo ready; not a public SaaS.',
    measurement: caseMeasurements.agentOs.value ?? '',
    intents: ['time', 'efficiency'],
    manifestKey: 'agentOs',
    detailHref: ROUTES.resultsAgentOrchestrator,
  },
  {
    slug: 'sales-funnel',
    number: '03',
    title: 'Self-service quote & onboarding',
    meta: 'Sales Funnel Engine',
    context: 'My own sales funnel — the same "what do you charge?" questions, answered by the system.',
    system:
      'A 9-step configurator with open pricing and payment — qualifies, quotes and books without a phone call.',
    real: 'Working funnel — pick options → upload logo → see price → pay.',
    measurement: '9-step configurator → quote → payment, live.',
    intents: ['money', 'efficiency'],
    manifestKey: 'salesFunnel',
    detailHref: ROUTES.resultsSalesFunnel,
  },
  {
    slug: 'lead-magnet',
    number: '04',
    title: leadMagnetDisplayName,
    meta: 'Gamified lead system · live',
    context:
      'Dutch ZZP contractors ignore static forms. The brief: turn cold traffic into qualified wizard handoffs without a brochure-site feel.',
    system:
      'Game loop + reward ladder → register gate → five acts → leaderboard season → coupon bridge into self-service quoting.',
    real: 'Live on app.flexgrafik.nl — full funnel instrumented in GA4.',
    measurement: caseMeasurements.leadMagnet.value ?? '',
    intents: ['money'],
    manifestKey: 'leadMagnet',
    detailHref: ROUTES.resultsLeadMagnet,
  },
  {
    slug: 'advisory-modernisation',
    number: '05',
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
    slug: 'owner-ecosystem',
    number: '06',
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
];

export function getCaseStudyBySlug(slug: string): CaseStudy | undefined {
  return CASE_STUDIES.find((c) => c.slug === slug);
}
