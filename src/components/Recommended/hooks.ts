import { useState } from 'react';
import { Card } from '@comp/card';

const card = {
  title: 'Latte',
  subtitle: 'Store: local://storeName City: Porto Alegre'
};

export const useRecommendeds = () => {
  const [cards] = useState([card, card, card, card] as Card[]);

  return {
    cards
  };
};
