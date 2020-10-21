import React from 'react';
import { BannerCaption, BannerImage } from './styles';

export const Banner = () => {
  return (
    <div className="row my-3">
      <div className="col-12 col-sm-12 col-md-9">
        <BannerImage
          src={'https://via.placeholder.com/900x400?text=COVER'}
        >
          <BannerCaption>
            <h3>NULL</h3>
          </BannerCaption>
        </BannerImage>
      </div>
    </div>
  );
};
