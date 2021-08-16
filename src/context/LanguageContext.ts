import { ChangeEvent, createContext } from 'react';

export const LanguageContext = createContext({
  lang: '',
  changeLanguage: (event: ChangeEvent<HTMLSelectElement>) => {},
  options: [] as any[]
});
