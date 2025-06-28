import '../globals.css';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';

const locales = ['en', 'de'];

export async function generateStaticParams() {
  return locales.map((locale) => ({
    locale,
  }));
}

export async function generateMetadata({ 
  params 
}: { 
  params: Promise<{ locale: string }> 
}): Promise<Metadata> {
  const { locale } = await params;
  
  if (!locales.includes(locale)) {
    notFound();
  }

  const baseUrl = 'https://stuntai.co';
  const currentUrl = `${baseUrl}/${locale}`;

  const titles = {
    en: 'StuntAI - AI Marketing Automation Platform | Stop Overpaying for Marketing',
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

export default async function LocaleLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  
  if (!locales.includes(locale)) {
    notFound();
  }

  // Just return children - HTML structure is handled by root layout
  return children;
} 