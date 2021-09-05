import { useState } from 'react';

export const useCartNavIconHooks = () => {
  const [itemsCount] = useState(0);

  return {
    itemsCount
  };
};
