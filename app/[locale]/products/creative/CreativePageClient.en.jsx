'use client';

import ProductLayout from '@/src/components/products/ProductLayout';

const features = [
  {
    icon: 'sparkles',
    titleKey: 'AI Text Generation',
    descKey: 'Create compelling ad copy, social media posts, and headlines in seconds.'
  },
  {
    icon: 'image',
    titleKey: 'AI Image Generation',
    descKey: 'Generate unique, brand-aligned images for your campaigns.'
  },
  {
    icon: 'video',
    titleKey: 'AI Video Snippets',
    descKey: 'Turn existing brand assets or new AI visuals into short promotional videos.'
  },
  {
    icon: 'wand-magic-sparkles',
    titleKey: 'Multi-Platform Formatting',
    descKey: 'Automatically adapt creatives for different social media platform specifications.'
  }
];

const useCases = [
  {
    icon: 'palette',
    titleKey: 'Social Media Managers',
    descKey: 'Never run out of content ideas. Keep your social feeds fresh and engaging.',
    quoteKey: '"Stunt\'s AI creatives have boosted our engagement significantly!"'
  },
  {
    icon: 'swatchbook',
    titleKey: 'Content Creators',
    descKey: 'Overcome creative blocks and rapidly produce diverse content formats.',
    quoteKey: '"I can generate a week\'s worth of posts in an hour!"'
  },
  {
    icon: 'rocket',
    titleKey: 'Startups',
    descKey: 'Get high-quality creatives without the cost of a dedicated design team.',
    quoteKey: '"Professional looking ads on a startup budget - amazing!"'
  }
];

export default function CreativePageClientEN() {
  return (
    <ProductLayout
      productId="creative"
      icon="sparkles"
      titleKey="AI Creative Content Generation & Video Creation"
      descriptionKey="Generate stunning visuals, videos, and copy with AI. Create engaging social media content in seconds. No designers needed - automated creative generation."
      whatTitleKey="What is AI Creative Generation?"
      whatDescKey="It creates eye-catching text, images, and videos for your social media in seconds. You'll never have to worry about 'what to post today' again. It can even produce videos from your brand's existing photos."
      howTitleKey="How Does It Make Your Life Easier?"
      howDescKey="Eliminate the long waits for designers or agencies. Keep your followers engaged with constantly fresh content and reach a wider audience. Lighten the creative workload on your marketing team."
      featuresKey="Key Features"
      features={features}
      useCasesTitleKey="Use Cases"
      useCases={useCases}
    />
  );
} 