import { CartItem } from 'value-object';

export type TPriceService = {
  productPriceWithDiscount(item: CartItem): number;
  totalCartPrice(items: CartItem[]): number;
}

export const PriceService = () => {
  const self = {} as TPriceService;

  self.productPriceWithDiscount = ({ product, quantity }) => {
    const {price, discount} = product;
    const discountPrice = price * discount;
    const discounted = (price - discountPrice) * quantity;
    return parseFloat(discounted.toFixed(2));
  };

  self.totalCartPrice = (items) => {
    return items
      .map(self.productPriceWithDiscount)
      .reduce((a, b) => a + b, 0);
  };

  return self;
};
