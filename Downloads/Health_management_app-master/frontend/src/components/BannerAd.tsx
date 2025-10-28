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

  // ALWAYS RENDER - NO CONDITIONS
  console.log('🎯 BannerAd rendering for slot:', adSlot);

  return (
    <div 
      className="w-full" 
      style={{
        position: 'relative',
        zIndex: 9999,
        backgroundColor: '#FF0000',
        padding: '20px 0',
        border: '5px solid #000000',
        boxShadow: '0 -10px 30px rgba(0,0,0,0.5)'
      }}
    >
      <div className="mx-auto max-w-6xl px-4">
        <div 
          style={{
            backgroundColor: '#FFFF00',
            padding: '30px',
            borderRadius: '10px',
            border: '5px dashed #000000',
            textAlign: 'center'
          }}
        >
          <h1 style={{ fontSize: '24px', fontWeight: 'bold', color: '#000', marginBottom: '20px' }}>
            ⚠️ ADVERTISEMENT AREA - THIS MUST BE VISIBLE!
          </h1>
          <div style={{
            backgroundColor: '#FF00FF',
            height: '120px',
            borderRadius: '8px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            border: '3px solid #000'
          }}>
            <div>
              <p style={{ fontSize: '18px', fontWeight: 'bold', color: '#000' }}>Google AdSense Slot: {adSlot}</p>
              <p style={{ fontSize: '14px', color: '#333', marginTop: '10px' }}>728x90 Banner Ad Will Appear Here</p>
            </div>
          </div>
          <p style={{ fontSize: '16px', color: '#FF0000', fontWeight: 'bold', marginTop: '20px' }}>
            Publisher ID: ca-pub-8617849690810653
          </p>
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

