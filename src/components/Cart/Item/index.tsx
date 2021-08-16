import { CartItem } from 'entity/CartItem';
import React from 'react';
import { useCartItemHooks } from './hooks';

export const Item = (item: CartItem) => {
  useCartItemHooks();

  return (
    <div className="cart-item">
      <div className="cart-item-image">
        <img src={`/assets${item.product.image}`} alt={item.product.name} />
      </div>
      <div className="cart-item-info">
        <div className="cart-item-name">{item.product.name}</div>
        <div className="cart-item-price">{item.product.price}</div>
        <div className="cart-item-quantity">{item.quantity}</div>
      </div>
    </div>
  );
};
