import React from 'react';
import { StoreList } from 'components/StoreList';
import Theme from 'components/Theme';
import { Recommended } from 'components/Recommended';
import { HomeBanner } from 'components/HomeBanner';
import { useHomeHooks } from './hooks';

const HomePage = () => {
  const {stores} = useHomeHooks();
  return (
    <Theme>
      <HomeBanner/>
      <StoreList 
        asList 
        stores={stores} 
      />
      <Recommended/>
    </Theme>
  );
};

export default HomePage;
