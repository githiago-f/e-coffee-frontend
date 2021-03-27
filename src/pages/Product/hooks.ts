import { productApi } from 'api/product.api';
import { Product } from 'entities';
import { useEffect, useState } from 'react';
import {Errors} from 'assets';
import { ErrorEnum } from 'utils/errors/ErrorEnum';

type errors = keyof typeof Errors;

export const useProductHooks = (code: string) => {
  const [ product, setProduct ] = useState(null as Product | null | undefined);
  const [ loading, setLoading ] = useState(true);
  const [ error, setError ] = useState(ErrorEnum.NONE);

  useEffect(() => {
    const api = productApi();
    api.getByCode(code)
      .then(async i => {
        if(!i) {
          setError(ErrorEnum.NO_CONTENT);
          return;
        }
        setError(ErrorEnum.NONE);
        return i;
      })
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
