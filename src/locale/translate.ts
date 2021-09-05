import I18n from 'i18n-js';
import { eventLayer } from 'utils/Event';

const languages = ['en', 'pt-br'];
const currencies = {
  'en': 'USD',
  'pt-br': 'BRL'
} as { [key in string]: string };

class Translate {
  i18n = I18n;

  static readonly instance = new Translate();
  private constructor() {
    this.selectLangSync(this.currentLanguage());
  }

  public nativeToCurrency(num: number) {
    return num.toLocaleString(this.currentLanguage(), {
      currency: currencies[this.currentLanguage()],
      style: 'currency',
      minimumFractionDigits: 2
    });
  }

  currentLanguage() {
    if(this.language && this.language.trim() !== '') {
      return this.language;
    }
    return this.i18n.currentLocale();
  }

  async selectLangAsync(language: string) {
    if(!languages.includes(language)){
      console.warn('Couldn\'t find this language.');
      return;
    }
    if(!this.i18n.translations[language]) {
      const locale = await import(`./strings/${language}.json`);
      this.i18n.translations[language] = locale;
    }
    this.i18n.locale = language;
    this.language = language;
    eventLayer.emit('languageChange', language);
  }

  private selectLangSync(language: string) {
    if(!languages.includes(language)) {
      console.warn('Couldn\'t find this language.');
      return;
    }
    if(!this.i18n.translations[language]) {
      const locale = require(`./strings/${language}.json`);
      this.i18n.translations[language] = locale;
    }
    this.i18n.locale = language;
    this.language = language;
    return language;
  }

  private set language(language: string) {
    window.localStorage.setItem('eCoffee.language', language);
  }

  private get language() {
    return window.localStorage.getItem('eCoffee.language') as string;
  }
}

export const Translator = Translate.instance;
