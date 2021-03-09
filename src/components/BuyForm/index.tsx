import React from 'react';
import { Button } from './styled';
import { Translator } from 'locale';
import { Price } from 'components/ProductCard/styles';
import { LoadingContainer, Striped } from 'components/StyledBase/styles';
import { Spinner } from 'components/Fallbacks/Spinner';
import { Image } from 'components/Image';
import { useBuyFormHooks } from './hooks';
import { Product } from 'entities';

type Props = {
  product: Product;
  hidden: boolean;
}

export const BuyForm = (props: Props) => {
  const { name, thumb } = props.product;

  const {
    buttonAddToCart,
    changeQuantity,
    quantity,
    currentPrice
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
          src={thumb}
        />
        <div className="pt-5">
          <h3 className="text-black-50">{name}</h3>
        </div>
        <div className="row">
          <div className="col pb-5 text-right">
            <Striped>{Translator.nativeToCurrency(props.product.price||0.00)}</Striped>
            <div className="row">
              <div className="col-4">
                <input 
                  min="1"
                  type="number"
                  className="border-aqua form-control h-100"
                  value={quantity}
                  onChange={changeQuantity}
                />
              </div>
              <div className="col-8">
                &times;
                <Price bold="700" size="2.3rem"> {currentPrice} </Price>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <Button onClick={buttonAddToCart}>
              {
                Translator.i18n.t('product.buyform.addToCart', {
                  price: currentPrice
                })
              }
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
