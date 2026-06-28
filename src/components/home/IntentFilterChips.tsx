'use client';

import { INTENT_LEGEND } from '@/content/ecosystem';
import { useHomeIntent } from '@/lib/home-intent';

export default function IntentFilterChips() {
  const { activeIntent, setActiveIntent } = useHomeIntent();

  return (
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
  );
}
