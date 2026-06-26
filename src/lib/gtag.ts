/**
 * GA4 measurement — binding: docs/strategy/conversion-pipeline.md §10
 * Set NEXT_PUBLIC_GA_MEASUREMENT_ID in Vercel (format G-XXXXXXXXXX).
 */

export const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID ?? '';

export function isGaEnabled(): boolean {
  return GA_MEASUREMENT_ID.length > 0;
}

export function gaPageView(pagePath: string): void {
  if (!isGaEnabled() || typeof window.gtag !== 'function') {
    return;
  }

  window.gtag('config', GA_MEASUREMENT_ID, {
    page_path: pagePath,
  });
}

export function gaEvent(event: string, params?: Record<string, string>): void {
  if (!isGaEnabled() || typeof window.gtag !== 'function') {
    return;
  }

  window.gtag('event', event, params);
}
