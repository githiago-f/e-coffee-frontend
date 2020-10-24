import React from 'react';
import { render, screen } from '@testing-library/react';
import Product from 'components/Product';
import { BrowserRouter as Router } from 'react-router-dom';

describe('# Card component test', () => {
  const title = 'Hello World!';

  beforeEach(() => {
    render(
      <Router>
        <Product title={title} />
      </Router>
    );
  });

  it('renders correctly', () => {
    expect(screen).toMatchSnapshot();
  });

  it('got a small Heading component that match RegEx(Hello)', () => {
    const comp = screen.getByText(/Hello/gi);
    expect(comp.innerHTML).toBe('Hello World!');
    expect(comp.tagName).toBe('SMALL');
  });
});
