import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Solutions',
  description:
    'A few sharp, productized systems for small business — not a hundred services. Start with Inbox Killer, then grow.',
  openGraph: {
    title: 'Solutions | Quietforge',
    description:
      'A few sharp, productized systems for small business — not a hundred services.',
    images: ['/og/solutions.svg'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Solutions | Quietforge',
    description: 'Productized systems that run your business on autopilot.',
    images: ['/og/solutions.svg'],
  },
};

export default function SolutionsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
