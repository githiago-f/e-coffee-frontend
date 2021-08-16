import React, { PropsWithChildren } from 'react';
import { Nav } from 'components/Nav';
import { Container } from 'components/Container';

const Theme = (props: PropsWithChildren<{}>) => (
  <main>
    <Nav />
    <Container>
      {props.children}
    </Container>
  </main>
);

export default Theme;
