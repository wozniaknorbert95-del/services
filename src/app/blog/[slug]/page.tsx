import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Button from '@/components/ui/Button';
import { ROUTES } from '@/lib/constants';

/* ── post registry ── */
const POST_META: Record<string, { title: string; date: string; category: string; excerpt: string }> = {
  'automation-for-small-business': {
    title: 'Automation for small business — where to start',
    date: '2026-05-28',
    category: 'Automation',
    excerpt: 'Most small businesses drown in email, manual quotes and outdated websites. Here is a calm, practical way to think about automation without buying into hype.',
  },
  'digital-transformation-without-the-jargon': {
    title: 'Digital transformation without the jargon',
    date: '2026-05-21',
    category: 'Digital Transformation',
    excerpt: 'Digital transformation is not a six-month project with a consultant army. It is one system at a time, each one paying for the next.',
  },
  'under-the-hood-how-inbox-killer-works': {
    title: 'Under the hood: how Inbox Killer actually works',
    date: '2026-05-14',
    category: 'Under the Hood',
    excerpt: 'A look at the human-in-the-loop architecture behind Inbox Killer: classify, plan, draft, approve — and why nothing sends without your sign-off.',
  },
};

const POST_COMPONENTS: Record<string, () => Promise<{ default: React.ComponentType }>> = {
  'automation-for-small-business': () => import('../posts/automation-for-small-business.mdx'),
  'digital-transformation-without-the-jargon': () => import('../posts/digital-transformation-without-the-jargon.mdx'),
  'under-the-hood-how-inbox-killer-works': () => import('../posts/under-the-hood-how-inbox-killer-works.mdx'),
};

/* ── generateStaticParams ── */
export function generateStaticParams() {
  return Object.keys(POST_META).map((slug) => ({ slug }));
}

/* ── metadata ── */
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const meta = POST_META[slug];
  if (!meta) return { title: 'Post not found | Quietforge' };

  return {
    title: `${meta.title} | Quietforge Blog`,
    description: meta.excerpt,
    openGraph: {
      title: meta.title,
      description: meta.excerpt,
      type: 'article',
      publishedTime: meta.date,
      images: [
        {
          url: '/og/blog.svg',
          width: 1200,
          height: 630,
          alt: meta.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: meta.title,
      description: meta.excerpt,
      images: ['/og/blog.svg'],
    },
  };
}

/* ── page ── */
export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const meta = POST_META[slug];
  const loader = POST_COMPONENTS[slug];
  if (!meta || !loader) notFound();

  const { default: Post } = await loader();

  return (
    <article>
      <header className="mb-10">
        <div className="flex flex-wrap items-center gap-3 mb-4">
          <span className="text-[var(--qf-fs-xs)] uppercase tracking-[0.1em] text-[var(--qf-accent)] font-semibold">
            {meta.category}
          </span>
          <span className="text-[var(--qf-fs-xs)] text-[var(--qf-text-faint)]">
            {meta.date}
          </span>
        </div>
        <h1 className="text-[var(--qf-fs-3xl)] font-bold tracking-tight leading-[var(--qf-lh-tight)] mb-4">
          {meta.title}
        </h1>
        <p className="text-[var(--qf-fs-lg)] text-[var(--qf-text-dim)] max-w-[var(--qf-maxw-narrow)]">
          {meta.excerpt}
        </p>
      </header>

      <div className="prose prose-invert max-w-none">
        <Post />
      </div>

      <footer className="border-t border-[var(--qf-border)] mt-16 pt-10">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
          <Link
            href="/blog/"
            className="text-[var(--qf-text-dim)] text-sm hover:text-[var(--qf-accent)] transition-colors"
          >
            ← Back to all posts
          </Link>
        </div>
        <div className="rounded-[var(--qf-radius)] border border-[var(--qf-border)] bg-[var(--qf-bg-raised)] p-6">
          <h3 className="text-[var(--qf-fs-lg)] font-bold text-[var(--qf-text)] mb-2">
            Want this for your business?
          </h3>
          <p className="text-[var(--qf-text-dim)] mb-4">
            Book a paid Automation Map — we find your biggest time-and-money leaks and show you
            the ROI in 60–90 minutes.
          </p>
          <Button href={ROUTES.bookDiscovery} withArrow>
            Book your Automation Map
          </Button>
        </div>
      </footer>
    </article>
  );
}
