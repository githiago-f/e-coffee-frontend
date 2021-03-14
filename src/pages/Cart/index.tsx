import React from 'react';
import Theme from 'components/Theme';
import Cart from 'components/Cart';
import { Translator } from 'locale';
import { Price } from 'components/Price';
import { useCartHooks } from './hooks';
import { Button } from 'components/BuyForm/styled';
import { CartContext } from 'context/TotalContext';

const CartPage = () => {
  const { 
    items, 
    loading, 
    total, 
    changeItems } = useCartHooks();

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
          <CartContext.Provider value={{items, changeItems}}>
            <h4>Total: <Price price={total} /></h4>
          </CartContext.Provider>
        </div>
        <div className="col-12 col-sm-6 text-right">
          <Button
            title={Translator.i18n.t('cart.completePurchase')}
            about={Translator.i18n.t('cart.aboutButton')}
          >{Translator.i18n.t('cart.completePurchase')}</Button>
        </div>
      </div>
    </Theme>
  );
};

export default CartPage;
