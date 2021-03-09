import { CartItem, Product } from 'entities';

type buildFn = (product: Product, quantity: number) => CartItem;

export const cartItemFactory: buildFn = (product, quantity) => 
  ({
    code: product.code,
    product,
    quantity
  });
