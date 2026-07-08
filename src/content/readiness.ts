// ============================================================================
// READINESS MANIFEST — Built vs Planned table (honest AS-IS inventory).
// Source: flexgrafik-meta/docs/core/as-is-inventory.md §1 (2026-06-24)
// ============================================================================

import { metrics } from '@/content/proof';

export type ReadinessStatus = 'LIVE' | 'PARTIAL' | 'PLANNED';

export interface ReadinessRow {
  module: string;
  repoKey: string;
  readiness: string;
  capability: string;
  status: ReadinessStatus;
  /** De-jargonised capability for home compact (site-map §3 v3.0 #6). Falls back to `capability`. */
  homeCapability?: string;
}

export const READINESS_HEADER = {
  eyebrow: 'honesty_gate',
  title: 'What is live today vs what is on the roadmap.',
  lead:
    'No inflated metrics — evidence from production code and governance scans (Conflicts: 0). Percentages reflect AS-IS inventory, not revenue claims.',
} as const;

/**
 * Home compact selection — site-map.md §3 v3.0 #6 (4 rows per Commander decision mapa.txt).
 * Order: Wizard, Jadzia COI, Agent OS, Governance (T4: replaced Lead Magnet with Governance).
 * Full 8-row table on `/results/owner-ecosystem/`.
 */
export const HOME_ROW_KEYS = ['zzpackage', 'jadzia-core', 'agent-os', 'flex-vcms'] as const;

/** Eight-repo readiness — sync with flexgrafik-meta as-is-inventory.md */
export const READINESS_ROWS: readonly ReadinessRow[] = [
  {
    module: 'Wizard Cash Engine',
    repoKey: 'zzpackage',
    readiness: '~90%',
    capability: `${metrics.skus} SKU catalog, Mollie checkout, 9-screen configurator`,
    homeCapability: 'Self-service configurator with open pricing — calm order form or designer handoff.',
    status: 'LIVE',
  },
  {
    module: 'Lead magnet game',
    repoKey: 'app.flexgrafik.nl',
    readiness: '~85%',
    capability: 'Bouwplaats Chaos PWA, Turnstile, 4-tier ladder, wizard bridge',
    status: 'LIVE',
  },
  {
    module: 'Jadzia COI',
    repoKey: 'jadzia-core',
    readiness: '~85%',
    capability:
      'Phase A+B LIVE: orders INT-002, leads, GA4, content calendar, chat, WP agent, worker HITL · Procurement Phase C',
    homeCapability: 'Orders, leads, analytics and content tracked live — procurement brain on roadmap.',
    status: 'LIVE',
  },
  {
    module: 'Agent OS',
    repoKey: 'agent-os',
    readiness: '~90%',
    capability: '5-node LangGraph HITL pipeline, hybrid VPS',
    homeCapability: '5-step supervised workflow with human approval before deploy — EU VPS.',
    status: 'LIVE',
  },
  {
    module: 'Trust portal',
    repoKey: 'flexgrafik-nl',
    readiness: '~75%',
    capability: 'Brand portal, CTAs, generic sales chat',
    status: 'LIVE',
  },
  {
    module: 'Constitution',
    repoKey: 'flexgrafik-meta',
    readiness: '~80%',
    capability: 'Global rules, strategy canon, investor docs',
    status: 'LIVE',
  },
  {
    module: 'VCMS governance',
    repoKey: 'flex-vcms',
    readiness: '~85%',
    capability: '8-repo scan, KODA assistant, conflict detection, audit trail',
    homeCapability: 'Catches content and repo drift before deploy — Conflicts: 0 target.',
    status: 'LIVE',
  },
  {
    module: 'Mission Control',
    repoKey: 'agent-os-ui',
    readiness: '~85%',
    capability: 'Task queue, HITL dashboard, cost tracking',
    status: 'LIVE',
  },
] as const;

export function getReadinessStatus(repoKey: string): ReadinessStatus | undefined {
  return READINESS_ROWS.find((row) => row.repoKey === repoKey)?.status;
}

export function readinessStatusClass(status: ReadinessStatus): string {
  if (status === 'LIVE') return 'text-emerald-500';
  if (status === 'PARTIAL') return 'text-amber-500';
  return 'text-[var(--qf-text-faint)]';
}

/** Home compact rows — filtered by HOME_ROW_KEYS, preserves order. */
export function getHomeReadinessRows(): readonly ReadinessRow[] {
  return HOME_ROW_KEYS.map((key) =>
    READINESS_ROWS.find((row) => row.repoKey === key)
  ).filter((row): row is ReadinessRow => row !== undefined);
}
