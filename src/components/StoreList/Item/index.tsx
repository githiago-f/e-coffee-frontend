import React from 'react';
import { RatingContent, ThumbImage } from './styles';
import { Rating } from 'components/Rating';
import { Translator } from 'locale';
import { Link } from 'components/Link';
import { Store } from 'entities';

type Props = {
  store: Store;
};

export const StoreItem = (props: Props) => {
  return (
    <div className="col-12 my-3" data-testid="store-item">
      <Link 
        to={`/shop/${props.store.id}`}
        title={Translator.i18n.translate('shops.buttonSeeStore')}
      >
        <div className="row">
          <div className="col-12 col-sm-12 col-md-4">
            <ThumbImage src={props.store.thumb} />
          </div>
          <div className="col-12 col-sm-12 col-md-8">
            <div className="row h-100">
              <div className="col-12 col-sm-12 col-md-8">
                <h3>
                  <small>
                    {props.store.name}
                  </small>
                </h3>
              </div>
              <RatingContent>
                <Rating 
                  popularity={props.store.rating}
                />
              </RatingContent>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};
