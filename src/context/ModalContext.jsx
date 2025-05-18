'use client';

import React, { createContext, useState, useContext, useCallback } from 'react';

const ModalContext = createContext(undefined);

export const ModalProvider = ({ children }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState(null); // Optional: for varied modal content later

  const openModal = useCallback((content = null) => {
    // If we want to support different modals later, content can be a component or identifier
    // For now, it just opens the main ContactModal
    if (content) {
        setModalContent(content);
    }
    setIsModalOpen(true);
  }, []);

  const closeModal = useCallback(() => {
    setIsModalOpen(false);
    setModalContent(null); // Reset content when closing
  }, []);

  return (
    <ModalContext.Provider value={{ isModalOpen, openModal, closeModal, modalContent }}>
      {children}
    </ModalContext.Provider>
  );
};

export const useModal = () => {
  const context = useContext(ModalContext);
  if (context === undefined) {
    throw new Error('useModal must be used within a ModalProvider');
  }
  return context;
}; 