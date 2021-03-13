import React from 'react';
import { StyledFooter } from './styles';

export const Footer = () => {
  return (
    <StyledFooter>
      <div className="container">
        <div className="text-center p-5">
          <small>
              Icons made by {' '}
            <a href="https://smashicons.com/" className="link-dark" title="Smashicons">Smashicons</a>{', '}
            <a href="https://www.flaticon.com/free-icon/coffee_1569602" className="link-dark" title="Kiranshastry">Kiranshastry</a>{', '}
            <a href="https://www.flaticon.com/authors/freepik" className="link-dark" title="Freepik">Freepik</a>{' and '}
            <a href="https://www.flaticon.com/authors/google" className="link-dark" title="Google">Google</a>{' '} 
              from <a href="https://www.flaticon.com/" className="link-dark" title="Flaticon"> www.flaticon.com</a>
          </small>
        </div>
      </div>
    </StyledFooter>
  );
};
