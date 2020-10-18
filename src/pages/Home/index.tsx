import { Shops } from 'components/Shops';
import React from 'react';
import Theme from 'components/Theme';
import { useLanguageHooks } from 'lib/states/languageHooks';

const Home = () => {
  const { lang, changeLanguage } = useLanguageHooks()

  return (
    <Theme lang={lang}>
      <Shops/>
      <select onChange={changeLanguage} > 
        <option value="en">en</option>
        <option value="pt-br">pt-BR</option>
      </select>
    </Theme>
  );
};

export default Home;
