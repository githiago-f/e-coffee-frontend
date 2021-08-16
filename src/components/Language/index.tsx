import { LanguageContext } from 'context/LanguageContext';
import React, { useContext } from 'react';

const LanguageOption = (props: { language: {value: string, label: string} }) => (
  <option 
    key={props.language.value}
    value={props.language.value} 
    data-testid={`language-selector-option-${props.language.value}`}
  >{props.language.label}</option>
);

const Language = () => {
  const { changeLanguage, lang, options } = useContext(LanguageContext);

  return (
    <select onChange={changeLanguage} value={lang} data-testid="language-selector">
      <LanguageOption language={{label: 'Selecione', value: 'Selecionar'}} />
      {options.map((i, id) => <LanguageOption key={id} language={i} />)}
    </select>
  );
};

export default Language;
