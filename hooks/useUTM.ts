import { useEffect, useState } from 'react';

export function useUTM() {
  const [isClient, setIsClient] = useState(false);
  const [utmFunctions, setUtmFunctions] = useState<{
    sendUTMData: (email: string) => Promise<void>;
    getStoredUTMParams: () => any;
  }>({
    sendUTMData: () => Promise.resolve(),
    getStoredUTMParams: () => null
  });

  useEffect(() => {
    setIsClient(true);
    
    // Dynamic import of UTM functions
    import('../utils/utmTracker').then(({ captureUTMParams, sendUTMData, getStoredUTMParams }) => {
      try {
        captureUTMParams();
        setUtmFunctions({
          sendUTMData,
          getStoredUTMParams
        });
      } catch (error) {
        console.error('🔴 Erro ao capturar UTMs:', error);
      }
    });
  }, []);

  return utmFunctions;
} 