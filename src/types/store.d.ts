type Product = import('@dataTypes/coffee').Product

declare module '@dataTypes/store' {
  type Store = {
    store_id: number;
    name: string;
    popularity: number;
    cover_image_url?: string;
    stock?: Stock[];
  }

  type Stock = {
    store_id: number;
    quantity: number;
    product: Product;
  }

  type Props = import('react').PropsWithChildren<Store>;
}
