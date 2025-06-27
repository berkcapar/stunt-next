import type { Metadata } from 'next';
import SocialPageClientTR from './SocialPageClient.tr.jsx';
import SocialPageClientEN from './SocialPageClient.en.jsx';
import SocialPageClientDE from './SocialPageClient.de.jsx';

export const metadata: Metadata = {
  title: 'AI Social Media Management & Automation | Stunt',
  description: 'Automate your social media presence with AI. Schedule posts, get performance insights, and engage your audience effortlessly. Save time and grow faster.',
  keywords: [
    'social media automation',
    'AI social media marketing',
    'post scheduling tool',
    'social media management',
    'audience engagement',
    'social media analytics',
    'content calendar automation',
    'brand presence',
    'sosyal medya otomasyonu',
  ],
  openGraph: {
    title: 'AI Social Media Management & Automation | Stunt',
    description: 'Automate your social media presence with AI. Schedule posts, get performance insights, and engage your audience effortlessly.',
    url: 'https://stuntai.co/products/social',
    images: [
      {
        url: '/og-social.png',
        width: 1200,
        height: 630,
        alt: 'Stunt AI Social Media Management & Automation',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI Social Media Management & Automation | Stunt',
    description: 'Automate your social media presence with AI. Save time and grow faster.',
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

type Props = {
  params: Promise<{
    locale: string;
  }>;
};

export default async function SocialPage({ params }: Props) {
  const { locale } = await params;
  
  if (locale === 'en') {
    return <SocialPageClientEN />;
  } else if (locale === 'de') {
    return <SocialPageClientDE />;
  }
  
  // Default to Turkish
  return <SocialPageClientTR />;
} 