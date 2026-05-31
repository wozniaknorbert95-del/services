'use client';

import { motion } from 'framer-motion';
import Badge from '@/components/ui/Badge';
import Button from '@/components/ui/Button';

export default function Hero() {
  return (
    <section
      className="relative flex min-h-[calc(100vh-64px)] flex-col items-center justify-center px-6 py-24 text-center sm:py-32 lg:px-8"
    >
      <motion.div
        initial={{ opacity: 0, y: 32 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
        className="max-w-4xl"
      >
        <Badge className="mb-6">AI Lead Qualification — Live in 48 Hours</Badge>

        <h1 className="text-4xl font-bold tracking-tight text-[var(--color-text-primary)] sm:text-5xl lg:text-6xl">
          Your inbox is 80% noise.
          <br />
          <span className="text-[var(--color-accent)]">We surface the 20% that pays.</span>
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-[var(--color-text-secondary)] sm:text-xl">
          AI reads every email, classifies hot leads, drafts replies, and archives the rest.
          Deployed in 48 hours. You approve every step.
        </p>

        <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <Button
            href="https://calendly.com/flexgrafik/20min"
            target="_blank"
            rel="noopener noreferrer"
            variant="primary"
            size="lg"
          >
            Book Free Demo
          </Button>
          <Button href="#case-studies" variant="secondary" size="lg">
            See How It Works
          </Button>
        </div>

        <p className="mt-4 text-sm text-[var(--color-text-muted)]">
          First 5 clients: setup €497, month 1 free
        </p>
      </motion.div>

      <div className="absolute inset-x-0 bottom-0 h-px bg-[var(--color-border)]" />
    </section>
  );
}
