import React from 'react';
import { Button, ProductBanner } from './styled';
import { Props } from '@comp/product';
import { Translator } from 'locale';
import { Price } from 'components/Product/styles';

export const BuyForm = (props: Props) => {
  return (
    <div hidden={props.hidden} className="row">
      <div className="form-group">
        <ProductBanner
          src="https://via.placeholder.com/400x300"
        />
        <div className="pt-5">
          <h3>
            {props.name}
          </h3>
        </div>
        <div className="row">
          <div className="col">
            <Price>
              {Translator.i18n.toCurrency(props.price || 0.00)} {' '}
            </Price>
            <s>{ Translator.i18n.toCurrency((props.price || 0.00) + 30.99)}</s>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <Button>
              {
                Translator.i18n.t('product.buyform.buy', { 
                  price: Translator.i18n.toCurrency(props.price || 0.00) 
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
