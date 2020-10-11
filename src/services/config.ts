import Axios from 'axios';

export const coffeeService = Axios.create({
  baseURL: 'https://coffee-commerce.herokuapp.com/'
});
