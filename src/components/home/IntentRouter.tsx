'use client';

import { useMemo } from 'react';
import Link from 'next/link';
import { AnimatePresence, motion } from 'framer-motion';
import {
  getHomeRepos,
  INTENT_ROUTER_HEADER,
  getIntentMeta,
  type IntentId,
  type EcosystemRepo,
} from '@/content/ecosystem';
import { getReadinessStatus } from '@/content/readiness';
import { ROUTES } from '@/lib/constants';
import { CTAS } from '@/content/conversion-copy';
import { useHomeIntent } from '@/lib/home-intent';
import { filterByIntentMatch } from '@/lib/intent-highlight';
import { useMotion } from '@/lib/useMotion';
import IntentBadges from '@/components/ui/IntentBadges';
import StatusBadge from '@/components/ui/StatusBadge';
import ModulePreviewThumb from '@/components/ui/ModulePreviewThumb';
import Button from '@/components/ui/Button';
import IntentFilterChips from '@/components/home/IntentFilterChips';

/** When filtering by order — surface governance repos first among matches. */
const ORDER_INTENT_REPO_KEYS = [
  'flex-vcms',
  'flexgrafik-meta',
  'agent-os-ui',
  'flexgrafik-nl',
] as const;

function orderRepos(repos: EcosystemRepo[]) {
  return [...repos].sort((a, b) => {
    const ai = ORDER_INTENT_REPO_KEYS.indexOf(
      a.repoKey as (typeof ORDER_INTENT_REPO_KEYS)[number]
    );
    const bi = ORDER_INTENT_REPO_KEYS.indexOf(
      b.repoKey as (typeof ORDER_INTENT_REPO_KEYS)[number]
    );
    return (ai === -1 ? 99 : ai) - (bi === -1 ? 99 : bi);
  });
}

function visibleReposForIntent(
  repos: readonly EcosystemRepo[],
  intent: IntentId | null
): EcosystemRepo[] {
  const matched = filterByIntentMatch(repos, intent);
  if (intent === 'order') {
    return orderRepos(matched);
  }
  return matched;
}

export default function IntentRouter({ showChips = true }: { showChips?: boolean }) {
  const motionCfg = useMotion();
  const { activeIntent, setActiveIntent, isFiltering } = useHomeIntent();
  const homeRepos = useMemo(() => getHomeRepos(), []);

  const visibleRepos = useMemo(
    () => visibleReposForIntent(homeRepos, activeIntent),
    [activeIntent, homeRepos]
  );

  const recommended = useMemo(() => {
    if (!activeIntent) {
      return homeRepos.find((r) => r.flagship) ?? homeRepos[0];
    }
    return visibleRepos[0] ?? homeRepos[0];
  }, [activeIntent, visibleRepos, homeRepos]);

  const filterLabel =
    activeIntent
      ? INTENT_ROUTER_HEADER.filterActive(
          getIntentMeta(activeIntent).label,
          visibleRepos.length
        )
      : showChips
        ? INTENT_ROUTER_HEADER.filterAll(homeRepos.length)
        : INTENT_ROUTER_HEADER.filterAllHome(homeRepos.length);

  const title =
    isFiltering && activeIntent
      ? INTENT_ROUTER_HEADER.titleFiltered(getIntentMeta(activeIntent).label)
      : INTENT_ROUTER_HEADER.title;
  const lead =
    isFiltering && activeIntent
      ? INTENT_ROUTER_HEADER.leadFiltered
      : INTENT_ROUTER_HEADER.lead;

  return (
    <section
      id="repo-router"
      data-home-section="repo-router"
      className="relative border-t border-[var(--qf-border)] py-[var(--qf-sp-24)]"
    >
      <div className="mx-auto flex max-w-[var(--qf-maxw)] flex-col gap-[var(--qf-sp-12)] px-[var(--qf-sp-6)]">
        <div className="mx-auto max-w-2xl text-center">
          <span className="qf-eyebrow">{INTENT_ROUTER_HEADER.eyebrow}</span>
          <h2 className="mt-[var(--qf-sp-4)]">{title}</h2>
          <p className="qf-lead mx-auto mt-[var(--qf-sp-4)]">{lead}</p>
        </div>

        {showChips ? <IntentFilterChips /> : null}

        <p className="text-center font-mono text-xs text-[var(--qf-text-dim)]" aria-live="polite">
          {filterLabel}
        </p>

        {visibleRepos.length === 0 && activeIntent ? (
          <p className="text-center text-sm text-[var(--qf-text-dim)]">
            <button
              type="button"
              className="font-semibold text-[var(--qf-accent)] underline-offset-2 hover:underline"
              onClick={() => setActiveIntent(null)}
            >
              Show all modules
            </button>
          </p>
        ) : (
          <motion.div
            layout
            className={`grid grid-cols-1 gap-[var(--qf-sp-4)] md:grid-cols-2 lg:grid-cols-4${
              isFiltering ? ' qf-module-grid--filtered' : ''
            }`}
          >
            <AnimatePresence mode="popLayout">
              {visibleRepos.map((repo) => {
                const readiness = getReadinessStatus(repo.repoKey);

                return (
                  <motion.div
                    layout
                    key={repo.repoKey}
                    initial={motionCfg.prefersReduced ? false : { opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={motionCfg.prefersReduced ? undefined : { opacity: 0, scale: 0.98 }}
                    transition={{ duration: motionCfg.prefersReduced ? 0 : 0.2 }}
                    className="min-h-[12rem]"
                  >
                    <Link
                      href={repo.proofRoute}
                      prefetch
                      data-filter-intent={activeIntent ?? undefined}
                      className="qf-module-card group"
                    >
                      <div className="mb-3 flex items-center justify-between gap-2">
                        <p className="text-sm font-semibold text-[var(--qf-text)]">{repo.role}</p>
                        {readiness ? <StatusBadge status={readiness} /> : null}
                      </div>
                      {repo.screenKey ? <ModulePreviewThumb screenKey={repo.screenKey} /> : null}
                      <h3 className="mb-2 text-[var(--qf-fs-base)] font-bold text-[var(--qf-text)] transition-colors group-hover:text-[var(--pain-accent)]">
                        {repo.outcomeLabel}
                      </h3>
                      {(repo.homeStatusNote ?? repo.statusNote) ? (
                        <p className="mb-4 flex-grow text-sm text-[var(--qf-text-dim)]">
                          {repo.homeStatusNote ?? repo.statusNote}
                        </p>
                      ) : (
                        <p className="mb-4 flex-grow text-sm text-[var(--qf-text-dim)]">
                          Live on FlexGrafik — open the proof page for details.
                        </p>
                      )}

                      <div className="mt-auto flex items-center justify-between border-t border-[var(--qf-border)] pt-4">
                        {!isFiltering ? (
                          <IntentBadges intents={[...repo.intents]} />
                        ) : (
                          <span className="font-mono text-[10px] uppercase tracking-wider text-[var(--pain-accent)]">
                            {activeIntent ? getIntentMeta(activeIntent).shortLabel : ''}
                          </span>
                        )}
                        <span className="qf-module-card-proof group-hover:underline">
                          Proof →
                        </span>
                      </div>
                    </Link>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </motion.div>
        )}

        <motion.div
          layout
          className="relative mx-auto max-w-3xl overflow-hidden border border-[var(--qf-border)] bg-[var(--qf-bg-raised)] p-[var(--qf-sp-8)] text-center"
        >
          <p className="mb-3 font-mono text-xs text-[var(--qf-text-dim)]">{'// next_step'}</p>
          <p className="mb-[var(--qf-sp-8)] text-[var(--qf-fs-lg)] font-semibold text-[var(--qf-text)]">
            {activeIntent && recommended
              ? INTENT_ROUTER_HEADER.nextStepRecommended(recommended.role)
              : INTENT_ROUTER_HEADER.nextStepDefault}
          </p>

          <div className="flex flex-col items-center justify-center gap-[var(--qf-sp-3)]">
            <Button href={ROUTES.bookDiscovery} withArrow analyticsEvent="cta_book_map_click" analyticsDetail={{ location: 'intent_router' }}>
              {CTAS.bookAutomationMap}
            </Button>
            <Link
              href={ROUTES.results}
              className="text-sm text-[var(--qf-text-dim)] transition-colors hover:text-[var(--qf-accent)]"
            >
              Or browse live systems →
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
