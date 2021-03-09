import React from 'react';
import { StoreList } from 'components/Shop';
import Theme from 'components/Theme';
import { Recommended } from 'components/Recommended';
import { HomeBanner } from 'components/HomeBanner';

const HomePage = () => {
  return (
    <Theme>
      <HomeBanner/>
      <StoreList/>
      <Recommended/>
    </Theme>
  );
};

export default HomePage;
