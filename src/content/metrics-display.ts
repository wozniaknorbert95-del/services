// ============================================================================
// METRICS DISPLAY — binds proof.metrics values to labels, outcomes, intent colors.
// Values live in proof.ts; presentation config lives here.
// ============================================================================

import type { IntentId } from '@/content/ecosystem';
import { metrics } from '@/content/proof';

export type MetricKey = keyof typeof metrics;

export interface MetricDisplayCard {
  metricKey: MetricKey;
  label: string;
  outcome: string;
  intent: IntentId;
}

/** Home SystemMetrics section — site-map.md §2 #7 */
export const METRIC_DISPLAY_CARDS: readonly MetricDisplayCard[] = [
  {
    metricKey: 'wizardSteps',
    label: 'Wizard steps',
    outcome: 'Qualifies a lead in-session — not days of email ping-pong',
    intent: 'time',
  },
  {
    metricKey: 'skus',
    label: 'Dynamic SKUs',
    outcome: 'Full product context — fewer back-and-forth quotes',
    intent: 'order',
  },
  {
    metricKey: 'workflowSteps',
    label: 'Workflow steps',
    outcome: 'Repeat tasks routed through a fixed pipeline with review gates',
    intent: 'efficiency',
  },
  {
    metricKey: 'systemsLive',
    label: 'Systems live',
    outcome: 'One supervised ecosystem — not five disconnected tools',
    intent: 'order',
  },
  {
    metricKey: 'msgsPerScan',
    label: 'Inbox throughput',
    outcome: 'Every batch sorted before you open the inbox',
    intent: 'time',
  },
  {
    metricKey: 'repos',
    label: 'Production repos',
    outcome: 'Governance layer scans the full stack before deploy',
    intent: 'order',
  },
] as const;

export function getMetricValue(key: MetricKey): string {
  const value = metrics[key];
  return typeof value === 'string' ? value : String(value);
}

export const SYSTEM_METRICS_COPY = {
  eyebrow: '// The system, in numbers',
  lead: 'Feature counts with outcome translations — what they mean for your business, not just for developers.',
} as const;
