import { Inter } from 'next/font/google';
import '../globals.css';
import type { Metadata } from 'next';
import ClientLayout from '../ClientLayout';
import { notFound } from 'next/navigation';

const inter = Inter({ subsets: ['latin'] });

const locales = ['en', 'de'];

export async function generateStaticParams() {
  return locales.map((locale) => ({
    locale,
  }));
}

export async function generateMetadata({ 
  params 
}: { 
  params: { locale: string } 
}): Promise<Metadata> {
  const { locale } = params;
  
  if (!locales.includes(locale)) {
    notFound();
  }

  const baseUrl = 'https://stuntai.co';
  const currentUrl = `${baseUrl}/${locale}`;

  const titles = {
    en: 'Stunt - AI Marketing Automation Platform | Stop Overpaying for Marketing',
    de: 'Stunt - KI Marketing Automation Plattform | Stoppen Sie Overpaying für Marketing'
  };

  const descriptions = {
    en: 'Stop overpaying for marketing! Get AI-powered marketing automation: reports, social media content, SEO articles & creative generation. Save time and money while finding new customers.',
    de: 'Stoppen Sie das Overpaying für Marketing! Holen Sie sich KI-gestützte Marketing-Automatisierung: Berichte, Social Media Content, SEO-Artikel & kreative Generierung.'
  };

  return {
    title: {
      default: titles[locale as keyof typeof titles],
      template: `%s | Stunt`
    },
    description: descriptions[locale as keyof typeof descriptions],
    alternates: {
      canonical: `${baseUrl}/`,
      languages: {
        'tr': `${baseUrl}/`,
        'en': `${baseUrl}/en`,
        'de': `${baseUrl}/de`,
      },
    },
    openGraph: {
      type: 'website',
      locale: locale === 'en' ? 'en_US' : 'de_DE',
      url: currentUrl,
      title: titles[locale as keyof typeof titles],
      description: descriptions[locale as keyof typeof descriptions],
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
    robots: {
      index: true,
      follow: true,
    },
  };
}

export default function LocaleLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  const { locale } = params;
  
  if (!locales.includes(locale)) {
    notFound();
  }

  // Server-side'da environment variable'ı oku - sadece production'da
  const gaId = process.env.NODE_ENV === 'production' ? process.env.GA_MEASUREMENT_ID : undefined;
  
  return (
    <html lang={locale} suppressHydrationWarning>
      <head>
        {/* Hreflang tags for SEO */}
        <link rel="alternate" hrefLang="tr" href="https://stuntai.co/" />
        <link rel="alternate" hrefLang="en" href="https://stuntai.co/en" />
        <link rel="alternate" hrefLang="de" href="https://stuntai.co/de" />
        <link rel="alternate" hrefLang="x-default" href="https://stuntai.co/" />
      </head>
      <body className={`${inter.className} bg-gray-50 text-gray-900 antialiased flex flex-col min-h-screen`}>
        <ClientLayout gaId={gaId}>{children}</ClientLayout>
      </body>
    </html>
  );
} 