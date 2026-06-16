'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

type IntentColor = 'time' | 'money' | 'order' | 'calm' | 'efficiency';

interface IntentOption {
  id: IntentColor;
  label: string;
  varName: string;
}

const INTENTS: IntentOption[] = [
  { id: 'time', label: 'Chcę oszczędzać czas', varName: 'var(--fx-time)' },
  { id: 'money', label: 'Chcę zarabiać więcej', varName: 'var(--fx-money)' },
  { id: 'calm', label: 'Chcę mniej chaosu i stresu', varName: 'var(--fx-calm)' },
  { id: 'efficiency', label: 'Chcę podnieść efektywność zespołu', varName: 'var(--fx-efficiency)' },
  { id: 'order', label: 'Chcę uporządkować systemy / technologię', varName: 'var(--fx-order)' },
];

const LEGEND = [
  { id: 'time', color: 'var(--fx-time)', text: 'Oszczędza Twój czas' },
  { id: 'money', color: 'var(--fx-money)', text: 'Podnosi przychody / zarobek' },
  { id: 'order', color: 'var(--fx-order)', text: 'Porządkuje systemy i procesy' },
  { id: 'calm', color: 'var(--fx-calm)', text: 'Zmniejsza stres i chaos' },
  { id: 'efficiency', color: 'var(--fx-efficiency)', text: 'Zwiększa efektywność zespołu' },
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
    name: 'Automation Map (Audyt)',
    effect: 'Zanim zbudujemy system, mapujemy co i jak warto automatyzować.',
    intents: ['order', 'money', 'calm'],
    link: '#',
  },
  {
    id: 'm2',
    name: 'Sales Funnel & Wizard',
    effect: 'Konwersja na autopilocie: klient sam się kwalifikuje i kupuje.',
    intents: ['money', 'efficiency'],
    link: '#',
  },
  {
    id: 'm3',
    name: 'Inbox Killer',
    effect: 'Rozprawia się z mailem i supportem bez Twojego udziału, ale z Twoją autoryzacją.',
    intents: ['time', 'calm'],
    link: '#',
  },
  {
    id: 'm4',
    name: 'Agent OS (Custom Agents)',
    effect: 'Agenci wykonujący powtarzalne, konkretne zadania w Twoim biznesie.',
    intents: ['time', 'efficiency'],
    link: '#',
  },
  {
    id: 'm5',
    name: 'VCMS (Governance Layer)',
    effect: 'Skan 8 repo, konflikty SSoT i handoffy — warstwa nadzoru przed deployem.',
    intents: ['order', 'calm'],
    link: '/results/owner-ecosystem',
  },
  {
    id: 'm6',
    name: 'Lead Magnet System',
    effect: 'Interaktywne narzędzia (np. quiz/gra) generujące kaloryczne leady.',
    intents: ['money'],
    link: '#',
  },
  {
    id: 'm7',
    name: 'Maintenance & Safety',
    effect: 'Stała opieka nad systemami, żeby wszystko zawsze działało.',
    intents: ['order', 'calm'],
    link: '#',
  },
  {
    id: 'm8',
    name: 'AI Advisory',
    effect: 'Dedykowane doradztwo dla founderów przy transformacji firmy.',
    intents: ['efficiency', 'money', 'order'],
    link: '#',
  },
];

export default function IntentRouter() {
  const [activeIntent, setActiveIntent] = useState<IntentColor | null>(null);

  const filteredModules = activeIntent
    ? MODULES.filter((m) => m.intents.includes(activeIntent))
    : MODULES;

  return (
    <section className="py-24 px-6 sm:px-12 max-w-7xl mx-auto flex flex-col gap-16 relative">
      {/* Background decoration */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-24 bg-gradient-to-b from-transparent to-[var(--border-strong)] opacity-50" />
      
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 mb-4 rounded-full border border-[var(--border-subtle)] bg-[var(--bg-elevated)] text-xs font-mono text-[var(--text-muted)]">
          <span className="w-2 h-2 rounded-full bg-[var(--qf-accent)]" />
          Znajdź rozwiązanie
        </div>
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">Co chcesz poprawić w swojej firmie?</h2>
        <p className="text-[var(--text-muted)] text-lg">
          Wybierasz biznesowe efekty. Ja dopasowuję odpowiednią technologię i automatyzację pod spodem.
        </p>
      </div>

      {/* Intents Filter Buttons */}
      <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
        {INTENTS.map((intent) => {
          const isActive = activeIntent === intent.id;
          return (
            <button
              key={intent.id}
              onClick={() => setActiveIntent(isActive ? null : intent.id)}
              className={`
                relative px-6 py-4 rounded-xl border text-sm sm:text-base font-medium transition-all duration-300
                hover:-translate-y-0.5 hover:shadow-lg
                ${isActive ? 'border-transparent text-white' : 'border-[var(--border-subtle)] bg-[var(--bg-elevated)] text-[var(--text-main)] hover:border-[var(--border-strong)]'}
              `}
              style={
                isActive
                  ? { backgroundColor: intent.varName, boxShadow: `0 4px 20px color-mix(in srgb, ${intent.varName} 40%, transparent)` }
                  : {}
              }
            >
              {intent.label}
            </button>
          );
        })}
      </div>

      {/* Legend */}
      <div className="flex flex-wrap justify-center gap-6 px-4 py-4 border-y border-[var(--border-subtle)] bg-[var(--bg-elevated)]/50">
        {LEGEND.map((item) => (
          <div key={item.id} className="flex items-center gap-2 text-xs sm:text-sm font-mono text-[var(--text-muted)]">
            <span className="w-3 h-3 rounded-full" style={{ backgroundColor: item.color }} />
            {item.text}
          </div>
        ))}
      </div>

      {/* Modules Grid */}
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
                  {module.intents.map(i => {
                    const colorVar = INTENTS.find(x => x.id === i)?.varName;
                    return (
                      <span 
                        key={i} 
                        className="w-3 h-3 rounded-full border border-black/20 shadow-sm"
                        style={{ backgroundColor: colorVar }}
                        title={LEGEND.find(l => l.id === i)?.text}
                      />
                    );
                  })}
                </div>
                <a href={module.link} className="text-xs font-mono text-[var(--qf-accent)] hover:underline">
                  Szczegóły →
                </a>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* CTA Section */}
      <motion.div 
        layout
        className="mt-8 max-w-3xl mx-auto p-8 rounded-2xl border border-[var(--border-strong)] bg-gradient-to-b from-[var(--bg-elevated)] to-[var(--bg-base)] text-center relative overflow-hidden"
      >
        {activeIntent && (
          <div 
            className="absolute top-0 left-0 w-full h-1" 
            style={{ backgroundColor: INTENTS.find(i => i.id === activeIntent)?.varName }} 
          />
        )}
        
        <p className="text-sm font-mono text-[var(--text-muted)] mb-3">Następny krok</p>
        <p className="text-xl sm:text-2xl font-medium mb-8">
          {activeIntent 
            ? `Na bazie Twojego wyboru rekomenduję start od: ${filteredModules[0]?.name}`
            : 'Zbudujmy system, który zdejmie ciężar z Twoich barków.'
          }
        </p>
        
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a href="#" className="btn px-8 py-3 text-base flex items-center justify-center gap-2 bg-[var(--text-main)] text-[var(--bg-base)] hover:bg-white hover:text-black">
            Umów 30-min audyt
          </a>
          <a href="#" className="btn px-8 py-3 text-base flex items-center justify-center gap-2">
            Wyślij mi krótki opis sytuacji
          </a>
        </div>
      </motion.div>
    </section>
  );
}
