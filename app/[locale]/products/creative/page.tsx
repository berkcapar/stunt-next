import type { Metadata } from 'next';
import CreativePageClientTR from './CreativePageClient.tr.jsx';
import CreativePageClientEN from './CreativePageClient.en.jsx';
import CreativePageClientDE from './CreativePageClient.de.jsx';

export const metadata: Metadata = {
  title: 'AI Creative Content Generation & Video Creation | Stunt',
  description: 'Generate stunning visuals, videos, and copy with AI. Create engaging social media content in seconds. No designers needed - automated creative generation.',
  keywords: [
    'AI creative generation',
    'AI video creation',
    'social media content',
    'AI image generation',
    'creative automation',
    'marketing visuals',
    'AI copywriting',
    'content creation tools',
    'automated design',
    'yaratıcı içerik üretimi'
  ],
  openGraph: {
    title: 'AI Creative Content Generation & Video Creation | Stunt',
    description: 'Generate stunning visuals, videos, and copy with AI. Create engaging social media content in seconds without designers.',
    url: 'https://stuntai.co/products/creative',
    images: [
      {
        url: '/og-creative.png',
        width: 1200,
        height: 630,
        alt: 'Stunt AI Creative Content Generation & Video Creation',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI Creative Content Generation & Video Creation | Stunt',
    description: 'Generate stunning visuals, videos, and copy with AI. No designers needed.',
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

type Props = {
  params: Promise<{
    locale: string;
  }>;
};

export default async function CreativePage({ params }: Props) {
  const { locale } = await params;
  
  if (locale === 'en') {
    return <CreativePageClientEN />;
  } else if (locale === 'de') {
    return <CreativePageClientDE />;
  }
  
  // Default to Turkish
  return <CreativePageClientTR />;
} 