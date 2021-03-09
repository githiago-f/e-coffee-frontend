import { createCart } from './createCart';

type mode = 'readonly' | 'readwrite';

export async function IndexedDB() {
  const openRequest = indexedDB.open('store');

  const database: IDBDatabase = await new Promise((resolve, reject) => {
    let db: IDBDatabase;
    openRequest.onsuccess = () => {
      db = openRequest.result;
      resolve(openRequest.result);
    };

    openRequest.onupgradeneeded = function() {
      db = this.result;
      createCart(db);
    };

    openRequest.onerror = () => reject(openRequest.error);
  });

  const useStore = (store: string, mode: mode = 'readonly') => database.transaction(store, mode)
    .objectStore(store);

  return {
    useStore
  };
}
