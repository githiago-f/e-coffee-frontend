import React from 'react';
import { Props } from '@comp/rating';
import { useRatingHooks } from './hooks';


export const Rating = (props: Props) => {
  const { downRating, upRating } = useRatingHooks(props.popularity);

  return(
    <div>
      <span>
        {upRating}
      </span>
      <span>
        {upRating}
      </span>
      <span>
        {downRating}
      </span>
      <span>
        {downRating}
      </span>
      <span>
        {downRating}
      </span>
    </div>
  );
};
