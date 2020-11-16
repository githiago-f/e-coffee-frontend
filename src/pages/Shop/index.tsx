import React from 'react';
import Theme from 'components/Theme';
import { ProductsList } from 'components/ProductList';
import { Rating } from 'components/Rating';
import { MatchProps } from '@dataTypes/router';
import { Image } from 'components/Image';
import { useShopPageHooks } from './hooks';

type Props = MatchProps<{
  shop_id: string;
}>

const ShopPage = (props: Props) => {
  const { 
    shop_id, 
    shop
  } = useShopPageHooks(props.match.params.shop_id);

  return (
    <Theme>
      <div className="pt-5">
        <Image
          src={shop.cover_image_url}
          height="calc(20vh + 10vw)"
        />
      </div>
      <div className="py-4">
        <div className="text-center">
          <h2 className="text-uppercase">{shop.name}</h2>
          <hr/>
          <Rating popularity={shop.popularity}/>
        </div>
      </div>
      <ProductsList shop_id={shop_id} />
    </Theme>
  );
};

export default ShopPage;
