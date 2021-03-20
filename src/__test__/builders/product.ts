import { productFactory } from 'factory/product';

export const ProductBuilder = () => {
  function uuidv4() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
      var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
      return v.toString(16);
    });
  }
  const withPriceAndDiscount = (price: number, discount: number) => {
    return productFactory(uuidv4(), 'Product Name', price, discount, 'https://via.placeholder.com/300x300?text=+');
  };
  return {
    withPriceAndDiscount
  };
};
