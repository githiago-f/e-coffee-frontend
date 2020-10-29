import { BannerImage } from 'components/HomeBanner/styles';
import React from 'react';

interface Props {
  image: string
}

export const ShopBanner = (props: Props) => {
  return (
    <BannerImage src={props.image}>
      
    </BannerImage>
  );
};
