import { cartIcon } from 'assets';
import { Translator } from 'locale';
import React from 'react';
import { Link } from 'react-router-dom';
import { useCartNavIconHooks } from './hooks';
import './style.css';

export function NavIcon() {
  const { itemsCount } = useCartNavIconHooks();

  return (
    <Link title={Translator.i18n.t('cart.openCart')} to="/cart">
      <div>
        <div className="cart-icon" hidden={itemsCount > 0}>
          {itemsCount}
        </div>
        <img
          src={cartIcon} 
          alt="Carrinho"
          height="28"
          width="28"
        />
      </div>
    </Link>
  );
}
