import { Product } from 'entities';
import { ChangeEvent, useCallback, useState } from 'react';
import { CartService } from 'service/cart-service';

export const useBuyFormHooks = (product: Product) => {
  const [quantity, setQuantity] = useState(1);

  const buttonAddToCart = useCallback(() => {
    CartService().then(service => {
      service.addItem(product, quantity);
    });
  }, [product, quantity]);

  const changeQuantity = useCallback((ev: ChangeEvent<HTMLInputElement>) => {
    setQuantity(ev.target.valueAsNumber);
  }, []);

  return {
    buttonAddToCart,
    changeQuantity,
    quantity
  };
};
