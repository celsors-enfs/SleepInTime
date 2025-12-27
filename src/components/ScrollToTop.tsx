import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * Component that scrolls to top on route change
 * Place this inside BrowserRouter
 */
export const ScrollToTop: React.FC = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'instant', // Instant scroll for better UX
    });
  }, [pathname]);

  return null;
};

