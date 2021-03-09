import { Defaults } from 'assets';
import { Store } from 'entities';

type FactoryType = (name: string, rating: number, id?: number, thumb?: string) => Store

export const storeFactory: FactoryType = (name, rating, id, thumb) => 
  ({
    id: id || 0,
    name,
    rating,
    thumb: thumb || Defaults.store_image
  });
