import Image from 'next/image';

interface ProofScreenImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  priority?: boolean;
}

function isSvgSrc(src: string): boolean {
  return src.endsWith('.svg');
}

/**
 * Proof screenshots — native img for SVG (next/image SVG quirks), next/image for raster.
 */
export default function ProofScreenImage({
  src,
  alt,
  width = 640,
  height = 400,
  className = '',
  priority = false,
}: ProofScreenImageProps) {
  const objectClass = isSvgSrc(src) ? 'object-contain p-2' : 'object-cover';
  const imgClass = `h-full w-full ${objectClass} ${className}`.trim();

  if (isSvgSrc(src)) {
    return (
      // eslint-disable-next-line @next/next/no-img-element
      <img
        src={src}
        alt={alt}
        width={width}
        height={height}
        className={imgClass}
        loading={priority ? 'eager' : 'lazy'}
        decoding="async"
      />
    );
  }

  return (
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      className={imgClass}
      priority={priority}
    />
  );
}
