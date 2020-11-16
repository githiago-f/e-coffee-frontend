import { CartProduct } from '@dataTypes/coffee';
import store from 'store';
import { removeCartItem, setCartItem } from 'store/actions';

const cartKey = 'ecoffee@cart';

export const getAllItems = (): Record<string, CartProduct> => {
  const cartItems = window.localStorage.getItem(cartKey);
  return JSON.parse(cartItems || '{}');
};

export const addToCart = (item: Product, count: number) => {
  const items = getAllItems();

  const cartItem = {
    product_id: item.product_id,
    count: count
  } as CartProduct;

  items[item.product_id] = items[item.product_id] || cartItem;
  items[item.product_id].count = count;

  const jsonData = JSON.stringify(items);

  window.localStorage
    .setItem(cartKey, jsonData);

  store.dispatch(setCartItem(cartItem));
};

export const removeFromCart = (item: Product, count: number) => {
  const items = getAllItems();

  if(!items[item.product_id]){
    throw new Error('Item not found');
  }

  const itemToDelete = items[item.product_id];
  delete items[item.product_id];

  store.dispatch(removeCartItem(itemToDelete));

  const jsonData = JSON.stringify(items);
  window.localStorage.setItem(cartKey, jsonData);
};
