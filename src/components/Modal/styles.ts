import styled from 'styled-components';

export const ModalContainer = styled.div.attrs({
  tabIndex: -1,
  role: 'dialog'
})<{show: boolean}>`
  display: ${props => props.show ? 'block' : 'none'} !important;
  ${props=> props.show && 'backdrop-filter: blur(2px);'}
  ${props=> props.show && 'background-color: rgba(0, 0, 0, 0.5);'}
`;
