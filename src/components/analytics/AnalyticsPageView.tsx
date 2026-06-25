'use client';

import { useEffect } from 'react';
import { trackEvent, type AnalyticsEvent } from '@/lib/analytics';

interface AnalyticsPageViewProps {
  event: AnalyticsEvent;
  detail?: Record<string, string>;
}

/** Fires a single analytics event on mount (e.g. pricing_view). */
export default function AnalyticsPageView({ event, detail }: AnalyticsPageViewProps) {
  useEffect(() => {
    trackEvent(event, detail);
  }, [event, detail]);

  return null;
}
