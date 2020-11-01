declare module '@dataTypes/coffee' {
  type ProductType = 
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

  type Product = {
    product_id: number;
    name: string;
    productType: ProductType;
    price: number;
    cover_image_url?: string;
  }
}
