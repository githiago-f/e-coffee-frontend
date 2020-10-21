import Product from 'components/Product';
import React from 'react';
import Theme from 'components/Theme';

const Shop = () => {
  const product = {
    title: 'Searching for coffee?',
    subtitle: 'We got every types of coffee and stores near you!'
  }; 

  return (
    <Theme>
      <Product {...product} />
    </Theme>
  );
};

export default Shop;
