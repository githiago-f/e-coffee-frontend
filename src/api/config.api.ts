import { LanguageOption } from 'value-object';
import { languageFactory } from 'factory/language-factory';

type LanguageApi = {
  getLanguages(): Promise<LanguageOption[]>;
}

type JsonProduct = {
  value: string;
  label: string;
}

const toLangObject = (i: JsonProduct) => languageFactory(i.label, i.value);

export const configApi = () => {
  const self = {} as LanguageApi;

  const data = import('./bff-data.json');

  self.getLanguages = async () => (await data).config.languages
    .map(toLangObject);

  return self;
};
