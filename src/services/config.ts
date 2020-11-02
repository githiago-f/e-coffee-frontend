import Axios from 'axios';

export const productsService = Axios.create({
  baseURL: 'https://coffee-commerce.herokuapp.com/'
});
