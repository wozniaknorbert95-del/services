// WhatsApp discovery pilot — custom results page (not CaseStudyLayout)
// Binding: conversion-pipeline.md §3 WhatsApp L3 path

import { ROUTES, WHATSAPP } from '@/lib/constants';

export const WHATSAPP_PILOT_SLUG = 'whatsapp-discovery-pilot' as const;

export const whatsappPilotDisplayName = 'WhatsApp discovery pilot';

export const whatsappPilotHubTitle = 'WhatsApp discovery pilot';

export const whatsappPilotCaseMeta = {
  title: 'WhatsApp Discovery Pilot — Production Systems',
  description:
    'Screen walkthrough of async WhatsApp qualification: 6–8 questions, lead scoring, brief output — same path Norbert uses for discovery.',
  openGraphTitle: 'WhatsApp Discovery Pilot | Quietforge',
  openGraphDescription: 'Async chat qualification with scored brief output.',
  ogAlt: 'WhatsApp discovery pilot',
} as const;

export const whatsappPilotHero = {
  eyebrow: 'Case study · Pilot',
  headline: 'WhatsApp discovery — qualify leads without a cold call.',
  lead:
    'Deployed in my own stack: a chat agent asks 6–8 questions, scores the fit, and delivers a brief I can act on — same architecture I deploy for clients.',
} as const;

export const whatsappPilotVideoPlaceholder = {
  title: 'Video walkthrough',
  body: '60–90s screen recording — agent leads through qualification questions → brief PDF.',
  statusNote: 'PLANNED — recording queued (BL-03 family). Poster until Loom is ready.',
} as const;

export const whatsappPilotHubContext =
  'Cold calls waste time. A chat agent asks 6–8 questions, scores fit, and delivers a brief — human review before follow-up.';

export const whatsappPilotHubSystem =
  'Async WhatsApp qualification with scored brief output — same path used for discovery on mobile L3.';

export const whatsappPilotHubReal =
  'Pilot walkthrough documented — screen recording and brief PDF output path in progress.';

export const whatsappPilotCta = {
  label: WHATSAPP.label,
  href: WHATSAPP.url,
  backLabel: '← All case studies',
  backHref: ROUTES.results,
} as const;
