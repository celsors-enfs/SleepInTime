import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../hooks/useLanguage';
import { translations } from '../i18n/translations';
import { LanguageSelector } from './LanguageSelector';
import { cn } from '@/lib/utils';
import { Link, useLocation } from 'react-router-dom';
import { Language } from '../i18n/translations';

export const Navigation: React.FC = () => {
  const [language] = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const t = translations[language];
  const langPrefix = language === 'en' ? '/en' : `/${language}`;
  const navItems = [
    { name: t.nav.home, path: langPrefix },
    { name: t.nav.howItWorks, path: `${langPrefix}/how-it-works` },
    { name: t.nav.faq, path: `${langPrefix}/faq` },
    { name: t.nav.sleepHygiene, path: `${langPrefix}/sleep-hygiene` },
    { name: t.nav.about, path: `${langPrefix}/about` },
  ];

  const isActive = (path: string) => {
    return location.pathname === path || location.pathname === path + '/';
  };

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-3 md:px-6 py-3 md:py-4',
        isScrolled
          ? 'bg-[#030617]/80 backdrop-blur-md border-b border-white/5'
          : 'bg-transparent'
      )}
      style={{ pointerEvents: 'auto' }}
    >
      <div className="flex items-center max-w-7xl mx-auto relative h-full">
        {/* Logo - Left */}
        <div className="flex-shrink-0 min-w-0 pr-1 md:pr-4" style={{ maxWidth: 'calc(100% - 140px)' }}>
          <Link
            to={langPrefix}
            className="flex items-center gap-1 md:gap-2 group cursor-pointer"
            onClick={() => window.scrollTo({ top: 0, behavior: 'instant' })}
          >
            <div className="relative flex items-center justify-center w-full">
              <img
                className="h-6 md:h-[34px] text-blue-500 drop-shadow-[0_0_10px_rgba(59,130,246,0.5)]"
                style={{
                  width: 'auto',
                  maxWidth: '100%',
                  objectFit: 'contain',
                }}
                src="https://storage.googleapis.com/storage.magicpath.ai/user/347385894321393664/assets/530f46d9-08bd-4224-8001-71b163469a7b.png"
                alt="SleepInTime"
              />
            </div>
          </Link>
        </div>

        {/* Desktop Menu - Center (absolutely positioned) */}
        <div className="hidden md:flex items-center gap-1 p-1 bg-white/5 border border-white/10 rounded-full backdrop-blur-xl justify-center absolute left-1/2 transform -translate-x-1/2" style={{ width: 'fit-content', pointerEvents: 'auto', zIndex: 10 }}>
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={cn(
                'px-4 py-1.5 text-sm font-medium rounded-full transition-all whitespace-nowrap',
                isActive(item.path)
                  ? 'text-white bg-white/10'
                  : 'text-white/70 hover:text-white hover:bg-white/10'
              )}
              style={{ pointerEvents: 'auto', zIndex: 10 }}
              onClick={() => window.scrollTo({ top: 0, behavior: 'instant' })}
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* Right Section: Language Selector + Mobile Menu */}
        <div className="flex items-center gap-2 md:gap-4 flex-shrink-0 ml-auto" style={{ pointerEvents: 'auto', zIndex: 10 }}>
          <LanguageSelector />
          <button
            className="md:hidden p-2 text-white/80 hover:text-white transition-colors flex-shrink-0"
            onClick={(e) => {
              e.stopPropagation();
              setIsMobileMenuOpen(!isMobileMenuOpen);
            }}
            style={{ pointerEvents: 'auto' }}
          >
            {isMobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-[#030617] pt-24 px-8 md:hidden"
            style={{ pointerEvents: 'auto' }}
            onClick={(e) => {
              // Close menu when clicking outside menu items
              if (e.target === e.currentTarget) {
                setIsMobileMenuOpen(false);
              }
            }}
          >
            <div className="flex flex-col gap-6">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    window.scrollTo({ top: 0, behavior: 'instant' });
                  }}
                  className={cn(
                    'text-2xl font-semibold transition-colors',
                    isActive(item.path)
                      ? 'text-blue-500'
                      : 'text-white hover:text-blue-500'
                  )}
                  style={{ pointerEvents: 'auto' }}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

