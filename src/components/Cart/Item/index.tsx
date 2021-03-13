import { Image } from 'components/Image';
import { Link } from 'components/Link';
import { Price } from 'components/Price';
import { CartItem } from 'entities';
import { Translator } from 'locale';
import React, { useCallback, useMemo } from 'react';

export const Item = ({item}: {item: CartItem}) => {
  const { product, quantity } = item;

  const price = useMemo(() => {
    const {price: localPrice, discount} = product;
    const equivalent = localPrice - (localPrice * discount);
    return equivalent * quantity;
  }, [ product, quantity]);

  const clickLink = useCallback(() => {
    document.getElementById('link_' + product.code)?.click();
  }, [product]);

  return (
    <div className="row">
      <Link 
        to={`product/${product.code}`}
        title={product.name}
        className="hide"
        id={'link_' + product.code}
      ></Link>
      <div onClick={clickLink} className="col-12 col-sm-3 col-md-2 clicable">
        <Image className="card-img-top" src={product.thumb} alt={product.name}/>
      </div>
      <div className="col-12 col-sm-9 col-md-10">
        <div className="row">
          <div onClick={clickLink} className="col-12 col-sm-12 col-md-8 clicable">
            <h3>{product.name}</h3>
          </div>
          <div className="col-12 col-sm-12 col-md-4">
            <label htmlFor={`quantity_${product.code}`}> 
              {Translator.i18n.t('product.buyform.quantity')}: 
            </label>
            <input 
              type="number" 
              id={`quantity_${product.code}`}
              name={`quantity_${product.code}`}
              onChange={()=>{}}
              className="form-control pl-3" 
              min="0" 
              value={quantity}
            />
          </div>
        </div>
        <div onClick={clickLink} className="row clicable">
          <div className="text-right">
            <Price 
              size={'1.5rem'}
              bold="700"
              price={price}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
