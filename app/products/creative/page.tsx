import type { Metadata } from 'next';
import CreativePageClientTR from '@/app/[locale]/products/creative/CreativePageClient.tr.jsx';

export const metadata: Metadata = {
  title: 'AI Yaratıcı İçerik Üretimi ve Video Oluşturma | Stunt',
  description: 'AI ile etkileyici görseller, videolar ve metinler oluşturun. Saniyeler içinde ilgi çekici sosyal medya içerikleri yaratın. Tasarımcıya gerek yok - otomatik yaratıcı üretim.',
  keywords: [
    'AI yaratıcı üretim',
    'AI video oluşturma',
    'sosyal medya içeriği',
    'AI görsel üretimi',
    'yaratıcı otomasyon',
    'pazarlama görselleri',
    'AI metin yazımı',
    'içerik oluşturma araçları',
    'otomatik tasarım',
    'yaratıcı içerik üretimi'
  ],
  openGraph: {
    title: 'AI Yaratıcı İçerik Üretimi ve Video Oluşturma | Stunt',
    description: 'AI ile etkileyici görseller, videolar ve metinler oluşturun. Saniyeler içinde ilgi çekici sosyal medya içerikleri yaratın.',
    url: 'https://stuntai.co/products/creative',
    images: [
      {
        url: '/og-creative.png',
        width: 1200,
        height: 630,
        alt: 'Stunt AI Yaratıcı İçerik Üretimi ve Video Oluşturma',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI Yaratıcı İçerik Üretimi ve Video Oluşturma | Stunt',
    description: 'AI ile etkileyici görseller, videolar ve metinler oluşturun. Tasarımcıya gerek yok.',
  },
  alternates: {
    canonical: 'https://stuntai.co/products/creative',
    languages: {
      'tr': 'https://stuntai.co/products/creative',
      'en': 'https://stuntai.co/en/products/creative',
      'de': 'https://stuntai.co/de/products/creative',
    },
  },
};

export default function CreativePage() {
  return <CreativePageClientTR />;
} 