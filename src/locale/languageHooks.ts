import { useCallback, useEffect, useState, ChangeEvent } from 'react';
import { Translator } from 'locale';
import { eventLayer } from 'utils/Event';

export const useLanguageHooks = () => {
  const [lang, setLang] = useState(Translator.currentLanguage());

  useEffect(() => {
    const identifier = eventLayer.on('languageChange', (language) => {
      console.log(language);
      setLang(language);
    });
    return () => {
      eventLayer.off(identifier);
    };
  }, [lang]);

  const changeLanguage = useCallback((event: ChangeEvent<HTMLSelectElement>) => {
    const selectedLang = event.target.value;
    Translator.selectLangAsync(selectedLang);
  }, []);

  return {
    lang,
    changeLanguage
  };
};
