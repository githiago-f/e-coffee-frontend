import React from 'react';
import { ProductBanner } from './styled';

export const BuyForm = () => {
  return (
    <>
      <div className="row">
        <div className="form-group">
          <ProductBanner
            src="https://via.placeholder.com/400x300"
          />
          <div className="pt-5">
            <h3>
              Expresso V
            </h3>
          </div>
        </div>
      </div>
    </>
  );
};
