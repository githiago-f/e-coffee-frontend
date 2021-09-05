import React from 'react';
import { Translator } from 'locale';
import { useStoreListHooks } from './hooks';
import { Store } from 'entity/Store';
import { Link } from 'react-router-dom';

interface Props {
  asList?: boolean;
  stores: Store[];
  onLoadMore?: () => void;
  total?: number;
}

export const StoreList = ({asList, stores, total, onLoadMore}: Props) => {
  const { renderList } = useStoreListHooks(stores);

  return (
    <div className="content py-3" data-testid="store-list-container">
      <div className="flex-row">
        <h2 className="text-3xl font-semibold" data-testid="store-list-title">
          {Translator.i18n.translate('shops.title')}
        </h2>
      </div>
      <div className="store-list">
        {renderList}
      </div>
      <div className="row">
        <div className="col">
          <div hidden={asList || stores.length === total}>
            <button onClick={onLoadMore || (()=>{})}>
              {Translator.i18n.t('shops.loadMore')}
            </button>
          </div>
          <div hidden={!asList}>
            <Link to="/shops">
              {Translator.i18n.t('shops.seeMore')}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
