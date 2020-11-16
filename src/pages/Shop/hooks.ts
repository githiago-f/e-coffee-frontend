import { useEffect, useState } from 'react';
import { Store } from '@dataTypes/store';

export const useShopPageHooks = (shopId: string) => {
  const shop_id = parseInt(shopId);
  const [ loading, setLoading ] = useState(true);
  const [shop, setShop] = useState({} as Store);

  // const fallback = useCallback(() => {
  //   if(!shop.store_id) {
  //     // todo
  //   }
  // }, [shop]);

  useEffect(() => {
    setTimeout(() => {
      setShop({
        name: 'Starböse',
        popularity: 3,
        store_id: 1,
        cover_image_url: 'https://images.unsplash.com/photo-1599054228863-88e0b902a32f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1351&q=80',
        stock: []
      });
      setLoading(false);
    }, 3000);
  }, []);

  return {
    shop_id,
    shop,
    loading
  };
};
