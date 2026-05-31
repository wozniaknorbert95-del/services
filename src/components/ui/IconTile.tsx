import { cn } from '@/lib/utils';
import { type LucideIcon } from 'lucide-react';

interface IconTileProps {
  icon: LucideIcon;
  title: string;
  description: string;
  href?: string;
  className?: string;
}

export default function IconTile({ icon: Icon, title, description, href, className }: IconTileProps) {
  const Wrapper = href ? 'a' : 'div';

  return (
    <Wrapper
      href={href}
      className={cn(
        'block rounded-[var(--qf-radius)] border border-[var(--qf-border)] bg-[var(--qf-bg-raised)] p-6 transition-colors duration-[var(--qf-transition)]',
        href && 'cursor-pointer hover:border-[var(--qf-border-bright)]',
        className
      )}
    >
      <Icon className="mb-4 h-6 w-6 text-[var(--qf-accent)]" strokeWidth={1.5} />
      <h3 className="mb-2 text-[var(--qf-fs-lg)] font-bold text-[var(--qf-text)]">{title}</h3>
      <p className="text-[var(--qf-text-dim)]">{description}</p>
      {href && (
        <span className="mt-4 inline-flex items-center text-[var(--qf-accent)] text-sm">
          See the fix →
        </span>
      )}
    </Wrapper>
  );
}
