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

export const LoadingContainer = styled.div`
  height: 633px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
