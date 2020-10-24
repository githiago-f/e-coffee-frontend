import styled from 'styled-components';

export const ProductBanner = styled.div<{ src: string }>`
  height: 300px;
  width: 100%;
  background-image: ${props => `url(${props.src})`};
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;
