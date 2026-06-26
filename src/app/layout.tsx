import type { Metadata } from "next";
import "./globals.css";
import GoogleAnalytics from "@/components/analytics/GoogleAnalytics";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HashScroll from "@/components/layout/HashScroll";
import { BRAND_LOGO, CREATOR, EMAIL, FLEXGRAFIK_URL, LINKEDIN_URL, SITE_NAME, SITE_URL } from "@/lib/constants";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'Quietforge — Conversion Systems Architect',
    template: '%s | Quietforge',
  },
  description:
    '8-repo governed ecosystem · Wizard live · honest built vs planned. Conversion systems for NL small businesses — human-in-the-loop throughout.',
  keywords: [
    'small business automation',
    'inbox automation',
    'website automation',
    'conversion systems',
    'digital transformation',
    'SMB automation',
    'lead qualification',
  ],
  authors: [{ name: 'Norbert Wozniak', url: `${SITE_URL}/founder/` }],
  creator: 'Norbert Wozniak',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: SITE_URL,
    siteName: 'Quietforge',
    title: 'Quietforge — Conversion Systems Architect',
    description:
      '8-repo governed ecosystem · Wizard live checkout · honest built vs planned. VCMS supervision, Agent OS, human gates.',
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
    description: '8-repo governed ecosystem · Wizard live · honest built vs planned.',
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
  icons: {
    icon: [{ url: BRAND_LOGO.src, type: 'image/png' }],
    apple: [{ url: BRAND_LOGO.src, type: 'image/png' }],
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
        <GoogleAnalytics />
        <HashScroll />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
