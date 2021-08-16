import React, { useContext, useMemo } from 'react';
import { LanguageContext } from 'context/LanguageContext';
import { StoreItem } from '../Item';
import { Store } from 'entity/Store';

export const useStoreListHooks = (stores: Store[]) => {
  const {lang} = useContext(LanguageContext);

  const renderList = useMemo(() => {
    return stores.map((store, index) => (
      <StoreItem
        key={`store-item-${index}-box`}
        data-language={lang} 
        store={store}
      />
    ));
  }, [ stores, lang ]);

  return {
    shops: stores,
    lang,
    renderList
  };
};
