import styled from 'styled-components';

type ImageProps = { 
  height?: string; 
  width?: string; 
};

export const Image = styled.img<ImageProps>`
  -o-object-fit: cover;
  object-fit: cover;
  width: ${props => props.width ? props.width : '100%'};
  height: ${props => props.height ? props.height : 'auto'};
  padding: 5px;
`;
