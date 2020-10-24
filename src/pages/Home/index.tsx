import React from 'react';
import { Shops } from 'components/Shop';
import Theme from 'components/Theme';
import { useLanguageHooks } from 'locale/languageHooks';
import { Recommended } from 'components/Recommended';
import { Banner } from 'components/Banner';

const Home = () => {
  const { lang } = useLanguageHooks();

  return (
    <Theme data-language={lang}>
      <Banner/>
      <Shops/>
      <Recommended/>
    </Theme>
  );
};

export default Home;
