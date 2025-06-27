'use client';

import ProductLayout from '@/src/components/products/ProductLayout';

const features = [
  {
    icon: 'calendar-days',
    titleKey: 'Otomatik Zamanlama',
    descKey: 'Sosyal medya gönderilerinizi önceden birden fazla platformda planlayın ve zamanlayın.'
  },
  {
    icon: 'clock',
    titleKey: 'Optimal Paylaşım Zamanları',
    descKey: 'AI maksimum erişim ve etkileşim için en iyi paylaşım zamanlarını önerir.'
  },
  {
    icon: 'users',
    titleKey: 'İçerik Küratörlüğü',
    descKey: 'Kendi içeriğinizi desteklemek için alakalı sektör içeriklerini keşfedin ve paylaşın.'
  },
  {
    icon: 'share-nodes',
    titleKey: 'Platformlar Arası Kampanyalar',
    descKey: 'Facebook, Instagram, X, LinkedIn gibi platformlarda içeriği yönetin ve senkronize edin.'
  }
];

const useCases = [
  {
    icon: 'store',
    titleKey: 'Pazarlama Ekipleri',
    descKey: 'Sosyal medya çalışmalarını verimli şekilde koordine edin ve tutarlı marka sesi koruyun.',
    quoteKey: '"Tüm sosyal medya iş akışımız artık Stunt ile kolaylaştırıldı."'
  },
  {
    icon: 'building',
    titleKey: 'Meşgul Girişimciler',
    descKey: 'Gününüzü tüketmeden aktif bir sosyal medya varlığını sürdürün.',
    quoteKey: '"Kurdum ve unuttum, sosyal medyamın halledildiğini bilerek."'
  },
  {
    icon: 'bullhorn',
    titleKey: 'Topluluk Yöneticileri',
    descKey: 'Sadece paylaşım yapmakla değil, etkileşim ve topluluk oluşturmayla odaklanın.',
    quoteKey: '"Stunt beni gerçekten kitlerimizle etkileşime girebilmek için özgürleştirdi."'
  }
];

export default function SocialPageClientTR() {
  return (
    <ProductLayout
      productId="social"
      icon="share-nodes"
      titleKey="AI Sosyal Medya Yönetimi ve Otomasyonu"
      descriptionKey="Sosyal medya varlığınızı AI ile otomatikleştirin. Gönderileri zamanlayın, performans içgörüleri alın ve kitlenizle zahmetsizce etkileşime geçin. Zamandan tasarruf edin ve daha hızlı büyüyün."
      whatTitleKey="Sosyal Medya Otomasyonu Nedir?"
      whatDescKey="Hazırlanmış içerikleri sizin için doğru zamanda, doğru sosyal medya kanalında otomatik olarak paylaşır."
      howTitleKey="Hayatınızı Nasıl Kolaylaştırır?"
      howDescKey="'Paylaşım yapmayı unuttum!' stresi sona erer. Siz işinizle ilgilenirken, Stunt markanızı dijital dünyada aktif tutar ve pazarlama çalışmalarınızı baştan sona otomatikleştirir."
      featuresKey="Temel Özellikler"
      features={features}
      useCasesTitleKey="Kullanım Alanları"
      useCases={useCases}
    />
  );
} 