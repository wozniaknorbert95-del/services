import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  metadataBase: new URL('https://services.flexgrafik.nl'),
  title: {
    default: 'Quietforge — Done-for-you systems for small business',
    template: '%s | Quietforge',
  },
  description:
    'Modern websites and back-office automation for small businesses. Fewer emails, more clients — systems that run on autopilot. Start with a paid Automation Map.',
  keywords: [
    'small business automation',
    'inbox automation',
    'website automation',
    'done-for-you systems',
    'digital transformation',
    'SMB automation',
    'lead qualification',
  ],
  authors: [{ name: 'Norbert Wozniak', url: 'https://portfolio.flexgrafik.nl' }],
  creator: 'Norbert Wozniak',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://services.flexgrafik.nl',
    siteName: 'Quietforge',
    title: 'Quietforge — Done-for-you systems for small business',
    description:
      'Modern websites and back-office automation for small businesses. Fewer emails, more clients — systems that run on autopilot.',
    images: [
      {
        url: '/og/home.svg',
        width: 1200,
        height: 630,
        alt: 'Quietforge — Done-for-you systems for small business',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Quietforge — Done-for-you systems for small business',
    description: 'Systems that run your small business — quietly, in the background.',
    creator: '@flexgrafik',
    images: ['/og/home.svg'],
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
    name: "Quietforge",
    url: "https://services.flexgrafik.nl",
    description:
      "Done-for-you digital systems for small businesses — modern websites and back-office automation.",
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
      <body data-app="services" className="min-h-full flex flex-col bg-[var(--qf-bg)] text-[var(--qf-text)]">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
