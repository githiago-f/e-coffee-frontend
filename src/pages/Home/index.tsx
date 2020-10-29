import React from 'react';
import { Shops } from 'components/Shop';
import Theme from 'components/Theme';
import { Recommended } from 'components/Recommended';
import { HomeBanner } from 'components/HomeBanner';

const HomePage = () => {
  return (
    <Theme>
      <HomeBanner/>
      <Shops/>
      <Recommended/>
    </Theme>
  );
};

export default HomePage;
