import { Store } from 'entity/Store';
import { useState } from 'react';

export const useShopPageHooks = (shopId: string) => {
  const [ loading, setLoading ] = useState(true);
  const [shop, setShop] = useState(null as Store | null);

  return {
    shop_id: parseInt(shopId),
    shop,
    loading
  };
};
