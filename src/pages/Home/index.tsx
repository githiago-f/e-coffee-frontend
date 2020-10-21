import React from 'react';
import { Shops } from 'components/Shop';
import Theme from 'components/Theme';
import { useLanguageHooks } from 'lib/states/languageHooks';
import { Recommended } from 'components/Recommended';

const Home = () => {
  const { lang } = useLanguageHooks();

  return (
    <Theme data-language={lang}>
      <Shops/>
      <Recommended/>
    </Theme>
  );
};

export default Home;
