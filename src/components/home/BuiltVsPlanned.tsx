'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { useMotion } from '@/lib/useMotion';
import StatusBadge from '@/components/ui/StatusBadge';
import Eyebrow from '@/components/ui/Eyebrow';
import {
  READINESS_HEADER,
  READINESS_ROWS,
  getHomeReadinessRows,
  type ReadinessStatus,
} from '@/content/readiness';
import { ROUTES } from '@/lib/constants';

interface BuiltVsPlannedProps {
  variant?: 'default' | 'compact';
}

/**
 * Built vs Planned readiness table — honest inventory per repo.
 * Compact on home (4 rows); full 8-row table on owner-ecosystem.
 */
export default function BuiltVsPlanned({ variant = 'default' }: BuiltVsPlannedProps) {
  const motionCfg = useMotion();
  const fade = motionCfg.fadeIn();
  const isCompact = variant === 'compact';
  const rows = isCompact ? getHomeReadinessRows() : READINESS_ROWS;

  return (
    <section
      id="built-vs-planned"
      data-home-section="built-vs-planned"
      className="qf-home-section"
      aria-labelledby="built-vs-planned-heading"
    >
      <div className="qf-home-inner">
        <motion.div
          initial={fade.initial}
          whileInView={fade.animate}
          viewport={{ once: true, margin: '-80px' }}
          transition={fade.transition}
          className="qf-home-header"
        >
          <Eyebrow>{READINESS_HEADER.eyebrow}</Eyebrow>
          <h2 id="built-vs-planned-heading">{READINESS_HEADER.title}</h2>
          <p className="qf-lead max-w-2xl">{READINESS_HEADER.lead}</p>
        </motion.div>

        {isCompact ? (
          <div className="qf-honesty-grid">
            {rows.map((row) => (
              <div key={row.repoKey} className="qf-honesty-card">
                <div className="qf-honesty-card-top">
                  <p className="qf-honesty-card-title">{row.module}</p>
                  <StatusBadge status={row.status as ReadinessStatus} />
                </div>
                <p className="qf-honesty-card-body">{row.homeCapability ?? row.capability}</p>
              </div>
            ))}
          </div>
        ) : (
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
                {rows.map((row) => (
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
        )}

        {isCompact ? (
          <Link href={ROUTES.resultsOwnerEcosystem} className="qf-honesty-link">
            View full built vs planned map →
          </Link>
        ) : null}
      </div>
    </section>
  );
}
