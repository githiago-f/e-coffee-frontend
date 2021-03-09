import { CartItem, Product } from 'entities';
import { cartItemFactory } from 'factory/cart-item';
import { eventLayer } from 'utils/Event';
import { IndexedDB } from 'utils/indexdb/db';

export const CartService = async () => {
  const idb = await IndexedDB();
  const store = idb.useStore('cart', 'readwrite');

  const addItem = (product: Product, quantity = 1) => {
    store.put(cartItemFactory(product, quantity))
      .addEventListener('success', function() {
        eventLayer.emit('cartItemsChange', product);
      });
  };

  const getAll = async (): Promise<CartItem[]> => {
    return new Promise((resolve, reject) => {
      const all = store.getAll();
      all.onsuccess = function() {
        resolve(all.result as CartItem[]);
      };
      all.onerror= function() {
        reject(all.error);
      };
    });
  };

  const countItems = (): Promise<number> => {
    return new Promise((resolve, reject) => {
      const count = store.count();
      count.onsuccess = function() {
        resolve(this.result);
      };
      count.onerror = function() {
        reject(this.error);
      };
    });
  };

  return {
    addItem,
    countItems,
    getAll
  };
};
