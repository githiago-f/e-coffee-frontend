import I18n from 'i18n-js';
import { setLanguage } from 'store/actions';
import store from 'store';
const langs = ['en', 'pt-br'];

class Translate {
  i18n = I18n;

  static readonly instance = new Translate();
  private constructor() {
    console.log(this.loadLocalLang());
    this.selectLangSync(this.loadLocalLang());
  }

  loadLocalLang() {
    const currentLocale = this.storedCurrentLang;
    if(currentLocale && currentLocale.trim() !== '') {
      return currentLocale;
    }
    const locale = this.i18n.currentLocale();
    return locale;
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
    this.currentLang = lang;
    store.dispatch(setLanguage(lang));
  }

  selectLangSync(lang: string) {
    if(!langs.includes(lang)) {
      throw new Error('Couldn\'t find this language.');
    }
    if(!this.i18n.translations[lang]) {
      const locale = require(`./${lang}.json`);
      this.i18n.translations[lang] = locale;
    }
    this.i18n.locale = lang;
    this.currentLang = lang;
    return lang;
  }

  set currentLang(lang: string) {
    window.localStorage.setItem('eCoffee.language', lang);
  }

  get storedCurrentLang() {
    return window.localStorage.getItem('eCoffee.language');
  }
}

export const Translator = Translate.instance;
