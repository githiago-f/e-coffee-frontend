import { CartItem } from 'entities';
import { useCallback, useEffect, useMemo, useState } from 'react';
import { CartService } from 'service/cart-service';

export const useCartHooks = () => {
  const [items, setItems] = useState([] as CartItem[]);
  const [loading, setLoading] = useState(false);
  const [hasError, setHasError] = useState(false);

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

  const total = useMemo(() => {
    return items
      .map(val => {
        const priceDiscount = val.product.price * val.product.discount;
        return (val.product.price - priceDiscount) * val.quantity;
      })
      .reduce((val, curVal) => {
        return curVal + val;
      }, 0);
  }, [items]);

  return {
    loading,
    items,
    hasError,
    total
  };
};
