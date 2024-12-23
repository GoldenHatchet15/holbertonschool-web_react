import React from 'react';
import { render } from '@testing-library/react';
import Footer from './Footer';
import { getFooterCopy, getCurrentYear } from '../utils/utils';

jest.mock('../utils/utils', () => ({
  getFooterCopy: jest.fn(() => 'Holberton School'),
  getCurrentYear: jest.fn(() => 2024), // Mock the year
}));

test('renders the correct copyright text', () => {
  const { getByText } = render(<Footer />);
  const footerText = `Copyright 2024 Holberton School`;

  expect(getByText(footerText)).toBeInTheDocument();
});
