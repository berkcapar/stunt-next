'use client';

import { useEffect } from 'react';
import HeroSection from '@/src/components/home/HeroSection';
import ServicesSection from '@/src/components/home/ServicesSection';
import PainPointsSection from '@/src/components/home/PainPointsSection';
import PricingSection from '@/src/components/home/PricingSection';

export default function HomePage() {
  useEffect(() => {
    // Initialize Cal.com
    if (typeof window !== 'undefined') {
      // Cal.com embed script
      const script = document.createElement('script');
      script.innerHTML = `
        (function (C, A, L) { 
          let p = function (a, ar) { a.q.push(ar); }; 
          let d = C.document; 
          C.Cal = C.Cal || function () { 
            let cal = C.Cal; 
            let ar = arguments; 
            if (!cal.loaded) { 
              cal.ns = {}; 
              cal.q = cal.q || []; 
              d.head.appendChild(d.createElement("script")).src = A; 
              cal.loaded = true; 
            } 
            if (ar[0] === L) { 
              const api = function () { p(api, arguments); }; 
              const namespace = ar[1]; 
              api.q = api.q || []; 
              if(typeof namespace === "string"){
                cal.ns[namespace] = cal.ns[namespace] || api;
                p(cal.ns[namespace], ar);
                p(cal, ["initNamespace", namespace]);
              } else p(cal, ar); 
              return;
            } 
            p(cal, ar); 
          }; 
        })(window, "https://app.cal.com/embed/embed.js", "init");
        
        Cal("init", "30min", {origin:"https://cal.com"});
        Cal.ns["30min"]("ui", {"hideEventTypeDetails":false,"layout":"month_view"});
      `;
      document.head.appendChild(script);
    }
  }, []);

  return (
    <>
      <HeroSection />
      <ServicesSection />
      <PainPointsSection />
      <PricingSection />
    </>
  );
}
