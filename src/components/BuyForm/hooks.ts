import { Product } from 'entities';
import { cartItemFactory } from 'factory/cart-item';
import { ChangeEvent, useCallback, useMemo, useState } from 'react';
import { CartService } from 'service/cart-service';
import { PriceService } from 'service/price-service';

export const useBuyFormHooks = (product: Product) => {
  const [quantity, setQuantity] = useState(1);
  const cartService = useMemo(() => CartService(), []);
  const priceService = useMemo(() => PriceService(), []);

  const buttonAddToCart = useCallback(() => {
    cartService.alterItem(product, quantity);
  }, [product, quantity, cartService]);

  const changeQuantity = useCallback((ev: ChangeEvent<HTMLInputElement>) => {
    const num = ev.target.valueAsNumber;
    if(isNaN(num) || num === 0){
      setQuantity(1);
      return;
    }
    setQuantity(ev.target.valueAsNumber);
  }, []);

  const currentPrice = useMemo(() => {
    const cartItem = cartItemFactory(product, quantity);
    return priceService.productPriceWithDiscount(cartItem);
  }, [product, quantity, priceService]);

  return {
    buttonAddToCart,
    changeQuantity,
    quantity,
    currentPrice
  };
};
