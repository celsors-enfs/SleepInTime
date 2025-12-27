import React, { useEffect } from 'react';
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

  // PERMANENTLY REMOVE Learn More section - ULTRA AGGRESSIVE
  useEffect(() => {
    const removeLearnMore = () => {
      // FIRST: Remove ALL sections with border-t and nav (InternalLinks pattern)
      const allSections = Array.from(document.querySelectorAll('section, div'));
      allSections.forEach((el) => {
        const hasBorderT = el.classList.contains('border-t') || el.classList.contains('mt-16');
        const hasNav = el.querySelector('nav');
        const hasH2 = el.querySelector('h2');
        if (hasBorderT && hasNav && hasH2) {
          const h2Text = hasH2.textContent?.trim() || '';
          if (h2Text === 'Learn More' || h2Text === 'Aprende Más' || h2Text === 'Saiba Mais' || 
              h2Text === 'En Savoir Plus' || h2Text === '了解更多') {
            el.remove();
            return;
          }
        }
      });
      
      // Method 1: Find by h2 text and REMOVE
      const allH2s = Array.from(document.querySelectorAll('h2'));
      allH2s.forEach((h2) => {
        const text = h2.textContent?.trim() || '';
        if (text === 'Learn More' || text === 'Aprende Más' || text === 'Saiba Mais' || 
            text === 'En Savoir Plus' || text === '了解更多') {
          let container = h2.closest('section');
          if (!container) {
            container = h2.closest('div.mt-16, div.border-t, div.pt-12') as HTMLElement;
          }
          if (container) {
            container.remove();
          } else {
            // Remove h2 and its parent
            const parent = h2.parentElement;
            if (parent) {
              if (parent.querySelector('nav')) {
                parent.remove();
              } else {
                h2.remove();
              }
            }
          }
        }
      });
      
      // Method 2: Find sections with border-t and mt-16 that contain nav
      const sections = Array.from(document.querySelectorAll('section.mt-16, section.border-t, div.mt-16.border-t'));
      sections.forEach((section) => {
        const h2 = section.querySelector('h2');
        const nav = section.querySelector('nav');
        if (h2 && nav) {
          const text = h2.textContent?.trim() || '';
          if (text === 'Learn More' || text === 'Aprende Más' || text === 'Saiba Mais' || 
              text === 'En Savoir Plus' || text === '了解更多') {
            section.remove();
          }
        }
      });
      
      // Method 3: Find any element containing "Learn More" text
      const allElements = Array.from(document.querySelectorAll('*'));
      allElements.forEach((el) => {
        const text = el.textContent?.trim() || '';
        if (text === 'Learn More' || text === 'Aprende Más' || text === 'Saiba Mais' || 
            text === 'En Savoir Plus' || text === '了解更多') {
          const section = el.closest('section');
          if (section && section.querySelector('nav')) {
            section.remove();
          } else if (el.tagName === 'H2') {
            // Remove h2 and its parent container
            let parent = el.parentElement;
            while (parent && parent !== document.body) {
              if (parent.classList.contains('border-t') || parent.classList.contains('mt-16') || 
                  parent.tagName === 'SECTION') {
                parent.remove();
                break;
              }
              parent = parent.parentElement;
            }
          }
        }
      });
      
      // Method 4: Add class to hide and then remove
      const learnMoreElements = Array.from(document.querySelectorAll('h2, section, div'));
      learnMoreElements.forEach((el) => {
        const text = el.textContent || '';
        if (text.includes('Learn More') || text.includes('Aprende Más') || text.includes('Saiba Mais')) {
          if (el.tagName === 'H2') {
            const section = el.closest('section') || el.closest('div.mt-16') || el.closest('div.border-t');
            if (section) {
              section.classList.add('hide-learn-more');
              setTimeout(() => section.remove(), 0);
            }
          }
        }
      });
    };
    
    // Execute immediately and repeatedly - VERY AGGRESSIVE
    removeLearnMore();
    setTimeout(removeLearnMore, 0);
    setTimeout(removeLearnMore, 10);
    setTimeout(removeLearnMore, 50);
    setTimeout(removeLearnMore, 100);
    setTimeout(removeLearnMore, 200);
    setTimeout(removeLearnMore, 500);
    setTimeout(removeLearnMore, 1000);
    
    const interval = setInterval(removeLearnMore, 100);
    
    const observer = new MutationObserver(() => {
      setTimeout(removeLearnMore, 0);
      setTimeout(removeLearnMore, 10);
    });
    
    observer.observe(document.body, { 
      childList: true, 
      subtree: true,
      attributes: true,
      characterData: true
    });
    
    // Also observe the home page specifically
    const homePage = document.querySelector('.home-page');
    if (homePage) {
      observer.observe(homePage, {
        childList: true,
        subtree: true,
        attributes: true
      });
    }
    
    return () => {
      clearInterval(interval);
      observer.disconnect();
    };
  }, []);

  // Inject script to hide Learn More
  useEffect(() => {
    const script = document.createElement('script');
    script.textContent = `
      (function() {
        function hideLearnMore() {
          const allElements = document.querySelectorAll('*');
          allElements.forEach(function(el) {
            const text = el.textContent || '';
            if (text.includes('Learn More') || text.includes('Aprende Más') || text.includes('Saiba Mais')) {
              if (el.tagName === 'H2' || (el.tagName === 'SECTION' && el.querySelector('nav'))) {
                const section = el.closest('section') || el;
                section.style.display = 'none';
                section.style.visibility = 'hidden';
                section.style.height = '0';
                section.style.overflow = 'hidden';
                section.style.margin = '0';
                section.style.padding = '0';
              }
            }
          });
        }
        setInterval(hideLearnMore, 50);
        hideLearnMore();
      })();
    `;
    document.head.appendChild(script);
    return () => {
      document.head.removeChild(script);
    };
  }, []);

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
          /* HIDE LEARN MORE SECTIONS - GLOBAL */
          .hide-learn-more,
          section.mt-16.border-t,
          section.border-t.mt-16,
          div.mt-16.border-t {
            display: none !important;
            visibility: hidden !important;
            height: 0 !important;
            overflow: hidden !important;
            margin: 0 !important;
            padding: 0 !important;
            opacity: 0 !important;
          }
        `}</style>
      
      {/* Calculator Section - navigation will be hidden */}
      <div style={{ position: 'relative' }}>
        <SleepCalculator />
      </div>

      {/* Editorial Content Section */}
      <section className="relative z-10 py-12 md:py-20 px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          {content.sections.map((section, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="mb-8 md:mb-16"
            >
              {index === 0 ? (
                <h1
                  className="text-3xl md:text-4xl font-bold mb-6"
                  style={{ fontWeight: '200' }}
                >
                  {section.heading}
                </h1>
              ) : (
                <h2
                  className="text-3xl md:text-4xl font-bold mb-6"
                  style={{ fontWeight: '200' }}
                >
                  {section.heading}
                </h2>
              )}
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

          {/* Key Features List */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="text-2xl md:text-3xl font-semibold mb-6" style={{ fontWeight: '300' }}>
              {content.featuresTitle}
            </h2>
            <ul className="space-y-3 text-white/70">
              {content.features.map((feature, index) => (
                <li key={index} className="flex items-start">
                  <span className="mr-3 text-blue-400">•</span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Disclaimer */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-8 md:mt-12 p-4 bg-white/5 border border-white/10 rounded-xl mb-4 md:mb-0"
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

