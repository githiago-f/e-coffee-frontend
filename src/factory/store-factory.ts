import { Defaults } from 'assets';
import { Store } from 'entities';

type FactoryType = (name: string, rating: number, thumb?: string) => Store

export const storeFactory: FactoryType = (name, rating, thumb) => 
  ({
    name,
    rating,
    thumb: thumb || Defaults.store_image
  });
