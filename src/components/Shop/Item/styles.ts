import styled from 'styled-components';

export const ThumbImage = styled.div<{ src: string; }>`
  width: 100%;
  min-height: 15vh;
  background-image: ${props => `url(${props.src})`};
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;

export const RatingContent = styled.div.attrs({
  className: 'col-12 col-sm-12 col-md-4 d-flex'
})`
  justify-content: space-between;
  flex-direction: column;
`;
