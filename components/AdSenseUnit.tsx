import React, { useEffect } from 'react';

// IMPORTANT: Replace with your own AdSense Publisher ID and Ad Slot ID
const AD_CLIENT = 'ca-pub-XXXXXXXXXXXXXXXX';
const AD_SLOT = 'YYYYYYYYYY';

const AdSenseUnit: React.FC = () => {
    useEffect(() => {
        try {
            // @ts-ignore
            (window.adsbygoogle = window.adsbygoogle || []).push({});
        } catch (err) {
            console.error('AdSense error:', err);
        }
    }, []);

    return (
        <div className="my-6 text-center bg-slate-800/50 p-4 rounded-lg flex items-center justify-center min-h-[100px]">
            <ins
                className="adsbygoogle"
                style={{ display: 'block', width: '100%' }}
                data-ad-client={AD_CLIENT}
                data-ad-slot={AD_SLOT}
                data-ad-format="auto"
                data-full-width-responsive="true"
            ></ins>
        </div>
    );
};

export default AdSenseUnit;
