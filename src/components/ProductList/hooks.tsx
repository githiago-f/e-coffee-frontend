import React, {useCallback, useContext, useEffect, useMemo, useState} from 'react';
import ProductCard from 'components/ProductCard';
import { Product } from '@comp/product';
import { LanguageContext } from 'locale';

const data = {
  name: 'Any Cappuccino',
  productType: 'cappuccino',
  price: 1.39,
  product_id: 4,
  cover_image_url: 'https://via.placeholder.com/300x300'
} as Product;

export const useProductListHooks = (shop_id: number) => {
  const [ products, setProducts ] = useState([] as Product[]);
  const [ loading, setLoading ] = useState(false);
  const [pageLaoding, setPageLoading] = useState(true);
  const { lang } = useContext(LanguageContext);

  const renderList = useMemo(() => {
    return products.map((product, index) => (
      <div key={index} data-language={lang} className="col-12 col-sm-6 col-md-3">
        <ProductCard product={product} />
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

  useEffect(() => {
    setTimeout(() => {
      setProducts([data,data,data,data,data,data,data,data]);
      setPageLoading(false);
    }, 3000);
  }, [shop_id]);

  return {
    renderList,
    loadMore,
    loading,
    pageLaoding
  };
};
