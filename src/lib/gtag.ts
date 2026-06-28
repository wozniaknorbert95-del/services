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

  // send_page_view is false on initial config — config+page_path does not emit a hit.
  // Explicit page_view is required for GA4 to register traffic (Realtime + home card).
  window.gtag('event', 'page_view', {
    page_path: pagePath,
    page_location: window.location.href,
    page_title: document.title,
  });
}

export function gaEvent(event: string, params?: Record<string, string>): void {
  if (!isGaEnabled() || typeof window.gtag !== 'function') {
    return;
  }

  window.gtag('event', event, params);
}
