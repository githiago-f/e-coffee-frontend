import React, { useContext, useState, useMemo } from 'react';
import { LanguageContext } from 'context/LanguageContext';
import { ShopItem } from '../Item';

const shop = {
  name: 'Lorem ipsum dolor sit amet',
  popularity: 3.2,
  store_id: 1,
  cover_image_url: 'https://images.unsplash.com/photo-1485182708500-e8f1f318ba72?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=450&h=300&q=72',
  stock: []
};

export const useShopsHooks = () => {
  const [ shops ] = useState([ shop, shop, shop, shop ] as (typeof shop)[]);
  const {lang} = useContext(LanguageContext);

  const renderList = useMemo(() => {
    return shops.map((shop, index) => (
      <ShopItem 
        key={index} 
        data-language={lang} 
        {...shop} 
      />
    ));
  }, [ shops, lang ]);

  return {
    shops,
    lang,
    renderList
  };
};
