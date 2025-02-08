import React from 'react';
import { render, screen } from '@testing-library/react';
import Footer from './Footer';
import AppContext from '../Context/context';
import { getFooterCopy, getCurrentYear } from '../utils/utils';

// Mock utility functions
jest.mock('../utils/utils', () => ({
  getFooterCopy: jest.fn(() => 'Holberton School'),
  getCurrentYear: jest.fn(() => 2024),
}));

describe('Footer component', () => {
  test('renders the correct copyright text', () => {
    render(<Footer />);
    const footerText = `Copyright 2024 Holberton School`;

    expect(screen.getByText(footerText)).toBeInTheDocument();
  });

  test('does not display "Contact us" link when user is logged out', () => {
    render(
      <AppContext.Provider value={{ user: { isLoggedIn: false } }}>
        <Footer />
      </AppContext.Provider>
    );

    expect(screen.queryByText('Contact us')).not.toBeInTheDocument();
  });

  test('displays "Contact us" link when user is logged in', () => {
    render(
      <AppContext.Provider value={{ user: { isLoggedIn: true } }}>
        <Footer />
      </AppContext.Provider>
    );

    expect(screen.getByText('Contact us')).toBeInTheDocument();
    expect(screen.getByText('Contact us').closest('a')).toHaveAttribute('href', 'mailto:support@holbertonschool.com');
  });
});
