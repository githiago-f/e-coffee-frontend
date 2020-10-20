import { useCallback, useEffect, useState, ChangeEvent } from 'react';
import store from 'store';
import { Translator } from 'locale';

export const useLanguageHooks = () => {
  const [lang, setLang] = useState(Translator.currentLanguage());

  useEffect(() => {
    const unsubscribe = store.subscribe(() => {
      const currentLang = store.getState().language;
      if(currentLang !== lang) {
        setLang(currentLang);
      }
    });
    return () => {
      unsubscribe();
    };
  }, [ lang ]);

  const changeLanguage = useCallback((event: ChangeEvent<HTMLSelectElement>) => {
    const selectedLang = event.target.value;
    Translator.selectLang(selectedLang);
  }, []);

  return {
    lang,
    changeLanguage
  };
};
