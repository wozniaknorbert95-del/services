import type { MDXComponents } from 'mdx/types';

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h1: ({ children }) => (
      <h1 className="text-[var(--qf-fs-2xl)] font-bold tracking-tight text-[var(--qf-text)] mb-6 mt-8">
        {children}
      </h1>
    ),
    h2: ({ children }) => (
      <h2 className="text-[var(--qf-fs-xl)] font-bold tracking-tight text-[var(--qf-text)] mb-4 mt-8">
        {children}
      </h2>
    ),
    h3: ({ children }) => (
      <h3 className="text-[var(--qf-fs-lg)] font-bold tracking-tight text-[var(--qf-text)] mb-3 mt-6">
        {children}
      </h3>
    ),
    p: ({ children }) => (
      <p className="text-[var(--qf-text-dim)] leading-[var(--qf-lh-body)] mb-4">
        {children}
      </p>
    ),
    ul: ({ children }) => (
      <ul className="list-disc pl-6 text-[var(--qf-text-dim)] mb-4 space-y-2">
        {children}
      </ul>
    ),
    ol: ({ children }) => (
      <ol className="list-decimal pl-6 text-[var(--qf-text-dim)] mb-4 space-y-2">
        {children}
      </ol>
    ),
    li: ({ children }) => <li className="pl-1">{children}</li>,
    a: ({ href, children }) => (
      <a
        href={href}
        className="text-[var(--qf-accent)] hover:text-[var(--qf-text)] transition-colors underline underline-offset-2"
      >
        {children}
      </a>
    ),
    strong: ({ children }) => <strong className="text-[var(--qf-text)] font-semibold">{children}</strong>,
    em: ({ children }) => <em className="italic text-[var(--qf-text-dim)]">{children}</em>,
    blockquote: ({ children }) => (
      <blockquote className="border-l-2 border-[var(--qf-accent)] pl-4 py-2 my-6 text-[var(--qf-text-dim)] italic">
        {children}
      </blockquote>
    ),
    hr: () => <hr className="border-[var(--qf-border)] my-8" />,
    ...components,
  };
}
