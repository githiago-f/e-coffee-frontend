import { Spinner } from 'components/Fallbacks/Spinner';
import React, { useMemo } from 'react';
import { Item } from '../Item';
import { useCartListHooks } from './hooks';

export const List = () => {
  const { items, loading } = useCartListHooks();

  return (
    <>
      <div hidden={!loading}>
        <Spinner/>
      </div>
      <div hidden={loading} className="col-12 col-">
        {
          useMemo(() => {
            return items.map((item, index) => <Item key={index}/>);
          }, [items])
        }
      </div>
    </>
  );
};
