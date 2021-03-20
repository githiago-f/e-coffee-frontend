import { Product } from 'entities';
import { ChangeEvent, useCallback, useMemo, useState } from 'react';
import { CartService } from 'service/cart-service';

export const useBuyFormHooks = (product: Product) => {
  const [quantity, setQuantity] = useState(1);
  const cartService = CartService();

  const buttonAddToCart = useCallback(() => {
    cartService.alterItem(product, quantity);
  }, [product, quantity]);

  const changeQuantity = useCallback((ev: ChangeEvent<HTMLInputElement>) => {
    if(isNaN(ev.target.valueAsNumber)){
      setQuantity(1);
      return;
    }
    setQuantity(ev.target.valueAsNumber);
  }, []);

  const currentPrice = useMemo(() => {
    const {price, discount} = product;
    const equivalent = price - (price * discount);
    return equivalent * quantity;
  }, [product, quantity]);

  return {
    buttonAddToCart,
    changeQuantity,
    quantity,
    currentPrice
  };
};
