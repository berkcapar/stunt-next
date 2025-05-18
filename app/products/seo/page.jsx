'use client';

import ProductLayout from '@/src/components/products/ProductLayout';
import ProductPricing from '@/src/components/products/ProductPricing';

const features = [
  {
    icon: 'search',
    titleKey: 'product.seo.feature1_title',
    descKey: 'product.seo.feature1_desc'
  },
  {
    icon: 'pen-fancy',
    titleKey: 'product.seo.feature2_title',
    descKey: 'product.seo.feature2_desc'
  },
  {
    icon: 'chart-area',
    titleKey: 'product.seo.feature3_title',
    descKey: 'product.seo.feature3_desc'
  },
  {
    icon: 'user-secret',
    titleKey: 'product.seo.feature4_title',
    descKey: 'product.seo.feature4_desc'
  },
  {
    icon: 'link',
    titleKey: 'product.seo.feature5_title',
    descKey: 'product.seo.feature5_desc'
  },
  {
    icon: 'sync-alt',
    titleKey: 'product.seo.feature6_title',
    descKey: 'product.seo.feature6_desc'
  }
];

const useCases = [
  {
    icon: 'user-tie',
    titleKey: 'product.seo.usecase1_title',
    descKey: 'product.seo.usecase1_desc',
    quoteKey: 'product.seo.usecase1_quote'
  },
  {
    icon: 'store',
    titleKey: 'product.seo.usecase2_title',
    descKey: 'product.seo.usecase2_desc',
    quoteKey: 'product.seo.usecase2_quote'
  },
  {
    icon: 'building',
    titleKey: 'product.seo.usecase3_title',
    descKey: 'product.seo.usecase3_desc',
    quoteKey: 'product.seo.usecase3_quote'
  },
  {
    icon: 'shopping-cart',
    titleKey: 'product.seo.usecase4_title',
    descKey: 'product.seo.usecase4_desc',
    quoteKey: 'product.seo.usecase4_quote'
  }
];

const pricing = [
  {
    titleKey: 'product.seo.starter_title',
    priceKey: 'product.seo.starter_price',
    intervalKey: 'pricing.period',
    popular: false,
    ctaKey: 'pricing.cta',
    features: [
      { key: 'product.seo.starter_feature1', included: true },
      { key: 'product.seo.starter_feature2', included: true },
      { key: 'product.seo.starter_feature3', included: true },
      { key: 'product.seo.starter_feature4', included: true }
    ]
  },
  {
    titleKey: 'product.seo.pro_title',
    priceKey: 'product.seo.pro_price',
    intervalKey: 'pricing.period',
    popular: true,
    ctaKey: 'pricing.cta',
    features: [
      { key: 'product.seo.pro_feature1', included: true },
      { key: 'product.seo.pro_feature2', included: true },
      { key: 'product.seo.pro_feature3', included: true },
      { key: 'product.seo.pro_feature4', included: true }
    ]
  },
  {
    titleKey: 'product.seo.enterprise_title',
    priceKey: 'product.seo.enterprise_price',
    intervalKey: 'pricing.period',
    popular: false,
    ctaKey: 'pricing.cta',
    features: [
      { key: 'product.seo.enterprise_feature1', included: true },
      { key: 'product.seo.enterprise_feature2', included: true },
      { key: 'product.seo.enterprise_feature3', included: true },
      { key: 'product.seo.enterprise_feature4', included: true }
    ]
  }
];

export default function SeoPage() {
  return (
    <>
      <ProductLayout
        productId="seo"
        icon="search"
        titleKey="services.seo_title"
        descriptionKey="services.seo_what_desc"
        whatTitleKey="services.seo_what"
        whatDescKey="services.seo_what_desc"
        howTitleKey="services.seo_how"
        howDescKey="services.seo_how_desc"
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