import { Image } from 'components/Image';
import { Price } from 'components/ProductCard/styles';
import { LanguageContext } from 'context/LanguageContext';
import { CartItem } from 'entities';
import { Translator } from 'locale';
import React, { useCallback, useContext, useMemo } from 'react';

export const Item = ({item}: {item: CartItem}) => {
  const { product, quantity } = item;
  const {lang} = useContext(LanguageContext);

  const price = useMemo(() => {
    const {price: localPrice, discount} = product;
    const equivalent = localPrice - (localPrice * discount);
    console.log(lang);
    return Translator.nativeToCurrency(equivalent * quantity);
  }, [lang, product, quantity]);

  const openItem = useCallback(() => {
    window.location.pathname = '/e-coffee-frontend/product/' + product.code;
  }, [product]);

  return (
    <div className="col-12 col-md-3 mt-1">
      <div onClick={openItem} className="card clicable">
        <Image className="card-img-top" src={product.thumb} alt={product.name}/>
        <div className="card-body">
          <h6>
            <small>{product.name} &times; {quantity}</small>
          </h6>
          <Price size={'1.0rem'} bold="700">{price}</Price>
        </div>
      </div>
    </div>
  );
};
