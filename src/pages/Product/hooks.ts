import { useEffect, useState } from 'react';
import { Product } from '@comp/product';

export const useProductHooks = (product_id: string) => {
  const [ product ] = useState({} as Product);
  const [ loading ] = useState(false);

  useEffect(() => {
    console.log(product_id);
  }, [ product_id ]);

  return {
    product,
    loading
  };
};
