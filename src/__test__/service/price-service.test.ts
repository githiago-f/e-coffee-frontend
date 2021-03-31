import { CartItem } from 'value-object';
import { cartItemFactory } from 'factory/cart-item';
import { PriceService, TPriceService } from 'service/price-service';
import { ProductBuilder } from '__test__/builders/product';

describe('# Price Service', () => {
  let service: TPriceService;
  let cart: CartItem[] = [];

  beforeEach(() => {
    cart = [];
    service = PriceService();

    const {withPriceAndDiscount} = ProductBuilder();

    cart.push(
      cartItemFactory(
        withPriceAndDiscount(1.49, 0.5), 1
      )
    );
    cart.push(
      cartItemFactory(
        withPriceAndDiscount(4.50, 0.2), 2
      )
    );
    cart.push(
      cartItemFactory(
        withPriceAndDiscount(3.29, 0), 1
      )
    );
  });

  it('Should return a valid discounted price (dicount of 5% in 7.49 item)', () => {
    const priceWithDiscount = service.productPriceWithDiscount(cart[0]);
    expect(priceWithDiscount).toBe(0.74);
  });

  it('Should return a valid total based on items of cart', () => {
    const totalCartPrice = service.totalCartPrice(cart);
    expect(totalCartPrice).toBe(11.23);
  });
});
