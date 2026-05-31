import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL('https://services.flexgrafik.nl'),
  title: {
    default: 'FlexGrafik Digital — AI-Powered Systems for Small Business',
    template: '%s | FlexGrafik Digital',
  },
  description:
    'AI lead qualification and digital automation for small businesses. Inbox Killer: live in 48 hours. €497 setup + €147/mo.',
  keywords: [
    'AI lead qualification',
    'inbox automation',
    'small business automation',
    'ZZP automation',
    'email classification',
    'digital transformation',
  ],
  authors: [{ name: 'Norbert Wozniak', url: 'https://portfolio.flexgrafik.nl' }],
  creator: 'Norbert Wozniak',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://services.flexgrafik.nl',
    siteName: 'FlexGrafik Digital',
    title: 'FlexGrafik Digital — AI-Powered Systems for Small Business',
    description:
      'AI lead qualification and digital automation. Inbox Killer deployed in 48 hours.',
    images: [
      {
        url: '/og/home.png',
        width: 1200,
        height: 630,
        alt: 'FlexGrafik Digital — AI Lead Qualification',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'FlexGrafik Digital — AI-Powered Systems for Small Business',
    description: 'AI lead qualification live in 48 hours.',
    creator: '@flexgrafik',
    images: ['/og/home.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "FlexGrafik Digital",
    url: "https://services.flexgrafik.nl",
    description:
      "AI-powered digital transformation for small businesses and ZZP professionals.",
    potentialAction: {
      "@type": "SearchAction",
      target: "https://services.flexgrafik.nl/?q={search_term_string}",
      "query-input": "required name=search_term_string",
    },
  };

  return (
    <html lang="en" className="h-full antialiased">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
