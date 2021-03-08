export const createCart = (db: IDBDatabase) => {
  const cart = db.createObjectStore('cart', {
    keyPath: 'code'
  });
  cart.createIndex('product', 'product', { unique:true });
};
