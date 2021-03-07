import React from 'react';
import { Button } from './styled';
import { Translator } from 'locale';
import { Price } from 'components/ProductCard/styles';
import { LoadingContainer, Striped } from 'components/StyledBase/styles';
import { Spinner } from 'components/Fallbacks/Spinner';
import { Image } from 'components/Image';
import { useBuyFormHooks } from './hooks';
import { Product } from 'entities';

const toCurrency = (num: number) => Translator.nativeToCurrency(num);

type Props = {
  product: Product;
  hidden: boolean;
}

export const BuyForm = (props: Props) => {
  const { name, thumb, price } = props.product;

  const {
    buttonAddToCart,
    changeQuantity,
    quantity
  } = useBuyFormHooks(props.product);

  return (
    <div className="row">
      <LoadingContainer hidden={!props.hidden}>
        <Spinner />
      </LoadingContainer>
      <div hidden={props.hidden} className="form-group">
        <Image 
          alt={`cover-${name}`}
          title={Translator.i18n.t('product.cover', { name: name })}
          height="400px"
          src={thumb || ''}
        />
        <div className="pt-5">
          <h3>{name}</h3>
        </div>
        <div className="row">
          <div className="col pb-5">
            <Price size="1.5rem"> {toCurrency(price || 0.00)} </Price>
            <br/>
            <Striped>{toCurrency((price || 0.00) + 3.99)}</Striped>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <Button>
              {
                Translator.i18n.t('product.buyform.buy', {
                  price: toCurrency(price || 0.00)
                })
              }
            </Button>
          </div>
        </div>
        <div className="row py-1">
          <div className="col-9">
            <Button onClick={buttonAddToCart} color={'#343a40'}>
              {Translator.i18n.t('product.buyform.addToCart')}
            </Button>
          </div>
          <div className="col-3">
            <input 
              min="0"
              type="number"
              className="form-range form-control h-100"
              value={quantity}
              onChange={changeQuantity}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
