import { useEffect, useState } from 'react';
import { captureUTMParams, sendUTMData, getStoredUTMParams } from '../utils/utmTracker';

export function useUTM() {
  console.log('🎯 useUTM hook iniciado');
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    console.log('🎯 useUTM useEffect executando');
    setIsClient(true);
    
    // Forçar execução no próximo tick para garantir que window está disponível
    setTimeout(() => {
      console.log('🎯 Tentando capturar UTMs...');
      try {
        captureUTMParams();
      } catch (error) {
        console.error('🔴 Erro ao capturar UTMs:', error);
      }
    }, 0);
  }, []);

  // Log do estado atual
  console.log('🎯 isClient:', isClient);

  // Só retorna as funções se estivermos no cliente
  if (!isClient) {
    console.log('🎯 Ainda no servidor, retornando funções vazias');
    return {
      sendUTMData: () => Promise.resolve(),
      getStoredUTMParams: () => null
    };
  }

  console.log('🎯 No cliente, retornando funções reais');
  return {
    sendUTMData,
    getStoredUTMParams
  };
} 