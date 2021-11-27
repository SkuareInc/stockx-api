import { PRODUCT_TYPE } from '../enums/product.enums';

export const CastType = (breadcrumbs: { name: string }[], productName: string): PRODUCT_TYPE => {
  for (let i = 0; i < breadcrumbs.length; i += 1) {
    const { name } = breadcrumbs[i];
    if (name.match(/sneakers/i)) return PRODUCT_TYPE.SNEAKER;
    if (name.match(/t-shirts/i)) return PRODUCT_TYPE.UPPER;
    if (name.match(/watches/i)) return PRODUCT_TYPE.WATCH;
    if (name.match(/bottoms/i)) return PRODUCT_TYPE.BOTTOM;
    if (name.match(/handbags/i)) return PRODUCT_TYPE.HANDBAG;

    if (productName.match(/short/i)) return PRODUCT_TYPE.BOTTOM;
  }

  return PRODUCT_TYPE.UNKNOW;
};
