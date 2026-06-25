/**
 * Content layer — single import surface for agents.
 * Authority: docs/strategy/site-map.md
 *
 * - ecosystem.ts  — modules, repos, intents, pain grid, home markers
 * - conversion-copy.ts — positioning, hero, objections, about copy
 * - proof.ts — metrics, screens, videos, pricing (client-fillable proof)
 * - metrics-display.ts — how metrics render on home
 */

export * from './pricing';
export * from './ecosystem';
export * from './conversion-copy';
export * from './metrics-display';
export { metrics, screens, videos, pricing, caseMeasurements, vcmsFeatureStatus } from './proof';
export type { VideoSlot, ScreenShot, FeatureClaimStatus } from './proof';
