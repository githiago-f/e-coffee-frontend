import Card from 'components/Card';
import React from 'react';

const Shop = () => {
  const card = {
    title: 'Searching for coffee?',
    subtitle: 'We got every types of coffee and stores near you!'
  }; 

  return (
    <>
      <Card card={card} />
    </>
  );
};

export default Shop;
