import { CartItem, Product } from 'entities';

type buildFn = (product: Product, quantity: number) => CartItem;

export const buildCartItem: buildFn = (product, quantity) => 
  ({
    code: product.code,
    product,
    quantity
  });
