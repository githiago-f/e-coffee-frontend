import { useEffect, useState } from 'react';
import { CartService } from 'service/cart-service';
import { eventLayer } from 'utils/Event';

export const useCartNavIconHooks = () => {
  const [itemsCount, setItemsCount] = useState(0);

  const loadItems = async () => { 
    const service = await CartService();
    const count = await service.countItems();
    setItemsCount(count);
  };

  useEffect(() => {
    const change = eventLayer.on('cartItemsChange', loadItems);

    loadItems();

    return () => {
      eventLayer.off(change);
    };
  }, [ itemsCount ]);

  return {
    itemsCount
  };
};
