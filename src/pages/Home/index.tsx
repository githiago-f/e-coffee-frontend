import React from 'react';
import { Shops } from 'components/Shops';
import Theme from 'components/Theme';
import { useLanguageHooks } from 'lib/states/languageHooks';

const Home = () => {
  const { lang } = useLanguageHooks();

  return (
    <Theme data-language={lang}>
      <Shops/>
    </Theme>
  );
};

export default Home;
