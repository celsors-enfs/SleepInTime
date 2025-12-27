import React, { useState, useRef, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Language, languageNames } from '../i18n/translations';
import { useLanguage } from '../hooks/useLanguage';
import { cn } from '@/lib/utils';
import { track } from '../lib/analytics/mixpanel';

export const LanguageSelector: React.FC = () => {
  const [language, setLanguage] = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();
  const location = useLocation();

  const languages: Language[] = ['en', 'pt-br', 'es', 'fr', 'zh'];

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleLanguageChange = (newLang: Language) => {
    const oldLang = language;
    setLanguage(newLang);
    setIsOpen(false);
    
    // Track language change
    track('Language Changed', {
      from: oldLang,
      to: newLang,
    });
    
    // Navigate to same page in new language using React Router
    const currentPath = location.pathname;
    const pathParts = currentPath.split('/').filter(Boolean);
    const currentLang = pathParts[0];
    
    let newPath = '';
    if (['en', 'pt-br', 'es', 'fr', 'zh'].includes(currentLang)) {
      // Replace language in path
      pathParts[0] = newLang;
      newPath = '/' + pathParts.join('/');
    } else {
      // Add language prefix
      newPath = `/${newLang}${currentPath === '/' ? '' : currentPath}`;
    }
    
    // Navigate using React Router
    navigate(newPath);
    // Scroll to top after navigation
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'instant' });
    }, 0);
  };

  return (
    <div className="relative" ref={dropdownRef} style={{ pointerEvents: 'auto', zIndex: 100 }}>
      <button
        onClick={(e) => {
          e.stopPropagation();
          setIsOpen(!isOpen);
        }}
        className="flex items-center gap-1 md:gap-1.5 px-2 md:px-3 py-1.5 text-xs md:text-sm font-medium text-white/70 hover:text-white hover:bg-white/10 rounded-full transition-all"
        style={{ pointerEvents: 'auto' }}
      >
        <span className="hidden sm:inline">{languageNames[language]}</span>
        <span className="sm:hidden">{languageNames[language].split(' ')[0]}</span>
        <ChevronDown className={cn("w-3 h-3 md:w-3.5 md:h-3.5 transition-transform flex-shrink-0", isOpen && "rotate-180")} />
      </button>
      
      {isOpen && (
        <div 
          className="absolute top-full right-0 mt-2 bg-[#030617]/95 backdrop-blur-xl border border-white/10 rounded-xl shadow-xl overflow-hidden min-w-[180px]"
          style={{ pointerEvents: 'auto', zIndex: 100 }}
        >
          {languages.map((lang) => (
            <button
              key={lang}
              onClick={(e) => {
                e.stopPropagation();
                handleLanguageChange(lang);
              }}
              className={cn(
                "w-full px-4 py-2.5 text-left text-sm transition-colors",
                language === lang
                  ? "bg-white/10 text-white font-medium"
                  : "text-white/70 hover:bg-white/5 hover:text-white"
              )}
              style={{ pointerEvents: 'auto' }}
            >
              {languageNames[lang]}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

