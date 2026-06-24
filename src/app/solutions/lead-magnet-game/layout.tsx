import type { Metadata } from 'next';
import { SITE_URL } from '@/lib/constants';
import { leadMagnetPortfolioTitle } from '@/content/lead-magnet-case-study';

export const metadata: Metadata = {
  title: 'Gamified lead system — qualified ZZP leads without cold forms',
  description:
    'Experience-first lead capture for Dutch ZZP: register, play, reward ladder, leaderboard season, and wizard handoff. Live on app.flexgrafik.nl. From €2,200.',
  openGraph: {
    title: 'Gamified lead system for Dutch ZZP',
    description:
      'Turn cold traffic into qualified wizard handoffs — play, progress, reward, then self-service quoting. Live proof.',
    url: `${SITE_URL}/solutions/lead-magnet-game`,
    images: ['/og/lead-magnet-game.svg'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Gamified lead system for Dutch ZZP',
    description: `${leadMagnetPortfolioTitle} — live on app.flexgrafik.nl.`,
    images: ['/og/lead-magnet-game.svg'],
  },
};

export default function LeadMagnetGameLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
