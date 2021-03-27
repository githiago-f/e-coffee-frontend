import { CartItem } from 'value-object';
import { cartItemFactory } from 'factory/cart-item';
import { eventLayer } from 'utils/Event';
import { IndexedDB } from 'utils/indexdb/db';
import { Product } from 'entities';
import { PriceService } from './price-service';

type item = {
  code: string;
  quantity: number;
}

export const CartService = () => {
  const priceService = PriceService();
  const getStore = async () => {
    const idb = await IndexedDB();
    return idb.useStore('cart', 'readwrite');
  };

  const alterItem = async (product: Product, quantity = 1) => {
    const store = await getStore();
    const item = cartItemFactory(product, quantity);
    store.put(item).onsuccess = function() {
      eventLayer.emit('cartItemsChange', product);
    };
  };

  const getAll = async () => {
    const store = await getStore();
    return new Promise<CartItem[]>((resolve, reject) => {
      const all = store.getAll();
      all.onsuccess = function() {
        resolve(all.result as CartItem[]);
      };
      all.onerror= function() {
        reject(all.error);
      };
    });
  };

  const countItems = async () => {
    const store = await getStore();
    return new Promise<number>((resolve, reject) => {
      const count = store.count();
      count.onsuccess = function() {
        resolve(this.result);
      };
      count.onerror = function() {
        reject(this.error);
      };
    });
  };

  const changeItemPrice = (items: CartItem[], item: item) => {
    const {code, quantity} = item;
    const idx = items.findIndex(i => i.code === code);
    items[idx] =cartItemFactory(items[idx].product, quantity);
    return priceService.totalCartPrice(items);
  };

  return {
    alterItem,
    countItems,
    getAll,
    changeItemPrice
  };
};
