import React, {useCallback, useContext, useEffect, useMemo, useState} from 'react';
import ProductCard from 'components/ProductCard';
import { LanguageContext } from 'context/LanguageContext';
import { Product } from 'entities';
import { productApi } from 'api/product.api';

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
    const api = productApi();
    api.getPaged()
      .then((newProducts) => setProducts([...products, ...newProducts]))
      .catch(console.error)
      .finally(() => setLoading(false));
  }, [products]);

  useEffect(() => {
    const api = productApi();
    api.getPaged()
      .then(setProducts)
      .catch(console.error)
      .finally(() => setPageLoading(false));
  }, [shop_id]);

  return {
    renderList,
    loadMore,
    loading,
    pageLaoding
  };
};
