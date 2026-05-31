import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Blog — practical notes on automation & digital transformation | Quietforge',
  description:
    'Short, practical notes on digital transformation and automation for small business. Systems that run quietly in the background.',
};

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="mx-auto max-w-3xl px-6 py-16 sm:px-8">
      {children}
    </div>
  );
}
