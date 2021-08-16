import { Store } from 'entity/Store';
import { useCallback, useState } from 'react';

export const useStoresHooks = () => {
  const [stores, setStores] = useState([] as Store[]);
  const [ total, setTotal] = useState(0);

  const onLoadMore = useCallback(() => {}, []);

  return {
    stores,
    onLoadMore,
    total
  };
};
