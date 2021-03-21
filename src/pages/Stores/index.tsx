import React from 'react';
import Theme from 'components/Theme';
import { StoreList } from 'components/StoreList';
import { useStoresHooks } from './hooks';

const Stores = () => {
  const {stores, onLoadMore, total} = useStoresHooks();
  return (
    <Theme>
      <StoreList 
        total={total}
        onLoadMore={onLoadMore}
        stores={stores}
      />
    </Theme>
  );
};

export default Stores;
