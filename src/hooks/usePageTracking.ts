import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { track } from '../lib/analytics/mixpanel';

/**
 * Hook to track page views on route changes
 */
export function usePageTracking(): void {
  const location = useLocation();

  useEffect(() => {
    // Extract language and page from path
    const pathParts = location.pathname.split('/').filter(Boolean);
    const lang = pathParts[0] || 'en';
    const page = pathParts[1] || 'home';

    track('Page Viewed', {
      path: location.pathname,
      language: lang,
      page: page === 'home' ? 'home' : page,
    });
  }, [location.pathname]);
}

