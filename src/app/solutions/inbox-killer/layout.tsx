import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Inbox Killer — Lead Qualification System',
  description:
    'Your inbox sorted, drafted, and gated. Inbox Killer classifies intent, drafts replies, and waits for your approval before anything sends.',
  openGraph: {
    title: 'Inbox Killer — Lead Qualification System | Quietforge',
    description:
      'Lead qualification system: classify lanes, draft replies, human approval on every send.',
    images: ['/og/solutions-inbox-killer.svg'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Inbox Killer — Lead Qualification System',
    description: 'Your inbox sorted, drafted, and gated.',
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
