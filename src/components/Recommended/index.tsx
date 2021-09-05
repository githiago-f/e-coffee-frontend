import React, { useMemo } from 'react';
import { useRecommendeds } from './hooks';
import ProductCard from 'components/ProductCard';
import { Translator } from 'locale';

export const Recommended = () => {
  const { products, lang } = useRecommendeds();

  const renderList = useMemo(() => {
    return products.map((product, index) => (
      <div 
        key={index}
        data-language={lang}
        className="w-full sm:w-6/12 md:w-3/12"
      >
        <ProductCard product={product} />
      </div>
    ));
  }, [ products, lang ]);

  return (
    <>
      <h2  
        className="text-3xl font-semibold"
        data-testid="recomended-section-title"
      >{Translator.i18n.translate('recomendations.title')}</h2>
      <div className="flex flex-row">
        {renderList}
      </div>
    </>
  );
};
