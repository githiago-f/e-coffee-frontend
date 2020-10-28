import { Icons } from 'assets';
import styled from 'styled-components';

const downRating = Icons['down-rating-coffee'];
const upRating = Icons['up-rating-coffee'];

export const RatingCoffee = styled.div<{ active?: boolean }>`
  min-height: 25px;
  min-width: 25px;
  background-image: url(${ props => props.active ? upRating : downRating});
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
`;

export const RatingContainer = styled.div`
  display: flex;
  flex-direction: row;
`;
