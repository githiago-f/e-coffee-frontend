import { DefaultImages } from 'assets';

export class Product {
  public image: string;

  constructor(
      public id: string,
      public name: string,
      public description: string,
      public price: number,
  ) {
    this.image = DefaultImages.product_image;
  }
}
