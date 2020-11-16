import React from 'react';
import { Props } from '@comp/rating';
import { RatingCoffee, RatingContainer } from './styles';

export const Rating = (props: Props) => {
  const { popularity: rating } = props;
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
