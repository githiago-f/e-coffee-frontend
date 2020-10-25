import React from 'react';
import { Button, ProductBanner } from './styled';
import { Props } from '@comp/product';
import { Translator } from 'locale';
import { Price } from 'components/Product/styles';


export const BuyForm = (props: Props) => {
  return (
    <div hidden={props.hidden} className="row">
      <div className="form-group">
        <ProductBanner src={props.cover_image_url || ''} />
        <div className="pt-5">
          <h3>{props.name}</h3>
        </div>
        <div className="row">
          <div className="col">
            <Price size="1.5rem"> {toCurrency(props.price || 1.50)} {' '} </Price>
            <br/>
            <s>{toCurrency((props.price || 1.50) + 3.99)}</s>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <Button>
              {
                Translator.i18n.t('product.buyform.buy', { 
                  price: toCurrency(props.price || 0.00) 
                })
              }
            </Button>
          </div>
        </div>
        <div className="row py-1">
          <div className="col">
            <Button color={'#343a40'}>
              {
                Translator.i18n.t('product.buyform.addToCart')
              }
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
