'use client';

import ProductLayout from '@/src/components/products/ProductLayout';

const features = [
  {
    icon: 'file-search',
    titleKey: 'AI Blog Yazısı Üretimi',
    descKey: 'Hedef kitleniz için alakalı konularda SEO dostu blog makaleleri oluşturun.'
  },
  {
    icon: 'file-text',
    titleKey: 'Anahtar Kelime Araştırması ve Entegrasyonu',
    descKey: 'Değerli anahtar kelimeleri belirler ve içeriğinize doğal şekilde entegre eder.'
  },
  {
    icon: 'lightbulb',
    titleKey: 'İçerik Takvimi Planlaması',
    descKey: 'Tutarlı yayınlama sağlamak için otomatik takvim ile içerik stratejinizi planlayın.'
  },
  {
    icon: 'line-chart',
    titleKey: 'Performans Takibi',
    descKey: 'Anahtar kelime sıralamalarını ve organik trafik artışını zaman içinde izleyin.'
  }
];

const useCases = [
  {
    icon: 'pencil',
    titleKey: 'İçerik Pazarlamacıları',
    descKey: 'İçerik üretiminizi ölçeklendirin ve yazım yerine stratejiye odaklanın.',
    quoteKey: '"Blog çıktımızı kaliteden ödün vermeden üç katına çıkardık."'
  },
  {
    icon: 'building-store',
    titleKey: 'E-ticaret İşletmeleri',
    descKey: 'Hedefli blog içeriği ile ürün sayfalarınıza organik trafik çekin.',
    quoteKey: '"Organik satışlarımızda önemli bir artış gördük."'
  },
  {
    icon: 'rocket',
    titleKey: 'Girişimler ve KOBİ\'ler',
    descKey: 'Güçlü bir online varlık oluşturun ve arama sonuçlarında büyük markalarla rekabet edin.',
    quoteKey: '"Stunt, SEO başarımız için gizli silahımız."'
  }
];

export default function SEOPageClientTR() {
  return (
    <ProductLayout
      productId="seo"
      icon="file-search"
      titleKey="AI SEO İçerik Üretimi ve Otomasyonu"
      descriptionKey="SEO içerik stratejinizi AI ile otomatikleştirin. Optimize edilmiş blog yazıları üretin, anahtar kelimeler bulun ve Google sıralamalarında zor çaba harcamadan yükselişe geçin."
      whatTitleKey="SEO İçerik Otomasyonu Nedir?"
      whatDescKey="Müşterilerinizin aradığı konularda otomatik olarak blog yazıları yazar ve Google'da daha üst sıralarda yer almanıza yardımcı olur."
      howTitleKey="Hayatınızı Nasıl Kolaylaştırır?"
      howDescKey="SEO uzmanı olmanıza gerek yoktur. Web sitenize sürekli olarak yeni ziyaretçiler çekin, yeni müşteriler bulun ve reklam harcamalarına bağlı kalmadan işinizi büyütün."
      featuresKey="Temel Özellikler"
      features={features}
      useCasesTitleKey="Kullanım Alanları"
      useCases={useCases}
    />
  );
} 