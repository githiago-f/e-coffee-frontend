import styled from 'styled-components';

export const CardThumb = styled.div<{ image: string }>`
  width: 100%;
  height: 100%;
  background-repeat: no-repeat;
  background-image: ${ props => `url(${props.image})` };
  background-position: center;
  background-size: cover;
`;
