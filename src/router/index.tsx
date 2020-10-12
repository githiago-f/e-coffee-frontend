import React from 'react';
import { 
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import Home from 'pages/Home';
import Shop from 'pages/Shop';
import Cart from 'pages/Cart';

export const BaseRoutes = () => {
  return (
    <Router basename={'e-coffee-frontend'}>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/shop/:shopId" component={Shop} />
        <Route path="/cart" component={Cart} />
      </Switch>
    </Router>
  );
};
