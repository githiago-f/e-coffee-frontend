import React from 'react';
import { Translator } from 'locale';
import { Price } from 'components/Price';
import { useBuyFormHooks } from './hooks';
import { Product } from 'entity/Product';
import { Link } from 'react-router-dom';

type Props = {
  product: Product;
  hidden: boolean;
}

export const BuyForm = (props: Props) => {
  const { name, image } = props.product;

  const {
    buttonAddToCart,
    changeQuantity,
    quantity,
    currentPrice,
    hideOriginalPrice
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
      <div hidden={props.hidden} className="form-group">
        <img 
          alt={`cover-${name}`}
          title={Translator.i18n.t('product.cover', { name: name })}
          height="400px"
          src={image}
        />
        <div className="pt-5">
          <h3>{name}</h3>
        </div>
        <div className="row">
          <div className="col pb-5 text-right">
            <Price price={props.product.price||0.00} />
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
            <button onClick={buttonAddToCart}> {currenciedPrice} </button>
          </div>
        </div>
      </div>
    </div>
  );
};
