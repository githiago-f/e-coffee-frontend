import { Icons } from 'assets';
import { Link } from 'components/Link';
import { Translator } from 'locale';
import React from 'react';
import { useCartNavIconHooks } from './hooks';
import { CartNumber, StatusWrapper } from './styles';

export function NavIcon() {
  const { itemsCount } = useCartNavIconHooks();

  return (
    <Link className="px-4" title={Translator.i18n.t('cart.openCart')} to="/cart">
      <StatusWrapper>
        <CartNumber show={itemsCount > 0}>
          {itemsCount}
        </CartNumber>
        <img 
          src={Icons['cart']} 
          alt="Carrinho"
          height="28"
          width="28"
        />
      </StatusWrapper>
    </Link>
  );
}
