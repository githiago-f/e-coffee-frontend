import React, {useCallback, useContext, useMemo, useState} from 'react';
import ProductCard from 'components/ProductCard';
import { Product } from '@comp/product';
import { LanguageContext } from 'locale';

const data = {
  name: 'Any Cappuccino',
  coffeeType: 'cappuccino',
  price: 1.39,
  product_id: 4,
  cover_image_url: 'https://via.placeholder.com/300x300'
} as Product;

export const useProductListHooks = () => {
  const [ products, setProducts ] = useState([data,data,data,data,data,data,data,data] as Product[]);
  const [ loading, setLoading ] = useState(false);
  const { lang } = useContext(LanguageContext);

  const renderList = useMemo(() => {
    return products.map((product, index) => (
      <div key={index} data-language={lang} className="col-12 col-sm-6 col-md-3">
        <ProductCard {...product} />
      </div>
    ));
  }, [ products, lang ]);

  const loadMore = useCallback(() => {
    setLoading(true);
    setTimeout(() => {
      setProducts(
        ([] as Product[]).concat(...products, ...[data,data,data,data])
      );
      setLoading(false);
    }, 3000);
  }, [ products ]);

  return {
    renderList,
    loadMore,
    loading
  };
};
