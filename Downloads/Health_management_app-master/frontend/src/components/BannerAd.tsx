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
    <div className="w-full flex justify-center bg-red-100 dark:bg-red-900 py-6 border-t-4 border-red-500 shadow-lg" style={style}>
      <div className="w-full max-w-6xl px-6">
        <div className="bg-yellow-50 dark:bg-yellow-900 rounded-lg border-4 border-dashed border-yellow-400 shadow-lg p-8">
          <div className="text-center">
            <p className="text-lg font-bold text-yellow-900 dark:text-yellow-100 mb-3">🗨️ Advertisement Area - Always Visible!</p>
            <div className="bg-gradient-to-r from-pink-200 via-purple-200 to-blue-200 dark:from-gray-700 dark:to-gray-800 h-32 rounded-lg flex items-center justify-center border-2 border-purple-400 dark:border-gray-600">
              <div className="text-center">
                <p className="text-base font-bold text-purple-700 dark:text-purple-300">Google AdSense Banner</p>
                <p className="text-sm text-purple-600 dark:text-purple-400 mt-2">728x90 pixels</p>
              </div>
            </div>
            <p className="text-sm text-red-600 dark:text-red-400 mt-4 font-semibold">Ads will appear here once your site is approved</p>
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

