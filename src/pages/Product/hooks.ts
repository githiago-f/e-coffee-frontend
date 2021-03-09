import { Product } from 'entities';
import { productFactory } from 'factory/product';
import { useEffect, useState } from 'react';

export const useProductHooks = (code: string) => {
  const [ product, setProduct ] = useState({} as Product);
  const [ loading, setLoading ] = useState(true);

  useEffect(() => {
    // todo
    setTimeout(() => {
      setProduct(productFactory('product-code', 'Cappucinno', 3.40));
      setLoading(false);
    }, 3000);
  }, [ code ]);

  return {
    product,
    loading
  };
};
