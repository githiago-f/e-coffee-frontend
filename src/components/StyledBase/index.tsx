import { createGlobalStyle } from 'styled-components';

export const StyledBase = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,700;1,400&display=swap');

  * {
    margin: 0;
    padding: 0;
    box-sizing:border-box;
  }

  body {
    font-family: 'Roboto', Arial, 'Helvetica Neue', sans-serif;
    height: 100vh;
  }

  .screen-relative-h-75 {
    height: 75vh;
  }
`;
