import { Product } from 'entities';
import { productFactory } from 'factory/product';

type ProductApi = {
  getRecommendations(): Promise<Product[]>;
  getByCode(code: string): Promise<Product | undefined>;
  getPaged(): Promise<Product[]>;
}

type JsonProduct = {
  name: string;
  code: string;
  price: number;
  discount: number;
}

const toProduct = (i: JsonProduct) => productFactory(i.code, i.name, i.price, i.discount);

export const productApi = () => {
  const self = {} as ProductApi;

  const data = import('./bff-data.json');

  self.getByCode = async (code) => (await data).products
    .filter(i => i.code === code)
    .map(toProduct)
    .shift();

  self.getRecommendations = async () => (await data).products
    .slice(0, 4)
    .map(toProduct);

  self.getPaged = async () => (await data).products
    .map(toProduct);

  return self;
};
