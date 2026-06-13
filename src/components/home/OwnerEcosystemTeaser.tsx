'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useMotion } from '@/lib/useMotion';
import { ROUTES } from '@/lib/constants';
import { GRATKA } from '@/lib/gratka';
import Eyebrow from '@/components/ui/Eyebrow';
import Button from '@/components/ui/Button';

export default function OwnerEcosystemTeaser() {
  const motionCfg = useMotion();
  const fade = motionCfg.fadeIn();

  return (
    <section
      id="owner-ecosystem"
      aria-labelledby="owner-ecosystem-title"
      className="border-t border-[var(--qf-border)] bg-[var(--qf-bg-raised)] py-[var(--qf-sp-24)]"
    >
      <div className="mx-auto max-w-[var(--qf-maxw)] px-[var(--qf-sp-6)]">
        <motion.div
          initial={fade.initial}
          whileInView={fade.animate}
          viewport={{ once: true, margin: '-80px' }}
          transition={fade.transition}
          className="grid gap-[var(--qf-sp-12)] lg:grid-cols-2 lg:items-start"
        >
          <div>
            <Eyebrow>Live proof</Eyebrow>
            <h2 id="owner-ecosystem-title" className="mb-[var(--qf-sp-4)]">
              The system I run on — before I sell it.
            </h2>
            <p className="mb-[var(--qf-sp-6)] max-w-[var(--qf-maxw-narrow)] text-[var(--qf-fs-lg)] text-[var(--qf-text-dim)]">
              Eight repos, one supervised ecosystem: portal, wizard, game, AI backend, agent
              orchestration and inbox automation. Case studies on this site map to real modules —
              not theory.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button href={ROUTES.resultsOwnerEcosystem} withArrow>
                See the ecosystem map
              </Button>
              <Button
                href={GRATKA.ownerEcosystemMapPdf}
                target="_blank"
                rel="noopener noreferrer"
                variant="secondary"
              >
                Download PDF ↓
              </Button>
            </div>
          </div>
          <div className="overflow-x-auto rounded-[var(--qf-radius)] border border-[var(--qf-border)] bg-[var(--qf-bg-inset)] p-3">
            <Image
              src={GRATKA.ownerEcosystemMapSvg}
              alt="Owner ecosystem diagram: governance, VCMS supervision, applications, Agent OS, Quietforge and Inbox Killer"
              width={600}
              height={550}
              className="h-auto w-full min-w-[320px]"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
