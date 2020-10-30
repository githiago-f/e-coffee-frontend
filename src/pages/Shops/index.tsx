import React from 'react';
import { Shops as ShopList } from 'components/Shop';
import Theme from 'components/Theme';

const Shops = () => {
  return (
    <Theme>
      <ShopList asList />
    </Theme>
  );
};

export default Shops;
