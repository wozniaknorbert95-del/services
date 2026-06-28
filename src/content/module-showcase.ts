// ============================================================================
// MODULE SHOWCASE — portfolio copy synced with flexgrafik-meta/docs/core/modules/
// Components read effects/highlights from here — not hardcoded in JSX.
// ============================================================================

export interface ModuleShowcase {
  repoKey: string;
  portfolioLabel: string;
  effect: string;
  highlights: readonly string[];
}

import { metrics } from '@/content/proof';

/** Eight-repo portfolio presentation — aligned with module specs 2026-06-24 */
export const MODULE_SHOWCASE: Record<string, ModuleShowcase> = {
  zzpackage: {
    repoKey: 'zzpackage',
    portfolioLabel: 'Wizard Cash Engine',
    effect:
      `Wizard-only checkout — 7 business stages, 9 UI screens, ${metrics.skus} SKU catalog, Mollie payments from €199 minimum.`,
    highlights: ['Mollie + WooCommerce', 'Open pricing configurator', 'Game coupon attribution'],
  },
  'app.flexgrafik.nl': {
    repoKey: 'app.flexgrafik.nl',
    portfolioLabel: 'Lead magnet game',
    effect:
      'Bouwplaats Chaos — PWA skill platformer with Turnstile gate, 4-tier reward ladder and wizard bridge.',
    highlights: ['GAME10 → hoodie ladder', 'Season leaderboard', 'GA4 + wizard deep links'],
  },
  'jadzia-core': {
    repoKey: 'jadzia-core',
    portfolioLabel: 'Jadzia COI',
    effect:
      'Chief Operating Intelligence — Phase A+B LIVE: orders INT-002, leads, GA4 snapshot, content calendar, WP SSH and sales chat in one HITL-governed loop.',
    highlights: ['INT-002 order sync LIVE', 'GA4 + content calendar', 'Telegram + worker queue'],
  },
  'agent-os': {
    repoKey: 'agent-os',
    portfolioLabel: 'Agent OS',
    effect:
      '5-node LangGraph engineering pipeline — hybrid VPS queue plus Local Runner on your machine.',
    highlights: ['Planner → Summarizer', 'Langfuse cost tracking', 'Multi-repo smoke gates'],
  },
  'flexgrafik-nl': {
    repoKey: 'flexgrafik-nl',
    portfolioLabel: 'Trust Portal',
    effect:
      'flexgrafik.nl brand portal — dark premium trust surface, blog SEO, primary CTA to wizard, secondary to game.',
    highlights: ['Elementor-free templates', 'Asset sync from wizard', 'Sales chat widget'],
  },
  'flexgrafik-meta': {
    repoKey: 'flexgrafik-meta',
    portfolioLabel: 'Constitution',
    effect:
      'Ecosystem constitution — global rules, master plan, agent hierarchy and module specs agents read at session start.',
    highlights: ['Automation Map method', 'Agent cards', 'Enterprise doc suite'],
  },
  'flex-vcms': {
    repoKey: 'flex-vcms',
    portfolioLabel: 'VCMS governance',
    effect:
      'Governance OS — 8-repo scan, conflict detection, ecosystem map generation and governance audit trail.',
    highlights: ['Conflicts: 0 target', 'KODA read-only assistant', 'Handoff index'],
  },
  'agent-os-ui': {
    repoKey: 'agent-os-ui',
    portfolioLabel: 'Mission Control',
    effect:
      'Operator cockpit — HITL approve/reject diffs, task queue, history and Langfuse cost tab.',
    highlights: ['Browser smoke tooling', 'Terminal design tokens', 'OpenAPI-typed client'],
  },
} as const;

export function getModuleShowcase(repoKey: string): ModuleShowcase | undefined {
  return MODULE_SHOWCASE[repoKey];
}
