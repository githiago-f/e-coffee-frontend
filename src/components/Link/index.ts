import styled from 'styled-components';
import { Link as RLink } from 'react-router-dom';

export const Link = styled(RLink).attrs<{color?: string;}>({
  onClick: ()=>window.scrollTo({top:0})
})`
  text-decoration: none;
  color: ${ props => props.color || '#000' };

  &:hover {
    color: ${ props => props.color || '#000' };
  }

  &:visited {
    color: ${ props => props.color || '#000' };
  }
`;
