import React, { useMemo } from 'react';
import { Translator } from 'locale';
import { useShopsHooks } from './hooks';
import { ShopItem } from '../Item';

export const Shops = () => {
  const { shops } = useShopsHooks();

  const renderList = useMemo(() => {
    return shops.map((shop, index) => (
      <ShopItem key={index} {...shop} />
    ));
  }, [ shops ]);

  return (
    <div className="content">
      <div className="row">
        <div className="col-12 col-sm-12 col-md-9">
          <h2>
            {Translator.i18n.translate('shops.title')}
          </h2>
        </div>
      </div>
      <div className="row">
        <div className="col-12 col-sm-12 col-md-9">
          {renderList}
        </div>
      </div>
    </div>
  );
};
