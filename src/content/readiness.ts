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
}

export const READINESS_HEADER = {
  eyebrow: 'honesty_gate',
  title: 'What is live today vs what is on the roadmap.',
  lead:
    'No inflated metrics — evidence from production code and governance scans (Conflicts: 0). Percentages reflect AS-IS inventory, not revenue claims.',
} as const;

/** Eight-repo readiness — sync with flexgrafik-meta as-is-inventory.md */
export const READINESS_ROWS: readonly ReadinessRow[] = [
  {
    module: 'Wizard Cash Engine',
    repoKey: 'zzpackage',
    readiness: '~90%',
    capability: `${metrics.skus} SKU catalog, Mollie checkout, 9-screen configurator`,
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
    readiness: '~55%',
    capability: 'Phase A+B LIVE: orders INT-002, leads, GA4, content calendar · Procurement Brain Phase C',
    status: 'PARTIAL',
  },
  {
    module: 'Agent OS',
    repoKey: 'agent-os',
    readiness: '~90%',
    capability: '5-node LangGraph HITL pipeline, hybrid VPS',
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
