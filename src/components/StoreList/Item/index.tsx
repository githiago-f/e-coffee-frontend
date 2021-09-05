import React from 'react';
import { Rating } from 'components/Rating';
import { Translator } from 'locale';
import { Link } from 'react-router-dom';
import { Store } from 'entity/Store';

export const StoreItem = (props: { store: Store }) => {
  return (
    <Link
      data-testid="store-item"
      to={`/shop/${props.store.id}`}
      title={Translator.i18n.translate('shops.buttonSeeStore')}
    >
      <div className="store"> 
        <div className="w-full md:w-4/12">
          <img src={props.store.thumbnail} />
        </div>
        <div className="w-full md:w-8/12">
          <div className="flex flex-row h-100">
            <div className="w-full md:w-8/12">
              <h3 className="store-name">{props.store.name}</h3>
            </div>
            <div className="w-full md:w-4/12">
              <Rating rating={props.store.rating} />
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};
