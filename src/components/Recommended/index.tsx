import React, { useMemo } from 'react';
import { useRecommendeds } from './hooks';
import Product from 'components/Product';
import { Translator } from 'locale';

export const Recommended = () => {
  const { products, lang } = useRecommendeds();

  const renderList = useMemo(() => {
    return products.map((product, index) => (
      <div key={index} data-language={lang} className="col-12 col-sm-6 col-md-3">
        <Product {...product} />
      </div>
    ));
  }, [ products, lang ]);

  return (
    <div className="content">
      <h2>{Translator.i18n.translate('recomendations.title')}</h2>
      <div className="row">
        {renderList}
      </div>
    </div>
  );
};
