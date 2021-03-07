import React from 'react';
import Theme from 'components/Theme';
import Cart from 'components/Cart';
import { Translator } from 'locale';

const CartPage = () => {
  return (
    <Theme>
      <div className="card">
        <div className="card-body screen-relative-h-75">
          <h3>{Translator.i18n.t('cart.pageTitle')}</h3>
          <Cart.List />
        </div>
      </div>
    </Theme>
  );
};

export default CartPage;
