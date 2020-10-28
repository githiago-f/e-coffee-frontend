import React from 'react';
import Theme from 'components/Theme';
import { ProductsList } from 'components/ProductList';

const ShopPage = () => { 
  return (
    <Theme>
      {
        /**
         * there will go all store's coffees and 
         * a little overview of the coffee
         */
      }
      <ProductsList />
    </Theme>
  );
};

export default ShopPage;
