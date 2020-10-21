import styled from 'styled-components';
import { Link as RLink } from 'react-router-dom';

export const Link = styled(RLink)<{color?: string;}>`
  text-decoration: none;
  color: ${ props => props.color || '#000' };

  &:hover {
    color: ${ props => props.color || '#000' };
  }

  &:visited {
    color: ${ props => props.color || '#000' };
  }
`;
