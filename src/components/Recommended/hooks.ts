import { useContext, useState } from 'react';
import { Product } from '@comp/product';
import { LanguageContext } from 'locale';

const product = {
  name: 'Espresso V',
  productType: 'espresso',
  price: 1.50,
  cover_image_url: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&h=300&q=72',
  product_id: 3
} as Product;

export const useRecommendeds = () => {
  const [products] = useState([product, product, product, product] as Product[]);
  const {lang} = useContext(LanguageContext);

  return {
    products,
    lang
  };
};
