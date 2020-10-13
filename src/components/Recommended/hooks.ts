import { useState } from 'react';

import { Card } from '@comp/card';

export const useRecommendeds = () => {
  const card = {
    title: 'Latte',
    subtitle: 'Store: local://storeName City: Porto Alegre'
  };
  const [cards] = useState([card, card, card, card] as Card[]);

  return {
    cards
  };
};
