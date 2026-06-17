import type { NextConfig } from "next";
import createMDX from "@next/mdx";

const nextConfig: NextConfig = {
  images: {
    unoptimized: true,
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    // Policy: prefer WebP/AVIF sources in markup; screenshots max 1600px; lazy below fold
    formats: ['image/avif', 'image/webp'],
  },
  trailingSlash: true,
  pageExtensions: ['js', 'jsx', 'mdx', 'ts', 'tsx'],
  async redirects() {
    return [
      {
        source: '/digital-modernization',
        destination: '/solutions/web-upgrade/',
        permanent: true,
      },
      {
        source: '/digital-modernization/',
        destination: '/solutions/web-upgrade/',
        permanent: true,
      },
    ];
  },
};

const withMDX = createMDX({});

export default withMDX(nextConfig);
