import { CartItem } from 'value-object';
import { useCallback, useEffect, useMemo, useState } from 'react';
import { CartService } from 'service/cart-service';
import { PriceService } from 'service/price-service';
import { eventLayer } from 'utils/Event';

export const useCartHooks = () => {
  const [items, setItems] = useState([] as CartItem[]);
  const [loading, setLoading] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [total, setTotal] = useState(0);
  
  const cartService = useMemo(() => CartService(), []);
  const priceService = useMemo(() => PriceService(), []);

  const fallback = useCallback((error: Error) => {
    setHasError(true);
  }, []);

  useEffect(() => {
    setLoading(true);
    cartService.getAll()
      .then(setItems)
      .finally(() => setLoading(false))
      .catch(fallback);
  }, [fallback, cartService]);

  useEffect(() => {
    const localTotal = priceService.totalCartPrice(items);
    setTotal(localTotal);
    const totalObserver = eventLayer.on('totalChange', (total) => {
      setTotal(total);
    });
    return () => {
      eventLayer.off(totalObserver);
    };
  }, [items, priceService]);

  return {
    loading,
    items,
    hasError,
    total
  };
};
