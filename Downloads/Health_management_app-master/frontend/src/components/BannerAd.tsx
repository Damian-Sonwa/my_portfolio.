import { useEffect, useState } from 'react';

declare global {
  interface Window {
    adsbygoogle: any[];
  }
}

interface BannerAdProps {
  adSlot: string;
  style?: React.CSSProperties;
}

export const BannerAd: React.FC<BannerAdProps> = ({ adSlot, style }) => {
  useEffect(() => {
    try {
      // Push ad unit to adsbygoogle array
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch (err) {
      console.error('Ads initialization error:', err);
    }
  }, []);

  // Show placeholder when ads not loaded yet
  const [showPlaceholder, setShowPlaceholder] = React.useState(true);

  useEffect(() => {
    // Hide placeholder after ad loads or timeout
    const timer = setTimeout(() => setShowPlaceholder(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="w-full flex justify-center bg-gray-100 dark:bg-gray-800 py-2 border-t border-gray-300 dark:border-gray-700" style={style}>
      {showPlaceholder && (
        <div className="w-full max-w-4xl px-4 py-4 bg-white dark:bg-gray-800 rounded border border-gray-200 dark:border-gray-700 shadow-sm">
          <div className="text-center text-sm text-gray-600 dark:text-gray-400">
            <p className="font-medium">Advertisement</p>
            <p className="text-xs mt-1">Google Ads will appear here once approved</p>
            <div className="mt-2 h-24 bg-gradient-to-r from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-800 rounded flex items-center justify-center">
              <span className="text-xs text-gray-500">Ad Banner (728x90)</span>
            </div>
          </div>
        </div>
      )}
      <ins
        className="adsbygoogle block"
        style={{ display: 'block', width: '100%', maxWidth: '728px', height: '90px', minHeight: '90px' }}
        data-ad-client="ca-pub-8617849690810653"
        data-ad-slot={adSlot}
        data-ad-format="auto"
        data-full-width-responsive="true"
      />
    </div>
  );
};

export default BannerAd;

