import Card from 'components/Card';
import React from 'react';
import Theme from 'components/Theme';

const Shop = () => {
  const card = {
    title: 'Searching for coffee?',
    subtitle: 'We got every types of coffee and stores near you!'
  }; 

  return (
    <Theme>
      <Card card={card} />
    </Theme>
  );
};

export default Shop;
