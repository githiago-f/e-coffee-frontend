import { ButtonGrow } from 'components/Fallbacks/ButtonGrow';
import { Spinner } from 'components/Fallbacks/Spinner';
import { LoadingContainer } from 'components/StyledBase/styles';
import { Translator } from 'locale';
import React from 'react';
import { useProductListHooks } from './hooks';

interface Props {
  shop_id: number;
  hidden?: boolean;
}

export const ProductsList = (props: Props) => {
  const { 
    renderList,
    loading,
    pageLaoding,
    loadMore 
  } = useProductListHooks(props.shop_id);

  return (
    <div hidden={props.hidden}>
      <LoadingContainer hidden={!pageLaoding}>
        <Spinner/>
      </LoadingContainer>
      <div hidden={pageLaoding} className="content">
        <h2>{Translator.i18n.t('shops.products.title')}</h2>
        <div className="row">
          {renderList}
        </div>
        <div className="row">
          <div className="col p-3">
            <ButtonGrow 
              onClick={loadMore} loading={loading}>
              {Translator.i18n.t('shops.products.seeMore')}
            </ButtonGrow>
          </div>
        </div>
      </div>
    </div>
  );
};
