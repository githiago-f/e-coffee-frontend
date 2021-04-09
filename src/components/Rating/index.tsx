import React from 'react';
import { RatingCoffee, RatingContainer } from './styles';

type Props = {
  popularity: number;
}

export const Rating = (props: Props) => {
  const { popularity: rating } = props;
  return(
    <RatingContainer data-testid="rating-container" title={`Total rating ${rating}`}>
      <RatingCoffee data-testid={`rating-badge-${rating >= 0.5}`} active={rating >= 0.5} />
      <RatingCoffee data-testid={`rating-badge-${rating >= 1.5}`} active={rating >= 1.5} />
      <RatingCoffee data-testid={`rating-badge-${rating >= 2.5}`} active={rating >= 2.5} />
      <RatingCoffee data-testid={`rating-badge-${rating >= 3.5}`} active={rating >= 3.5} />
      <RatingCoffee data-testid={`rating-badge-${rating >= 4.5}`} active={rating >= 4.5} />
    </RatingContainer>
  );
};
