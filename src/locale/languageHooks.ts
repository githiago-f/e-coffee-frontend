import { useCallback, useEffect, useState, ChangeEvent } from 'react';
import { Translator } from 'locale';
import { eventLayer } from 'utils/Event';
import { LanguageOption } from 'value-object';
import { configApi } from 'api/config.api';

const defaultVal = [{value: '', label: 'Carregando...'}] as LanguageOption[];

export const useLanguageHooks = () => {
  const [lang, setLang] = useState(Translator.currentLanguage());
  const [options, setOptions] = useState(defaultVal );

  useEffect(() => {
    const identifier = eventLayer.on('languageChange', (language) => {
      console.log(language);
      setLang(language);
    });
    return () => {
      eventLayer.off(identifier);
    };
  }, [lang]);

  useEffect(() => {
    configApi()
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
