'use client';

import ProductLayout from '@/src/components/products/ProductLayout';
import ProductPricing from '@/src/components/products/ProductPricing';

const features = [
  {
    icon: 'paint-brush',
    titleKey: 'product.creative.feature1_title',
    descKey: 'product.creative.feature1_desc'
  },
  {
    icon: 'magic',
    titleKey: 'product.creative.feature2_title',
    descKey: 'product.creative.feature2_desc'
  },
  {
    icon: 'video',
    titleKey: 'product.creative.feature3_title',
    descKey: 'product.creative.feature3_desc'
  },
  {
    icon: 'pen-fancy',
    titleKey: 'product.creative.feature4_title',
    descKey: 'product.creative.feature4_desc'
  },
  {
    icon: 'thumbs-up',
    titleKey: 'product.creative.feature5_title',
    descKey: 'product.creative.feature5_desc'
  },
  {
    icon: 'brain',
    titleKey: 'product.creative.feature6_title',
    descKey: 'product.creative.feature6_desc'
  }
];

const useCases = [
  {
    icon: 'user-tie',
    titleKey: 'product.creative.usecase1_title',
    descKey: 'product.creative.usecase1_desc',
    quoteKey: 'product.creative.usecase1_quote'
  },
  {
    icon: 'store',
    titleKey: 'product.creative.usecase2_title',
    descKey: 'product.creative.usecase2_desc',
    quoteKey: 'product.creative.usecase2_quote'
  },
  {
    icon: 'building',
    titleKey: 'product.creative.usecase3_title',
    descKey: 'product.creative.usecase3_desc',
    quoteKey: 'product.creative.usecase3_quote'
  },
  {
    icon: 'shopping-cart',
    titleKey: 'product.creative.usecase4_title',
    descKey: 'product.creative.usecase4_desc',
    quoteKey: 'product.creative.usecase4_quote'
  }
];

const pricing = [
  {
    titleKey: 'product.creative.starter_title',
    priceKey: 'product.creative.starter_price',
    intervalKey: 'pricing.period',
    popular: false,
    ctaKey: 'pricing.cta',
    features: [
      { key: 'product.creative.starter_feature1', included: true },
      { key: 'product.creative.starter_feature2', included: true },
      { key: 'product.creative.starter_feature3', included: true },
      { key: 'product.creative.starter_feature4', included: true }
    ]
  },
  {
    titleKey: 'product.creative.pro_title',
    priceKey: 'product.creative.pro_price',
    intervalKey: 'pricing.period',
    popular: true,
    ctaKey: 'pricing.cta',
    features: [
      { key: 'product.creative.pro_feature1', included: true },
      { key: 'product.creative.pro_feature2', included: true },
      { key: 'product.creative.pro_feature3', included: true },
      { key: 'product.creative.pro_feature4', included: true }
    ]
  },
  {
    titleKey: 'product.creative.enterprise_title',
    priceKey: 'product.creative.enterprise_price',
    intervalKey: 'pricing.period',
    popular: false,
    ctaKey: 'pricing.cta',
    features: [
      { key: 'product.creative.enterprise_feature1', included: true },
      { key: 'product.creative.enterprise_feature2', included: true },
      { key: 'product.creative.enterprise_feature3', included: true },
      { key: 'product.creative.enterprise_feature4', included: true }
    ]
  }
];

export default function CreativePage() {
  return (
    <>
      <ProductLayout
        productId="creative"
        icon="paint-brush"
        titleKey="services.creative_title"
        descriptionKey="services.creative_what_desc"
        whatTitleKey="services.creative_what"
        whatDescKey="services.creative_what_desc"
        howTitleKey="services.creative_how"
        howDescKey="services.creative_how_desc"
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