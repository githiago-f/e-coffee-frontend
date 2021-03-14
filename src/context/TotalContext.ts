import { CartItem } from 'entities';
import { createContext } from 'react';

type ContextType = {
  items: CartItem[], 
  changeItems: (items:CartItem[])=>void
};

export const CartContext = createContext({
  items: [],
  changeItems: (items) => {}
} as ContextType);
