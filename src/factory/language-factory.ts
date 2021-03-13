import { LanguageOption } from 'value-object';

export const languageFactory = (label: string, value: string): LanguageOption => {
  return {
    label,
    value
  };
};
