import React from 'react';
import Theme from 'components/Theme';
import { StoreList } from 'components/StoreList';
import { useStoresHooks } from './hooks';

const Stores = () => {
  const {stores} = useStoresHooks();
  return (
    <Theme>
      <StoreList 
        asList 
        stores={stores}
      />
    </Theme>
  );
};

export default Stores;
