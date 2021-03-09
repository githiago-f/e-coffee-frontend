import { storeApi } from 'api/store.api';
import { Store } from 'entities';
import { useEffect, useState } from 'react';

export const useShopPageHooks = (shopId: string) => {
  const [ loading, setLoading ] = useState(true);
  const [shop, setShop] = useState({} as Store);

  useEffect(() => {
    const api = storeApi();
    api.getById(parseInt(shopId))
      .then(async (s) => s ? s : {} as Store)
      .then(setShop)
      .catch(console.error)
      .finally(() => setLoading(false));
  }, [shopId]);

  return {
    shop_id: parseInt(shopId),
    shop,
    loading
  };
};
