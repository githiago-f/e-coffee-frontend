import { createCart } from './createCart';
import { createStore } from './createStore';

type mode = 'readonly' | 'readwrite';

export async function IndexedDB() {
  const openRequest = indexedDB.open('store');

  const database: IDBDatabase = await new Promise((resolve, reject) => {
    let db: IDBDatabase;
    openRequest.onsuccess = () => {
      resolve(openRequest.result);
      db = openRequest.result;
    };

    openRequest.onupgradeneeded = function() {
      db = this.result;
      createCart(db);
      createStore(db);
    };

    openRequest.onerror = () => reject(openRequest.error);
  });

  const useStore = (store: string, mode: mode = 'readonly') => database.transaction(store, mode)
    .objectStore(store);

  return {
    useStore
  };
}
