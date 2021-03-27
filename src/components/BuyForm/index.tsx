import React from 'react';
import { Button } from './styled';
import { Translator } from 'locale';
import { Price } from 'components/Price';
import { LoadingContainer, Striped } from 'components/StyledBase/styles';
import { Spinner } from 'components/Fallbacks/Spinner';
import { Image } from 'components/Image';
import { useBuyFormHooks } from './hooks';
import { Product } from 'entities';
import { Link } from 'components/Link';

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

  const currenciedPrice = Translator.i18n.t('product.buyform.addToCart', {
    price: Translator.nativeToCurrency(currentPrice)
  });

  return (
    <div className="row">
      <Link 
        to="/cart"
        className="hide"
        tabIndex={-1}
        hidden
        id={'open_cart'}
      ></Link>
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
          <h3>{name}</h3>
        </div>
        <div className="row">
          <div className="col pb-5 text-right">
            <Striped>{Translator.nativeToCurrency(props.product.price||0.00)}</Striped>
            <div className="row">
              <div className="col-4">
                <div className="form-group">
                  <label htmlFor="quantity">
                    {Translator.i18n.t('product.buyform.quantity')}:
                  </label>
                  <input 
                    min="1"
                    type="number"
                    id="quantity"
                    name="quantity"
                    className="border-aqua form-control h-100"
                    value={quantity}
                    onChange={changeQuantity}
                  />
                </div>
              </div>
              <div className="col-8">
                &times;
                <Price bold="700" size="2.3rem" price={currentPrice}/>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <Button onClick={buttonAddToCart}> {currenciedPrice} </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
