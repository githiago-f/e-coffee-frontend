import { Product } from 'entities';

type BuildProductFn = (code: string, name: string, price: number, thumb: string) => Product;

export const buildProduct:BuildProductFn = (code, name, price, thumb) => {
  return {
    code,
    name,
    price,
    thumb
  };
};
