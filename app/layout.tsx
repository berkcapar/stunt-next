import { Inter } from 'next/font/google';
import './globals.css';
import type { Metadata } from 'next';
import ClientLayout from './ClientLayout';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: {
    default: 'StuntAI - AI Marketing Automation Platform | Stop Overpaying for Marketing',
    template: '%s | Stunt'
  },
  description: 'Get AI-powered marketing automation: social media content, reports, SEO articles & creative generation. Save time and money while finding new customers.',
  // Google Search Console verification - eğer gerekirse buraya eklenecek
  // verification: {
  //   google: 'your-google-site-verification-code'
  // },
  keywords: [
    'AI marketing automation',
    'marketing automation platform',
    'social media automation',
    'SEO content generation',
    'marketing reports',
    'AI creative generation',
    'digital marketing tools',
    'marketing analytics',
    'B2B marketing',
    'startup marketing',
    'small business marketing',
    'pazarlama otomasyonu',
    'yapay zeka pazarlama'
  ],
  authors: [{ name: 'Berk Capar', url: 'https://stuntai.co' }],
  creator: 'Berk Capar',
  publisher: 'Stunt AI',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://stuntai.co'),
  alternates: {
    canonical: 'https://stuntai.co/',
    languages: {
      'tr': 'https://stuntai.co/',
      'en': 'https://stuntai.co/en',
      'de': 'https://stuntai.co/de',
    },
  },
  openGraph: {
    type: 'website',
    locale: 'tr_TR',
    url: 'https://stuntai.co',
    title: 'Stunt - AI Marketing Automation Platform',
    description: 'Stop overpaying for marketing! AI-powered automation for reports, social media, SEO & creative content. Find new customers while saving time and money.',
    siteName: 'Stunt',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Stunt AI Marketing Automation Platform',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Stunt - AI Marketing Automation Platform',
    description: 'Stop overpaying for marketing! AI-powered automation for reports, social media, SEO & creative content.',
    site: '@bcaparing',
    creator: '@bcaparing',
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: [
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon.ico', sizes: 'any' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
    other: [
      { rel: 'mask-icon', url: '/safari-pinned-tab.svg', color: '#7c3aed' },
    ],
  },
  manifest: '/site.webmanifest',
  category: 'technology',
  classification: 'Business',
  other: {
    'msapplication-TileColor': '#7c3aed',
    'theme-color': '#ffffff',
    'apple-mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-status-bar-style': 'default',
    'mobile-web-app-capable': 'yes',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Server-side'da environment variable'ı oku - sadece production'da
  const gaId = process.env.NODE_ENV === 'production' ? process.env.GA_MEASUREMENT_ID : undefined;
  
  return (
    <html lang="tr" suppressHydrationWarning>
      <head>
        {/* Hreflang tags for SEO */}
        <link rel="alternate" hrefLang="tr" href="https://stuntai.co/" />
        <link rel="alternate" hrefLang="en" href="https://stuntai.co/en" />
        <link rel="alternate" hrefLang="de" href="https://stuntai.co/de" />
        <link rel="alternate" hrefLang="x-default" href="https://stuntai.co/" />
        
        {/* Preconnect for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        
        {/* DNS Prefetch */}
        <link rel="dns-prefetch" href="//www.google-analytics.com" />
        
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              name: 'Stunt',
              url: 'https://stuntai.co',
              logo: 'https://stuntai.co/stunt-logo.png',
              description: 'AI Marketing Automation Platform for businesses to automate reports, social media, SEO and creative content generation.',
              founder: {
                '@type': 'Person',
                name: 'Berk Capar',
                jobTitle: 'Founder & CEO',
                url: 'https://www.linkedin.com/in/berkcapar',
              },
              contactPoint: {
                '@type': 'ContactPoint',
                contactType: 'customer service',
                availableLanguage: ['Turkish', 'English', 'German']
              },
              sameAs: [
                'https://www.linkedin.com/company/67973841',
                'https://www.instagram.com/stunt.ai/',
                'https://x.com/bcaparing',
                'https://www.youtube.com/@stuntai'
              ],
              service: [
                {
                  '@type': 'Service',
                  name: 'AI Marketing Reports',
                  description: 'Automated marketing analytics and AI-powered insights'
                },
                {
                  '@type': 'Service', 
                  name: 'Social Media Automation',
                  description: 'Automated social media content scheduling and management'
                },
                {
                  '@type': 'Service',
                  name: 'SEO Content Generation',
                  description: 'AI-powered SEO blog posts and content creation'
                },
                {
                  '@type': 'Service',
                  name: 'AI Creative Generation',
                  description: 'AI-generated images, videos and ad copy'
                }
              ]
            })
          }}
        />
      </head>
      <body className={`${inter.className} text-gray-900 antialiased flex flex-col min-h-screen`}>
        <ClientLayout gaId={gaId}>{children}</ClientLayout>
      </body>
    </html>
  );
}
