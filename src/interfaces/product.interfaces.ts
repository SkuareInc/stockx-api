import { PRODUCT_TYPE } from '../enums/product.enums';

export interface Variant {
  id: string;
  size: string;
  price: number | null;
  stock: number;
}

export interface BaseProduct {
  id: string;
  name: string;
  image: string;
  urlKey: string;
  brand: string;
  type: PRODUCT_TYPE;
  price: number | null;
}

export interface Product extends BaseProduct {
  stock: number;
  variants: Variant[];
}
