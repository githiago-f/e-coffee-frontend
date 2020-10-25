import React from 'react';
import { Props } from '@comp/rating';
import { useRatingHooks } from './hooks';
import { RatingCoffee, RatingContainer } from './styles';

export const Rating = (props: Props) => {
  const { rating } = useRatingHooks(props.popularity);

  return(
    <RatingContainer>
      <RatingCoffee active={rating >= 0.5} />
      <RatingCoffee active={rating >= 1.5} />
      <RatingCoffee active={rating >= 2.5} />
      <RatingCoffee active={rating >= 3.5} />
      <RatingCoffee active={rating >= 4.5} />
    </RatingContainer>
  );
};
