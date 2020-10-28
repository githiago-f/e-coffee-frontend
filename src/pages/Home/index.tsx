import React from 'react';
import { Shops } from 'components/Shop';
import Theme from 'components/Theme';
import { Recommended } from 'components/Recommended';
import { Banner } from 'components/Banner';

const HomePage = () => {
  return (
    <Theme>
      <Banner/>
      <Shops/>
      <Recommended/>
    </Theme>
  );
};

export default HomePage;
