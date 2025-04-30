/**
 * Tipagem dos parâmetros UTM.
 * Todos os campos em camelCase para corresponder ao backend.
 */
export interface UTMParams {
  utmSource?: string;
  utmMedium?: string;
  utmCampaign?: string;
  utmTerm?: string;
  utmContent?: string;
  path?: string;
  xcod?: string;
  cwr?: string;
  cname?: string;
  domain?: string;
  adset?: string;
  adname?: string;
  site?: string;
  xid?: string;
}
