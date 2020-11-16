import { CartProduct } from '@dataTypes/coffee';
import { Action, ReduxState } from '@dataTypes/redux';

export enum Actions {
  SET_LANGUAGE = 'SET_LANGUAGE',
  ADD_CART_ITEM = 'SET_CART_ITEM',
  REM_CART_ITEM = 'REMOVE_CART_ITEM'
}

export const setLanguage = (lang: string): Action => {
  return {
    type: Actions.SET_LANGUAGE,
    payload: {
      language: lang
    } as ReduxState
  };
};

export const setCartItem = (item: CartProduct): Action => {
  return {
    type: Actions.ADD_CART_ITEM,
    payload: {
      item: {
        [item.product_id]: item
      }
    }
  };
};

export const removeCartItem = (item: CartProduct): Action => {
  return {
    type: Actions.REM_CART_ITEM,
    payload: {
      key: item.product_id
    }
  };
};
