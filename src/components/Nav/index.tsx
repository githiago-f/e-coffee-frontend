import React from 'react';
import { Icons } from 'assets';
import Language from 'components/Language';
import Cart from 'components/Cart';

export const Nav = () => {
  return (
    <nav className="navbar navbar-light bg-light" data-testid="navigation-bar">
      <div className="container">
        <a className="navbar-brand" href="/e-coffee-frontend" data-testid="navigation-bar-jumbotron">
          <img 
            src={Icons['coffee-logo']}
            className="d-inline-block align-top"
            width="30"
            height="30"
            alt="E-coffee logo"
            loading="lazy"
          />
          <span>
            E-coffee
          </span>
        </a>
        <div style={{display: 'inline-flex'}}>
          <Cart.NavIcon />
          <Language />
        </div>
      </div>
    </nav>
  );
};

