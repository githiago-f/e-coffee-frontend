import { Store } from 'entities';
import { useState } from 'react';

export const useStoresHooks = () => {
  // fetch stores
  const [stores] = useState([] as Store[]);

  return {
    stores
  };
};
