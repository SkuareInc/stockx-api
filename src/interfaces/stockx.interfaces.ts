import { AxiosInstance } from 'axios';
import { HttpsProxyAgentOptions } from 'https-proxy-agent';

export interface StockXOption {
  currencyCode?: string;
  countryCode?: string;
  proxy?: Proxies;
}

export type Proxy = HttpsProxyAgentOptions | string;
export type Proxies = (HttpsProxyAgentOptions | string)[];

export interface SearchOptions {
  limit?: number;
}

export interface ScrapOption {
  executor: AxiosInstance,
  limit?: number;
  currencyCode: string;
  countryCode: string;
}

export interface AskOption {
  askID: string;
}

export interface PlacementOption {
  amount: number;
  variantID: string;
}
