import { Globe, MessageCircle } from 'lucide-react';
import { cn } from '@/lib/utils';
import { SOCIAL_LINKS } from '@/lib/constants';

function LinkedInIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden
    >
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 114.126 0 2.062 2.062 0 01-2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

const ICONS = {
  linkedin: LinkedInIcon,
  globe: Globe,
  whatsapp: MessageCircle,
} as const;

interface SocialLinksProps {
  showLabels?: boolean;
  className?: string;
}

export default function SocialLinks({ showLabels = false, className }: SocialLinksProps) {
  return (
    <ul
      className={cn(
        'flex flex-wrap gap-[var(--qf-sp-3)]',
        showLabels ? 'flex-col items-start' : 'items-center',
        className
      )}
      aria-label="Connect"
    >
      {SOCIAL_LINKS.map((item) => {
        const Icon = ICONS[item.icon];
        return (
          <li key={item.label}>
            <a
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                'inline-flex items-center gap-2 text-[var(--qf-text-dim)] hover:text-[var(--qf-accent)]',
                !showLabels &&
                  'min-h-11 min-w-11 justify-center border border-[var(--qf-border)] hover:border-[var(--qf-accent)]'
              )}
              aria-label={item.label}
            >
              {item.icon === 'linkedin' ? (
                <LinkedInIcon className="h-4 w-4 shrink-0" />
              ) : (
                <Icon className="h-4 w-4 shrink-0" strokeWidth={1.5} aria-hidden />
              )}
              {showLabels && <span className="text-sm">{item.label}</span>}
            </a>
          </li>
        );
      })}
    </ul>
  );
}
