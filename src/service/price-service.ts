import { CartItem } from 'entity/CartItem';

export type TPriceService = {
  productPriceWithDiscount(item: CartItem): number;
  totalCartPrice(items: CartItem[]): number;
}

export const PriceService = () => {
  const self = {} as TPriceService;

  self.productPriceWithDiscount = ({ product, quantity }) => {
    // TODO
    return 0;
  };

  self.totalCartPrice = (items) => {
    // TODO
    return 0;
  };

  return self;
};
