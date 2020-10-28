import React from 'react';
import { Props } from '@dataTypes/store';
import { RatingContent, ThumbImage } from './styles';
import { Rating } from 'components/Rating';
import { Translator } from 'locale';
import { Link } from 'components/Link';

export const ShopItem = (props: Props) => {
  return (
    <div className="col-12 my-3">
      <Link 
        to={`/shop/${props.store_id}`}
        title={Translator.i18n.translate('shops.buttonSeeStore')}
      >
        <div className="row">
          <div className="col-12 col-sm-12 col-md-3">
            <ThumbImage src={props.cover_image_url || ''} />
          </div>
          <div className="col-12 col-sm-12 col-md-9">
            <div className="row h-100">
              <div className="col-12 col-sm-12 col-md-8">
                <h3>
                  <small>
                    {props.name}
                  </small>
                </h3>
              </div>
              <RatingContent>
                <Rating 
                  popularity={props.popularity}
                />
              </RatingContent>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};
