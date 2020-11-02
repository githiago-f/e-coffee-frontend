import styled from 'styled-components';

export const Price = styled.span<{ size?: string }>`
  color: green;
  ${props => props.size ? `font-size: ${props.size};` : '' }
`;


