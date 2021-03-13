import { ChangeEvent, createContext } from 'react';
import { LanguageOption } from 'value-object';

export const LanguageContext = createContext({
  lang: '',
  changeLanguage: (event: ChangeEvent<HTMLSelectElement>) => {},
  options: [] as LanguageOption[]
});
