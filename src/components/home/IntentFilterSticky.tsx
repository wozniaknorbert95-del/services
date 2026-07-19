'use client';

import { INTENT_LEGEND, PAIN_GRID_HEADER, getIntentMeta } from '@/content/ecosystem';
import { useHomeIntent } from '@/lib/home-intent';

/** Fixed chip bar under nav while an intent filter is active — keeps context past Pain. */
export default function IntentFilterSticky() {
  const { activeIntent, isFiltering, setActiveIntent } = useHomeIntent();

  if (!isFiltering || !activeIntent) {
    return null;
  }

  const meta = getIntentMeta(activeIntent);

  return (
    <div className="qf-intent-sticky" role="status" aria-live="polite">
      <div className="qf-intent-sticky-inner">
        <div className="qf-intent-sticky-chips" role="toolbar" aria-label="Active intent filter">
          {INTENT_LEGEND.map((intent) => {
            const isActive = intent.id === activeIntent;
            return (
              <button
                key={intent.id}
                type="button"
                data-intent={intent.id}
                aria-pressed={isActive}
                aria-label={intent.label}
                title={intent.legend}
                className="qf-intent-chip qf-intent-chip--compact"
                onClick={() => setActiveIntent(isActive ? null : intent.id)}
              >
                {intent.shortLabel}
              </button>
            );
          })}
        </div>
        <div className="qf-intent-sticky-actions">
          <span className="qf-intent-sticky-label" data-intent={activeIntent}>
            {meta.shortLabel}
          </span>
          <a href="#repo-router" className="qf-intent-jump">
            {PAIN_GRID_HEADER.seeModules}
          </a>
          <button
            type="button"
            className="qf-intent-clear"
            onClick={() => setActiveIntent(null)}
          >
            {PAIN_GRID_HEADER.clearFilter}
          </button>
        </div>
      </div>
    </div>
  );
}
