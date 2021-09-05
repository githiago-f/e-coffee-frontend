import { useState } from 'react';
import { Product } from 'entity/Product';

export const useProductHooks = (code: string) => {
  const [ product, setProduct ] = useState(null as Product | null);
  const [ loading, setLoading ] = useState(true);

  return {
    product,
    loading
  };
};
