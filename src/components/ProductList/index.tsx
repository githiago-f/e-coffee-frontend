import { ButtonGrow } from 'components/Fallbacks/ButtonGrow';
import React from 'react';
import { useProductListHooks } from './hooks';

interface Props {
  shop_id: number;
}

export const ProductsList = (props: Props) => {
  const { renderList, loading, loadMore } = useProductListHooks(props.shop_id);

  return (
    <div className="content">
      <h2>Products</h2>
      <div className="row">
        {renderList}
      </div>
      <div className="row">
        <div className="col p-3">
          <ButtonGrow 
            onClick={loadMore} loading={loading}>
            See more
          </ButtonGrow>
        </div>
      </div>
    </div>
  );
};
