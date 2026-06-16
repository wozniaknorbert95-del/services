'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { ROUTES } from '@/lib/constants';

type IntentColor = 'time' | 'money' | 'order' | 'calm' | 'efficiency';

interface IntentOption {
  id: IntentColor;
  label: string;
  varName: string;
}

const INTENTS: IntentOption[] = [
  { id: 'time', label: 'Save time', varName: 'var(--fx-time)' },
  { id: 'money', label: 'Earn more', varName: 'var(--fx-money)' },
  { id: 'calm', label: 'Less chaos and stress', varName: 'var(--fx-calm)' },
  { id: 'efficiency', label: 'Raise team efficiency', varName: 'var(--fx-efficiency)' },
  { id: 'order', label: 'Order systems and tech', varName: 'var(--fx-order)' },
];

const LEGEND = [
  { id: 'time', color: 'var(--fx-time)', text: 'Saves your time' },
  { id: 'money', color: 'var(--fx-money)', text: 'Raises revenue / profit' },
  { id: 'order', color: 'var(--fx-order)', text: 'Orders systems and processes' },
  { id: 'calm', color: 'var(--fx-calm)', text: 'Reduces stress and chaos' },
  { id: 'efficiency', color: 'var(--fx-efficiency)', text: 'Increases team efficiency' },
];

interface ModuleInfo {
  id: string;
  name: string;
  effect: string;
  intents: IntentColor[];
  link: string;
}

const MODULES: ModuleInfo[] = [
  {
    id: 'm1',
    name: 'Automation Map',
    effect: 'Before we build anything, we map what is worth automating and why.',
    intents: ['order', 'money', 'calm'],
    link: ROUTES.bookDiscovery,
  },
  {
    id: 'm2',
    name: 'Sales Funnel & Wizard',
    effect: 'Conversion on autopilot: prospects qualify themselves and buy.',
    intents: ['money', 'efficiency'],
    link: ROUTES.resultsSalesFunnel,
  },
  {
    id: 'm3',
    name: 'Inbox Killer',
    effect: 'Handles email and support without you in the loop — with your approval on every send.',
    intents: ['time', 'calm'],
    link: ROUTES.resultsInboxKiller,
  },
  {
    id: 'm4',
    name: 'Agent OS (Custom Agents)',
    effect: 'Agents that run repeatable tasks in your business — with review gates.',
    intents: ['time', 'efficiency'],
    link: ROUTES.resultsAgentOrchestrator,
  },
  {
    id: 'm5',
    name: 'VCMS (Governance Layer)',
    effect: 'Scans 8 repos, SSoT conflicts and handoffs — supervision before deploy.',
    intents: ['order', 'calm'],
    link: ROUTES.resultsOwnerEcosystem,
  },
  {
    id: 'm6',
    name: 'Lead Magnet System',
    effect: 'Interactive tools (quiz, game) that capture qualified leads.',
    intents: ['money'],
    link: ROUTES.leadMagnetGame,
  },
  {
    id: 'm7',
    name: 'Maintenance & Safety',
    effect: 'Ongoing care so systems stay healthy — no lock-in.',
    intents: ['order', 'calm'],
    link: ROUTES.pricing,
  },
  {
    id: 'm8',
    name: 'AI Advisory',
    effect: 'Founder-level guidance when you modernise operations.',
    intents: ['efficiency', 'money', 'order'],
    link: ROUTES.resultsAdvisoryModernisation,
  },
];

export default function IntentRouter() {
  const [activeIntent, setActiveIntent] = useState<IntentColor | null>(null);

  const filteredModules = activeIntent
    ? MODULES.filter((m) => m.intents.includes(activeIntent))
    : MODULES;

  const recommended = filteredModules[0];

  return (
    <section className="py-24 px-6 sm:px-12 max-w-7xl mx-auto flex flex-col gap-16 relative">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-24 bg-gradient-to-b from-transparent to-[var(--border-strong)] opacity-50" />

      <div className="text-center max-w-2xl mx-auto space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 mb-4 rounded-full border border-[var(--border-subtle)] bg-[var(--bg-elevated)] text-xs font-mono text-[var(--text-muted)]">
          <span className="w-2 h-2 rounded-full bg-[var(--qf-accent)]" />
          Find your path
        </div>
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
          What do you want to improve in your business?
        </h2>
        <p className="text-[var(--text-muted)] text-lg">
          You pick business outcomes. I match the system underneath — not a generic service list.
        </p>
      </div>

      <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
        {INTENTS.map((intent) => {
          const isActive = activeIntent === intent.id;
          return (
            <button
              key={intent.id}
              type="button"
              onClick={() => setActiveIntent(isActive ? null : intent.id)}
              className={`
                relative px-6 py-4 rounded-xl border text-sm sm:text-base font-medium transition-all duration-300
                hover:-translate-y-0.5 hover:shadow-lg
                ${isActive ? 'border-transparent text-white' : 'border-[var(--border-subtle)] bg-[var(--bg-elevated)] text-[var(--text-main)] hover:border-[var(--border-strong)]'}
              `}
              style={
                isActive
                  ? {
                      backgroundColor: intent.varName,
                      boxShadow: `0 4px 20px color-mix(in srgb, ${intent.varName} 40%, transparent)`,
                    }
                  : undefined
              }
            >
              {intent.label}
            </button>
          );
        })}
      </div>

      <div className="flex flex-wrap justify-center gap-6 px-4 py-4 border-y border-[var(--border-subtle)] bg-[var(--bg-elevated)]/50">
        {LEGEND.map((item) => (
          <div
            key={item.id}
            className="flex items-center gap-2 text-xs sm:text-sm font-mono text-[var(--text-muted)]"
          >
            <span className="w-3 h-3 rounded-full" style={{ backgroundColor: item.color }} />
            {item.text}
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <AnimatePresence mode="popLayout">
          {filteredModules.map((module) => (
            <motion.div
              layout
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.25 }}
              key={module.id}
              className="panel flex flex-col p-6 group hover:border-[var(--border-strong)] transition-colors"
            >
              <h3 className="text-lg font-bold mb-2 flex-grow-0">{module.name}</h3>
              <p className="text-sm text-[var(--text-muted)] mb-6 flex-grow">{module.effect}</p>

              <div className="flex items-center justify-between mt-auto pt-4 border-t border-[var(--border-subtle)]">
                <div className="flex gap-1.5">
                  {module.intents.map((i) => {
                    const colorVar = INTENTS.find((x) => x.id === i)?.varName;
                    return (
                      <span
                        key={i}
                        className="w-3 h-3 rounded-full border border-black/20 shadow-sm"
                        style={{ backgroundColor: colorVar }}
                        title={LEGEND.find((l) => l.id === i)?.text}
                      />
                    );
                  })}
                </div>
                <Link
                  href={module.link}
                  className="text-xs font-mono text-[var(--qf-accent)] hover:underline"
                >
                  Details →
                </Link>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      <motion.div
        layout
        className="mt-8 max-w-3xl mx-auto p-8 rounded-2xl border border-[var(--border-strong)] bg-gradient-to-b from-[var(--bg-elevated)] to-[var(--bg-base)] text-center relative overflow-hidden"
      >
        {activeIntent && (
          <div
            className="absolute top-0 left-0 w-full h-1"
            style={{ backgroundColor: INTENTS.find((i) => i.id === activeIntent)?.varName }}
          />
        )}

        <p className="text-sm font-mono text-[var(--text-muted)] mb-3">Next step</p>
        <p className="text-xl sm:text-2xl font-medium mb-8">
          {activeIntent && recommended
            ? `Based on your choice, I recommend starting with: ${recommended.name}`
            : 'Start with a paid Automation Map — then we pick the right module.'}
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link
            href={ROUTES.bookDiscovery}
            className="btn px-8 py-3 text-base flex items-center justify-center gap-2 bg-[var(--text-main)] text-[var(--bg-base)] hover:bg-white hover:text-black"
          >
            Book 30-min Automation Map
          </Link>
          <Link href={ROUTES.bookDiscovery} className="btn px-8 py-3 text-base flex items-center justify-center gap-2">
            Describe your situation
          </Link>
        </div>
      </motion.div>
    </section>
  );
}
