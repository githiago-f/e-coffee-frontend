import I18n from 'i18n-js';
import defaultLang from './en.json';
const langs = ['en', 'pt-br'];

class Translate {
  i18n = I18n;

  static readonly instance = new Translate();
  private constructor() {
    this.i18n.translations['en'] = defaultLang;
    this.i18n.locale = 'en';
  }

  async selectLang(lang: string) {
    if(!langs.includes(lang)){
      throw new Error('Couldn\'t find this language.');
    }
    if(!this.i18n.translations[lang]) {
      const locale = await import(`./${lang}.json`);
      this.i18n.translations[lang] = locale;
    }
    this.i18n.locale = lang;
  }
}

export const Translator = Translate.instance;
