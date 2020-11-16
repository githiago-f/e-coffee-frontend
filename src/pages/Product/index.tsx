import React from 'react';
import Theme from 'components/Theme';
import { BuyForm } from 'components/BuyForm';
import { Recommended } from 'components/Recommended';
import { useProductHooks } from './hooks';
import { MatchProps } from '@dataTypes/router';

type Props = MatchProps<{
  product_id: string;
}>

const ProductPage = (props: Props) => {
  const { product, loading } = useProductHooks(props.match.params.product_id);

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
