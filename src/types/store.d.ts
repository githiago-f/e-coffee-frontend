type Coffee = import('@dataTypes/coffee').Coffee

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
    coffee: Coffee;
  }

  type Props = import('react').PropsWithChildren<Store>;
}
