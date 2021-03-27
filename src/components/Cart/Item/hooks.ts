import { CartItem } from 'value-object';
import { cartItemFactory } from 'factory/cart-item';
import { ChangeEvent, useCallback, useEffect, useMemo, useState } from 'react';
import { CartService } from 'service/cart-service';
import { PriceService } from 'service/price-service';
import { eventLayer } from 'utils/Event';

type inputChange = (ev: ChangeEvent<HTMLInputElement>) => void;

export const useCartItemHooks = (item: CartItem, originalItems: CartItem[]) => {
  const [quantity, setQuantity] = useState(item.quantity);
  const cartService = CartService();
  const priceService = PriceService();

  const price = useMemo(() => {
    const cartItem = cartItemFactory(item.product, quantity);
    return priceService.productPriceWithDiscount(cartItem);
  }, [ item, quantity, priceService ]);

  const clickLink = useCallback(() => {
    document.getElementById('link_' + item.product.code)?.click();
  }, [item.product.code]);

  const callDelete = useCallback(() => {

  }, []);

  const changeItem: inputChange = useCallback(ev => {
    const value = ev.target.valueAsNumber;
    if(isNaN(value) || value === 0) {
      setQuantity(1);
    }
    setQuantity(value);
  }, []);


  const confirmDelete = useCallback(() => {
    
  }, []);

  useEffect(() => {
    cartService.alterItem(item.product, quantity);
    const totalCartPrice = cartService.changeItemPrice(
      originalItems, {
        code: item.code,
        quantity
      }
    );
    eventLayer.emit('totalChange', totalCartPrice);
  }, [quantity, item, cartService, originalItems]);

  return {
    clickLink,
    price,
    product: item.product,
    quantity,
    changeItem,
    callDelete,
    confirmDelete
  };
};
