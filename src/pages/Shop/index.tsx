import React from 'react';
import Theme from 'components/Theme';
import { ProductsList } from 'components/ProductList';
import { ShopBanner } from 'components/ShopBanner';
import { Rating } from 'components/Rating';
import { MatchProps } from '@dataTypes/router';

type Props = MatchProps<{
  shop_id: string;
}>

const ShopPage = (props: Props) => { 
  return (
    <Theme>
      <div className="pt-5">
        <ShopBanner image={'https://via.placeholder.com/300x300'}/>
      </div>
      <div className="py-4">
        <div className="text-center">
          <h2 className="text-uppercase">Shop name</h2>
          <hr/>
          <Rating popularity={5}/>
        </div>
      </div>
      <ProductsList shop_id={parseInt(props.match.params.shop_id)} />
    </Theme>
  );
};

export default ShopPage;
