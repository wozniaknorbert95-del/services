import Image from 'next/image';
import Link from 'next/link';
import { BRAND_LOGO, ROUTES } from '@/lib/constants';
import './brand-logo.css';

type BrandLogoProps = {
  linked?: boolean;
  size?: 'header' | 'footer';
};

export default function BrandLogo({ linked = true, size = 'header' }: BrandLogoProps) {
  const className = size === 'header' ? 'qf-brand-logo' : 'qf-brand-logo qf-brand-logo--footer';

  const image = (
    <Image
      src={BRAND_LOGO.src}
      alt={BRAND_LOGO.alt}
      width={BRAND_LOGO.width}
      height={BRAND_LOGO.height}
      className={className}
      priority={size === 'header'}
    />
  );

  if (!linked) return image;

  return (
    <Link href={ROUTES.home} className="qf-brand-logo-link">
      {image}
    </Link>
  );
}
