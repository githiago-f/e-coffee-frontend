declare module 'entities' {
  type Product = {
    name: string;
    thumb: string;
    code: string;
    price: number;
    discount: number;
  }

  type Store = {
    id?: number;
    thumb: string;
    rating: number;
    name: string;
  }
}
