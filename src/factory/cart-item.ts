import { Product } from 'entities';
import { CartItem } from 'value-object';

type buildFn = (product: Product, quantity: number) => CartItem;

export const cartItemFactory: buildFn = (product, quantity) => 
  ({
    code: product.code,
    product,
    quantity
  });
