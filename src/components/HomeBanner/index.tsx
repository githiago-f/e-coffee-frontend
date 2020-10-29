import { Translator } from 'locale';
import React from 'react';
import { BannerCaption, BannerImage, CaptionSubtitle, CaptionTitle } from './styles';

export const HomeBanner = () => {

  return (
    <div className="row my-3">
      <div className="col-12 col-sm-12 col-md-9">
        <BannerImage
          src={'https://images.unsplash.com/photo-1599054228863-88e0b902a32f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1351&q=80'}
        >
          <BannerCaption>
            <CaptionTitle>{Translator.i18n.t('banners.0.title')}</CaptionTitle>
            <CaptionSubtitle title={Translator.i18n.t('banners.0.subtitle')}>{Translator.i18n.t('banners.0.subtitle')}</CaptionSubtitle>
          </BannerCaption>
        </BannerImage>
      </div>
    </div>
  );
};
