'use client';

import ProductLayout from '@/src/components/products/ProductLayout';
import ProductPricing from '@/src/components/products/ProductPricing';

const features = [
  {
    icon: 'share-alt',
    titleKey: 'product.social.feature1_title',
    descKey: 'product.social.feature1_desc'
  },
  {
    icon: 'calendar-alt',
    titleKey: 'product.social.feature2_title',
    descKey: 'product.social.feature2_desc'
  },
  {
    icon: 'recycle',
    titleKey: 'product.social.feature3_title',
    descKey: 'product.social.feature3_desc'
  },
  {
    icon: 'hashtag',
    titleKey: 'product.social.feature4_title',
    descKey: 'product.social.feature4_desc'
  },
  {
    icon: 'chart-line',
    titleKey: 'product.social.feature5_title',
    descKey: 'product.social.feature5_desc'
  },
  {
    icon: 'puzzle-piece',
    titleKey: 'product.social.feature6_title',
    descKey: 'product.social.feature6_desc'
  }
];

const useCases = [
  {
    icon: 'user-tie',
    titleKey: 'product.social.usecase1_title',
    descKey: 'product.social.usecase1_desc',
    quoteKey: 'product.social.usecase1_quote'
  },
  {
    icon: 'store',
    titleKey: 'product.social.usecase2_title',
    descKey: 'product.social.usecase2_desc',
    quoteKey: 'product.social.usecase2_quote'
  },
  {
    icon: 'building',
    titleKey: 'product.social.usecase3_title',
    descKey: 'product.social.usecase3_desc',
    quoteKey: 'product.social.usecase3_quote'
  },
  {
    icon: 'shopping-cart',
    titleKey: 'product.social.usecase4_title',
    descKey: 'product.social.usecase4_desc',
    quoteKey: 'product.social.usecase4_quote'
  }
];

const pricing = [
  {
    titleKey: 'product.social.starter_title',
    priceKey: 'product.social.starter_price',
    intervalKey: 'pricing.period',
    popular: false,
    ctaKey: 'pricing.cta',
    features: [
      { key: 'product.social.starter_feature1', included: true },
      { key: 'product.social.starter_feature2', included: true },
      { key: 'product.social.starter_feature3', included: true },
      { key: 'product.social.starter_feature4', included: true }
    ]
  },
  {
    titleKey: 'product.social.pro_title',
    priceKey: 'product.social.pro_price',
    intervalKey: 'pricing.period',
    popular: true,
    ctaKey: 'pricing.cta',
    features: [
      { key: 'product.social.pro_feature1', included: true },
      { key: 'product.social.pro_feature2', included: true },
      { key: 'product.social.pro_feature3', included: true }
    ]
  },
  {
    titleKey: 'product.social.enterprise_title',
    priceKey: 'product.social.enterprise_price',
    intervalKey: 'pricing.period',
    popular: false,
    ctaKey: 'pricing.cta',
    features: [
      { key: 'product.social.enterprise_feature1', included: true },
      { key: 'product.social.enterprise_feature2', included: true },
      { key: 'product.social.enterprise_feature3', included: true }
    ]
  }
];

export default function SocialPage() {
  return (
    <>
      <ProductLayout
        productId="social"
        icon="share-alt"
        titleKey="services.social_title"
        descriptionKey="services.social_what_desc"
        whatTitleKey="services.social_what"
        whatDescKey="services.social_what_desc"
        howTitleKey="services.social_how"
        howDescKey="services.social_how_desc"
        featuresKey="product.features_title"
        features={features}
        useCasesTitleKey="product.usecases_title"
        useCases={useCases}
      >
        <ProductPricing pricing={pricing} />
      </ProductLayout>
    </>
  );
} 