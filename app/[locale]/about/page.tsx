import type { Metadata } from 'next';
import AboutPageClient from './AboutPageClient';

export async function generateMetadata({ 
  params 
}: { 
  params: Promise<{ locale: string }> 
}): Promise<Metadata> {
  const { locale } = await params;
  
  const baseUrl = 'https://stuntai.co';
  const currentUrl = locale === 'tr' ? `${baseUrl}/about` : `${baseUrl}/${locale}/about`;

  const titles = {
    tr: 'Berk Capar Hakkında - Stunt AI Marketing Automation Kurucusu',
    en: 'About Berk Capar - Founder of Stunt AI Marketing Automation',
    de: 'Über Berk Capar - Gründer von Stunt AI Marketing Automation'
  };

  const descriptions = {
    tr: 'Stunt AI kurucusu Berk Capar ile tanışın. 8 yıllık pazarlama teknolojisi deneyimi. Eski Samsung, Stack Overflow product manager. İşletmelerin AI ile pazarlamayı otomatikleştirmesine yardım ediyor.',
    en: 'Meet Berk Capar, founder of Stunt AI with 8 years in marketing tech. Former product manager for Samsung, Stack Overflow. Helping businesses automate marketing with AI.',
    de: 'Lernen Sie Berk Capar kennen, Gründer von Stunt AI mit 8 Jahren Erfahrung in der Marketing-Technologie. Ehemaliger Produktmanager für Samsung, Stack Overflow.'
  };

  return {
    title: titles[locale as keyof typeof titles],
    description: descriptions[locale as keyof typeof descriptions],
    openGraph: {
      title: titles[locale as keyof typeof titles],
      description: descriptions[locale as keyof typeof descriptions],
      url: currentUrl,
      images: [
        {
          url: '/og-about.png',
          width: 1200,
          height: 630,
          alt: 'Berk Capar - Founder of Stunt AI Marketing Automation Platform',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: titles[locale as keyof typeof titles],
      description: descriptions[locale as keyof typeof descriptions],
    },
    alternates: {
      canonical: locale === 'tr' ? `${baseUrl}/about` : currentUrl,
      languages: {
        'tr': `${baseUrl}/about`,
        'en': `${baseUrl}/en/about`,
        'de': `${baseUrl}/de/about`,
      },
    },
  };
}

export default function AboutPage() {
  return <AboutPageClient />;
} 