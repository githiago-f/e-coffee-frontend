import { Shop } from 'entities';
import { useEffect, useState } from 'react';

export const useShopPageHooks = (shopId: string) => {
  const shop_id = parseInt(shopId);
  const [ loading ] = useState(true);
  const [shop, setShop] = useState({} as Shop);

  useEffect(() => {
    setShop({
      id: 1,
      name: 'Starbucs',
      rating: 3.4,
      thumb: 'https://via.placeholder.com/300x300'
    });
  }, []);

  return {
    shop_id,
    shop,
    loading
  };
};
