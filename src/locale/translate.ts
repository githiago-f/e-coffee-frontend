import I18n from 'i18n-js';
import { setLanguage } from 'store/actions';
import store from 'store';

const languages = ['en', 'pt-br'];

class Translate {
  i18n = I18n;

  static readonly instance = new Translate();
  private constructor() {
    this.selectLangSync(this.currentLanguage());
  }

  currentLanguage() {
    const cachedLanguage = this.getStoredLanguage;
    if(cachedLanguage && cachedLanguage.trim() !== '') {
      return cachedLanguage;
    }
    const pageLocale = this.i18n.currentLocale();
    return pageLocale;
  }

  async selectLangAsync(language: string) {
    if(!languages.includes(language)){
      throw new Error('Couldn\'t find this language.');
    }
    if(!this.i18n.translations[language]) {
      const locale = await import(`./strings/${language}.json`);
      this.i18n.translations[language] = locale;
    }
    this.i18n.locale = language;
    this.setStoredLanguage = language;
    store.dispatch(setLanguage(language));
  }

  selectLangSync(language: string) {
    if(!languages.includes(language)) {
      throw new Error('Couldn\'t find this language.');
    }
    if(!this.i18n.translations[language]) {
      const locale = require(`./strings/${language}.json`);
      this.i18n.translations[language] = locale;
    }
    this.i18n.locale = language;
    this.setStoredLanguage = language;
    return language;
  }

  set setStoredLanguage(lang: string) {
    window.localStorage.setItem('eCoffee.language', lang);
  }

  get getStoredLanguage() {
    return window.localStorage.getItem('eCoffee.language');
  }
}

export const Translator = Translate.instance;
