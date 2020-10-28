import { ButtonGrow } from 'components/Fallbacks/ButtonGrow';
import React from 'react';
import { useProductListHooks } from './hooks';

export const ProductsList = () => {
  const { renderList, loading, loadMore } = useProductListHooks();

  return (
    <div className="content">
      <h2>Products</h2>
      <div className="row">
        {renderList}
      </div>
      <div className="row">
        <div className="col">
          <ButtonGrow 
            onClick={loadMore} loading={loading}>
            See more
          </ButtonGrow>
        </div>
      </div>
    </div>
  );
};
