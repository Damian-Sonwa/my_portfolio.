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

  return (
    <div className="w-full flex justify-center bg-gray-50 dark:bg-gray-900 py-4 border-t-2 border-gray-200 dark:border-gray-700" style={style}>
      <div className="w-full max-w-5xl px-4">
        <div className="bg-white dark:bg-gray-800 rounded-lg border-2 border-dashed border-gray-300 dark:border-gray-600 shadow-sm p-6">
          <div className="text-center">
            <p className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Advertisement Area</p>
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-gray-700 dark:to-gray-800 h-24 rounded-lg flex items-center justify-center border border-gray-200 dark:border-gray-600">
              <div className="text-center">
                <p className="text-xs font-medium text-gray-500 dark:text-gray-400">Google AdSense Banner</p>
                <p className="text-xs text-gray-400 dark:text-gray-500 mt-1">728x90 pixels</p>
              </div>
            </div>
            <p className="text-xs text-gray-500 dark:text-gray-400 mt-3">Ads will appear here once your site is approved</p>
          </div>
        </div>
      </div>
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

