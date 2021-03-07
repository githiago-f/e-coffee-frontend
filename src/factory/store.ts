import { Store } from 'entities';
import { randomDimensions } from 'utils/randomDimensions';

export const createStore = (name: String) => {
  return {
    name,
    rating: parseFloat((Math.random() * 5).toFixed(2)),
    thumb: `https://via.placeholder.com/${randomDimensions()}x${randomDimensions()}`
  } as Store;
};
