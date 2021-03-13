import React from 'react';
import Theme from 'components/Theme';
import Cart from 'components/Cart';
import { Translator } from 'locale';
import { Price } from 'components/Price';
import { useCartHooks } from './hooks';
import { Button } from 'components/BuyForm/styled';

const CartPage = () => {
  const { items, loading, total } = useCartHooks();

  return (
    <Theme>
      <div className="card">
        <div className="card-body screen-relative-h-75">
          <h3>{Translator.i18n.t('cart.pageTitle')}</h3>
          <Cart.List 
            items={items}
            loading={loading}
          />
        </div>
      </div>
      <div className="p-3 row">
        <div className="col-12 col-sm-6 text-right d-flex align-items-md-end justify-content-end">
          <h4>Total: <Price price={total} /></h4>
        </div>
        <div className="col-12 col-sm-6 text-right">
          <Button
            title="Concluir compra"
            about="Click here to proceed to check-out"
          >Concluir compra</Button>
        </div>
      </div>
    </Theme>
  );
};

export default CartPage;
