'use client';

import { useState, useEffect } from 'react';
import { useLanguage } from '@/src/lib/i18n';
import Button from '@/src/components/ui/Button';

export default function ScheduleMeetingModal({ isOpen, onClose }) {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    company: '',
    website: '',
    service: '',
    challenge: ''
  });
  
  const [showCalendly, setShowCalendly] = useState(false);

  useEffect(() => {
    // Load Calendly script when modal is open
    if (isOpen && !document.getElementById('calendly-script')) {
      const script = document.createElement('script');
      script.id = 'calendly-script';
      script.src = 'https://assets.calendly.com/assets/external/widget.js';
      script.async = true;
      document.body.appendChild(script);
      
      return () => {
        if (document.getElementById('calendly-script')) {
          document.getElementById('calendly-script').remove();
        }
      };
    }
  }, [isOpen]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = () => {
    setShowCalendly(true);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg w-full max-w-2xl max-h-[90vh] overflow-y-auto">
        <div className="p-6 md:p-8">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-gray-800">Schedule a Call</h2>
            <button 
              onClick={onClose}
              className="text-gray-500 hover:text-gray-700"
              aria-label="Close modal"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            </button>
          </div>
          
          {!showCalendly ? (
            <>
              <p className="text-gray-600 mb-6">
                Let us customize Stunt for your business. Fill in the form below to schedule a free strategy call.
              </p>
              
              <div className="mb-8">
                <div className="space-y-5">
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">
                      Company Name
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                      placeholder="Your company name"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="website" className="block text-sm font-medium text-gray-700 mb-1">
                      Website
                    </label>
                    <input
                      type="text"
                      id="website"
                      name="website"
                      value={formData.website}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                      placeholder="https://example.com"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-1">
                      Primary Interest
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                    >
                      <option value="">Select...</option>
                      <option value="reporting">Reporting & AI Analytics</option>
                      <option value="creative">Creative & Copywriting</option>
                      <option value="social">Social Media Management</option>
                      <option value="seo">SEO & Content Marketing</option>
                    </select>
                  </div>
                  
                  <div>
                    <label htmlFor="challenge" className="block text-sm font-medium text-gray-700 mb-1">
                      Your Biggest Marketing Challenge
                    </label>
                    <textarea
                      id="challenge"
                      name="challenge"
                      value={formData.challenge}
                      onChange={handleChange}
                      rows="3"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                      placeholder="Tell us about your biggest marketing challenge"
                    ></textarea>
                  </div>
                </div>
              </div>
              
              <div className="flex justify-end">
                <Button onClick={onClose} className="mr-4" variant="outline">
                  Cancel
                </Button>
                <Button onClick={handleSubmit} variant="primary">
                  Continue to Calendar
                </Button>
              </div>
            </>
          ) : (
            <div className="calendly-container" style={{ height: '630px' }}>
              <div 
                className="calendly-inline-widget" 
                data-url="https://calendly.com/berkcapar/30min" 
                style={{ minWidth: '320px', height: '630px' }}
              ></div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
} 