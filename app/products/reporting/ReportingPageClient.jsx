'use client';

import ProductLayout from '@/src/components/products/ProductLayout';
import ProductPricing from '@/src/components/products/ProductPricing';

const features = [
  {
    icon: 'chart-line',
    titleKey: 'product.reporting.feature1_title',
    descKey: 'product.reporting.feature1_desc'
  },
  {
    icon: 'robot',
    titleKey: 'product.reporting.feature2_title',
    descKey: 'product.reporting.feature2_desc'
  },
  {
    icon: 'calendar-alt',
    titleKey: 'product.reporting.feature3_title',
    descKey: 'product.reporting.feature3_desc'
  },
  {
    icon: 'chart-pie',
    titleKey: 'product.reporting.feature4_title',
    descKey: 'product.reporting.feature4_desc'
  },
  {
    icon: 'comments',
    titleKey: 'product.reporting.feature5_title',
    descKey: 'product.reporting.feature5_desc'
  },
  {
    icon: 'bolt',
    titleKey: 'product.reporting.feature6_title',
    descKey: 'product.reporting.feature6_desc'
  }
];

const useCases = [
  {
    icon: 'user-tie',
    titleKey: 'product.reporting.usecase1_title',
    descKey: 'product.reporting.usecase1_desc',
    quoteKey: 'product.reporting.usecase1_quote'
  },
  {
    icon: 'store',
    titleKey: 'product.reporting.usecase2_title',
    descKey: 'product.reporting.usecase2_desc',
    quoteKey: 'product.reporting.usecase2_quote'
  },
  {
    icon: 'building',
    titleKey: 'product.reporting.usecase3_title',
    descKey: 'product.reporting.usecase3_desc',
    quoteKey: 'product.reporting.usecase3_quote'
  },
  {
    icon: 'shopping-cart',
    titleKey: 'product.reporting.usecase4_title',
    descKey: 'product.reporting.usecase4_desc',
    quoteKey: 'product.reporting.usecase4_quote'
  }
];

const pricing = [
  {
    titleKey: 'product.reporting.starter_title',
    priceKey: 'product.reporting.starter_price',
    intervalKey: 'pricing.period',
    popular: false,
    ctaKey: 'pricing.cta',
    features: [
      { key: 'product.reporting.starter_feature1', included: true },
      { key: 'product.reporting.starter_feature2', included: true },
      { key: 'product.reporting.starter_feature3', included: true },
      { key: 'product.reporting.starter_feature4', included: true }
    ]
  },
  {
    titleKey: 'product.reporting.pro_title',
    priceKey: 'product.reporting.pro_price',
    intervalKey: 'pricing.period',
    popular: true,
    ctaKey: 'pricing.cta',
    features: [
      { key: 'product.reporting.pro_feature1', included: true },
      { key: 'product.reporting.pro_feature2', included: true },
      { key: 'product.reporting.pro_feature3', included: true },
      { key: 'product.reporting.pro_feature4', included: true }
    ]
  },
  {
    titleKey: 'product.reporting.enterprise_title',
    priceKey: 'product.reporting.enterprise_price',
    intervalKey: 'pricing.period',
    popular: false,
    ctaKey: 'pricing.cta',
    features: [
      { key: 'product.reporting.enterprise_feature1', included: true },
      { key: 'product.reporting.enterprise_feature2', included: true },
      { key: 'product.reporting.enterprise_feature3', included: true },
      { key: 'product.reporting.enterprise_feature4', included: true }
    ]
  }
];

export default function ReportingPageClient() {
  return (
    <>
      <ProductLayout
        productId="reporting"
        icon="chart-pie"
        titleKey="services.reporting_title"
        descriptionKey="services.reporting_what_desc"
        whatTitleKey="services.reporting_what"
        whatDescKey="services.reporting_what_desc"
        howTitleKey="services.reporting_how"
        howDescKey="services.reporting_how_desc"
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