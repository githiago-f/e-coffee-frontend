import { Spinner } from 'components/Fallbacks/Spinner';
import { LoadingContainer } from 'components/StyledBase/styles';
import { CartItem } from 'value-object';
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
        item={item}
        originalItems={items}
        key={key}
      />
    ));
  }, [items]);

  return (
    <>
      <LoadingContainer height={'100%'} hidden={!loading}>
        <Spinner/>
      </LoadingContainer>
      <div hidden={loading}>
        {list}
      </div>
    </>
  );
};
