import { useContext, useEffect, useState } from 'react';
import { LanguageContext } from 'context/LanguageContext';
import { Product } from 'entities';
import { productApi } from 'api/product.api';

export const useRecommendeds = () => {
  const [products, setProducts] = useState([] as Product[]);
  const {lang} = useContext(LanguageContext);

  useEffect(() => {
    const api = productApi();
    api.getRecommendations()
      .then(setProducts)
      .catch(console.error);
  }, []);

  return {
    products,
    lang
  };
};
