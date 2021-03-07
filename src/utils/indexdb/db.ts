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
      const cart = db.createObjectStore('cart', {
        keyPath: 'code'
      });
      cart.createIndex('product', 'product', { unique:true });
    };

    openRequest.onerror = () => reject(openRequest.error);
  });

  const useStore = (store: string, mode: mode = 'readonly') => database.transaction(store, mode)
    .objectStore(store);

  return {
    useStore
  };
}
