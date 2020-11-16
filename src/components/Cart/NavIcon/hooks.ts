import { useCallback, useEffect, useState } from 'react';
import store from 'store';


export const useCartNavIconHooks = () => {
  const [itemsCount, setItemsCount] = useState(0);

  const loadCounter = useCallback(() => {
    const items = store.getState().items;
    let count = 0;
    Object.keys(items).forEach(itemKey => count += items[itemKey].count);
    setItemsCount(count);
  }, [ ]);

  useEffect(() => {
    const unsub = store.subscribe(loadCounter);

    loadCounter();

    return () => {
      unsub();
    };
  }, [ itemsCount, loadCounter ]);

  return {
    itemsCount
  };
};
