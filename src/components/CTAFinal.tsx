'use client';

import { motion } from 'framer-motion';
import { Mail, Calendar, ArrowRight } from 'lucide-react';
import Section from '@/components/ui/Section';
import Button from '@/components/ui/Button';

export default function CTAFinal() {
  return (
    <Section id="cta" background="surface">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mx-auto max-w-3xl text-center"
      >
        <h2 className="text-3xl font-bold tracking-tight text-[var(--color-text-primary)] sm:text-4xl">
          Ready to stop losing leads to inbox noise?
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-lg text-[var(--color-text-secondary)]">
          Book a free 20-minute demo. No pitch. Pure diagnosis. We show you exactly what your inbox
          is costing you.
        </p>

        <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <Button
            href="https://calendly.com/flexgrafik/20min"
            target="_blank"
            rel="noopener noreferrer"
            variant="primary"
            size="lg"
          >
            <Calendar className="mr-2 h-5 w-5" />
            Book Free Demo
          </Button>
          <Button
            href="mailto:hello@flexgrafik.nl"
            variant="secondary"
            size="lg"
          >
            <Mail className="mr-2 h-5 w-5" />
            hello@flexgrafik.nl
          </Button>
        </div>

        <p className="mt-6 text-xs text-[var(--color-text-muted)]">
          First 5 clients get month 1 free. Setup fee €497. No hidden costs.
        </p>
      </motion.div>
    </Section>
  );
}
