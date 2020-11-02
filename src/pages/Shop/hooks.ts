import React, { useCallback, useEffect, useState } from 'react';
import { Store } from '@dataTypes/store';

export const useShopPageHooks = (shopId: string) => {
  const shop_id = parseInt(shopId);
  const [ loading, setLoading ] = useState(true);
  const [shop, setShop] = useState({} as Store);

  const fallback = useCallback(() => {
    if(!shop.store_id) {
      // todo
    }
  }, [shop]);

  useEffect(() => {
    setTimeout(() => {

    }, 3000);
  }, []);

  return {
    shop_id,
    shop,
    loading
  };
};
