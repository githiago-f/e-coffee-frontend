import { useCallback } from 'react';
import { addToCart } from 'services/cart.api';

export const useBuyFormHooks = (product: Product) => {

  const buttonAddToCart = useCallback(() => {
    addToCart(product, 5);
  }, [product]);

  return {
    buttonAddToCart
  };
};
