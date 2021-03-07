declare module 'entities' {
  type Product = {
    name: string;
    thumb: string;
    code: string;
    price: number;
  }

  type Shop = {
    id: number;
    thumb: string;
    rating: number;
    name: string;
  }

  type CartItem = {
    code?: string;
    quantity: number;
    product: Product;
  }
}
