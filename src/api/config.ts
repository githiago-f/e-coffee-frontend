import Axios from 'axios';

export const productsService = Axios.create({
  baseURL: 'http://localhost:8080'
});
