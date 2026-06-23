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
    outcome: 'Qualifies a lead in-session',
    intent: 'time',
  },
  {
    metricKey: 'workflowSteps',
    label: 'Workflow steps',
    outcome: 'Repeat tasks through a fixed pipeline',
    intent: 'efficiency',
  },
  {
    metricKey: 'systemsLive',
    label: 'Systems live',
    outcome: 'One supervised ecosystem',
    intent: 'order',
  },
  {
    metricKey: 'msgsPerScan',
    label: 'Inbox throughput',
    outcome: 'Every batch sorted before you open your inbox',
    intent: 'time',
  },
] as const;

export function getMetricValue(key: MetricKey): string {
  const value = metrics[key];
  return typeof value === 'string' ? value : String(value);
}

export const SYSTEM_METRICS_COPY = {
  eyebrow: '// metrics',
  lead: 'What the numbers mean for your business — not just for developers.',
} as const;
