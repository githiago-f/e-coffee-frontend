import React from 'react';

import { 
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';

import HomePage from 'pages/Home';
import StorePage from 'pages/StorePage';
import Cart from 'pages/Cart';
import Product from 'pages/Product';
import Stores from 'pages/Stores';

import {LanguageContext} from 'context/LanguageContext';
import { useLanguageHooks } from 'locale';

export const BaseRoutes = () => {
  const languageHooks = useLanguageHooks();

  return (
    <LanguageContext.Provider value={languageHooks}>
      <Router basename={'e-coffee-frontend'}>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/product/:code" component={Product}/>
          <Route path="/shop/:shop_id/product/:code" component={Product} />
          <Route path="/shop/:shop_id" component={StorePage} />
          <Route path="/shops" component={Stores} />
          <Route path="/cart" component={Cart} />
        </Switch>
      </Router>
    </LanguageContext.Provider>
  );
};
