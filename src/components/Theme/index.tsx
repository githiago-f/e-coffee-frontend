import React, { PropsWithChildren } from 'react';
import { StyledBase } from 'components/StyledBase';
import { Nav } from 'components/Nav';
import { Footer } from 'components/Footer';
import { Container } from 'components/Container';

const Theme = (props: PropsWithChildren<{}>) => {
  return (
    <>
      <Nav />
      <Container>
        {props.children}
      </Container>
      <Footer />
      <StyledBase />
    </>
  );
};

export default Theme;
