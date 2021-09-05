import { downRatingCoffee, upRatingCoffee } from 'assets';
import React from 'react';

type Props = {
  rating: number;
};

export const Rating = (props: Props) => {
  const { rating } = props;
  return(
    <div className="flex">
      <img width="24" src={upRatingCoffee} alt={'Received ' + rating + ' coffees'} />
      <img width="24" src={upRatingCoffee} alt={'Received ' + rating + ' coffees'} />
      <img width="24" src={upRatingCoffee} alt={'Received ' + rating + ' coffees'} />
      <img width="24" src={upRatingCoffee} alt={'Received ' + rating + ' coffees'} />
      <img width="24" src={downRatingCoffee} alt={'Received ' + rating + ' coffees'} />
    </div>
  );
};
