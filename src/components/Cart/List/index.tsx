import { CartItem } from 'entity/CartItem';
import React, { useMemo } from 'react';
import { Item } from '../Item';

type Props = {
  items: CartItem[];
  loading: boolean;
}

export const List = ({items, loading}: Props) => {
  const list = useMemo(() => {
    return items.map((item, key) => (
      <Item
        productId={item.product.id}
        product={item.product}
        key={key}
        quantity={item.quantity}
      />
    ));
  }, [items]);

  return (
    <>
      <div hidden={loading}>
        {list}
      </div>
    </>
  );
};
