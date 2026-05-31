'use client';

import { motion } from 'framer-motion';
import { fadeIn, staggerContainer } from '@/lib/motion';
import { ROUTES } from '@/lib/constants';
import { Mail, Monitor, Quote, Users } from 'lucide-react';
import Eyebrow from '@/components/ui/Eyebrow';

const PAINS = [
  {
    icon: Mail,
    title: 'Drowning in email',
    description:
      'Important messages, invoices and spam in one pile. Leads slip through.',
    href: ROUTES.inboxKiller,
  },
  {
    icon: Monitor,
    title: 'A site stuck in the past',
    description:
      'No mobile, no clear next step, nothing to track. It quietly costs you clients.',
    href: ROUTES.webUpgrade,
  },
  {
    icon: Quote,
    title: 'Quotes by hand, all day',
    description:
      'The same questions, the same replies, over and over.',
    href: ROUTES.salesFunnel,
  },
  {
    icon: Users,
    title: 'Traffic, but no leads',
    description:
      'People visit. Almost none get in touch.',
    href: ROUTES.leadMagnetGame,
  },
];

export default function PainGrid() {
  return (
    <section className="py-[var(--qf-sp-24)]">
      <div className="mx-auto max-w-[var(--qf-maxw)] px-[var(--qf-sp-6)]">
        <motion.div
          initial={fadeIn.initial}
          whileInView={fadeIn.animate}
          viewport={{ once: true, margin: '-80px' }}
          transition={fadeIn.transition}
        >
          <Eyebrow>Sound familiar?</Eyebrow>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: '-80px' }}
          className="grid gap-[var(--qf-sp-4)] sm:grid-cols-2 lg:grid-cols-4"
        >
          {PAINS.map((pain) => (
            <motion.a
              key={pain.title}
              href={pain.href}
              variants={fadeIn}
              className="group block rounded-[var(--qf-radius)] border border-[var(--qf-border)] bg-[var(--qf-bg-raised)] p-6 transition-colors duration-[var(--qf-transition)] hover:border-[var(--qf-border-bright)]"
            >
              <pain.icon
                className="mb-4 h-6 w-6 text-[var(--qf-accent)]"
                strokeWidth={1.5}
              />
              <h3 className="mb-2 text-[var(--qf-fs-lg)] font-bold text-[var(--qf-text)]">
                {pain.title}
              </h3>
              <p className="mb-4 text-[var(--qf-text-dim)] text-sm">
                {pain.description}
              </p>
              <span className="inline-flex items-center text-[var(--qf-accent)] text-sm transition-colors group-hover:text-[var(--qf-text)]">
                See the fix →
              </span>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
