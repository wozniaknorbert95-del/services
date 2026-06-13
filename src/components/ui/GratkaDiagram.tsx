interface GratkaDiagramProps {
  src: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
  priority?: boolean;
}

/**
 * Native img for SVG gratka diagrams — avoids next/image SVG load quirks
 * (color:transparent stuck state) on case study pages.
 */
export default function GratkaDiagram({
  src,
  alt,
  width,
  height,
  className = 'h-auto w-full min-w-[640px]',
  priority = false,
}: GratkaDiagramProps) {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={src}
      alt={alt}
      width={width}
      height={height}
      className={className}
      loading={priority ? 'eager' : 'lazy'}
      decoding="async"
    />
  );
}
