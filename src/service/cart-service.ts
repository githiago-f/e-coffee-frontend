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
    const newItems = items.map(i=>{
      if(i.code === code) {
        return cartItemFactory(i.product, quantity);
      }
      return i;
    });
    return priceService.totalCartPrice(newItems);
  };

  const deleteItem = async (code: string) => {
    const store = await getStore();
    const del = store.delete(code);
    return new Promise((resolve, reject) => {
      del.onsuccess = function() {
        resolve(del.result);
        eventLayer.emit('cartItemsChange');
      };
      del.onerror = function() {
        reject(del.error);
      };
    });
  };

  return {
    alterItem,
    countItems,
    getAll,
    changeItemPrice,
    deleteItem
  };
};
