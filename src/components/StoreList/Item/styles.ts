import styled from 'styled-components';

export const ThumbImage = styled.div<{ src: string; }>`
  width: 100%;
  min-height: 150px;
  background-image: ${props => `url(${props.src})`};
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  @media only screen and (max-width: 1200px) {
    min-height: 100px;
  }

  @media only screen and (max-width: 766px) {
    min-height: calc(200px + 5vw);
    background: white;
  }
`;

export const RatingContent = styled.div.attrs({
  className: 'col-12 col-sm-12 col-md-4 d-flex'
})`
  justify-content: space-between;
  flex-direction: column;
`;
