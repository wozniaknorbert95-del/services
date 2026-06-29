'use client';

import { useMemo } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  ECOSYSTEM_REPOS,
  INTENT_ROUTER_HEADER,
  getIntentMeta,
  type IntentId,
} from '@/content/ecosystem';
import { getReadinessStatus } from '@/content/readiness';
import { ROUTES } from '@/lib/constants';
import { CTAS } from '@/content/conversion-copy';
import { useHomeIntent } from '@/lib/home-intent';
import {
  intentHighlightClass,
  itemMatchesIntent,
  sortByIntentMatch,
} from '@/lib/intent-highlight';
import IntentBadges from '@/components/ui/IntentBadges';
import StatusBadge from '@/components/ui/StatusBadge';
import ModulePreviewThumb from '@/components/ui/ModulePreviewThumb';
import Button from '@/components/ui/Button';
import IntentFilterChips from '@/components/home/IntentFilterChips';

/** When filtering by order — surface governance repos first. */
const ORDER_INTENT_REPO_KEYS = [
  'flex-vcms',
  'flexgrafik-meta',
  'agent-os-ui',
  'flexgrafik-nl',
] as const;

function sortReposForIntent(repos: typeof ECOSYSTEM_REPOS, intent: IntentId) {
  if (intent !== 'order') {
    return sortByIntentMatch(repos, intent);
  }

  return [...repos].sort((a, b) => {
    const aMatch = a.intents.includes(intent);
    const bMatch = b.intents.includes(intent);
    if (aMatch !== bMatch) {
      return aMatch ? -1 : 1;
    }
    const ai = ORDER_INTENT_REPO_KEYS.indexOf(
      a.repoKey as (typeof ORDER_INTENT_REPO_KEYS)[number]
    );
    const bi = ORDER_INTENT_REPO_KEYS.indexOf(
      b.repoKey as (typeof ORDER_INTENT_REPO_KEYS)[number]
    );
    return (ai === -1 ? 99 : ai) - (bi === -1 ? 99 : bi);
  });
}

export default function IntentRouter() {
  const { activeIntent, isFiltering } = useHomeIntent();

  const sortedRepos = useMemo(
    () =>
      activeIntent ? sortReposForIntent(ECOSYSTEM_REPOS, activeIntent) : [...ECOSYSTEM_REPOS],
    [activeIntent]
  );

  const recommended = useMemo(() => {
    if (!activeIntent) {
      return ECOSYSTEM_REPOS.find((r) => r.flagship) ?? ECOSYSTEM_REPOS[0];
    }
    return sortedRepos.find((r) => r.intents.includes(activeIntent)) ?? sortedRepos[0];
  }, [activeIntent, sortedRepos]);

  const filterLabel = activeIntent
    ? INTENT_ROUTER_HEADER.filterActive(
        getIntentMeta(activeIntent).label,
        ECOSYSTEM_REPOS.length
      )
    : INTENT_ROUTER_HEADER.filterAll(ECOSYSTEM_REPOS.length);

  return (
    <section
      id="repo-router"
      data-home-section="repo-router"
      className="relative border-t border-[var(--qf-border)] py-[var(--qf-sp-24)]"
    >
      <div className="mx-auto flex max-w-[var(--qf-maxw)] flex-col gap-[var(--qf-sp-12)] px-[var(--qf-sp-6)]">
        <div className="mx-auto max-w-2xl text-center">
          <span className="qf-eyebrow">{INTENT_ROUTER_HEADER.eyebrow}</span>
          <h2 className="mt-[var(--qf-sp-4)]">{INTENT_ROUTER_HEADER.title}</h2>
          <p className="qf-lead mx-auto mt-[var(--qf-sp-4)]">{INTENT_ROUTER_HEADER.lead}</p>
        </div>

        <IntentFilterChips />

        <p className="text-center font-mono text-xs text-[var(--qf-text-dim)]">{filterLabel}</p>

        <div className="grid grid-cols-1 gap-[var(--qf-sp-4)] md:grid-cols-2 lg:grid-cols-4">
          {sortedRepos.map((repo) => {
            const matches = itemMatchesIntent(repo, activeIntent);
            const readiness = getReadinessStatus(repo.repoKey);

            return (
              <motion.div layout key={repo.repoKey}>
                <Link
                  href={repo.proofRoute}
                  className={`group flex h-full flex-col border border-[var(--qf-border)] bg-[var(--qf-bg-raised)] p-[var(--qf-sp-6)] transition-all duration-[var(--qf-transition)] hover:border-[var(--qf-border-bright)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--qf-accent)] ${intentHighlightClass(matches, isFiltering)}`}
                >
                  <div className="mb-3 flex items-center justify-between gap-2">
                    <p className="text-sm font-semibold text-[var(--qf-text)]">{repo.role}</p>
                    {readiness ? <StatusBadge status={readiness} /> : null}
                  </div>
                  {repo.screenKey ? <ModulePreviewThumb screenKey={repo.screenKey} /> : null}
                  <h3 className="mb-2 text-[var(--qf-fs-base)] font-bold transition-colors group-hover:text-[var(--qf-accent)]">
                    {repo.outcomeLabel}
                  </h3>
                  {repo.statusNote ? (
                    <p className="mb-4 flex-grow text-sm text-[var(--qf-text-dim)]">
                      {repo.statusNote}
                    </p>
                  ) : (
                    <p className="mb-4 flex-grow text-sm text-[var(--qf-text-dim)]">
                      Running on FlexGrafik operations — see live proof.
                    </p>
                  )}

                  <div className="mt-auto flex items-center justify-between border-t border-[var(--qf-border)] pt-4">
                    <IntentBadges intents={[...repo.intents]} />
                    <span className="font-mono text-xs text-[var(--qf-accent)] group-hover:underline">
                      Proof →
                    </span>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          layout
          className="relative mx-auto max-w-3xl overflow-hidden border border-[var(--qf-border)] bg-[var(--qf-bg-raised)] p-[var(--qf-sp-8)] text-center"
        >
          <p className="mb-3 font-mono text-xs text-[var(--qf-text-dim)]">// next_step</p>
          <p className="mb-[var(--qf-sp-8)] text-[var(--qf-fs-lg)] font-semibold text-[var(--qf-text)]">
            {activeIntent && recommended
              ? INTENT_ROUTER_HEADER.nextStepRecommended(recommended.role)
              : INTENT_ROUTER_HEADER.nextStepDefault}
          </p>

          <div className="flex flex-col justify-center gap-[var(--qf-sp-4)] sm:flex-row">
            <Button href={ROUTES.bookDiscovery} withArrow analyticsEvent="cta_book_map_click" analyticsDetail={{ location: 'intent_router' }}>
              {CTAS.bookAutomationMap}
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
