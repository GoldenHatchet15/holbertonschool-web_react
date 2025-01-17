import React from 'react';
import { render } from '@testing-library/react';
import Footer from './Footer';
import { getFooterCopy, getCurrentYear } from '../utils/utils';

// Mock utility functions
jest.mock('../utils/utils', () => ({
  getFooterCopy: jest.fn(() => 'Holberton School'),
  getCurrentYear: jest.fn(() => 2024),
}));

describe('Footer component', () => {
  test('renders the correct copyright text', () => {
    const { getByText } = render(<Footer />);
    const footerText = `Copyright 2024 Holberton School`;

    // Check if the footer text is rendered correctly
    expect(getByText(footerText)).toBeInTheDocument();
  });

  test('renders the correct dynamic text when getFooterCopy isIndex is true', () => {
    const { getFooterCopy } = require('../utils/utils');
    getFooterCopy.mockReturnValue('Holberton School');
    
    const { getByText } = render(<Footer />);
    const footerText = `Copyright 2024 Holberton School`;
    
    // Check if the dynamic text is rendered correctly
    expect(getByText(footerText)).toBeInTheDocument();
  });
});
