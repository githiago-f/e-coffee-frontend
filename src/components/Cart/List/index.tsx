import { Spinner } from 'components/Fallbacks/Spinner';
import { Price } from 'components/ProductCard/styles';
import { LoadingContainer } from 'components/StyledBase/styles';
import React, { useMemo } from 'react';
import { Item } from '../Item';
import { useCartListHooks } from './hooks';

export const List = () => {
  const { items, loading } = useCartListHooks();

  const list = useMemo(() => {
    return items.map((item, key) => (
      <Item
        item={item}
        key={key}
      />
    ));
  }, [items]);

  const total = useMemo(() => {
    return items.map(val => val.product.price * val.quantity)
      .reduce((val, curVal) => {
        return curVal + val;
      }, 0);
  }, [items]);

  return (
    <>
      <LoadingContainer height={'100%'} hidden={!loading}>
        <Spinner/>
      </LoadingContainer>
      <div hidden={loading} className="row">
        {list}
      </div>
      <div>
        <h4>Total: <Price>{total}</Price></h4>
      </div>
    </>
  );
};
