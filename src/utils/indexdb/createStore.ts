export const createStore = (db: IDBDatabase) => {
  const store = db.createObjectStore('stores', {
    keyPath: 'id',
    autoIncrement: true
  });
  store.createIndex('products', 'products');
  store.createIndex('rating', 'rating');
  store.createIndex('name', 'name', { unique: true});
};
