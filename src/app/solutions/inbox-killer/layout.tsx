import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Inbox Killer — email that sorts itself',
  description:
    'Stop losing hours and leads in your inbox. Inbox Killer sorts, prioritises and drafts your replies — you approve every send. Built for small businesses. Book a paid Automation Map.',
  openGraph: {
    title: 'Inbox Killer — email that sorts itself | Quietforge',
    description:
      'Stop losing hours and leads in your inbox. Inbox Killer sorts, prioritises and drafts your replies — you approve every send.',
    images: ['/og/solutions-inbox-killer.svg'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Inbox Killer — email that sorts itself | Quietforge',
    description: 'Stop losing hours and leads in your inbox.',
    images: ['/og/solutions-inbox-killer.svg'],
  },
};

export default function InboxKillerLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
