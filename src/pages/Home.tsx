import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../hooks/useLanguage';
import { Language } from '../i18n/translations';
import { homepageContent } from '../content/homepage';
import SleepCalculator from '../components/generated/SleepCalculator';
import { AdSlot } from '../components/AdSlot';

export const Home: React.FC = () => {
  const [language] = useLanguage();
  // Fallback to 'en' if language is not found in content
  const content = homepageContent[language] || homepageContent['en'];

  return (
    <div className="home-page relative w-full bg-[#030617] text-white font-sans">
      <style>{`
        /* Hide SleepCalculator's navigation when used in Home page */
        .home-page nav {
          display: none !important;
          visibility: hidden !important;
          opacity: 0 !important;
          pointer-events: none !important;
        }
        /* Ensure only Layout's Navigation is visible */
        body > div > div > nav:first-of-type {
          display: block !important;
        }
      `}</style>
      
      {/* Calculator Section - navigation will be hidden */}
      <div style={{ position: 'relative' }}>
        <SleepCalculator />
      </div>

      {/* Editorial Content Section */}
      <section className="relative z-10 py-20 px-6">
        <div className="max-w-4xl mx-auto">
          {content.sections.map((section, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="mb-16"
            >
              <h2
                className="text-3xl md:text-4xl font-bold mb-6"
                style={{ fontWeight: '200' }}
              >
                {section.heading}
              </h2>
              {section.paragraphs.map((paragraph, pIndex) => (
                <p
                  key={pIndex}
                  className="text-white/70 leading-relaxed mb-4 text-base md:text-lg"
                >
                  {paragraph}
                </p>
              ))}
            </motion.div>
          ))}

          {/* Disclaimer */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-12 p-4 bg-white/5 border border-white/10 rounded-xl"
          >
            <p className="text-sm text-white/60 italic">{content.disclaimer}</p>
          </motion.div>

          {/* Ad Slot - Only after editorial content */}
          <AdSlot id="homepage-ad-1" />
        </div>
      </section>
    </div>
  );
};

