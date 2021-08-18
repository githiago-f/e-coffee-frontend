import { CartItem } from 'entity/CartItem';
import React, { PropsWithChildren } from 'react';

export const Item = (props: PropsWithChildren<{item: CartItem}>) => {
  return (
    <div className="cart-item">
      <div className="cart-item-image">
        <img src={`/assets${props.item.product.image}`} alt={props.item.product.name} />
      </div>
      <div className="cart-item-info">
        <div className="cart-item-name">{props.item.product.name}</div>
        <div className="cart-item-total">{props.item.total}</div>
        <div className="cart-item-quantity">{props.item.quantity}</div>
      </div>
    </div>
  );
};
