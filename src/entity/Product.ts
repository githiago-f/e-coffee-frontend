import { DefaultImages } from 'assets';

export class Product {
  constructor(
    public id: string,
    public name: string,
    public description: string,
    public price: number,
    public image = DefaultImages.product_image) {
    // no op
  }
}
