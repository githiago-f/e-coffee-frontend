import React from 'react';
import Theme from 'components/Theme';
import { BuyForm } from 'components/BuyForm';

const ProductPage = () => {
  return (
    <Theme>
      <div className="row py-5">
        <div className="d-none d-sm-none d-md-block col-md-8 ">

        </div>
        <div className="col-12 col-md-4 border-left">
          <BuyForm />
        </div>
      </div>
    </Theme>
  );
};

export default ProductPage;
