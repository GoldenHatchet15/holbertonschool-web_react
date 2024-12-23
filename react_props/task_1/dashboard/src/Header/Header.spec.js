import React from 'react';
import { render } from '@testing-library/react';
import Header from './Header';

// Mock the logo import
jest.mock('../assets/holberton-logo.jpg', () => 'holberton-logo.jpg');

test('renders Holberton logo in Header', () => {
  const { getByAltText } = render(<Header />);
  const logo = getByAltText('Holberton logo');
  expect(logo).toBeInTheDocument();
  expect(logo.src).toContain('holberton-logo.jpg');
});

test('renders h1 element with correct text', () => {
  const { getByText } = render(<Header />);
  const heading = getByText('School dashboard');
  expect(heading).toBeInTheDocument();
  expect(heading.tagName).toBe('H1');
});
