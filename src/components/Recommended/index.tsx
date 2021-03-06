import React, { useMemo } from 'react';
import { useRecommendeds } from './hooks';
import ProductCard from 'components/ProductCard';
import { Translator } from 'locale';

export const Recommended = () => {
  const { products, lang } = useRecommendeds();

  const renderList = useMemo(() => {
    return products.map((product, index) => (
      <div key={index} data-language={lang} className="col-12 col-sm-6 col-md-3">
        <ProductCard product={product} />
      </div>
    ));
  }, [ products, lang ]);

  return (
    <div className="content" data-testid="recomended-container" >
      <h2 data-testid="recomended-section-title">{Translator.i18n.translate('recomendations.title')}</h2>
      <div className="row">
        {renderList}
      </div>
    </div>
  );
};
