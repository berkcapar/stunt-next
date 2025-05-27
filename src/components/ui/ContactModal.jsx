'use client';

import React, { useEffect } from 'react';
import { useLanguage } from '@/src/lib/i18n';
import Icon from '@/src/components/ui/Icon';

export default function ContactModal({ isOpen, onClose }) {
  const { t, language } = useLanguage();

  const getInstructions = () => {
    switch(language) {
      case 'tr':
        return "Durumu anlat, birebir görüşmede ihtiyaçlarınızı anlayıp size uygun bir demo hazırlıyoruz vs.";
      case 'de':
        return "Schildern Sie uns Ihre Situation. In einem persönlichen Gespräch ermitteln wir Ihre Bedürfnisse und erstellen eine passende Demo für Sie.";
      default:
        return "Tell us about your situation. In a one-on-one meeting, we will understand your needs and prepare a suitable demo for you.";
    }
  };

  useEffect(() => {
    const handleEsc = (event) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleEsc);
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleEsc);
    };
  }, [isOpen, onClose]);

  if (!isOpen) {
    return null;
  }

  return (
    <>
      <div 
        className="fixed inset-0 z-[40] bg-black bg-opacity-80 transition-opacity"
        aria-hidden="true"
        onClick={onClose}
      ></div>
      <div 
        className="fixed inset-0 z-[50] flex items-center justify-center p-4"
      >
        <div 
          className="relative bg-white rounded-lg shadow-xl w-full max-w-2xl p-6 sm:p-8 overflow-y-auto max-h-[90vh] flex flex-col items-center text-center"
          onClick={(e) => e.stopPropagation()} 
        >
          <button
            onClick={onClose}
            className="absolute top-3 right-3 sm:top-4 sm:right-4 text-gray-500 hover:text-gray-700 transition-colors z-[10] p-1 bg-white rounded-full hover:bg-gray-100"
            aria-label={t('contact.close_modal')}
          >
            <Icon icon="times" className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>
          
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
            {t('modal.title')}
          </h2>
          
          <p className="text-gray-700 mb-6 max-w-md">
            {getInstructions()}
          </p>

          <button 
            data-cal-link="berk-capar-jb7kj5/30min"
            data-cal-namespace="30min"
            data-cal-config='{"layout":"month_view"}'
            className="bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-200 text-lg"
          >
            Schedule a Call
          </button>
        </div>
      </div>
    </>
  );
} 