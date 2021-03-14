import { CartItem, Product } from 'entities';
import { cartItemFactory } from 'factory/cart-item';
import { eventLayer } from 'utils/Event';
import { IndexedDB } from 'utils/indexdb/db';

export const CartService = async () => {
  const idb = await IndexedDB();
  const store = idb.useStore('cart', 'readwrite');

  const self = {} as {
    alterItem: (product: Product, quantity: number) => void;
    getAll: () => Promise<CartItem[]>;
    countItems: () => Promise<number>;
  };

  self.alterItem = (product, quantity = 1) => {
    store.put(cartItemFactory(product, quantity))
      .addEventListener('success', function() {
        eventLayer.emit('cartItemsChange', product);
      });
  };

  self.getAll = async () => {
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

  self.countItems = (): Promise<number> => {
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

  return self;
};
