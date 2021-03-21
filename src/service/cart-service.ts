import { CartItem } from 'value-object';
import { cartItemFactory } from 'factory/cart-item';
import { eventLayer } from 'utils/Event';
import { IndexedDB } from 'utils/indexdb/db';
import { Product } from 'entities';

export const CartService = () => {
  const getStore = async () => {
    const idb = await IndexedDB();
    return idb.useStore('cart', 'readwrite');
  };

  const self = {} as {
    alterItem: (product: Product, quantity: number) => void;
    getAll: () => Promise<CartItem[]>;
    countItems: () => Promise<number>;
  };

  self.alterItem = async (product, quantity = 1) => {
    const store = await getStore();
    store.put(cartItemFactory(product, quantity))
      .addEventListener('success', function() {
        eventLayer.emit('cartItemsChange', product);
      });
  };

  self.getAll = async () => {
    const store = await getStore();
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

  self.countItems = async (): Promise<number> => {
    const store = await getStore();
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
