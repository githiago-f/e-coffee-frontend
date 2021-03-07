import { Image } from 'components/Image';
import { Product } from 'entities';
import { Translator } from 'locale';
import React from 'react';

export const Item = ({product}: {product: Product}) => {
  return (
    <div className="col-12 col-md-3">
      <div className="card">
        <Image className="card-img-top" src={product.thumb} alt={product.name}/>
        <div className="card-body">
          <h6>
            <small>{product.name}</small>
          </h6>
          <span>{Translator.nativeToCurrency(product.price || 0.00)}</span>
        </div>
      </div>
    </div>
  );
};
