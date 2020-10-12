declare module '@dataTypes/coffee' {
  type CoffeeType = 
    'black' |
    'latte'|
    'with milk'|
    'cappuccino'|
    'americano'|
    'espresso'|
    'doppio'|
    'cortado'|
    'red eye'|
    'galão'|
    'lungo';

  type Coffee = {
    id?: number;
    name: string;
    coffeeType: CoffeeType;
    price: number;
    cover_image_url?: string;
  }
}
