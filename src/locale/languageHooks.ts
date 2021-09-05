import { useCallback, useEffect, useState, ChangeEvent, useRef } from 'react';
import { Translator } from 'locale';
import { eventLayer } from 'utils/Event';
import { ConfigAPI } from 'api/config.api';
import { Language } from 'entity/Language';

export const useLanguageHooks = () => {
  const langAPI = useRef(new ConfigAPI());
  const [lang, setLang] = useState(Translator.currentLanguage());
  const [options, setOptions] = useState([
    new Language('Carregando...', '')
  ]);

  useEffect(() => {
    const identifier = eventLayer.on('languageChange', setLang);
    return () => { eventLayer.off(identifier); };
  }, [lang]);

  useEffect(() => {
    langAPI.current
      .getLanguages()
      .then(setOptions)
      .catch(console.error);
  }, []);

  const changeLanguage = useCallback((event: ChangeEvent<HTMLSelectElement>) => {
    const selectedLang = event.target.value;
    Translator.selectLangAsync(selectedLang);
  }, []);

  return {
    lang,
    changeLanguage,
    options
  };
};
