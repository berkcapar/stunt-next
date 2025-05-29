'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useLanguage } from '@/src/lib/i18n';
import Icon from '@/src/components/ui/Icon';

export default function Footer() {
  const { t } = useLanguage();
  
  return (
    <footer className="bg-gray-900 text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center mb-4">
              <Image 
                src="/stunt-logo.png" 
                alt="Stunt Logo" 
                width={40} 
                height={40} 
                className="mr-2"
              />
              <span className="text-xl font-bold">Stunt</span>
            </div>
            <p className="text-gray-400 mb-4">{t('footer.tagline')}</p>
          </div>
          
          {/* Company Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">{t('footer.company')}</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-gray-400 hover:text-white transition-colors">
                  {t('footer.about')}
                </Link>
              </li>
              <li>
                <Link href="/#contact" className="text-gray-400 hover:text-white transition-colors">
                  {t('footer.contact')}
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Social Media */}
          <div>
            <h3 className="text-lg font-semibold mb-4">{t('footer.social')}</h3>
            <div className="flex space-x-4">
              <a href="https://www.instagram.com/stunt.ai/" target="_blank" rel="noopener noreferrer" className="bg-gray-700 hover:bg-purple-600 w-10 h-10 rounded-full flex items-center justify-center transition-colors">
                <Icon icon="instagram" className="text-white w-4 h-4" />
              </a>
              <a href="https://www.linkedin.com/company/67973841" target="_blank" rel="noopener noreferrer" className="bg-gray-700 hover:bg-purple-600 w-10 h-10 rounded-full flex items-center justify-center transition-colors">
                <Icon icon="linkedin" className="text-white w-4 h-4" />
              </a>
              <a href="https://x.com/bcaparing" target="_blank" rel="noopener noreferrer" className="bg-gray-700 hover:bg-purple-600 w-10 h-10 rounded-full flex items-center justify-center transition-colors">
                <Icon icon="x-twitter" className="text-white w-4 h-4" />
              </a>
              <a href="https://www.youtube.com/@stuntai" target="_blank" rel="noopener noreferrer" className="bg-gray-700 hover:bg-purple-600 w-10 h-10 rounded-full flex items-center justify-center transition-colors">
                <Icon icon="youtube" className="text-white w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="pt-6 border-t border-gray-800 text-center text-gray-400 text-sm">
          <p>{t('footer.copyright')}</p>
        </div>
      </div>
    </footer>
  );
} 