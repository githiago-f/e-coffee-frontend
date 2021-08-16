type LanguageApi = {
  getLanguages(): Promise<any[]>;
}

type JsonProduct = {
  value: string;
  label: string;
}

const toLangObject = (i: JsonProduct) => {};

export const configApi = () => {
  const self = {} as LanguageApi;

  const data = import('./bff-data.json');

  self.getLanguages = async () => [];

  return self;
};
