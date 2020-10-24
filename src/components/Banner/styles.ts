import { Icons } from 'assets';
import styled from 'styled-components';

export const BannerImage = styled.div<{ src: string; }>`
  position: relative;
  width: 100%;
  height: 20vw;
  background-image: ${props => `url(${props.src})`};
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  @media screen and (max-width: 1200px) {
    height: calc(300px + 5vw);
  }
`;

export const BannerCaption = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-image: linear-gradient(
    to top right, 
    rgba(0, 0, 0, 0.7),
    rgba(0, 0, 0, 0.3)
  );
  color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding-left: 2rem;
  padding-bottom: .5rem;
`;

export const BannerArrow = styled.div<{ left?: boolean; }>`
  position: absolute;
  z-index: 9;
  height: 100%;
  cursor: pointer;
  min-width: 50px;
  background-image: linear-gradient(
    ${ props =>  props.left ? 'to right' : 'to left' },
    rgba(0, 0, 0, 0.2),
    rgba(0, 0, 0, 0)
  );

  ${ props => props.left ? 'left: 0;' : 'right: 0;'}

  &:hover {
    background-image: linear-gradient(
      ${ props =>  props.left ? 'to right' : 'to left' },
      rgba(0, 0, 0, 0.4),
      rgba(0, 0, 0, 0)
    );
  }

  &:active {
    background-image: linear-gradient(
      ${ props =>  props.left ? 'to right' : 'to left' },
      rgba(0, 0, 0, 0.6),
      rgba(0, 0, 0, 0)
    );
  }

  &::before {
    position: absolute;
    content: '';
    width: 50px;
    min-height: 30px;
    background-image: ${ props => props.left ? `url(${Icons['left-chevron']})` : `url(${Icons['right-chevron']})` };
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center;
    top: calc(50% - 15px);
  }
`;
