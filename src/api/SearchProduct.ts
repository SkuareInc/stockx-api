import { ScrapOption, BaseProduct } from '../interfaces';
import { CastType } from '../utils/CastType';
import { ApiSearchToken } from './ApiSearchToken';

export const SearchProduct = async (query: string, options: ScrapOption): Promise<BaseProduct[]> => {
  const {
    executor, limit,
  } = options;

  const tokens = await ApiSearchToken(options);

  const res = await executor.post(
    'https://xw7sbct9v6-dsn.algolia.net/1/indexes/products/query',
    {
      query,
      facets: '*',
      filters: '',
      page: limit ? 1 : undefined,
      hitsPerPage: limit,
    },
    {
      headers: {
        'x-algolia-application-id': tokens.id,
        'x-algolia-api-key': tokens.key,
        'Content-Type': 'multipart/form-data',
      },
    },
  );

  const { data: { hits: Products } }: { data: { hits: any[] } } = res;

  return Products
    .map((product: any) => ({
      id: product.id,
      name: product.name,
      image: product.media.imageUrl,
      urlKey: product.url,
      brand: product.brand,
      type: CastType([
        ...product.categories.map((v: string) => ({ name: v })),
        { name: product.product_category },
      ], product.name),
      price: product.last_sale,
    }));
};
