import styled from 'styled-components';

export const ProductThumb = styled.div<{ image: string }>`
  width: 100%;
  height: 25vh;
  background-repeat: no-repeat;
  background-image: ${ props => `url(${props.image})` };
  background-position: center;
  background-size: cover;

  @media screen and (max-width: 1200px) {
    height: calc(35vh - 10vw);
  }

  @media screen and (min-width: 750px) and (max-width: 990px) {
    height: 150px;
  }
`;


