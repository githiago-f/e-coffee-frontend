import React from 'react';
import { render, screen } from '@testing-library/react';
import Card from 'components/Card';

describe('# Card component test', () => {
  const title = 'Hello World!';

  beforeEach(() => {
    render(<Card card={{ title }} />);
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
