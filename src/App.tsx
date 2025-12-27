import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Layout } from './components/Layout';
import { Home } from './pages/Home';
import { HowItWorks } from './pages/HowItWorks';
import { FAQ } from './pages/FAQ';
import { SleepHygiene } from './pages/SleepHygiene';
import { About } from './pages/About';
import { SEOHead } from './components/SEOHead';
import { ErrorBoundary } from './components/ErrorBoundary';
import { PageTracker } from './components/PageTracker';
import { ScrollToTop } from './components/ScrollToTop';
import { Language } from './i18n/translations';
import { seoConfig } from './config/seo';

// Language route wrapper
const LanguageRoute: React.FC<{
  lang: Language;
  children: React.ReactNode;
  title: string;
  description: string;
  path: string;
}> = ({ lang, children, title, description, path }) => {
  return (
    <>
      <SEOHead title={title} description={description} path={path} />
      {children}
    </>
  );
};

function App() {
  const languages: Language[] = ['en', 'pt-br', 'es', 'fr', 'zh'];
  
  // Debug log
  if (typeof window !== 'undefined') {
    console.log('App component rendering...');
  }

  return (
    <ErrorBoundary>
      <BrowserRouter>
        <ScrollToTop />
        <PageTracker />
        <Layout>
          <Routes>
          {/* Root redirect to English */}
          <Route path="/" element={<Navigate to="/en" replace />} />

          {/* Language-specific routes */}
          {languages.map((lang) => {
            const langPrefix = lang === 'en' ? '/en' : `/${lang}`;
            const seo = seoConfig[lang];
            
            return (
              <React.Fragment key={lang}>
                {/* Home */}
                <Route
                  path={langPrefix}
                  element={
                    <LanguageRoute
                      lang={lang}
                      title={seo.home.title}
                      description={seo.home.description}
                      path={langPrefix}
                    >
                      <Home />
                    </LanguageRoute>
                  }
                />

                {/* How it works */}
                <Route
                  path={`${langPrefix}/how-it-works`}
                  element={
                    <LanguageRoute
                      lang={lang}
                      title={seo.howItWorks.title}
                      description={seo.howItWorks.description}
                      path={`${langPrefix}/how-it-works`}
                    >
                      <HowItWorks />
                    </LanguageRoute>
                  }
                />

                {/* FAQ */}
                <Route
                  path={`${langPrefix}/faq`}
                  element={
                    <LanguageRoute
                      lang={lang}
                      title={seo.faq.title}
                      description={seo.faq.description}
                      path={`${langPrefix}/faq`}
                    >
                      <FAQ />
                    </LanguageRoute>
                  }
                />

                {/* Sleep Hygiene */}
                <Route
                  path={`${langPrefix}/sleep-hygiene`}
                  element={
                    <LanguageRoute
                      lang={lang}
                      title={seo.sleepHygiene.title}
                      description={seo.sleepHygiene.description}
                      path={`${langPrefix}/sleep-hygiene`}
                    >
                      <SleepHygiene />
                    </LanguageRoute>
                  }
                />

                {/* About */}
                <Route
                  path={`${langPrefix}/about`}
                  element={
                    <LanguageRoute
                      lang={lang}
                      title={seo.about.title}
                      description={seo.about.description}
                      path={`${langPrefix}/about`}
                    >
                      <About />
                    </LanguageRoute>
                  }
                />
              </React.Fragment>
            );
          })}

          {/* Catch all - redirect to English home */}
          <Route path="*" element={<Navigate to="/en" replace />} />
        </Routes>
      </Layout>
    </BrowserRouter>
    </ErrorBoundary>
  );
}

export default App;
