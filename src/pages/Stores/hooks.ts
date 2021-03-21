import { storeApi } from 'api/store.api';
import { Store } from 'entities';
import { useCallback, useEffect, useState } from 'react';

export const useStoresHooks = () => {
  const [stores, setStores] = useState([] as Store[]);
  const [ total, setTotal] = useState(0);

  useEffect(() => {
    const api = storeApi();
    api.getAll()
      .then(setStores)
      .catch(console.error);
    api.getTotal()
      .then(setTotal)
      .catch(console.error);
  }, []);

  const onLoadMore = useCallback(() => {}, []);

  return {
    stores,
    onLoadMore,
    total
  };
};
