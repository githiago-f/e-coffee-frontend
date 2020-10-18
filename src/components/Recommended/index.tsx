import React, { useMemo } from 'react';
import { useRecommendeds } from './hooks';
import Card from 'components/Card';
import { Translator } from 'locale';

export const Recommended = () => {
  const { cards } = useRecommendeds();

  const renderList = useMemo(() => {
    return cards.map((card, index) => (
      <div key={index} className="col-12 col-sm-6 col-md-3">
        <Card card={card} />
      </div>
    ));
  }, [ cards ]);

  return (
    <div className="content">
      <h2>{Translator.i18n.translate('recomendations.title')}</h2>
      <div className="row">
        {renderList}
      </div>
    </div>
  );
};
