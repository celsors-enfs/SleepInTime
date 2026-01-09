import React, { useEffect, useRef } from 'react';

interface Banner320x50Props {
  /**
   * Optional CSS class name
   */
  className?: string;
  /**
   * Optional inline styles
   */
  style?: React.CSSProperties;
}

/**
 * Banner320x50 Component
 * 
 * Banner ad unit (320x50) that can be placed anywhere in the page body.
 * Uses IFRAME SYNC implementation.
 * 
 * Usage:
 * ```tsx
 * <Banner320x50 />
 * ```
 */
export const Banner320x50: React.FC<Banner320x50Props> = ({
  className = '',
  style,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const scriptLoadedRef = useRef(false);

  useEffect(() => {
    // Prevent duplicate script loading
    if (scriptLoadedRef.current) {
      return;
    }

    // Check if script already exists
    const existingScript = document.querySelector('script[data-banner-320x50]');
    if (existingScript) {
      scriptLoadedRef.current = true;
      return;
    }

    // Create and configure atOptions
    if (typeof window !== 'undefined') {
      // Set atOptions before loading script
      (window as any).atOptions = (window as any).atOptions || {};
      if (!(window as any).atOptions['38caeb7d29d0ff34dd19cf4c31cb9590']) {
        (window as any).atOptions['38caeb7d29d0ff34dd19cf4c31cb9590'] = {
          'key': '38caeb7d29d0ff34dd19cf4c31cb9590',
          'format': 'iframe',
          'height': 50,
          'width': 320,
          'params': {}
        };
      }

      // Load the Adsterra script
      const script = document.createElement('script');
      script.setAttribute('data-banner-320x50', 'true');
      script.type = 'text/javascript';
      script.src = 'https://www.profitablecreativeformat.com/38caeb7d29d0ff34dd19cf4c31cb9590/invoke.js';
      script.async = true;
      
      // Append to head
      document.head.appendChild(script);
      scriptLoadedRef.current = true;
    }

    return () => {
      // Cleanup if needed
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className={`banner-320x50-container ${className}`}
      style={{
        margin: '24px auto',
        minHeight: '50px',
        width: '320px',
        maxWidth: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        ...style,
      }}
    >
      <div id="at-38caeb7d29d0ff34dd19cf4c31cb9590" style={{ display: 'block', width: '320px', height: '50px' }} />
    </div>
  );
};

