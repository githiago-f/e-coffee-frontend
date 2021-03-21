import React from 'react';
import { Translator } from 'locale';
import { useStoreListHooks } from './hooks';
import { Link } from 'components/Link';
import { ButtonGrow } from 'components/Fallbacks/ButtonGrow';
import { Store } from 'entities';

interface Props {
  asList?: boolean;
  stores: Store[];
  onLoadMore?: () => void;
  total?: number;
}

export const StoreList = ({asList, stores, total, onLoadMore}: Props) => {
  const { renderList } = useStoreListHooks(stores);

  return (
    <div className="content py-3">
      <div className="row">
        <div className="col-12 col-sm-12 col-md-9">
          <h2>
            {Translator.i18n.translate('shops.title')}
          </h2>
        </div>
      </div>
      <div className="row">
        {renderList}
      </div>
      <div className="row">
        <div className="col">
          <div hidden={asList || stores.length === total}>
            <ButtonGrow loading={false} onClick={onLoadMore || (()=>{})}>
              {Translator.i18n.t('shops.loadMore')}
            </ButtonGrow>
          </div>
          <div hidden={!asList}>
            <Link 
              className="btn btn-light p-3 w-100 text-uppercase font-weight-bold"
              to="/shops"
            >
              {Translator.i18n.t('shops.seeMore')}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
