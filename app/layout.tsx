'use client';

import { Inter } from 'next/font/google';
import './globals.css';
import { LanguageProvider } from '@/src/lib/i18n';
import NavBar from '@/src/components/layout/NavBar';
import Footer from '@/src/components/layout/Footer';

import React, { useEffect } from 'react';

const inter = Inter({ subsets: ['latin'] });

// export const metadata = {
//   title: 'Stunt Marketing',
//   description: 'B2B Marketing Automation Platform',
// };

function AppContent({ children }: { children: React.ReactNode }) {
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
      <NavBar />
      <main className="pt-16 flex-grow">
        {children}
      </main>
      <Footer />
    </>
  );
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-gray-50 text-gray-900 antialiased flex flex-col min-h-screen`}>
        <LanguageProvider>
          <AppContent>{children}</AppContent>
        </LanguageProvider>
      </body>
    </html>
  );
}
