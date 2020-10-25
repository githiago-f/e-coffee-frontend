import { useState } from 'react';

export const useRatingHooks = (currentRating: number) => {
  const [ rating ] = useState(currentRating);

  return {
    rating
  };
};
