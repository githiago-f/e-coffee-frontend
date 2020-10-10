import React, { PropsWithChildren } from 'react';
import { StyledBase } from 'components/StyledBase';

const Theme = (props: PropsWithChildren<{}>) => {
  return (
    <>
      {props?.children}
      <StyledBase />
    </>
  );
};

export default Theme;
