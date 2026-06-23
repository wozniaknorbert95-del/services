'use client';

import { useMemo } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ECOSYSTEM_MODULES,
  INTENT_LEGEND,
  getIntentMeta,
  type IntentId,
} from '@/content/ecosystem';
import { ROUTES } from '@/lib/constants';
import { useHomeIntent } from '@/lib/home-intent';
import IntentBadges from '@/components/ui/IntentBadges';
import ModulePreviewThumb from '@/components/ui/ModulePreviewThumb';
import Button from '@/components/ui/Button';

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
  const { activeIntent, setActiveIntent } = useHomeIntent();

  const filteredModules = useMemo(() => {
    const base = activeIntent
      ? ECOSYSTEM_MODULES.filter((m) => m.intents.includes(activeIntent))
      : [...ECOSYSTEM_MODULES];
    return activeIntent ? sortModulesForIntent(base, activeIntent) : base;
  }, [activeIntent]);

  const recommended = filteredModules[0];
  const filterLabel = activeIntent
    ? `Showing: ${filteredModules.length} module${filteredModules.length === 1 ? '' : 's'} matching "${getIntentMeta(activeIntent).label}"`
    : `Showing: all ${ECOSYSTEM_MODULES.length} modules`;

  return (
    <section
      data-home-section="intent-router"
      className="relative border-t border-[var(--qf-border)] py-[var(--qf-sp-24)]"
    >
      <div className="mx-auto flex max-w-[var(--qf-maxw)] flex-col gap-[var(--qf-sp-12)] px-[var(--qf-sp-6)]">
        <div className="mx-auto max-w-2xl text-center">
          <span className="qf-eyebrow">// route --by-outcome</span>
          <h2 className="mt-[var(--qf-sp-4)]">
            What do you want to improve in your business?
          </h2>
          <p className="qf-lead mx-auto mt-[var(--qf-sp-4)]">
            You pick business outcomes. I match the system underneath — not a generic service list.
          </p>
        </div>

        <div className="mx-auto flex max-w-4xl flex-wrap justify-center gap-[var(--qf-sp-3)]">
          {INTENT_LEGEND.map((intent) => {
            const isActive = activeIntent === intent.id;
            return (
              <button
                key={intent.id}
                type="button"
                aria-pressed={isActive}
                onClick={() => setActiveIntent(isActive ? null : intent.id)}
                className={`border px-6 py-3 text-sm font-medium transition-colors duration-[var(--qf-transition)] sm:text-base ${
                  isActive
                    ? 'border-transparent text-[var(--qf-bg)]'
                    : 'border-[var(--qf-border)] bg-[var(--qf-bg-raised)] text-[var(--qf-text)] hover:border-[var(--qf-border-bright)]'
                }`}
                style={
                  isActive
                    ? {
                        backgroundColor: intent.cssVar,
                        borderColor: intent.cssVar,
                      }
                    : undefined
                }
              >
                {isActive ? '✓ ' : ''}
                {intent.label}
              </button>
            );
          })}
        </div>

        <p className="text-center font-mono text-xs text-[var(--qf-text-dim)]">{filterLabel}</p>

        <div className="grid grid-cols-1 gap-[var(--qf-sp-4)] md:grid-cols-2 lg:grid-cols-4">
          <AnimatePresence mode="popLayout">
            {filteredModules.map((module) => (
              <motion.div
                layout
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                key={module.id}
              >
                <Link
                  href={module.route}
                  className="group flex h-full flex-col border border-[var(--qf-border)] bg-[var(--qf-bg-raised)] p-[var(--qf-sp-6)] transition-colors duration-[var(--qf-transition)] hover:border-[var(--qf-border-bright)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--qf-accent)]"
                >
                  <ModulePreviewThumb screenKey={module.screenKey} />
                  <h3 className="mb-2 text-[var(--qf-fs-lg)] font-bold transition-colors group-hover:text-[var(--qf-accent)]">
                    {module.name}
                  </h3>
                  <p className="mb-6 flex-grow text-sm text-[var(--qf-text-dim)]">{module.effect}</p>

                  <div className="mt-auto flex items-center justify-between border-t border-[var(--qf-border)] pt-4">
                    <IntentBadges intents={[...module.intents]} />
                    <span className="font-mono text-xs text-[var(--qf-accent)] group-hover:underline">
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
          className="relative mx-auto max-w-3xl overflow-hidden border border-[var(--qf-border)] bg-[var(--qf-bg-raised)] p-[var(--qf-sp-8)] text-center"
        >
          {activeIntent ? (
            <div
              className="absolute left-0 top-0 h-1 w-full"
              style={{ backgroundColor: getIntentMeta(activeIntent).cssVar }}
            />
          ) : null}

          <p className="mb-3 font-mono text-xs text-[var(--qf-text-dim)]">// next_step</p>
          <p className="mb-[var(--qf-sp-8)] text-[var(--qf-fs-lg)] font-semibold text-[var(--qf-text)]">
            {activeIntent && recommended
              ? `Recommended: ${recommended.name}`
              : 'Start with a paid Automation Map — then we pick the right module.'}
          </p>

          <div className="flex flex-col justify-center gap-[var(--qf-sp-4)] sm:flex-row">
            <Button href={ROUTES.bookDiscovery} withArrow>
              Book your Automation Map
            </Button>
            <Button href={ROUTES.results} variant="secondary" withArrow>
              See the systems
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
