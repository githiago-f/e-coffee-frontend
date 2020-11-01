import { ProductType } from '@dataTypes/coffee';
import { productsService } from './config';

export const getByProductType = (type: ProductType): Promise<Product[]> => {
  return productsService.get(`/api/coffees?type=${type}`);
};

export const getProductDetails = (id: number): Promise<Product> => {
  return productsService.get(`/api/coffees/${id}`);
};
