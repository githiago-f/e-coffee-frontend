import styled from 'styled-components';

export const Striped = styled.s`
  font-size: 1rem;
  color: #4D4D51;
  line-height: 1.5rem;
`;

export const LoadingContainer = styled.div<{height?: string;}>`
  height: ${props => props.height ? props.height : '633px'};
  display: flex;
  justify-content: center;
  align-items: center;
`;
