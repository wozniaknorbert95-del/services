'use client';

import { motion } from 'framer-motion';
import { useMotion } from '@/lib/useMotion';
import StatusBadge from '@/components/ui/StatusBadge';
import {
  READINESS_HEADER,
  READINESS_ROWS,
  type ReadinessStatus,
} from '@/content/readiness';
import { metrics } from '@/content/proof';

/**
 * Built vs Planned readiness table — honest AS-IS inventory per repo.
 * Used in: src/app/page.tsx (home)
 */
export default function BuiltVsPlanned() {
  const motionCfg = useMotion();
  const fade = motionCfg.fadeIn();

  return (
    <section
      data-home-section="built-vs-planned"
      className="border-t border-[var(--qf-border)] py-[var(--qf-sp-24)]"
      aria-labelledby="built-vs-planned-heading"
    >
      <div className="mx-auto max-w-[var(--qf-maxw)] px-[var(--qf-sp-6)]">
        <motion.div
          initial={fade.initial}
          whileInView={fade.animate}
          viewport={{ once: true, margin: '-80px' }}
          transition={fade.transition}
          className="mb-[var(--qf-sp-12)]"
        >
          <span className="qf-eyebrow">{READINESS_HEADER.eyebrow}</span>
          <h2 id="built-vs-planned-heading" className="mt-[var(--qf-sp-4)]">
            {READINESS_HEADER.title}
          </h2>
          <p className="qf-lead mt-[var(--qf-sp-4)] max-w-2xl">{READINESS_HEADER.lead}</p>
          <p className="qf-hint mt-[var(--qf-sp-3)]">
            {metrics.repos} repos · {metrics.productionTouching} production-touching · COI roadmap
            active
          </p>
        </motion.div>

        <motion.div
          initial={fade.initial}
          whileInView={fade.animate}
          viewport={{ once: true, margin: '-80px' }}
          transition={fade.transition}
          className="overflow-x-auto rounded-[var(--qf-radius)] border border-[var(--qf-border)]"
        >
          <table className="w-full min-w-[640px] border-collapse text-left text-sm">
            <thead>
              <tr className="border-b border-[var(--qf-border)] bg-[var(--qf-bg-inset)]">
                <th className="px-4 py-3 font-mono text-xs uppercase tracking-wider text-[var(--qf-accent)]">
                  Module
                </th>
                <th className="px-4 py-3 font-mono text-xs uppercase tracking-wider text-[var(--qf-accent)]">
                  Readiness
                </th>
                <th className="px-4 py-3 font-mono text-xs uppercase tracking-wider text-[var(--qf-accent)]">
                  Key capability
                </th>
                <th className="px-4 py-3 font-mono text-xs uppercase tracking-wider text-[var(--qf-accent)]">
                  Status
                </th>
              </tr>
            </thead>
            <tbody>
              {READINESS_ROWS.map((row) => (
                <tr key={row.repoKey} className="border-b border-[var(--qf-border)] last:border-0">
                  <td className="px-4 py-3">
                    <p className="font-semibold text-[var(--qf-text)]">{row.module}</p>
                    <p className="font-mono text-xs text-[var(--qf-text-faint)]">{row.repoKey}</p>
                  </td>
                  <td className="px-4 py-3 font-mono text-[var(--qf-text-dim)]">{row.readiness}</td>
                  <td className="px-4 py-3 text-[var(--qf-text-dim)]">{row.capability}</td>
                  <td className="px-4 py-3">
                    <StatusBadge status={row.status as ReadinessStatus} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </motion.div>
      </div>
    </section>
  );
}
