import { CoffeeType } from '@dataTypes/coffee';
import { coffeeService } from './config';

export const getByCoffeeType = (type: CoffeeType): Promise<Coffee[]> => {
  return coffeeService.get(`/api/coffees?type=${type}`);
};

export const getCoffeeDetails = (id: number): Promise<Coffee> => {
  return coffeeService.get(`/api/coffees/${id}`);
};
