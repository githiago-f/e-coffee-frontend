import styled from 'styled-components';

export const Button = styled.button<{ color?: string }>`
  padding: 20px;
  background-color: ${props => props.color || '#198754'};
  padding: 20px;
  color: #fff;
  width: 100%;
  border: none;

  &:hover {
    filter: brightness(0.8);
  }

  &:active {
    filter: brightness(0.6);
  }
`;
