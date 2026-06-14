import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Lead Magnet Game — turn visitors into leads',
  description:
    'A branded quiz or mini-game that captures contacts and feeds your list. Built on a custom game engine, mobile-first, fully tracked. From €2,200. Book a paid Automation Map.',
  openGraph: {
    title: 'Lead Magnet Game — turn visitors into leads',
    description:
      'A branded quiz or mini-game that captures contacts and feeds your list. Built on a custom game engine, mobile-first, fully tracked.',
    images: ['/og/lead-magnet-game.svg'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Lead Magnet Game — turn visitors into leads',
    description: 'A branded quiz or mini-game that captures contacts and feeds your list.',
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
