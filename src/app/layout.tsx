import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { CREATOR, EMAIL, FLEXGRAFIK_URL, LINKEDIN_URL, SITE_NAME, SITE_URL } from "@/lib/constants";

export const metadata: Metadata = {
  metadataBase: new URL('https://services.flexgrafik.nl'),
  title: {
    default: 'Quietforge — Conversion Systems Architect',
    template: '%s | Quietforge',
  },
  description:
    'Conversion systems that qualify leads and reduce admin for NL small businesses. Human-in-the-loop. Start with a paid Automation Map.',
  keywords: [
    'small business automation',
    'inbox automation',
    'website automation',
    'conversion systems',
    'digital transformation',
    'SMB automation',
    'lead qualification',
  ],
  authors: [{ name: 'Norbert Wozniak', url: 'https://services.flexgrafik.nl/founder/' }],
  creator: 'Norbert Wozniak',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://services.flexgrafik.nl',
    siteName: 'Quietforge',
    title: 'Quietforge — Conversion Systems Architect',
    description:
      'Conversion systems that qualify leads and reduce admin for NL small businesses. Human-in-the-loop. Start with a paid Automation Map.',
    images: [
      {
        url: '/og/home.svg',
        width: 1200,
        height: 630,
        alt: 'Quietforge — Conversion Systems Architect',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Quietforge — Conversion Systems Architect',
    description:
      'Conversion systems that qualify leads and reduce admin for NL small businesses. Human-in-the-loop.',
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
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      name: SITE_NAME,
      url: SITE_URL,
      description:
        "Conversion systems for small businesses — lead qualification, automation, and custom VCMS.",
    },
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      name: SITE_NAME,
      url: SITE_URL,
      email: EMAIL,
      founder: { "@type": "Person", name: CREATOR },
      sameAs: [
        LINKEDIN_URL,
        FLEXGRAFIK_URL,
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "Person",
      name: CREATOR,
      jobTitle: "Conversion Systems Architect",
      url: `${SITE_URL}/founder/`,
      worksFor: { "@type": "Organization", name: SITE_NAME },
      sameAs: [
        LINKEDIN_URL,
        FLEXGRAFIK_URL,
      ],
    },
  ];

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
