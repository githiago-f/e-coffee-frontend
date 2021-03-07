import React from 'react';
import { RatingCoffee, RatingContainer } from './styles';

type Props = {
  popularity: number;
}

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
