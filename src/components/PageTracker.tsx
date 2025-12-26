import React from 'react';
import { usePageTracking } from '../hooks/usePageTracking';

/**
 * Component to track page views on route changes
 * Place this inside BrowserRouter
 */
export const PageTracker: React.FC = () => {
  usePageTracking();
  return null;
};

