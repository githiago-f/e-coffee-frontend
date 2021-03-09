import { Store } from 'entities';
import { storeFactory } from 'factory/store-factory';
import { useEffect, useState } from 'react';

export const useShopPageHooks = (shopId: string) => {
  const shop_id = parseInt(shopId);
  const [ loading ] = useState(true);
  const [shop, setShop] = useState({} as Store);

  useEffect(() => {
    setShop(storeFactory('Starbucks', 3.4));
  }, []);

  return {
    shop_id,
    shop,
    loading
  };
};
