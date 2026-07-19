import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Solutions',
  description:
    'Productized conversion systems for NL small business — Wizard quote & close first, then capture, operate and managed care. Not a hundred services.',
  openGraph: {
    title: 'Solutions — Quietforge',
    description:
      'Wizard spearhead for quote & close, plus web upgrade, lead magnet, inbox ops and Managed Automation (€349–€890/mo).',
    images: ['/og/solutions.svg'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Solutions — Quietforge',
    description:
      'Productized systems: quote & close, capture, operate, and monthly care — supervised, not set-and-forget.',
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
