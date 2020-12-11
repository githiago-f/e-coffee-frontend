import { useCallback, useEffect, useState } from 'react';
import { getAllCartItems } from 'services/cart.api';
import { getCartProductsDetails } from 'services/product.api';

export const useCartListHooks = () => {
  const [items, setItems] = useState([] as Product[]);
  const [loading, setLoading] = useState(false);

  const fallback = useCallback((error: Error) => {
    // TODO threat errors
  }, []);

  useEffect(() => {
    setLoading(true);

    const cartItems = Object.values(getAllCartItems());
    const ids = cartItems.map(item => item.product_id);

    getCartProductsDetails(ids)
      .then(setItems)
      .catch(fallback)
      .finally(() => setLoading(false));
  }, [fallback]);

  return {
    loading,
    items
  };
};
