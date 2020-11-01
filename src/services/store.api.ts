import { productsService } from './config';
import { Stock, Store } from '@dataTypes/store';

export const getStoreStock = async (storeId: number): Promise<Stock[]> => {
  return productsService.get(`/api/store/stock/${storeId}`);
};

export const getStores = async (): Promise<Store[]> => {
  // will need to receive ?page={n}
  return productsService.get('/api/store');
};
