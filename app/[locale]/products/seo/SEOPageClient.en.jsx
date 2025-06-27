'use client';

import ProductLayout from '@/src/components/products/ProductLayout';

const features = [
  {
    icon: 'file-search',
    titleKey: 'AI Blog Post Generation',
    descKey: 'Create SEO-friendly blog articles on relevant topics for your audience.'
  },
  {
    icon: 'file-text',
    titleKey: 'Keyword Research & Integration',
    descKey: 'Identifies valuable keywords and naturally integrates them into your content.'
  },
  {
    icon: 'lightbulb',
    titleKey: 'Content Calendar Planning',
    descKey: 'Plan your content strategy with an automated calendar to ensure consistent publishing.'
  },
  {
    icon: 'line-chart',
    titleKey: 'Performance Tracking',
    descKey: 'Monitor keyword rankings and organic traffic growth over time.'
  }
];

const useCases = [
  {
    icon: 'pencil',
    titleKey: 'Content Marketers',
    descKey: 'Scale your content production and focus on strategy instead of writing.',
    quoteKey: '"We tripled our blog output without sacrificing quality."'
  },
  {
    icon: 'building-store',
    titleKey: 'E-commerce Businesses',
    descKey: 'Drive organic traffic to product pages with targeted blog content.',
    quoteKey: '"Our organic sales have seen a significant lift."'
  },
  {
    icon: 'rocket',
    titleKey: 'Startups & Small Businesses',
    descKey: 'Build a strong online presence and compete with larger brands in search results.',
    quoteKey: '"Stunt is our secret weapon for SEO success."'
  }
];

export default function SEOPageClientEN() {
  return (
    <ProductLayout
      productId="seo"
      icon="file-search"
      titleKey="AI SEO Content Generation & Automation"
      descriptionKey="Automate your SEO content strategy with AI. Generate optimized blog posts, find keywords, and climb Google rankings without the heavy lifting."
      whatTitleKey="What is SEO Content Automation?"
      whatDescKey="It automatically writes blog posts on topics your customers are searching for, helping you rank higher on Google."
      howTitleKey="How Does It Make Your Life Easier?"
      howDescKey="You don't need to be an SEO expert to get results. Continuously attract new visitors to your website, find new customers, and grow your business without relying on ad spend."
      featuresKey="Key Features"
      features={features}
      useCasesTitleKey="Use Cases"
      useCases={useCases}
    />
  );
} 