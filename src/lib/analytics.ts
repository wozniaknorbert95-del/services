/**
 * Conversion analytics — thin wrapper for measurement events.
 * Binding: docs/strategy/conversion-pipeline.md §10
 */

export type AnalyticsEvent =
  | 'cta_book_map_click'
  | 'cta_whatsapp_click'
  | 'sample_map_download'
  | 'wizard_demo_click'
  | 'case_study_open'
  | 'pricing_view'
  | 'book_discovery_view'
  | 'book_payment_start'
  | 'book_payment_complete'
  | 'intake_submit';

export function trackEvent(event: AnalyticsEvent, detail?: Record<string, string>): void {
  if (typeof window === 'undefined') {
    return;
  }

  window.dispatchEvent(
    new CustomEvent('qf_analytics', {
      detail: { event, ...detail },
    })
  );

  if (process.env.NODE_ENV === 'development') {
    console.info('[analytics]', event, detail ?? '');
  }
}
