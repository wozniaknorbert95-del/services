'use client';

import { useMemo } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  ECOSYSTEM_REPOS,
  getIntentMeta,
  type IntentId,
} from '@/content/ecosystem';
import { formatLosLayers } from '@/content/los-architecture';
import { ROUTES } from '@/lib/constants';
import { CTAS } from '@/content/conversion-copy';
import { useHomeIntent } from '@/lib/home-intent';
import {
  intentHighlightClass,
  itemMatchesIntent,
  sortByIntentMatch,
} from '@/lib/intent-highlight';
import IntentBadges from '@/components/ui/IntentBadges';
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
  const { activeIntent, setActiveIntent, isFiltering } = useHomeIntent();

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
    ? `Highlighting repos matching "${getIntentMeta(activeIntent).label}" — all 8 visible`
    : `Showing: all ${ECOSYSTEM_REPOS.length} repositories · one LOS`;

  return (
    <section
      id="repo-router"
      data-home-section="repo-router"
      className="relative border-t border-[var(--qf-border)] py-[var(--qf-sp-24)]"
    >
      <div className="mx-auto flex max-w-[var(--qf-maxw)] flex-col gap-[var(--qf-sp-12)] px-[var(--qf-sp-6)]">
        <div className="mx-auto max-w-2xl text-center">
          <span className="qf-eyebrow">supervised_system</span>
          <h2 className="mt-[var(--qf-sp-4)]">Eight parts. One supervised system.</h2>
          <p className="qf-lead mx-auto mt-[var(--qf-sp-4)]">
            Business outcome first — pick what matters, then see which production module delivers it.
            All eight repos stay visible.
          </p>
        </div>

        <IntentFilterChips />

        <p className="text-center font-mono text-xs text-[var(--qf-text-dim)]">{filterLabel}</p>

        <div className="grid grid-cols-1 gap-[var(--qf-sp-4)] md:grid-cols-2 lg:grid-cols-4">
          {sortedRepos.map((repo) => {
            const matches = itemMatchesIntent(repo, activeIntent);
            return (
              <motion.div layout key={repo.repoKey}>
                <Link
                  href={repo.proofRoute}
                  className={`group flex h-full flex-col border border-[var(--qf-border)] bg-[var(--qf-bg-raised)] p-[var(--qf-sp-6)] transition-all duration-[var(--qf-transition)] hover:border-[var(--qf-border-bright)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--qf-accent)] ${intentHighlightClass(matches, isFiltering)}`}
                >
                  <span className="mb-2 font-mono text-xs text-[var(--qf-text-faint)]">
                    // repo_{String(repo.number).padStart(2, '0')}
                    {repo.flagship ? ' ★' : ''}
                  </span>
                  {repo.screenKey ? <ModulePreviewThumb screenKey={repo.screenKey} /> : null}
                  <h3 className="mb-1 text-[var(--qf-fs-lg)] font-bold transition-colors group-hover:text-[var(--qf-accent)]">
                    {repo.outcomeLabel}
                  </h3>
                  <p className="mb-1 text-sm font-semibold text-[var(--qf-text)]">{repo.role}</p>
                  <p className="mb-2 font-mono text-[10px] text-[var(--qf-accent)]">
                    LOS: {formatLosLayers(repo.losLayers)} · {repo.repoKey}
                  </p>
                  {repo.statusNote ? (
                    <p className="mb-4 flex-grow text-sm text-[var(--qf-text-dim)]">
                      {repo.statusNote}
                    </p>
                  ) : (
                    <p className="mb-4 flex-grow font-mono text-xs text-[var(--qf-text-faint)]">
                      {repo.repoKey}
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
          {activeIntent ? (
            <div
              className="absolute left-0 top-0 h-1 w-full"
              style={{ backgroundColor: getIntentMeta(activeIntent).cssVar }}
            />
          ) : null}

          <p className="mb-3 font-mono text-xs text-[var(--qf-text-dim)]">// next_step</p>
          <p className="mb-[var(--qf-sp-8)] text-[var(--qf-fs-lg)] font-semibold text-[var(--qf-text)]">
            {activeIntent && recommended
              ? `Recommended: ${recommended.role}`
              : 'Start with a paid Automation Map — then we pick the right repo.'}
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
