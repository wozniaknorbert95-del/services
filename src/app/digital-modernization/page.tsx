import type { Metadata } from 'next';
import { Bell } from 'lucide-react';
import Card from '@/components/ui/Card';
import WaitlistForm from '@/components/WaitlistForm';

export const metadata: Metadata = {
  title: 'Digital Modernization — Coming Soon | FlexGrafik Digital',
  description:
    'Website and e-commerce modernization for ZZP and small businesses. Join the waitlist.',
  openGraph: {
    title: 'Digital Modernization — Coming Soon',
    description: 'Website and e-commerce modernization. Join the waitlist.',
    url: 'https://services.flexgrafik.nl/digital-modernization',
  },
};

export default function DigitalModernizationPage() {
  return (
    <main className="flex min-h-[calc(100vh-64px)] flex-col items-center justify-center px-6 py-24 text-center">
      <div className="mx-auto max-w-2xl">
        <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[var(--color-amber)] px-3 py-1 text-xs font-mono font-medium text-[var(--color-amber)]">
          <Bell className="h-3 w-3" />
          Coming in 14 days
        </div>

        <h1 className="text-3xl font-bold tracking-tight text-[var(--color-text-primary)] sm:text-4xl">
          Digital Modernization
        </h1>
        <p className="mx-auto mt-4 max-w-lg text-lg text-[var(--color-text-secondary)]">
          From 2015 to 2026 in 2–3 weeks. Custom Next.js sites, mobile-first, SEO-optimized,
          with lead capture and AI content generation. You approve everything before it goes live.
        </p>

        <Card className="mx-auto mt-10 max-w-md text-left">
          <h2 className="font-semibold text-[var(--color-text-primary)]">Join the waitlist</h2>
          <p className="mt-1 text-sm text-[var(--color-text-secondary)]">
            Be the first to know when modernization opens. No spam.
          </p>
          <WaitlistForm />
        </Card>

        <div className="mt-8">
          <a
            href="/"
            className="inline-flex items-center gap-2 text-sm text-[var(--color-accent)] transition-colors hover:text-[var(--color-accent-glow)]"
          >
            &larr; Back to home
          </a>
        </div>
      </div>
    </main>
  );
}
