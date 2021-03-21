import { CartItem } from 'value-object';
import { cartItemFactory } from 'factory/cart-item';
import { ChangeEvent, useCallback, useEffect, useMemo, useState } from 'react';
import { CartService } from 'service/cart-service';
import { PriceService } from 'service/price-service';

type inputChange = (ev: ChangeEvent<HTMLInputElement>) => void;

export const useCartItemHooks = (item: CartItem) => {
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

  const changeItem: inputChange = useCallback((ev) => {
    setQuantity(ev.target.valueAsNumber);
  }, []);

  useEffect(() => {
    if(quantity !== item.quantity) {
      cartService.alterItem(item.product, quantity);
    }
  }, [quantity, item, cartService]);

  return {
    clickLink,
    price,
    product: item.product,
    quantity,
    changeItem
  };
};
