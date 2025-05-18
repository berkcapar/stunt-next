'use client';

import { Inter } from 'next/font/google';
import './globals.css';
import { LanguageProvider } from '@/src/lib/i18n';
import NavBar from '@/src/components/layout/NavBar';
import Footer from '@/src/components/layout/Footer';
import { ModalProvider, useModal } from '@/src/context/ModalContext';
import ContactModal from '@/src/components/ui/ContactModal';
import React from 'react';

const inter = Inter({ subsets: ['latin'] });

// export const metadata = {
//   title: 'Stunt Marketing',
//   description: 'B2B Marketing Automation Platform',
// };

function AppContent({ children }: { children: React.ReactNode }) {
  const { isModalOpen, closeModal } = useModal();
  return (
    <>
      <NavBar />
      <main className="pt-16 flex-grow">
        {children}
      </main>
      <Footer />
      <ContactModal isOpen={isModalOpen} onClose={closeModal} />
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
          <ModalProvider>
            <AppContent>{children}</AppContent>
          </ModalProvider>
        </LanguageProvider>
      </body>
    </html>
  );
}
