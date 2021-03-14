import { CartItem } from 'entities';
import { useCallback, useEffect, useState } from 'react';
import { CartService } from 'service/cart-service';

export const useCartHooks = () => {
  const [items, setItems] = useState([] as CartItem[]);
  const [loading, setLoading] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [total, setTotal] = useState(0);

  const fallback = useCallback((error: Error) => {
    setHasError(true);
  }, []);

  useEffect(() => {
    setLoading(true);
    CartService()
      .then(async service => {
        const allCartItems = await service.getAll();
        setItems(allCartItems);
      })
      .finally(() => setLoading(false))
      .catch(fallback);
  }, [fallback]);

  useEffect(() => {
    const actualTotal = items
      .map(val => {
        const discountPrice = val.product.price * val.product.discount;
        return (val.product.price - discountPrice) * val.quantity;
      })
      .reduce((val, curVal) => {
        return curVal + val;
      }, 0);
    setTotal(actualTotal);
  }, [items]);

  const changeItems = useCallback((newItems: CartItem[]) => {
    setItems(newItems);
  }, []);

  return {
    loading,
    items,
    hasError,
    total,
    changeItems
  };
};
