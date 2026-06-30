// WhatsApp discovery pilot — custom results page (not CaseStudyLayout)
// Binding: conversion-pipeline.md §3 WhatsApp L3 path

import { ROUTES, WHATSAPP } from '@/lib/constants';

export const WHATSAPP_PILOT_SLUG = 'whatsapp-discovery-pilot' as const;

export const whatsappPilotDisplayName = 'WhatsApp discovery pilot';

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

export const whatsappPilotCta = {
  label: WHATSAPP.label,
  href: WHATSAPP.url,
  backLabel: '← All case studies',
  backHref: ROUTES.results,
} as const;

/* ── Problem → System → Effect ── */

export const whatsappPilotBeforeItems = [
  { label: 'Cold calls to qualify', detail: 'Time wasted on uninterested leads' },
  { label: 'Manual intake forms', detail: 'Low completion rates, no scoring' },
  { label: 'No filter between enquiry and call', detail: 'Every lead gets equal attention' },
];

export const whatsappPilotAfterItems = [
  { label: 'Async chat qualification', detail: "6–8 questions at lead's pace" },
  { label: 'Automated scoring', detail: 'Fit score before human review' },
  { label: 'Brief PDF output', detail: 'Structured summary, ready to act on' },
];

export const whatsappPilotFlowSteps = [
  { title: 'Lead starts chat', detail: 'WhatsApp deep link from homepage or LinkedIn' },
  { title: 'Agent asks questions', detail: '6–8 async questions — pain, budget, timeline, fit' },
  { title: 'Score calculated', detail: 'Fit score based on answers — green / amber / red' },
  { title: 'Brief generated', detail: 'PDF summary delivered to Norbert for review' },
  { title: 'Human follow-up', detail: 'Only scored leads get a personal response' },
];

export const whatsappPilotStack = [
  { label: 'Channel', value: 'WhatsApp Business API' },
  { label: 'Agent', value: 'Async qualification flow' },
  { label: 'Scoring', value: 'Rule-based fit algorithm' },
  { label: 'Output', value: 'Brief PDF (structured)' },
  { label: 'Status', value: 'Pilot' },
];

export const whatsappPilotMeasurement = {
  eyebrow: 'Measurement',
  value: '6–8 question async flow · scored brief · pilot stage.',
  note: 'Pilot — commercial metrics pending first external deployment.',
} as const;
