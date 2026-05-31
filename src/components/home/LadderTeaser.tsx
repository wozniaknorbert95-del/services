'use client';

import { motion } from 'framer-motion';
import { fadeIn, staggerContainer } from '@/lib/motion';
import { ROUTES } from '@/lib/constants';
import Eyebrow from '@/components/ui/Eyebrow';
import { Monitor, Route, Gamepad2 } from 'lucide-react';

const LADDER = [
  {
    icon: Monitor,
    title: 'Conversion Web Upgrade',
    description:
      'A fast, modern site that earns its keep. Clear actions, captured leads, real tracking.',
    href: ROUTES.webUpgrade,
  },
  {
    icon: Route,
    title: 'Sales Funnel Engine',
    description:
      'A simple step-by-step flow that quotes, books and qualifies for you.',
    href: ROUTES.salesFunnel,
  },
  {
    icon: Gamepad2,
    title: 'Lead Magnet Game',
    description:
      'A branded quiz or mini-game that turns visitors into contacts.',
    href: ROUTES.leadMagnetGame,
  },
];

export default function LadderTeaser() {
  return (
    <section className="py-[var(--qf-sp-24)]">
      <div className="mx-auto max-w-[var(--qf-maxw)] px-[var(--qf-sp-6)]">
        <motion.div
          initial={fadeIn.initial}
          whileInView={fadeIn.animate}
          viewport={{ once: true, margin: '-80px' }}
          transition={fadeIn.transition}
        >
          <Eyebrow>Once your inbox is calm — grow from here</Eyebrow>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: '-80px' }}
          className="grid gap-[var(--qf-sp-4)] lg:grid-cols-3"
        >
          {LADDER.map((item) => (
            <motion.a
              key={item.title}
              href={item.href}
              variants={fadeIn}
              className="group block rounded-[var(--qf-radius)] border border-[var(--qf-border)] bg-[var(--qf-bg-raised)] p-6 transition-colors duration-[var(--qf-transition)] hover:border-[var(--qf-border-bright)]"
            >
              <item.icon
                className="mb-4 h-6 w-6 text-[var(--qf-accent)]"
                strokeWidth={1.5}
              />
              <h3 className="mb-2 text-[var(--qf-fs-lg)] font-bold text-[var(--qf-text)]">
                {item.title}
              </h3>
              <p className="mb-4 text-[var(--qf-text-dim)] text-sm">
                {item.description}
              </p>
              <span className="inline-flex items-center text-[var(--qf-accent)] text-sm transition-colors group-hover:text-[var(--qf-text)]">
                Learn more →
              </span>
            </motion.a>
          ))}
        </motion.div>

        <motion.div
          initial={fadeIn.initial}
          whileInView={fadeIn.animate}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ ...fadeIn.transition, delay: 0.3 }}
          className="mt-[var(--qf-sp-8)] text-center"
        >
          <p className="mx-auto max-w-[var(--qf-maxw-narrow)] text-[var(--qf-text-dim)]">
            Not sure where to start? That&apos;s exactly what the Automation Map is for.
          </p>
          <a
            href={ROUTES.bookDiscovery}
            className="mt-[var(--qf-sp-4)] inline-flex items-center gap-[var(--qf-sp-2)] border border-[var(--qf-accent)] bg-[var(--qf-accent)] px-6 py-3 text-sm font-semibold text-[var(--qf-bg)] transition-all duration-[var(--qf-transition)] hover:bg-[var(--qf-accent-soft)] hover:border-[var(--qf-accent-soft)]"
          >
            Book your Automation Map <span aria-hidden="true">→</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
