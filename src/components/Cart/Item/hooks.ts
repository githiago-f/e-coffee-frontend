import { CartItem } from 'entities';
import { cartItemFactory } from 'factory/cart-item';
import { ChangeEvent, useCallback, useContext, useEffect, useMemo, useState } from 'react';
import { CartService } from 'service/cart-service';

type inputChange = (ev: ChangeEvent<HTMLInputElement>) => void;

export const useCartItemHooks = (item: CartItem) => {
  const [quantity, setQuantity] = useState(item.quantity);
  const cartService = CartService();

  const price = useMemo(() => {
    const {price: localPrice, discount} = item.product;
    const equivalent = localPrice - (localPrice * discount);
    return equivalent * quantity;
  }, [ item.product, quantity ]);

  const clickLink = useCallback(() => {
    document.getElementById('link_' + item.product.code)?.click();
  }, [item.product.code]);

  const changeItem: inputChange = useCallback((ev) => {
    setQuantity(ev.target.valueAsNumber);
  }, []);

  useEffect(() => {
    if(quantity !== item.quantity) {
      cartService.alterItem(item.product, quantity);
    }
  }, [quantity, item]);

  return {
    clickLink,
    price,
    product: item.product,
    quantity,
    changeItem
  };
};
