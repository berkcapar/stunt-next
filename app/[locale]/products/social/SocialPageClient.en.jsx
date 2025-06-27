'use client';

import ProductLayout from '@/src/components/products/ProductLayout';

const features = [
  {
    icon: 'calendar-days',
    titleKey: 'Automated Scheduling',
    descKey: 'Plan and schedule your social media posts in advance across multiple platforms.'
  },
  {
    icon: 'clock',
    titleKey: 'Optimal Posting Times',
    descKey: 'AI recommends the best posting times for maximum reach and engagement.'
  },
  {
    icon: 'users',
    titleKey: 'Content Curation',
    descKey: 'Discover and share relevant industry content to complement your own posts.'
  },
  {
    icon: 'share-nodes',
    titleKey: 'Cross-Platform Campaigns',
    descKey: 'Manage and synchronize content across Facebook, Instagram, X, LinkedIn and more.'
  }
];

const useCases = [
  {
    icon: 'store',
    titleKey: 'Marketing Teams',
    descKey: 'Efficiently coordinate social media efforts and maintain consistent brand voice.',
    quoteKey: '"Our entire social media workflow is now streamlined with Stunt."'
  },
  {
    icon: 'building',
    titleKey: 'Busy Entrepreneurs',
    descKey: 'Maintain an active social media presence without consuming your day.',
    quoteKey: '"Set it and forget it, knowing my social media is handled."'
  },
  {
    icon: 'bullhorn',
    titleKey: 'Community Managers',
    descKey: 'Focus on engagement and community building, not just posting.',
    quoteKey: '"Stunt has freed me up to really engage with our audiences."'
  }
];

export default function SocialPageClientEN() {
  return (
    <ProductLayout
      productId="social"
      icon="share-nodes"
      titleKey="AI Social Media Management & Automation"
      descriptionKey="Automate your social media presence with AI. Schedule posts, get performance insights, and engage with your audience effortlessly. Save time and grow faster."
      whatTitleKey="What is Social Media Automation?"
      whatDescKey="It automatically shares your prepared content at the right time on the right social media channels for you."
      howTitleKey="How Does It Make Your Life Easier?"
      howDescKey="The stress of 'I forgot to post!' ends. While you focus on your business, Stunt keeps your brand active in the digital world and automates your marketing efforts from start to finish."
      featuresKey="Key Features"
      features={features}
      useCasesTitleKey="Use Cases"
      useCases={useCases}
    />
  );
} 