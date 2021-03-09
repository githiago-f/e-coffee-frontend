import { Store } from 'entities';
import { storeFactory } from 'factory/store-factory';

type StoreApi = {
  getMostRated(): Promise<Store[]>;
  getById(id: number): Promise<Store | undefined>;
}

type JsonStore = {
  rating: number;
  id: number;
  name: string;
}

const orderByRating = (a: JsonStore, b: JsonStore)=> b.rating - a.rating;
const toStore = (i: JsonStore) => storeFactory(i.name, i.rating, i.id);

export const storeApi = () => {
  const self = {} as StoreApi;

  const data = import('./bff-data.json');

  self.getMostRated = async () => (await data).stores
    .sort(orderByRating)
    .slice(0, 4)
    .map(toStore);

  self.getById = async (id: number) => (await data).stores
    .filter(i => i.id === id)
    .map(toStore)
    .shift();

  return self;
};
