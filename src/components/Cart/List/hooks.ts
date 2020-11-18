import { useCallback, useEffect, useState } from 'react';
import { getAllCartItems } from 'services/cart.api';
import { getProductDetails } from 'services/product.api';

export const useCartListHooks = () => {
  const [items, setItems] = useState([] as Product[]);
  const [loading, setLoading] = useState(false);

  const addToItems = useCallback((item: Product) =>{
    const concatenedList = items.concat(item);
    setItems(concatenedList);
  }, [items]);

  const fallback = useCallback((error: Error) => {
    // threat errors
  }, []);

  useEffect(() => {
    const cartItems = Object.values(getAllCartItems());
    cartItems.forEach(cartItem => {
      setLoading(true);
      getProductDetails(cartItem.product_id)
        .then(addToItems)
        .catch(fallback)
        .finally(() => setLoading(false));
    });
  }, []);

  return {
    loading,
    items
  };
};
