import React from 'react';
import { render, screen } from '@testing-library/react';
import Product from 'components/Product';

describe('# Card component test', () => {
  const title = 'Hello World!';

  beforeEach(() => {
    render(<Product title={title} />);
  });

  it('should Render Card component without crashing', () => {
    expect(screen).toMatchSnapshot();
  });

  it('Contains small with "Hello World!"', () => {
    const received = screen.getByText(/Hello/g);
    expect(received.innerHTML).toBe('Hello World!');
    expect(received.tagName.toLowerCase()).toBe('small');
  });
});
