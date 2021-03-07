import React from 'react';
import Theme from 'components/Theme';
import { ProductsList } from 'components/ProductList';
import { Rating } from 'components/Rating';
import { Image } from 'components/Image';
import { useShopPageHooks } from './hooks';
import { useRouteMatch } from 'react-router-dom';

const ShopPage = () => {
  const match = useRouteMatch<{shop_id: string}>();
  const { 
    shop_id, 
    shop
  } = useShopPageHooks(match.params.shop_id);

  return (
    <Theme>
      <div className="pt-5">
        <Image
          src={shop.thumb}
          height="calc(20vh + 10vw)"
        />
      </div>
      <div className="py-4">
        <div className="text-center">
          <h2 className="text-uppercase">{shop.name}</h2>
          <hr/>
          <Rating popularity={shop.rating}/>
        </div>
      </div>
      <ProductsList shop_id={shop_id} />
    </Theme>
  );
};

export default ShopPage;
