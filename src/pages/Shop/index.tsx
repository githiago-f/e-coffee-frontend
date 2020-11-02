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
  const { shop_id } = useShopPageHooks(props.match.params.shop_id);

  return (
    <Theme>
      <div className="pt-5">
        <Image
          src={'https://images.unsplash.com/photo-1599054228863-88e0b902a32f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1351&q=80'}
          height="calc(20vh + 10vw)"
        />
      </div>
      <div className="py-4">
        <div className="text-center">
          <h2 className="text-uppercase">Shop name</h2>
          <hr/>
          <Rating popularity={5}/>
        </div>
      </div>
      <ProductsList shop_id={shop_id} />
    </Theme>
  );
};

export default ShopPage;
