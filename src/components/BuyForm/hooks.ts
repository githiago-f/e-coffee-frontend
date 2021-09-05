import { Product } from 'entity/Product';
import { ChangeEvent, useCallback, useMemo, useState } from 'react';

export const useBuyFormHooks = (product: Product) => {
  const [quantity, setQuantity] = useState(1);
  const [hideOriginalPrice, setHiddenPrice] = useState(false);

  const buttonAddToCart = useCallback(() => {
    // TODO: add to cart
  }, [product, quantity]);

  const changeQuantity = useCallback((ev: ChangeEvent<HTMLInputElement>) => {
    const num = ev.target.valueAsNumber;
    if(isNaN(num) || num === 0){
      setQuantity(1);
      return;
    }
    setQuantity(ev.target.valueAsNumber);
  }, []);

  const currentPrice = useMemo(() => {
    return 0;
  }, [product, quantity]);

  return {
    buttonAddToCart,
    changeQuantity,
    quantity,
    currentPrice,
    hideOriginalPrice
  };
};
