'use client';

import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from 'react';
import type { IntentId } from '@/content/ecosystem';

const STORAGE_KEY = 'qf-home-intent';

interface HomeIntentContextValue {
  activeIntent: IntentId | null;
  setActiveIntent: (intent: IntentId | null) => void;
  isFiltering: boolean;
}

const HomeIntentContext = createContext<HomeIntentContextValue | null>(null);

function readStoredIntent(): IntentId | null {
  if (typeof window === 'undefined') {
    return null;
  }
  try {
    return sessionStorage.getItem(STORAGE_KEY) as IntentId | null;
  } catch {
    return null;
  }
}

export function HomeIntentProvider({ children }: { children: ReactNode }) {
  const [activeIntent, setActiveIntentState] = useState<IntentId | null>(() => readStoredIntent());

  const setActiveIntent = useCallback((intent: IntentId | null) => {
    setActiveIntentState(intent);
    try {
      if (intent) {
        sessionStorage.setItem(STORAGE_KEY, intent);
      } else {
        sessionStorage.removeItem(STORAGE_KEY);
      }
    } catch {
      /* storage unavailable */
    }
  }, []);

  const value = useMemo(
    () => ({
      activeIntent,
      setActiveIntent,
      isFiltering: activeIntent !== null,
    }),
    [activeIntent, setActiveIntent]
  );

  return <HomeIntentContext.Provider value={value}>{children}</HomeIntentContext.Provider>;
}

const defaultIntentValue: HomeIntentContextValue = {
  activeIntent: null,
  setActiveIntent: () => {},
  isFiltering: false,
};

export function useHomeIntent(): HomeIntentContextValue {
  const ctx = useContext(HomeIntentContext);
  return ctx ?? defaultIntentValue;
}

export function matchesHomeIntent(
  intents: readonly IntentId[],
  activeIntent: IntentId | null
): boolean {
  if (!activeIntent) {
    return true;
  }
  return intents.includes(activeIntent);
}
