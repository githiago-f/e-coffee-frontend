import { CartContext } from 'context/TotalContext';
import { CartItem } from 'entities';
import { cartItemFactory } from 'factory/cart-item';
import { ChangeEvent, useCallback, useContext, useEffect, useMemo, useState } from 'react';
import { CartService } from 'service/cart-service';

type inputChange = (ev: ChangeEvent<HTMLInputElement>) => void;

export const useCartItemHooks = (item: CartItem) => {
  const [quantity, setQuantity] = useState(item.quantity); 
  const { changeItems, items } = useContext(CartContext);

  const price = useMemo(() => {
    const {price: localPrice, discount} = item.product;
    const equivalent = localPrice - (localPrice * discount);
    return equivalent * quantity;
  }, [ item.product, quantity]);

  const clickLink = useCallback(() => {
    document.getElementById('link_' + item.product.code)?.click();
  }, [item.product.code]);

  const changeItem: inputChange = useCallback((ev) => {
    setQuantity(ev.target.valueAsNumber);
  }, []);

  useEffect(() => {
    if(quantity !== item.quantity) {
      CartService().then(service => {
        service.alterItem(item.product, quantity);
      });
    }
  }, [quantity, item]);

  useEffect(() => {
    const id = items.findIndex((i)=>i === item);
    const localCopy = items.map(i=>i);
    localCopy[id] = cartItemFactory(item.product, quantity);

    changeItems(localCopy);
  }, [items, changeItems, item, quantity]);

  return {
    clickLink,
    price,
    product: item.product,
    quantity,
    changeItem
  };
};
