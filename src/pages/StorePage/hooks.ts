import { storeApi } from 'api/store.api';
import { Store } from 'entities';
import { useEffect, useState } from 'react';
import { ErrorEnum } from 'utils/errors/ErrorEnum';

export const useShopPageHooks = (shopId: string) => {
  const [ loading, setLoading ] = useState(true);
  const [shop, setShop] = useState(null as Store | null | undefined);
  const [error, setError] = useState(ErrorEnum.NONE);

  useEffect(() => {
    const api = storeApi();
    api.getById(parseInt(shopId))
      .then(async (store) => {
        if(!store) {
          setError(ErrorEnum.NO_CONTENT);
          return;
        }
        setError(ErrorEnum.NONE);
        return store;
      })
      .then(setShop)
      .catch(console.error)
      .finally(() => setLoading(false));
  }, [shopId]);

  return {
    shop_id: parseInt(shopId),
    shop,
    loading,
    error
  };
};
