import { CartItem } from 'entities';
import { useCallback, useEffect, useState } from 'react';
import { CartService } from 'service/cart-service';
import { PriceService } from 'service/price-service';

export const useCartHooks = () => {
  const [items, setItems] = useState([] as CartItem[]);
  const [loading, setLoading] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [total, setTotal] = useState(0);
  
  const cartService = CartService();
  const priceService = PriceService();

  const fallback = useCallback((error: Error) => {
    setHasError(true);
  }, []);

  useEffect(() => {
    setLoading(true);
    cartService.getAll()
      .then(setItems)
      .finally(() => setLoading(false))
      .catch(fallback);
  }, [fallback]);

  useEffect(() => {
    const localTotal = priceService.totalCartPrice(items);
    setTotal(localTotal);
  }, [items]);

  return {
    loading,
    items,
    hasError,
    total
  };
};
