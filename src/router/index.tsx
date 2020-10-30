import React from 'react';
import { 
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import HomePage from 'pages/Home';
import ShopPage from 'pages/Shop';
import Cart from 'pages/Cart';
import Product from 'pages/Product';
import { LanguageContext, useLanguageHooks } from 'locale';
import Shops from 'pages/Shops';

export const BaseRoutes = () => {
  const languageHooks = useLanguageHooks();

  return (
    <LanguageContext.Provider value={languageHooks}>
      <Router basename={'e-coffee-frontend'}>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/product/:product_id" component={Product}/>
          <Route path="/shop/:shop_id/product/:product_id" component={Product} />
          <Route path="/shop/:shop_id" component={ShopPage} />
          <Route path="/shops" component={Shops} />
          <Route path="/cart" component={Cart} />
        </Switch>
      </Router>
    </LanguageContext.Provider>
  );
};
