'use client';

import { useCallback, useRef, type KeyboardEvent } from 'react';
import { INTENT_LEGEND, PAIN_GRID_HEADER, getIntentMeta } from '@/content/ecosystem';
import { useHomeIntent } from '@/lib/home-intent';
import type { IntentId } from '@/content/ecosystem';

interface IntentFilterChipsProps {
  /** Show Clear + jump to modules when a filter is active */
  showFilterChrome?: boolean;
}

export default function IntentFilterChips({ showFilterChrome = true }: IntentFilterChipsProps) {
  const { activeIntent, setActiveIntent, isFiltering } = useHomeIntent();
  const toolbarRef = useRef<HTMLDivElement>(null);

  const focusChip = useCallback((index: number) => {
    const buttons = toolbarRef.current?.querySelectorAll<HTMLButtonElement>('[data-intent-chip]');
    buttons?.[index]?.focus();
  }, []);

  const onToolbarKeyDown = useCallback(
    (event: KeyboardEvent<HTMLDivElement>) => {
      const buttons = toolbarRef.current?.querySelectorAll<HTMLButtonElement>('[data-intent-chip]');
      if (!buttons?.length) {
        return;
      }
      const current = Array.from(buttons).indexOf(document.activeElement as HTMLButtonElement);
      if (current < 0) {
        return;
      }
      if (event.key === 'ArrowRight' || event.key === 'ArrowDown') {
        event.preventDefault();
        focusChip((current + 1) % buttons.length);
      } else if (event.key === 'ArrowLeft' || event.key === 'ArrowUp') {
        event.preventDefault();
        focusChip((current - 1 + buttons.length) % buttons.length);
      } else if (event.key === 'Home') {
        event.preventDefault();
        focusChip(0);
      } else if (event.key === 'End') {
        event.preventDefault();
        focusChip(buttons.length - 1);
      } else if (event.key === 'Escape' && activeIntent) {
        event.preventDefault();
        setActiveIntent(null);
      }
    },
    [activeIntent, focusChip, setActiveIntent]
  );

  const toggle = (id: IntentId) => {
    setActiveIntent(activeIntent === id ? null : id);
  };

  return (
    <div className="qf-intent-chips-wrap">
      <div
        ref={toolbarRef}
        className="qf-intent-chips"
        role="toolbar"
        aria-label="Filter by business outcome"
        onKeyDown={onToolbarKeyDown}
      >
        {INTENT_LEGEND.map((intent) => {
          const isActive = activeIntent === intent.id;
          return (
            <button
              key={intent.id}
              type="button"
              data-intent-chip
              data-intent={intent.id}
              aria-pressed={isActive}
              aria-label={intent.label}
              title={intent.legend}
              onClick={() => toggle(intent.id)}
              className="qf-intent-chip"
            >
              {isActive ? <span aria-hidden="true">✓ </span> : null}
              {intent.shortLabel}
            </button>
          );
        })}
      </div>

      {showFilterChrome ? (
        <div className="qf-intent-chips-meta">
          {isFiltering && activeIntent ? (
            <>
              <button
                type="button"
                className="qf-intent-clear"
                onClick={() => setActiveIntent(null)}
              >
                {PAIN_GRID_HEADER.clearFilter}
              </button>
              <a href="#repo-router" className="qf-intent-jump">
                {PAIN_GRID_HEADER.seeModules}
              </a>
              <span className="qf-intent-chips-active" data-intent={activeIntent}>
                {getIntentMeta(activeIntent).label}
              </span>
            </>
          ) : null}
        </div>
      ) : null}
    </div>
  );
}
