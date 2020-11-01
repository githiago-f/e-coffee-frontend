import React from 'react';
import { Button, LoadingContainer } from './styled';
import { Props } from '@comp/product';
import { Translator } from 'locale';
import { Price } from 'components/ProductCard/styles';
import { Striped } from 'components/StyledBase/styles';
import { Spinner } from 'components/Fallbacks/Spinner';
import { Image } from 'components/Image';

const toCurrency = (num: number) => Translator.nativeToCurrency(num);

export const BuyForm = (props: Props) => {
  return (
    <div className="row">
      <LoadingContainer hidden={!props.hidden}>
        <Spinner />
      </LoadingContainer>
      <div hidden={props.hidden} className="form-group">
        <Image 
          alt={`cover-${props.name}`}
          title={Translator.i18n.t('product.cover', { name: props.name })}
          height="400px"
          src={props.cover_image_url || ''}
        />
        <div className="pt-5">
          <h3>{props.name}</h3>
        </div>
        <div className="row">
          <div className="col pb-5">
            <Price size="1.5rem"> {toCurrency(props.price || 0.00)} </Price>
            <br/>
            <Striped>{toCurrency((props.price || 0.00) + 3.99)}</Striped>
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
              {Translator.i18n.t('product.buyform.addToCart')}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
