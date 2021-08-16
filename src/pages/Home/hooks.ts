import { storeApi } from 'api/store.api';
import { Store } from 'entity/Store';
import { useEffect, useState } from 'react';

export const useHomeHooks = () => {
  const [stores, setStores] = useState([] as Store[]);

  useEffect(() => {
    const api = storeApi();
    api.getMostRated()
      .then(setStores)
      .catch(console.error);
  }, []);

  return {
    stores
  };
};
