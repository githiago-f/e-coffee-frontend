import React from 'react';
import { 
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import Home from 'pages/Home';
import Shop from 'pages/Shop';
import Cart from 'pages/Cart';
import { LanguageContext } from 'locale/LanguageContext';
import { useLanguageHooks } from 'lib/states/languageHooks';

export const BaseRoutes = () => {
  const languageHooks = useLanguageHooks();

  return (
    <LanguageContext.Provider value={languageHooks}>
      <Router basename={'e-coffee-frontend'}>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/shop/:shopId" component={Shop} />
          <Route path="/cart" component={Cart} />
        </Switch>
      </Router>
    </LanguageContext.Provider>
  );
};
