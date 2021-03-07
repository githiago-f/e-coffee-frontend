import React from 'react';
import Theme from 'components/Theme';
import { BuyForm } from 'components/BuyForm';
import { Recommended } from 'components/Recommended';
import { useProductHooks } from './hooks';
import { useRouteMatch } from 'react-router-dom';

const ProductPage = () => {
  const match = useRouteMatch<{code: string}>();
  const { product, loading } = useProductHooks(match.params.code);

  return (
    <Theme>
      <div className="row py-5">
        <div className="d-none d-sm-none d-md-block col-md-8 ">
          
        </div>
        <div className="col-12 col-md-4 border-left">
          <BuyForm 
            hidden={loading}
            product={product}
          />
        </div>
      </div>
      <hr/>
      <Recommended/>
    </Theme>
  );
};

export default ProductPage;
