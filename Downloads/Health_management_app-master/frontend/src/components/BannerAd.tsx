import { useEffect } from 'react';

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
    <div className="w-full flex justify-center bg-gray-100 dark:bg-gray-800 py-2" style={style}>
      <ins
        className="adsbygoogle block"
        style={{ display: 'block', width: '100%', maxWidth: '728px', height: '90px' }}
        data-ad-client="ca-pub-8617849690810653"
        data-ad-slot={adSlot}
        data-ad-format="auto"
        data-full-width-responsive="true"
      />
    </div>
  );
};

export default BannerAd;

