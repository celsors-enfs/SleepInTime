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
                      title="Sleep Calculator: Find the Best Bedtime and Wake Up Time | SleepInTime"
                      description="Free sleep calculator to find the best bedtime and wake up time based on 90-minute sleep cycles. Calculate optimal sleep times for better mornings. No account required."
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
                      title="How This Sleep Calculator Works | SleepInTime"
                      description="Learn how our sleep cycle calculator works. Understand 90-minute sleep cycles, sleep onset time, and how we calculate optimal bedtime and wake up times."
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
                      title="Sleep Calculator FAQ: Common Questions About Sleep Cycles | SleepInTime"
                      description="Frequently asked questions about sleep cycles, sleep timing, bedtime calculation, and how to use our free sleep calculator. Get answers about 90-minute cycles and optimal sleep times."
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
                      title="Sleep Hygiene Tips for a Better Sleep Schedule | SleepInTime"
                      description="Learn sleep hygiene practices including light exposure, caffeine timing, and creating the right sleep environment. Improve your sleep schedule with evidence-based tips."
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
                      title="About SleepInTime: Free Sleep Calculator Tool"
                      description="Learn about SleepInTime, a privacy-first, free sleep calculator that helps you align your sleep times with natural 90-minute sleep cycles. No tracking, no accounts required."
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
