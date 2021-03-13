import { LanguageContext } from 'context/LanguageContext';
import React, { useContext } from 'react';

const Language = () => {
  const { changeLanguage, lang, options } = useContext(LanguageContext);

  return (
    <select onChange={changeLanguage} className="form-select ml-3" value={lang}> 
      {options.map(i => <option key={i.value} value={i.value}>{i.label}</option>)}
    </select>
  );
};

export default Language;
