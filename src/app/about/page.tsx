import type { Metadata } from 'next';
import Section from '@/components/ui/Section';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import { ROUTES } from '@/lib/constants';

/* ── metadata ── */
export const metadata: Metadata = {
  title: 'About — enterprise-grade systems for small business | Quietforge',
  description:
    'I build small-business systems that run in the background — delivered by an AI workforce, with you in control. Enterprise-grade work at a small-business price.',
  openGraph: {
    title: 'About — enterprise-grade systems for small business | Quietforge',
    description:
      'I build small-business systems that run in the background — delivered by an AI workforce, with you in control.',
    url: 'https://services.flexgrafik.nl/about',
    images: [
      {
        url: '/og/about.svg',
        width: 1200,
        height: 630,
        alt: 'About — enterprise-grade systems for small business',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About — enterprise-grade systems for small business | Quietforge',
    description: 'Enterprise-grade work at a small-business price.',
    images: ['/og/about.svg'],
  },
};

/* ── data ── */
const MOAT_PILLARS = [
  {
    title: 'I build my own AI workforce.',
    body: "Most of the delivery runs on systems I built — not on billable hours. That's why I'm faster, leaner, and can offer enterprise-grade work at a small-business price.",
  },
  {
    title: 'Branding, UX and automation under one roof.',
    body: "From the logo to the back-end, it's one coherent system — not five vendors who don't talk to each other.",
  },
  {
    title: 'No hype — only systems that work, with you in control.',
    body: "I don't sell buzzwords. I sell systems that earn their keep, with human-in-the-loop at every critical step.",
  },
];

const PRINCIPLES = [
  'Outcome first. I measure success in your time saved and clients won, not features shipped.',
  'Built to last. Lean, maintainable systems — no bloat, no lock-in.',
  'You decide. Nothing happens without your approval.',
  'Honest numbers. Clear pricing, clear ROI, no surprises.',
];

/* ── page ── */
export default function AboutPage() {
  return (
    <>
      {/* ═══════════════════════════════════════════════════════════
          § A — HERO
         ═══════════════════════════════════════════════════════════ */}
      <Section padding="large">
        <h1 className="text-[var(--qf-fs-3xl)] font-bold tracking-tight leading-[var(--qf-lh-tight)] mb-6 max-w-3xl">
          Enterprise-grade systems, built for a business your size.
        </h1>
        <p className="text-[var(--qf-text-dim)] text-[var(--qf-fs-lg)] max-w-[var(--qf-maxw-narrow)] mb-8">
          I&apos;m Norbert Wozniak — I build small-business systems that run quietly in the
          background, so owners get their time back and their business keeps moving without them.
        </p>
        <Button href={ROUTES.bookDiscovery} withArrow size="lg">
          Book your Automation Map
        </Button>
      </Section>

      {/* ═══════════════════════════════════════════════════════════
          § B — MY STORY
         ═══════════════════════════════════════════════════════════ */}
      <Section background="surface" padding="large">
        <h2 className="text-[var(--qf-fs-2xl)] font-bold tracking-tight mb-6">
          From branding to systems — on a real business, not in theory
        </h2>
        <p className="text-[var(--qf-text-dim)] text-[var(--qf-fs-lg)] max-w-[var(--qf-maxw-narrow)]">
          I started in branding and print, then spent the last two years building a full digital
          ecosystem to run my own business: a sales wizard, a custom-built game, an automation
          engine, and the orchestration that ties it together. Everything I offer here has already
          proven itself on a live operation before it ever reaches a client.
        </p>
      </Section>

      {/* ═══════════════════════════════════════════════════════════
          § C — WHAT MAKES THIS DIFFERENT (moat)
         ═══════════════════════════════════════════════════════════ */}
      <Section padding="large">
        <h2 className="text-[var(--qf-fs-2xl)] font-bold tracking-tight mb-8">
          What makes this different
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {MOAT_PILLARS.map((pillar) => (
            <Card key={pillar.title} className="p-6">
              <h3 className="text-[var(--qf-fs-lg)] font-bold text-[var(--qf-text)] mb-2">
                {pillar.title}
              </h3>
              <p className="text-sm text-[var(--qf-text-dim)]">{pillar.body}</p>
            </Card>
          ))}
        </div>
      </Section>

      {/* ═══════════════════════════════════════════════════════════
          § D — WHY IT MATTERS FOR YOU
         ═══════════════════════════════════════════════════════════ */}
      <Section background="surface" padding="large">
        <h2 className="text-[var(--qf-fs-2xl)] font-bold tracking-tight mb-6">
          Why this matters for you
        </h2>
        <p className="text-[var(--qf-text-dim)] text-[var(--qf-fs-lg)] max-w-[var(--qf-maxw-narrow)]">
          You get the kind of architecture usually reserved for big budgets — delivered in a package a
          small business actually understands, at a price that makes sense, with full control over
          what it does.
        </p>
      </Section>

      {/* ═══════════════════════════════════════════════════════════
          § E — PRINCIPLES
         ═══════════════════════════════════════════════════════════ */}
      <Section padding="large">
        <h2 className="text-[var(--qf-fs-2xl)] font-bold tracking-tight mb-8">
          How I work
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-3xl">
          {PRINCIPLES.map((item) => (
            <div key={item} className="flex items-start gap-3">
              <span className="text-[var(--qf-ok)] mt-0.5 shrink-0">✓</span>
              <p className="text-[var(--qf-text-dim)]">{item}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* ═══════════════════════════════════════════════════════════
          § F — BRIDGE TO PILLAR 3 (one-way)
         ═══════════════════════════════════════════════════════════ */}
      <Section background="surface" padding="large">
        <h2 className="text-[var(--qf-fs-2xl)] font-bold tracking-tight mb-6">
          Building something bigger?
        </h2>
        <p className="text-[var(--qf-text-dim)] text-[var(--qf-fs-lg)] max-w-[var(--qf-maxw-narrow)] mb-8">
          If you&apos;re growing toward full multi-agent systems, orchestration and governance,
          that&apos;s a different conversation — and I do that too.
        </p>
        <a
          href="https://portfolio.flexgrafik.nl"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 text-[var(--qf-accent)] text-sm font-semibold hover:text-[var(--qf-text)] transition-colors"
        >
          Explore Pillar 3 →
        </a>
      </Section>

      {/* ═══════════════════════════════════════════════════════════
          § G — FINAL CTA
         ═══════════════════════════════════════════════════════════ */}
      <Section padding="large">
        <h2 className="text-[var(--qf-fs-2xl)] font-bold tracking-tight mb-4">
          Let&apos;s find what&apos;s worth automating.
        </h2>
        <Button href={ROUTES.bookDiscovery} withArrow size="lg">
          Book your Automation Map
        </Button>
      </Section>
    </>
  );
}
