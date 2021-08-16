import { CartItem } from 'entity/CartItem';
import { Product } from 'entity/Product';

export const CartService = () => {
  const getStore = async () => {};

  const alterItem = async (product: Product, quantity = 1) => {
    // TODO
  };

  const getAll = async () => {
    // TODO
  };

  const countItems = async () => {
    // TODO
  };

  const changeItemPrice = (items: CartItem[], item: any) => {
    // TODO
  };

  const deleteItem = async (code: string) => {
    // TODO
  };

  return {
    alterItem,
    countItems,
    getAll,
    changeItemPrice,
    deleteItem
  };
};
