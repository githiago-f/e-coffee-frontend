import React from 'react';
import { coffeeIcon } from 'assets';
import LanguageSelector from 'components/Language';
import Cart from 'components/Cart';
import { Link } from 'react-router-dom';
import './style.css';

export const Nav = () => {
  return (
    <nav data-testid="navigation-bar">
      <div className="nav-container">
        <Link className="flex items-center" to="/" data-testid="navigation-bar-jumbotron">
          <img 
            src={coffeeIcon}
            width="32"
            height="32"
            alt="E-coffee logo"
            loading="lazy"
          />
          <h5 className="text-2xl font-bold">
            &nbsp;E-coffee
          </h5>
        </Link>
        <div className="flex">
          <Cart.NavIcon />
          <LanguageSelector />
        </div>
      </div>
    </nav>
  );
};

