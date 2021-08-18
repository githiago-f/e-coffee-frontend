import { Product } from './Product';

export class CartItem {
  public readonly productId: string;
  constructor(
    public quantity: number,
    public product: Product
  ) {
    this.productId = product.id;
  }

  public get total(): number {
    return this.quantity * this.product.price;
  }

  public priceWithDiscount(discount: number): number {
    return this.total - (this.total * discount);
  }
}
