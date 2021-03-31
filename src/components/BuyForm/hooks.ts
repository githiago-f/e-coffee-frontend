import { Product } from 'entities';
import { cartItemFactory } from 'factory/cart-item';
import { ChangeEvent, useCallback, useMemo, useState } from 'react';
import { CartService } from 'service/cart-service';
import { PriceService } from 'service/price-service';

export const useBuyFormHooks = (product: Product) => {
  const [quantity, setQuantity] = useState(1);
  const [hideOriginalPrice, setHiddenPrice] = useState(false);

  const cartService = useMemo(() => CartService(), []);
  const priceService = useMemo(() => PriceService(), []);

  const buttonAddToCart = useCallback(() => {
    cartService.alterItem(product, quantity)
      .then(()=>{
        document.getElementById('open_cart')?.click();
      })
      .catch(console.error);
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
    if(product.discount > 0) {
      const cartItem = cartItemFactory(product, quantity);
      setHiddenPrice(false);
      return priceService.productPriceWithDiscount(cartItem);
    }
    setHiddenPrice(true);
    return product.price;
  }, [product, quantity, priceService]);

  return {
    buttonAddToCart,
    changeQuantity,
    quantity,
    currentPrice,
    hideOriginalPrice
  };
};
