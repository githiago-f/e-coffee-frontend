import { productApi } from 'api/product.api';
import { Product } from 'entities';
import { useEffect, useState } from 'react';

export const useProductHooks = (code: string) => {
  const [ product, setProduct ] = useState({} as Product);
  const [ loading, setLoading ] = useState(true);

  useEffect(() => {
    const api = productApi();
    console.log(code);
    api.getByCode(code)
      .then(async i => i || {} as Product)
      .then(setProduct)
      .catch(console.error)
      .finally(()=>setLoading(false));
  }, [ code ]);

  return {
    product,
    loading
  };
};
