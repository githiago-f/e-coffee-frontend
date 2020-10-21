import { coffeeService } from './config';
import { Stock, Store } from '@dataTypes/store';

export const getStoreStock = async (storeId: number): Promise<Stock[]> => {
  return coffeeService.get(`/api/store/stock/${storeId}`);
};

export const getStores = async (): Promise<Store[]> => {
  // will need to receive ?page={n}
  return coffeeService.get('/api/store');
};