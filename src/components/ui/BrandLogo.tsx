import Link from 'next/link';
import { BRAND_WORDMARK, ROUTES } from '@/lib/constants';
import './brand-logo.css';

type BrandLogoProps = {
  linked?: boolean;
  size?: 'header' | 'footer';
};

export default function BrandLogo({ linked = true, size = 'header' }: BrandLogoProps) {
  const className =
    size === 'header' ? 'qf-brand-wordmark' : 'qf-brand-wordmark qf-brand-wordmark--footer';

  const wordmark = <span className={className}>{BRAND_WORDMARK}</span>;

  if (!linked) return wordmark;

  return (
    <Link href={ROUTES.home} className="qf-brand-wordmark-link" aria-label="Quietforge home">
      {wordmark}
    </Link>
  );
}
