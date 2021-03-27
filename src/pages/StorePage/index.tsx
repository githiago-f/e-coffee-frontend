import React from 'react';
import Theme from 'components/Theme';
import { ProductsList } from 'components/ProductList';
import { Rating } from 'components/Rating';
import { Image } from 'components/Image';
import { useShopPageHooks } from './hooks';
import { useRouteMatch } from 'react-router-dom';
import { hasError } from 'utils/errors/ErrorEnum';
import { Message } from 'components/Message';

const StorePage = () => {
  const match = useRouteMatch<{shop_id: string}>();
  const { 
    shop_id, 
    shop,
    error
  } = useShopPageHooks(match.params.shop_id);

  return (
    <Theme>
      <div hidden={!hasError(error)}>
        <Message type={error} />
      </div>
      <div className="pt-5" hidden={hasError(error)}>
        <Image
          src={shop?.thumb || ''}
          height="calc(20vh + 10vw)"
        />
      </div>
      <div className="py-4" hidden={hasError(error)}>
        <div className="text-center">
          <h2 className="text-uppercase">{shop?.name}</h2>
          <hr/>
          <Rating popularity={shop?.rating || 0}/>
        </div>
      </div>
      <ProductsList 
        hidden={isNaN(shop_id) || hasError(error)}
        shop_id={shop_id} 
      />
    </Theme>
  );
};

export default StorePage;
