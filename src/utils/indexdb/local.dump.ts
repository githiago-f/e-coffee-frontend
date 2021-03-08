import { IndexedDB } from './db';
import { createStore } from 'factory/store';

export const dump = async () => {
  const { useStore } = await IndexedDB();

  const stores = useStore('stores', 'readwrite');

  stores.add(createStore('Nova loja'));
  stores.add(createStore('Nova loja'));
  stores.add(createStore('Nova loja'));
  stores.add(createStore('Nova loja'));
  stores.add(createStore('Nova loja'));
};
