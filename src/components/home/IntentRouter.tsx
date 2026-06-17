'use client';

import { useMemo, useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ECOSYSTEM_MODULES,
  INTENT_LEGEND,
  getIntentMeta,
  type IntentId,
} from '@/content/ecosystem';
import { ROUTES } from '@/lib/constants';
import IntentBadges from '@/components/ui/IntentBadges';
import ModulePreviewThumb from '@/components/ui/ModulePreviewThumb';

/** When filtering by order — surface governance (VCMS) first. */
const ORDER_INTENT_MODULE_IDS = ['m5', 'm1', 'm7', 'm8'] as const;

function sortModulesForIntent(modules: typeof ECOSYSTEM_MODULES, intent: IntentId) {
  if (intent !== 'order') return [...modules];

  return [...modules].sort((a, b) => {
    const ai = ORDER_INTENT_MODULE_IDS.indexOf(a.id as (typeof ORDER_INTENT_MODULE_IDS)[number]);
    const bi = ORDER_INTENT_MODULE_IDS.indexOf(b.id as (typeof ORDER_INTENT_MODULE_IDS)[number]);
    return (ai === -1 ? 99 : ai) - (bi === -1 ? 99 : bi);
  });
}

export default function IntentRouter() {
  const [activeIntent, setActiveIntent] = useState<IntentId | null>(null);

  const filteredModules = useMemo(() => {
    const base = activeIntent
      ? ECOSYSTEM_MODULES.filter((m) => m.intents.includes(activeIntent))
      : [...ECOSYSTEM_MODULES];
    return activeIntent ? sortModulesForIntent(base, activeIntent) : base;
  }, [activeIntent]);

  const recommended = filteredModules[0];

  return (
    <section
      data-home-section="intent-router"
      className="py-24 px-6 sm:px-12 max-w-7xl mx-auto flex flex-col gap-16 relative"
    >
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-24 bg-gradient-to-b from-transparent to-[var(--border-strong)] opacity-50" />

      <div className="text-center max-w-2xl mx-auto space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 mb-4 rounded-full border border-[var(--border-subtle)] bg-[var(--bg-elevated)] text-xs font-mono text-[var(--text-muted)]">
          <span className="w-2 h-2 rounded-full bg-[var(--qf-accent)]" />
          Find your path
        </div>
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
          What do you want to improve in your business?
        </h2>
        <p className="text-[var(--text-muted)] text-lg">
          You pick business outcomes. I match the system underneath — not a generic service list.
        </p>
      </div>

      <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
        {INTENT_LEGEND.map((intent) => {
          const isActive = activeIntent === intent.id;
          return (
            <button
              key={intent.id}
              type="button"
              aria-pressed={isActive}
              onClick={() => setActiveIntent(isActive ? null : intent.id)}
              className={`
                relative px-6 py-4 rounded-xl border text-sm sm:text-base font-medium transition-all duration-300
                hover:-translate-y-0.5 hover:shadow-lg
                ${isActive ? 'border-transparent text-white' : 'border-[var(--border-subtle)] bg-[var(--bg-elevated)] text-[var(--text-main)] hover:border-[var(--border-strong)]'}
              `}
              style={
                isActive
                  ? {
                      backgroundColor: intent.cssVar,
                      boxShadow: `0 4px 20px color-mix(in srgb, ${intent.cssVar} 40%, transparent)`,
                    }
                  : undefined
              }
            >
              {intent.label}
            </button>
          );
        })}
      </div>

      <div className="flex flex-wrap justify-center gap-6 px-4 py-4 border-y border-[var(--border-subtle)] bg-[var(--bg-elevated)]/50">
        {INTENT_LEGEND.map((item) => (
          <div
            key={item.id}
            className="flex items-center gap-2 text-xs sm:text-sm font-mono text-[var(--text-muted)]"
          >
            <span className="w-3 h-3 rounded-full" style={{ backgroundColor: item.cssVar }} />
            {item.legend}
          </div>
        ))}
      </div>

      {activeIntent && (
        <p className="text-center text-sm font-mono text-[var(--text-muted)]">
          {filteredModules.length} system{filteredModules.length === 1 ? '' : 's'} match your goal
          {filteredModules.some((m) => m.id === 'm5') ? ' — including VCMS governance' : ''}
        </p>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <AnimatePresence mode="popLayout">
          {filteredModules.map((module) => (
            <motion.div
              layout
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.25 }}
              key={module.id}
            >
              <Link
                href={module.route}
                className="panel flex flex-col p-6 group hover:border-[var(--border-strong)] transition-colors h-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--qf-accent)] rounded-[inherit]"
              >
                <ModulePreviewThumb screenKey={module.screenKey} />
                <h3 className="text-lg font-bold mb-2 flex-grow-0 group-hover:text-[var(--qf-accent)] transition-colors">
                  {module.name}
                </h3>
                <p className="text-sm text-[var(--text-muted)] mb-6 flex-grow">{module.effect}</p>

                <div className="flex items-center justify-between mt-auto pt-4 border-t border-[var(--border-subtle)]">
                  <IntentBadges intents={[...module.intents]} />
                  <span className="text-xs font-mono text-[var(--qf-accent)] group-hover:underline">
                    Details →
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      <motion.div
        layout
        className="mt-8 max-w-3xl mx-auto p-8 rounded-2xl border border-[var(--border-strong)] bg-gradient-to-b from-[var(--bg-elevated)] to-[var(--bg-base)] text-center relative overflow-hidden"
      >
        {activeIntent && (
          <div
            className="absolute top-0 left-0 w-full h-1"
            style={{ backgroundColor: getIntentMeta(activeIntent).cssVar }}
          />
        )}

        <p className="text-sm font-mono text-[var(--text-muted)] mb-3">Next step</p>
        <p className="text-xl sm:text-2xl font-medium mb-8">
          {activeIntent && recommended
            ? `Based on your choice, I recommend starting with: ${recommended.name}`
            : 'Start with a paid Automation Map — then we pick the right module.'}
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link
            href={ROUTES.bookDiscovery}
            className="btn px-8 py-3 text-base flex items-center justify-center gap-2 bg-[var(--text-main)] text-[var(--bg-base)] hover:bg-white hover:text-black"
          >
            Book your Automation Map
          </Link>
          <Link
            href={ROUTES.results}
            className="btn px-8 py-3 text-base flex items-center justify-center gap-2"
          >
            See the systems
          </Link>
        </div>
      </motion.div>
    </section>
  );
}
