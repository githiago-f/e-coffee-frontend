import { LanguageContext } from 'locale';
import React, { useContext } from 'react';

const Language = () => {
  const { changeLanguage, lang } = useContext(LanguageContext);

  return (
    <select onChange={changeLanguage} value={lang}> 
      <option value="en">en</option>
      <option value="pt-br">pt-BR</option>
    </select>
  );
};

export default Language;
