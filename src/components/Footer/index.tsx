import React from 'react';
import { StyledFooter } from './styles';

export const Footer = () => {
  return (
    <StyledFooter>
      <div className="container">
        <div>
          <ul className="nav">
            <li className="item"></li>
          </ul>
        </div>
        <div className="text-center">
          <small>
              Icons made by {' '}
            <a href="https://www.flaticon.com/free-icon/coffee_1569602" title="Kiranshastry">Kiranshastry</a>{' '}
            <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> {' '}
            <a href="https://www.flaticon.com/authors/google" title="Google">Google</a> {' '} 
              from <a href="https://www.flaticon.com/" title="Flaticon"> www.flaticon.com</a>
          </small>
        </div>
      </div>
    </StyledFooter>
  );
};
