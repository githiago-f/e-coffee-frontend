import { productApi } from 'api/product.api';
import { Product } from 'entities';
import { useEffect, useState } from 'react';

export const useProductHooks = (code: string) => {
  const [ product, setProduct ] = useState({} as Product);
  const [ loading, setLoading ] = useState(true);
  const [ error, setError ] = useState('');

  useEffect(() => {
    const api = productApi();
    api.getByCode(code)
      .then(async i => {
        if(!i) {
          setError('Not found');
          return {} as Product;
        }
        return i;
      } )
      .then(setProduct)
      .catch(console.error)
      .finally(()=>setLoading(false));
  }, [ code ]);

  return {
    product,
    loading,
    error
  };
};
