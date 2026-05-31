'use client';

import { motion } from 'framer-motion';
import { fadeIn } from '@/lib/motion';
import { ROUTES } from '@/lib/constants';
import Eyebrow from '@/components/ui/Eyebrow';
import { Inbox } from 'lucide-react';

export default function SpearheadSpotlight() {
  return (
    <section className="py-[var(--qf-sp-24)]">
      <div className="mx-auto max-w-[var(--qf-maxw)] px-[var(--qf-sp-6)]">
        <div className="grid items-center gap-[var(--qf-sp-12)] lg:grid-cols-5">
          {/* Left: copy (3 cols) */}
          <motion.div
            className="lg:col-span-3"
            initial={fadeIn.initial}
            whileInView={fadeIn.animate}
            viewport={{ once: true, margin: '-80px' }}
            transition={fadeIn.transition}
          >
            <Eyebrow>Start here</Eyebrow>
            <h2 className="mb-[var(--qf-sp-4)]">
              Inbox Killer —{' '}
              <span className="text-[var(--qf-accent)]">
                the system that gives you your mornings back.
              </span>
            </h2>
            <p className="text-[var(--qf-fs-lg)] text-[var(--qf-text-dim)]">
              Your inbox sorts itself, surfaces what matters, and drafts your
              replies. You stay in charge of every send.
            </p>
            <ul className="mt-[var(--qf-sp-6)] space-y-3">
              {[
                'Hours back every week — no more digging through clutter.',
                'No more lost leads — every enquiry is caught and prioritised.',
                'Full control — nothing sends without your approval.',
              ].map((item) => (
                <li
                  key={item}
                  className="relative pl-6 text-[var(--qf-text-dim)]"
                >
                  <span className="absolute left-0 text-[var(--qf-ok)]">✓</span>
                  {item}
                </li>
              ))}
            </ul>
            <div className="mt-[var(--qf-sp-6)]">
              <a
                href={ROUTES.inboxKiller}
                className="inline-flex items-center gap-[var(--qf-sp-2)] border border-[var(--qf-accent)] bg-[var(--qf-accent)] px-6 py-3 text-sm font-semibold text-[var(--qf-bg)] transition-all duration-[var(--qf-transition)] hover:bg-[var(--qf-accent-soft)] hover:border-[var(--qf-accent-soft)]"
              >
                See how Inbox Killer works <span aria-hidden="true">→</span>
              </a>
            </div>
          </motion.div>

          {/* Right: visual (2 cols) */}
          <motion.div
            className="lg:col-span-2"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
          >
            <div className="rounded-[var(--qf-radius)] border border-[var(--qf-accent)] bg-[var(--qf-bg-raised)] p-[var(--qf-sp-6)] shadow-[0_0_0_1px_var(--qf-accent-glow),0_0_40px_var(--qf-accent-glow)]">
              <div className="mb-4 flex items-center gap-[var(--qf-sp-3)]">
                <Inbox className="h-8 w-8 text-[var(--qf-accent)]" strokeWidth={1.5} />
                <span className="text-[var(--qf-fs-xs)] uppercase tracking-[0.1em] text-[var(--qf-text-dim)]">
                  Spearhead
                </span>
              </div>
              <p className="mb-4 text-[var(--qf-text)]">
                The one system most owners need first.
              </p>
              <div className="rounded-[var(--qf-radius)] border border-[var(--qf-border)] bg-[var(--qf-bg-inset)] p-4">
                <pre className="overflow-x-auto whitespace-pre font-[family-name:var(--qf-mono)] text-[var(--qf-fs-sm)] text-[var(--qf-text-dim)]">
                  <span className="text-[var(--qf-accent)]">$</span> inbox.status
                  {'\n'}<span className="text-[var(--qf-ok)]">✓</span> classify → plan → diff → approve
                  {'\n'}<span className="text-[var(--qf-ok)]">✓</span> HITL active: nothing sends alone
                  {'\n'}<span className="text-[var(--qf-accent)]">$</span> _
                </pre>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
