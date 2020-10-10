import React from 'react';
import { 
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import Home from 'pages/Home';

export const BaseRoutes = () => {
  return (
    <Router basename={require('./../../package.json').homepage}>
      <Route exact path="/" component={Home} />
    </Router>
  );
};
