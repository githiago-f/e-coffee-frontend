import { Spinner } from 'components/Fallbacks/Spinner';
import { LoadingContainer } from 'components/StyledBase/styles';
import React, { useMemo } from 'react';
import { Item } from '../Item';
import { useCartListHooks } from './hooks';

export const List = () => {
  const { items, loading } = useCartListHooks();

  const list = useMemo(() => {
    return items.map((item, key) => (
      <Item 
        product={item} 
        key={key}
      />
    ));
  }, [items]);

  return (
    <>
      <LoadingContainer height={'100%'} hidden={!loading}>
        <Spinner/>
      </LoadingContainer>
      <div hidden={loading} className="row">
        {list}
      </div>
    </>
  );
};
