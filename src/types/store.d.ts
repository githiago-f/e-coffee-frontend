type Coffee = import('@dataTypes/coffee').Coffee

declare module '@dataTypes/store' {
  type Store = {
    id?: number;
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
}
