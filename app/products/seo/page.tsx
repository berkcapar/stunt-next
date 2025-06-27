import type { Metadata } from 'next';
import SEOPageClientTR from '@/app/[locale]/products/seo/SEOPageClient.tr.jsx';

export const metadata: Metadata = {
  title: 'AI SEO İçerik Üretimi ve Otomasyonu | Stunt',
  description: 'SEO içerik stratejinizi AI ile otomatikleştirin. Optimize edilmiş blog yazıları üretin, anahtar kelimeler bulun ve Google sıralamalarında yükselme.',
  keywords: [
    'SEO otomasyonu',
    'AI içerik üretimi',
    'SEO içerik yazımı',
    'anahtar kelime araştırma aracı',
    'blog yazısı üretici',
    'Google sıralaması',
    'organik trafik',
    'içerik pazarlama otomasyonu',
    'SEO için AI',
    'SEO otomasyonu'
  ],
  openGraph: {
    title: 'AI SEO İçerik Üretimi ve Otomasyonu | Stunt',
    description: 'SEO içerik stratejinizi AI ile otomatikleştirin. Optimize edilmiş blog yazıları üretin, anahtar kelimeler bulun ve Google sıralamalarında yükselme.',
    url: 'https://stuntai.co/products/seo',
    images: [
      {
        url: '/og-seo.png',
        width: 1200,
        height: 630,
        alt: 'Stunt AI SEO İçerik Üretimi ve Otomasyonu',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI SEO İçerik Üretimi ve Otomasyonu | Stunt',
    description: 'SEO içerik stratejinizi AI ile otomatikleştirin ve Google sıralamalarında yükselme.',
  },
  alternates: {
    canonical: 'https://stuntai.co/products/seo',
    languages: {
      'tr': 'https://stuntai.co/products/seo',
      'en': 'https://stuntai.co/en/products/seo',
      'de': 'https://stuntai.co/de/products/seo',
    },
  },
};

export default function SEOPage() {
  return <SEOPageClientTR />;
} 