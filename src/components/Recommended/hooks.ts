import { useContext, useState } from 'react';
import { Product } from '@comp/product';
import { LanguageContext } from 'locale';

const product = {
  title: 'Latte',
  subtitle: 'Store: local://storeName City: Porto Alegre'
};

export const useRecommendeds = () => {
  const [products] = useState([product, product, product, product] as Product[]);
  const {lang} = useContext(LanguageContext);

  return {
    products,
    lang
  };
};
