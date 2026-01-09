import React, { useEffect } from 'react';

interface NativeBannerProps {
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
 * NativeBanner Component
 * 
 * Native Banner ad unit that can be placed anywhere in the page body.
 * Uses async loading for better performance.
 * 
 * Usage:
 * ```tsx
 * <NativeBanner />
 * ```
 */
export const NativeBanner: React.FC<NativeBannerProps> = ({
  className = '',
  style,
}) => {
  useEffect(() => {
    // Load the native banner script if not already loaded
    const scriptId = 'native-banner-script';
    if (document.getElementById(scriptId)) {
      return; // Script already loaded
    }

    // Ensure container exists in DOM before loading script
    const container = document.getElementById('container-c8f5d2ec08a224324073a992fce13830');
    if (!container) {
      // Retry after a short delay if container not ready
      setTimeout(() => {
        const retryContainer = document.getElementById('container-c8f5d2ec08a224324073a992fce13830');
        if (retryContainer && !document.getElementById(scriptId)) {
          loadNativeBannerScript();
        }
      }, 200);
      return;
    }

    loadNativeBannerScript();

    function loadNativeBannerScript() {
      if (document.getElementById(scriptId)) {
        return; // Already loaded
      }

      const script = document.createElement('script');
      script.id = scriptId;
      script.async = true;
      script.setAttribute('data-cfasync', 'false');
      script.src = 'https://pl28438063.effectivegatecpm.com/c8f5d2ec08a224324073a992fce13830/invoke.js';
      
      // Handle script load errors
      script.onerror = () => {
        console.warn('Native Banner script failed to load');
      };
      
      // Append to head
      document.head.appendChild(script);
    }

    return () => {
      // Cleanup: remove script on unmount if needed
      const existingScript = document.getElementById(scriptId);
      if (existingScript) {
        existingScript.remove();
      }
    };
  }, []);

  return (
    <div
      id="container-c8f5d2ec08a224324073a992fce13830"
      className={`native-banner-container ${className}`}
      style={{
        margin: '32px 0',
        minHeight: '100px',
        display: 'block',
        ...style,
      }}
    />
  );
};

