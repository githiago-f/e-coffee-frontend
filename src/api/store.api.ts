import { Store } from 'entity/Store';

type StoreApi = {
  getMostRated(): Promise<Store[]>;
  getById(id: number): Promise<Store | undefined>;
  getAll(): Promise<Store[]>;
  getTotal(): Promise<number>;
}

type JsonStore = {
  rating: number;
  id: number;
  name: string;
}

const orderByRating = (a: JsonStore, b: JsonStore)=> b.rating - a.rating;
const toStore = (i: JsonStore) => new Store(i.id.toString(), i.name, i.rating);

export const storeApi = () => {
  const self = {} as StoreApi;

  const data = import('./fake-server.json');

  self.getMostRated = async () => (await data).stores
    .sort(orderByRating)
    .slice(0, 8)
    .map(toStore);

  self.getById = async (id: number) => (await data).stores
    .filter(i => i.id === id)
    .map(toStore)
    .pop();

  self.getAll = async () => (await data).stores
    .map(toStore);

  self.getTotal = async () => (await data).stores
    .length;

  return self;
};
