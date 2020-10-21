import React from 'react';
import { BannerImage } from './styles';

export const Banner = () => {
  return (
    <div className="row my-3">
      <div className="col-12 col-sm-12 col-md-9">
        <BannerImage
          src={'https://via.placeholder.com/900x400?text=COVER'}
        />
      </div>
    </div>
  );
};
