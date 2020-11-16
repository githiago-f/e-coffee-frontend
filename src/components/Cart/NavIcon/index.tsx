import { Icons } from 'assets';
import React from 'react';
import { useCartNavIconHooks } from './hooks';
import { CartNumber, StatusWrapper } from './styles';

export function NavIcon() {
  const { itemsCount } = useCartNavIconHooks();

  return (
    <StatusWrapper>
      <CartNumber show={itemsCount > 0}>
        {itemsCount}
      </CartNumber>
      <img 
        src={Icons['cart']} 
        alt="Carrinho"
        height="28"
        width="28"
        title="Abrir Carrinho"
      />
    </StatusWrapper>
  );
}
