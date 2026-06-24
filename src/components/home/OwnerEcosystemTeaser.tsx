'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { useMotion } from '@/lib/useMotion';
import { ROUTES } from '@/lib/constants';
import { GRATKA } from '@/lib/gratka';
import Eyebrow from '@/components/ui/Eyebrow';
import Button from '@/components/ui/Button';
import GratkaDiagram from '@/components/ui/GratkaDiagram';

export default function OwnerEcosystemTeaser() {
  const motionCfg = useMotion();
  const fade = motionCfg.fadeIn();

  return (
    <section
      id="owner-ecosystem"
      data-home-section="owner-ecosystem"
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
            <p className="mb-[var(--qf-sp-8)] max-w-[var(--qf-maxw-narrow)] text-[var(--qf-fs-lg)] text-[var(--qf-text-dim)]">
              Living Operating System — eight repos, one supervised stack. VCMS governs the codebase,
              Agent OS executes, and human approval gates protect the output.
            </p>

            <div className="flex flex-wrap gap-4">
              <Button href={`${ROUTES.resultsOwnerEcosystem}#los`} withArrow>
                Full LOS map
              </Button>
              <Button
                href={GRATKA.losArchitectureSvg}
                target="_blank"
                rel="noopener noreferrer"
                variant="secondary"
              >
                Download LOS diagram (SVG) ↓
              </Button>
            </div>
          </div>
          <div className="overflow-x-auto rounded-[var(--qf-radius)] border border-[var(--qf-border)] bg-[var(--qf-bg-inset)] p-3">
            <GratkaDiagram
              src={GRATKA.losArchitectureSvg}
              alt="Living Operating System — six layers and eight repositories"
              width={1200}
              height={720}
              className="h-auto w-full min-w-[320px]"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
