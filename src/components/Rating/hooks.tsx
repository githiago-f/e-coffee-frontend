import React, { useMemo, useState } from 'react';
import { Icons } from 'assets';

export const useRatingHooks = (currentRating: number) => {
  const [ rating ] = useState(currentRating);

  const downRating = useMemo(() => (
    <img 
      src={Icons['down-rating-coffee']}
      width={25}
      height={25}
      alt="down rating coffee"
    />
  ), []);

  const upRating = useMemo(() => (
    <img 
      src={Icons['up-rating-coffee']}
      width={25}
      height={25}
      alt="up rating coffee"
    />
  ), []);

  return {
    rating,
    downRating,
    upRating
  };
};
