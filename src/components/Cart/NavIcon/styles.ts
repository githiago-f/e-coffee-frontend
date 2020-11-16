import styled from 'styled-components';


export const StatusWrapper = styled.div`
  position: relative;
`;

export const CartNumber = styled.div<{ show: boolean }>`
  background-color: brown;
  position: absolute;
  color: #fff;
  text-align: center;
  vertical-align: middle;
  padding-top: .40rem;
  top: -0.6rem;
  right: -0.6rem;
  display: ${ props => props.show ? 'block' : 'none' };
  min-height: 1.3rem;
  min-width: 1.3rem;
  line-height: .6rem;
  font-size: .6rem;
  border-radius: 50%;
`;
