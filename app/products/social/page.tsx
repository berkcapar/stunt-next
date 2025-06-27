import type { Metadata } from 'next';
import SocialPageClientTR from '@/app/[locale]/products/social/SocialPageClient.tr.jsx';

export const metadata: Metadata = {
  title: 'AI Sosyal Medya Yönetimi ve Otomasyonu | Stunt',
  description: 'Sosyal medya varlığınızı AI ile otomatikleştirin. Gönderileri zamanlayın, performans içgörüleri alın ve kitlenizle zahmetsizce etkileşime geçin. Zamandan tasarruf edin ve daha hızlı büyüyün.',
  keywords: [
    'sosyal medya otomasyonu',
    'AI sosyal medya pazarlaması',
    'gönderi zamanlama aracı',
    'sosyal medya yönetimi',
    'kitle etkileşimi',
    'sosyal medya analitiği',
    'içerik takvimi otomasyonu',
    'marka varlığı',
    'sosyal medya otomasyonu',
  ],
  openGraph: {
    title: 'AI Sosyal Medya Yönetimi ve Otomasyonu | Stunt',
    description: 'Sosyal medya varlığınızı AI ile otomatikleştirin. Gönderileri zamanlayın, performans içgörüleri alın ve kitlenizle zahmetsizce etkileşime geçin.',
    url: 'https://stuntai.co/products/social',
    images: [
      {
        url: '/og-social.png',
        width: 1200,
        height: 630,
        alt: 'Stunt AI Sosyal Medya Yönetimi ve Otomasyonu',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI Sosyal Medya Yönetimi ve Otomasyonu | Stunt',
    description: 'Sosyal medya varlığınızı AI ile otomatikleştirin. Zamandan tasarruf edin ve daha hızlı büyüyün.',
  },
  alternates: {
    canonical: 'https://stuntai.co/products/social',
    languages: {
      'tr': 'https://stuntai.co/products/social',
      'en': 'https://stuntai.co/en/products/social',
      'de': 'https://stuntai.co/de/products/social',
    },
  },
};

export default function SocialPage() {
  return <SocialPageClientTR />;
} 