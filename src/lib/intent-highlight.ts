import type { IntentId } from '@/content/ecosystem';

type IntentBindable = { intents: readonly IntentId[] } | { intent: IntentId };

function getItemIntents(item: IntentBindable): readonly IntentId[] {
  return 'intents' in item ? item.intents : [item.intent];
}

/** Card surface classes when IntentRouter filter is active on home. */
export function intentHighlightClass(
  matches: boolean,
  isFiltering: boolean
): string {
  if (!isFiltering) {
    return '';
  }
  return matches
    ? 'qf-intent-match'
    : 'qf-intent-dim';
}

export function sortByIntentMatch<T extends IntentBindable>(
  items: readonly T[],
  activeIntent: IntentId | null
): T[] {
  if (!activeIntent) {
    return [...items];
  }
  return [...items].sort((a, b) => {
    const aMatch = getItemIntents(a).includes(activeIntent);
    const bMatch = getItemIntents(b).includes(activeIntent);
    if (aMatch === bMatch) {
      return 0;
    }
    return aMatch ? -1 : 1;
  });
}

export function itemMatchesIntent(item: IntentBindable, activeIntent: IntentId | null): boolean {
  if (!activeIntent) {
    return true;
  }
  return getItemIntents(item).includes(activeIntent);
}
