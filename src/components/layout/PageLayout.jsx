'use client';

import { useEffect } from 'react';
import NavBar from './NavBar';
import Footer from './Footer';
import { ModalProvider, useModal } from '@/src/context/ModalContext';
import ContactModal from '@/src/components/ui/ContactModal';

// Inner layout component that uses the modal context
function InnerLayout({ children }) {
  const { isModalOpen, closeModal } = useModal();

  // Scroll to top on page change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <NavBar />
      <main className="flex-grow pt-16">
        {children}
      </main>
      <Footer />
      <ContactModal isOpen={isModalOpen} onClose={closeModal} />
    </div>
  );
}

// Main PageLayout component that provides the modal context
export default function PageLayout({ children }) {
  return (
    <ModalProvider>
      <InnerLayout>{children}</InnerLayout>
    </ModalProvider>
  );
} 