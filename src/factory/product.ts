import { Defaults } from 'assets';
import { Product } from 'entities';

type FactoryFn = (code: string, name: string, price: number, thumb?: string) => Product;

export const productFactory:FactoryFn = (code, name, price, thumb) => 
  ({
    code,
    name,
    price,
    thumb: thumb || Defaults.product_image
  });
