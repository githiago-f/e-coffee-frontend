import styled from 'styled-components';

export const BannerImage = styled.div<{ src: string; }>`
  width: 100%;
  height: calc(30vmax - 5vh);
  background-image: ${props => `url(${props.src})`};
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;
