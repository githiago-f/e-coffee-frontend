import { useContext, useEffect, useState } from 'react';
import { LanguageContext } from 'context/LanguageContext';
import { Product } from 'entity/Product';

export const useRecommendeds = () => {
  const [products, setProducts] = useState([] as Product[]);
  const {lang} = useContext(LanguageContext);

  useEffect(() => {
    // todo
  }, []);

  return {
    products,
    lang
  };
};
