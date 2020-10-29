import React, { useMemo } from 'react';
import { Translator } from 'locale';
import { useShopsHooks } from './hooks';
import { ShopItem } from '../Item';
import { Link } from 'components/Link';

export const Shops = () => {
  const { shops, lang } = useShopsHooks();

  const renderList = useMemo(() => {
    return shops.map((shop, index) => (
      <ShopItem key={index} data-language={lang} {...shop} />
    ));
  }, [ shops, lang ]);

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
          <div className="row">
            <div className="col">
              <Link className="btn btn-light p-3 w-100 text-uppercase" color="rgb(87,59,8)" to="#">
                {Translator.i18n.t('shops.seeMore')}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
