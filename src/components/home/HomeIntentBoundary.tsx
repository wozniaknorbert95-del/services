'use client';

import { Suspense, type ReactNode } from 'react';
import { HomeIntentProvider } from '@/lib/home-intent';

/** Suspense boundary required by Next.js when HomeIntentProvider reads useSearchParams. */
export default function HomeIntentBoundary({ children }: { children: ReactNode }) {
  return (
    <Suspense fallback={<>{children}</>}>
      <HomeIntentProvider>{children}</HomeIntentProvider>
    </Suspense>
  );
}
