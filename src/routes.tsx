import React, { lazy, Suspense } from 'react';

import { 
  BrowserRouter as Router,
  Route
} from 'react-router-dom';

import { LanguageContext } from 'context/LanguageContext';
import { useLanguageHooks } from 'locale';

export const BaseRoutes = () => {
  const languageHooks = useLanguageHooks();

  return (
    <Suspense fallback={() => <> Loading... </> }>
      <LanguageContext.Provider value={languageHooks}>
        <Router>
          <Route exact path="/" component={lazy(() => import('pages/Home'))} />
          <Route path="/product/:code" component={lazy(() => import('pages/Product'))}/>
          <Route path="/shop/:shop_id" component={lazy(() => import('pages/StorePage'))} />
          <Route path="/shops" component={lazy(() => import('pages/Stores'))} />
          <Route path="/cart" component={lazy(() => import('pages/Cart'))} />
        </Router>
      </LanguageContext.Provider>
    </Suspense>
  );
};
