import { ScrapOption, BaseProduct } from '../interfaces';
import { CastType } from '../utils/CastType';

export const SearchProduct = async (query: string, options: ScrapOption): Promise<BaseProduct[]> => {
  const {
    executor, limit,
  } = options;

  const path = 'https://stockx.com/api/browse';

  const params = {
    params: {
      _search: query,
      page: limit ? 1 : undefined,
      resultsPerPage: limit,
      dataType: 'product',
    },
  };

  const res = await executor.get(path, params);

  const { data: { Products } }: { data: { Products: any[] } } = res;

  return Products
    .map((product: any) => ({
      id: product.id,
      name: product.name,
      image: product.media.imageUrl,
      urlKey: product.url,
      brand: product.brand,
      type: CastType(product.productCategory),
      price: product.market.lastSale,
    }));
};
