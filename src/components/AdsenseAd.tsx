import React, { useEffect, useRef } from 'react';

interface AdsenseAdProps {
  /**
   * AdSense ad slot ID (e.g., "1234567890")
   */
  slot: string;
  /**
   * Optional CSS class name
   */
  className?: string;
  /**
   * Optional inline styles
   */
  style?: React.CSSProperties;
  /**
   * Ad format: 'auto', 'horizontal', 'vertical', or 'rectangle'
   * @default 'auto'
   */
  format?: 'auto' | 'horizontal' | 'vertical' | 'rectangle';
  /**
   * Enable full-width responsive ads
   * @default true
   */
  fullWidthResponsive?: boolean;
}

/**
 * AdsenseAd Component
 * 
 * Safe, reusable Google AdSense ad component for React SPA.
 * 
 * Features:
 * - Prevents duplicate ad pushes
 * - Safe for client-side navigation
 * - Fallback if AdSense not loaded
 * - Follows AdSense placement guidelines
 * 
 * Usage:
 * ```tsx
 * <AdsenseAd slot="1234567890" />
 * ```
 */
export const AdsenseAd: React.FC<AdsenseAdProps> = ({
  slot,
  className = '',
  style,
  format = 'auto',
  fullWidthResponsive = true,
}) => {
  const adRef = useRef<HTMLDivElement>(null);
  const pushedRef = useRef(false);

  useEffect(() => {
    // Only push once per component instance
    if (pushedRef.current) {
      return;
    }

    // Wait for AdSense script to load
    const pushAd = () => {
      if (typeof window === 'undefined') {
        return;
      }

      // Check if adsbygoogle is available
      if (!window.adsbygoogle) {
        // Retry after a short delay if AdSense hasn't loaded yet
        setTimeout(pushAd, 100);
        return;
      }

      // Prevent duplicate pushes
      if (pushedRef.current) {
        return;
      }

      try {
        // Initialize adsbygoogle array if it doesn't exist
        window.adsbygoogle = window.adsbygoogle || [];
        
        // Push the ad configuration
        window.adsbygoogle.push({});
        pushedRef.current = true;
      } catch (error) {
        // Silently fail if AdSense is not available
        // This prevents console errors in development or if AdSense is not configured
        if (process.env.NODE_ENV === 'development') {
          console.warn('AdSense not available:', error);
        }
      }
    };

    // Initial push attempt
    pushAd();
  }, []);

  // Don't render in development if AdSense is not configured
  // This prevents layout shifts and errors during development
  if (process.env.NODE_ENV === 'development' && !process.env.VITE_ADSENSE_CLIENT) {
    return (
      <div
        className={`adsense-ad-placeholder ${className}`}
        style={{
          minHeight: '250px',
          margin: '40px 0',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: 'rgba(255, 255, 255, 0.05)',
          border: '1px dashed rgba(255, 255, 255, 0.2)',
          borderRadius: '8px',
          ...style,
        }}
      >
        <span style={{ color: 'rgba(255, 255, 255, 0.3)', fontSize: '14px' }}>
          AdSense Ad (slot: {slot})
        </span>
      </div>
    );
  }

  return (
    <div
      ref={adRef}
      className={`adsense-ad-container ${className}`}
      style={{
        minHeight: '250px',
        margin: '40px 0',
        display: 'block',
        ...style,
      }}
    >
      <ins
        className="adsbygoogle"
        style={{
          display: 'block',
          textAlign: 'center',
        }}
        data-ad-client={process.env.VITE_ADSENSE_CLIENT || 'ca-pub-XXXXXXXXXXXX'}
        data-ad-slot={slot}
        data-ad-format={format}
        data-full-width-responsive={fullWidthResponsive ? 'true' : 'false'}
      />
    </div>
  );
};

// Extend Window interface for TypeScript
declare global {
  interface Window {
    adsbygoogle?: Array<Record<string, unknown>>;
  }
}

