import { useContext, useState } from 'react';
import { LanguageContext } from 'context/LanguageContext';
import { Product } from 'entities';

const product = {
  name: 'Espresso V',
  price: 1.50,
  thumb: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&h=300&q=72',
  code: 'product-code'
};

export const useRecommendeds = () => {
  const [products] = useState([product, product, product, product] as Product[]);
  const {lang} = useContext(LanguageContext);

  return {
    products,
    lang
  };
};
