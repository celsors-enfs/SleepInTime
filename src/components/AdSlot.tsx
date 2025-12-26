import React from 'react';

interface AdSlotProps {
  id: string;
  className?: string;
  style?: React.CSSProperties;
}

/**
 * AdSlot component for AdSense ads
 * Only renders in production environment
 * Follows AdSense-safe placement rules:
 * - No ads above the fold
 * - No ads near inputs/buttons
 * - Generous spacing around ads
 */
export const AdSlot: React.FC<AdSlotProps> = ({ id, className = '', style }) => {
  // Only render in production - return null in dev
  if (process.env.NODE_ENV !== 'production') {
    return null;
  }

  return (
    <div
      id={id}
      className={`ad-slot ${className}`}
      style={{
        minHeight: '250px',
        margin: '40px 0',
        ...style,
      }}
    >
      {/* AdSense ad will be injected here */}
      <ins
        className="adsbygoogle"
        style={{ display: 'block' }}
        data-ad-client="ca-pub-XXXXXXXXXX"
        data-ad-slot={id}
        data-ad-format="auto"
        data-full-width-responsive="true"
      />
    </div>
  );
};

