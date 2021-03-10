import { CartItem } from 'entities';
import { useCallback, useEffect, useState } from 'react';
import { CartService } from 'service/cart-service';

export const useCartListHooks = () => {
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

  return {
    loading,
    items,
    hasError
  };
};
