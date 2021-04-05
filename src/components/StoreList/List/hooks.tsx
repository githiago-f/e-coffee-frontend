import React, { useContext, useMemo } from 'react';
import { LanguageContext } from 'context/LanguageContext';
import { StoreItem } from '../Item';
import { Store } from 'entities';

export const useStoreListHooks = (stores: Store[]) => {
  const {lang} = useContext(LanguageContext);

  const renderList = useMemo(() => {
    return stores.map((store, index) => (
      <div key={`store-item-${index}-box`} className="col-12 col-sm-12 col-md-6">
        <StoreItem
          data-language={lang} 
          store={store}
        />
      </div>
    ));
  }, [ stores, lang ]);

  return {
    shops: stores,
    lang,
    renderList
  };
};
