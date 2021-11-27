import { AxiosInstance } from 'axios';
import { HttpsProxyAgent } from 'https-proxy-agent';
import UserAgent from 'user-agents';
import { UnknowException } from './exceptions/request.exceptions';
import {
  SearchProduct, ProductDetails,
} from './api';
import {
  BaseProduct,
  SearchOptions, StockXOption, Product, Proxies, Proxy,
} from './interfaces';
import { RequestParser } from './utils/RequestParser';
import { ChooseProxy } from './utils/ChooseProxy';

export class StockX {
  private currencyCode: string = 'USD';

  private countryCode: string = 'US';

  private proxy: Proxies;

  constructor(options?: StockXOption) {
    const {
      proxy, currencyCode, countryCode,
    } = options || {};

    this.currencyCode = currencyCode || this.currencyCode;
    this.countryCode = countryCode || this.countryCode;
    this.proxy = proxy || [];
  }

  public async searchProducts(query: string, options?: SearchOptions): Promise<BaseProduct[]> {
    const { limit } = options || {};

    return SearchProduct(query, {
      executor: this.buildHttpsClient(),
      limit,
      currencyCode: this.currencyCode,
      countryCode: this.countryCode,
    });
  }

  public async productDetails(url: string) : Promise<Product> {
    return ProductDetails(url, {
      executor: this.buildHttpsClient(),
      currencyCode: this.currencyCode,
      countryCode: this.countryCode,
    });
  }

  public async getMyIp(): Promise<string> {
    try {
      const { data } = await this.buildHttpsClient().get('https://api.ipify.org');
      return data;
    } catch {
      throw new UnknowException();
    }
  }

  private buildHttpsClient(): AxiosInstance {
    const proxy = this.buildProxy() || {};
    const userAgent = this.buildUserAgent();

    return RequestParser({
      headers: {
        'apollographql-client-name': 'Iron',
        'User-Agent': userAgent,
      },
      httpsAgent: new HttpsProxyAgent(proxy),
    });
  }

  private buildProxy(): Proxy | undefined {
    return ChooseProxy(this.proxy);
  }

  private buildUserAgent(): string {
    const userAgent = new UserAgent({ deviceCategory: 'mobile' });
    return userAgent.random().toString();
  }
}
