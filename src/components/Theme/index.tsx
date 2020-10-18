import React, { PropsWithChildren } from 'react';
import { StyledBase } from 'components/StyledBase';
import { Nav } from 'components/Nav';
import { Footer } from 'components/Footer';

const Theme = (props: PropsWithChildren<{lang?: string;}>) => {
  return (
    <>
      <Nav/>
      <div data-language={props.lang} className="container">
        {props?.children}
      </div>
      <Footer />
      <StyledBase />
    </>
  );
};

export default Theme;
