import styled from 'styled-components';

export const Price = styled.span<{ size?: string, bold?: string }>`
  color: green;
  ${props => props.size ? `font-size: ${props.size};` : '' }
  ${props => props.bold ? `font-weight: ${props.bold}`: '' }
`;


