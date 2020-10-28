import React from 'react';
import { render, screen } from '@testing-library/react';
import Product from 'components/Product';
import { BrowserRouter as Router } from 'react-router-dom';
import { Coffee } from '@dataTypes/coffee';

describe('# Card component test', () => {
  const product = {
    name: 'Hello World!', 
    price: 1.50,
    cover_image_url: '',
    product_id: 1,
    coffeeType: 'latte'
  } as Coffee;

  beforeEach(() => {
    render(
      <Router>
        <Product {...product} />
      </Router>
    );
  });

  it('renders correctly', () => {
    expect(screen).toMatchSnapshot();
  });

  it('should have a "small" Heading component that match RegEx(Hello)', () => {
    const comp = screen.getByText(/Hello/gi);
    expect(comp).toHaveTextContent('Hello World!');
    expect(comp.tagName).toBe('SMALL');
  });

  it('should have a tooltip', () => {
    const comp = screen.getByTitle('See Hello World!');
    expect(comp).toBeInTheDOM();
  });
});
