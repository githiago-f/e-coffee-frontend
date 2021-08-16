import React from 'react';
import Theme from 'components/Theme';
import { ProductsList } from 'components/ProductList';
import { Rating } from 'components/Rating';
import { useShopPageHooks } from './hooks';
import { useRouteMatch } from 'react-router-dom';
import { Message } from 'components/Message';

const StorePage = () => {
  const match = useRouteMatch<{shop_id: string}>();
  const { 
    shop
  } = useShopPageHooks(match.params.shop_id);

  return (
    <Theme>
      <div hidden={false}>
        <Message type={'none'} />
      </div>
      <div className="pt-5" hidden={false}>
        <img
          src={shop?.thumbnail || ''}
          height="calc(20vh + 10vw)"
        />
      </div>
      <div className="py-4" hidden={false}>
        <div className="text-center">
          <h2 className="text-uppercase">{shop?.name}</h2>
          <hr/>
          <Rating rating={shop?.rating || 0}/>
        </div>
      </div>
      <ProductsList />
    </Theme>
  );
};

export default StorePage;
