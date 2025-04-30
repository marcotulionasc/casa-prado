import { UTMParams } from '../types/utm';

/* ----- Mapeamento dos parâmetros UTM ----- */
const UTM_MAPPING = {
  // Campos que precisam ser convertidos para camelCase
  'utm_source': 'utmSource',
  'utm_medium': 'utmMedium',
  'utm_campaign': 'utmCampaign',
  'utm_content': 'utmContent',
  'utm_term': 'utmTerm',
  
  // Campos que devem permanecer como estão (snake_case)
  'adname': 'adname',
  'adset': 'adset',
  'cname': 'cname',
  'cwr': 'cwr',
  'domain': 'domain',
  'site': 'site',
  'xcod': 'xcod',
  'xid': 'xid'
} as const;

const LOCAL_STORAGE_KEY = 'utm_params';
const SENT_FLAG_KEY = 'utm_sent';

function normalizeUTMKeys(data: Record<string, string>): Partial<UTMParams> {
  console.log('🔄 Dados brutos recebidos:', data);
  
  const normalized: Partial<UTMParams> = {};

  // Processa cada campo conforme o mapeamento
  Object.entries(UTM_MAPPING).forEach(([urlParam, dbField]) => {
    const value = data[urlParam];
    if (value) {
      console.log(`✅ Mapeando ${urlParam} -> ${dbField}:`, value);
      normalized[dbField] = value;
    }
  });

  console.log('✨ Dados normalizados finais:', normalized);
  return normalized;
}

/* -------------------------------------------------
 * 1) Captura da URL e salva no localStorage
 * ------------------------------------------------- */
export function captureUTMParams(): void {
  console.log('🔍 Iniciando captura de UTMs...');
  
  if (typeof window === 'undefined') {
    console.log('⚠️ Window não disponível (SSR)');
    return;
  }

  const urlParams = new URLSearchParams(window.location.search);
  console.log('🔍 URL completa:', window.location.href);
  console.log('🔍 Parâmetros da URL:', Object.fromEntries(urlParams.entries()));
  
  const rawData: Record<string, string> = {};

  // Captura os parâmetros da URL conforme o mapeamento
  Object.keys(UTM_MAPPING).forEach(param => {
    const value = urlParams.get(param);
    if (value) {
      rawData[param] = value;
      console.log(`✅ Encontrado ${param}:`, value);
    }
  });

  if (Object.keys(rawData).length > 0) {
    console.log('📝 Total de parâmetros encontrados:', Object.keys(rawData).length);
    const normalizedData = normalizeUTMKeys(rawData);
    
    try {
      const dataToStore = JSON.stringify(normalizedData, null, 2);
      localStorage.setItem(LOCAL_STORAGE_KEY, dataToStore);
      console.log('💾 Dados salvos no localStorage:', normalizedData);
      
      // Debug: verificar o que foi realmente salvo
      const storedData = localStorage.getItem(LOCAL_STORAGE_KEY);
      console.log('🔍 Verificação do localStorage:', JSON.parse(storedData || '{}'));
    } catch (error) {
      console.error('❌ Erro ao salvar no localStorage:', error);
    }
  } else {
    console.log('ℹ️ Nenhum parâmetro encontrado na URL');
  }
}

/* -------------------------------------------------
 * 2) Lê os dados já salvos (já em camelCase)
 * ------------------------------------------------- */
export function getStoredUTMParams(): Partial<UTMParams> | null {
  console.log('📖 Tentando ler UTMs do localStorage...');
  
  if (typeof window === 'undefined') {
    console.log('⚠️ Window não disponível (SSR)');
    return null;
  }

  try {
    const stored = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (stored) {
      const parsed = JSON.parse(stored);
      console.log('📖 Dados encontrados no localStorage:', parsed);
      return parsed;
    } else {
      console.log('ℹ️ Nenhum dado encontrado no localStorage');
      return null;
    }
  } catch (error) {
    console.error('❌ Erro ao ler do localStorage:', error);
    return null;
  }
}

/* -------------------------------------------------
 * 3) Envia para o backend (uma vez por e-mail)
 * ------------------------------------------------- */
export async function sendUTMData(email: string): Promise<void> {
  console.log('🚀 Iniciando envio de UTMs para:', email);

  if (typeof window === 'undefined') {
    console.log('⚠️ Window não disponível (SSR)');
    return;
  }

  const sentFlag = localStorage.getItem(SENT_FLAG_KEY);
  if (sentFlag === email) {
    console.log('⚠️ UTMs já enviados para este email:', email);
    return;
  }

  const utmData = getStoredUTMParams();
  if (!utmData) {
    console.log('⚠️ Nenhum UTM para enviar');
    return;
  }

  const payload = {
    ...utmData,
    email,
    path: window.location.pathname,
    timestamp: new Date().toISOString()
  };

  console.log('📤 Payload completo a ser enviado:', payload);

  try {
    const res = await fetch('https://backend-ingressar.onrender.com/api/utm', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    });

    const responseText = await res.text();
    console.log('📥 Resposta da API:', responseText);

    if (res.ok) {
      console.log('✅ UTMs enviados com sucesso!');
      localStorage.setItem(SENT_FLAG_KEY, email);
    } else {
      console.error('❌ Falha ao enviar UTMs:', res.status);
      console.error('Resposta de erro:', responseText);
    }
  } catch (err) {
    console.error('❌ Erro ao enviar UTMs:', err);
  }
}
