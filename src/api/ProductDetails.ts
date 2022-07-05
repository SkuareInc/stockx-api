import { ScrapOption, Product } from '../interfaces';
import { CastType } from '../utils/CastType';
import { InvalidInputException } from '../exceptions';
import { QueryProduct } from './schemas/product.schema';

export const ProductDetails = async (url: string, options: ScrapOption): Promise<Product> => {
  const {
    executor, currencyCode, countryCode,
  } = options;

  const [match, urlKey] = url.match(/^https?:\/\/stockx\.com.*\/([0-9a-z-]+)$/i) || [];
  if (!match) throw new InvalidInputException();

  const body = {
    operationName: 'GetProduct',
    query: QueryProduct,
    variables: {
      id: urlKey,
      currencyCode,
      countryCode,
    },
  };

  const res = await executor.post(
    'https://stockx.com/api/p/e',
    body,
  );

  const { data: { data: { product: ProductRes } } } = res;

  if (!ProductRes) throw new InvalidInputException();

  const product: Product = {
    id: ProductRes.id,
    name: ProductRes.title,
    image: ProductRes.media.imageUrl,
    urlKey: ProductRes.urlKey,
    brand: ProductRes.brand,
    type: CastType(ProductRes.productCategory),
    price: ProductRes.market.bidAskData.lowestAsk,
    stock: ProductRes.market.bidAskData.numberOfAsks,
    variants: [],
  };

  ProductRes.variants.forEach((variant: any) => {
    product.variants.push({
      size: variant.traits.size,
      id: variant.id,
      price: variant.market.bidAskData.lowestAsk,
      stock: variant.market.bidAskData.numberOfAsks,
    });
  });

  return product;
};
