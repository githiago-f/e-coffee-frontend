import { LanguageContext } from 'context/LanguageContext';
import { Language } from 'entity/Language';
import React, { useContext } from 'react';

const LanguageOption = (props: { language: Language }) => (
  <option 
    key={props.language.value}
    value={props.language.value} 
    data-testid={`language-selector-option-${props.language.value}`}
  >{props.language.label}</option>
);

const LanguageSelector = () => {
  const { changeLanguage, lang, options } = useContext(LanguageContext);

  return (
    <select onChange={changeLanguage} value={lang} data-testid="language-selector">
      {options.map((i, id) => <LanguageOption key={id} language={i} />)}
    </select>
  );
};

export default LanguageSelector;
