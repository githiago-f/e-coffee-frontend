import { useState } from 'react';
import { Product } from '@comp/product';

const product = {
  title: 'Latte',
  subtitle: 'Store: local://storeName City: Porto Alegre'
};

export const useRecommendeds = () => {
  const [products] = useState([product, product, product, product] as Product[]);

  return {
    products
  };
};
