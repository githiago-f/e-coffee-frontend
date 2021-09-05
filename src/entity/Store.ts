import { DefaultImages } from 'assets';

export class Store {
  public id: string;
  public name: string;
  public rating: number;
  public thumbnail: string;

  constructor(id: string, name: string, rating: number) {
    this.id = id;
    this.name = name;
    this.rating = rating;
    this.thumbnail = DefaultImages.store_image;
  }
}
