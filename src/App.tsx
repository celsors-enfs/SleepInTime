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
import { Language } from './i18n/translations';

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
        <Layout>
          <Routes>
          {/* Root redirect to English */}
          <Route path="/" element={<Navigate to="/en" replace />} />

          {/* Language-specific routes */}
          {languages.map((lang) => {
            const langPrefix = lang === 'en' ? '/en' : `/${lang}`;
            
            return (
              <React.Fragment key={lang}>
                {/* Home */}
                <Route
                  path={langPrefix}
                  element={
                    <LanguageRoute
                      lang={lang}
                      title="SleepInTime - Wake up better"
                      description="Calculate optimal sleep and wake times based on sleep cycles for more restful mornings."
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
                      title="How it works - SleepInTime"
                      description="Learn how sleep cycles work and how SleepInTime calculates optimal sleep and wake times."
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
                      title="FAQ - SleepInTime"
                      description="Frequently asked questions about sleep cycles, sleep timing, and SleepInTime."
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
                      title="Sleep Hygiene - SleepInTime"
                      description="Learn about sleep hygiene practices including light exposure, caffeine timing, and creating the right sleep environment."
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
                      title="About SleepInTime"
                      description="Learn about SleepInTime, a simple educational tool for aligning sleep times with natural sleep cycles."
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
