import { Product } from './Product';

export class CartItem {
  public readonly productId: string;
  constructor(
    public quantity: number,
    public product: Product
  ) {
    this.productId = product.id;
  }
}
