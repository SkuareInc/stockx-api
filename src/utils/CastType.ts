import { PRODUCT_TYPE } from '../enums/product.enums';

export const CastType = (productCategory: string): PRODUCT_TYPE => {
  if (productCategory.match(/sneakers/i)) return PRODUCT_TYPE.SNEAKER;
  if (productCategory.match(/t-shirts/i)) return PRODUCT_TYPE.UPPER;
  if (productCategory.match(/watches/i)) return PRODUCT_TYPE.WATCH;
  if (productCategory.match(/bottoms/i)) return PRODUCT_TYPE.BOTTOM;
  if (productCategory.match(/handbags/i)) return PRODUCT_TYPE.HANDBAG;

  if (productCategory.match(/short/i)) return PRODUCT_TYPE.BOTTOM;

  return PRODUCT_TYPE.UNKNOW;
};
