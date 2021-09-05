import React from 'react';
import Theme from 'components/Theme';
import Cart from 'components/Cart';
import { Translator } from 'locale';
import { Price } from 'components/Price';

const CartPage = () => {
  return (
    <Theme>
      <div className="row">
        <div className="col-12">
          <div className="card">
            <div className="card-body screen-relative-h-75">
              <h3>{Translator.i18n.t('cart.pageTitle')}</h3>
              <Cart.List 
                items={[]}
                loading={false}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="p-3 row">
        <div className="col-12 col-sm-6 text-right d-flex align-items-md-end justify-content-end">
          <h4>Total: <Price price={0} /></h4>
        </div>
        <div className="col-12 col-sm-6 text-right">
          <button
            title={Translator.i18n.t('cart.completePurchase')}
            about={Translator.i18n.t('cart.aboutButton')}
          >{Translator.i18n.t('cart.completePurchase')}</button>
        </div>
      </div>
    </Theme>
  );
};

export default CartPage;
