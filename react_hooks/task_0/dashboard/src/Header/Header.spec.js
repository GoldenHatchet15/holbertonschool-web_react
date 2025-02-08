import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Header from './Header';
import AppContext from '../Context/context';
import { StyleSheetTestUtils } from 'aphrodite';

// Mock the logo import
jest.mock('../assets/holberton-logo.jpg', () => 'holberton-logo.jpg');

beforeAll(() => {
  StyleSheetTestUtils.suppressStyleInjection();
});

afterAll(() => {
  StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
});

describe('Header component', () => {
  test('renders the Holberton logo', () => {
    render(<Header />);
    const logo = screen.getByAltText('Holberton logo');
    
    expect(logo).toBeInTheDocument();
    expect(logo.src).toContain('holberton-logo.jpg');
  });

  test('renders h1 element with correct text', () => {
    render(<Header />);
    const heading = screen.getByText('School dashboard');

    expect(heading).toBeInTheDocument();
    expect(heading.tagName).toBe('H1');
  });

  test('does not render logout section by default', () => {
    render(
      <AppContext.Provider value={{ user: { isLoggedIn: false } }}>
        <Header />
      </AppContext.Provider>
    );

    const logoutSection = screen.queryByTestId('logout-section');
    expect(logoutSection).not.toBeInTheDocument();
  });

  test('renders logout section when user is logged in', () => {
    render(
      <AppContext.Provider value={{ user: { isLoggedIn: true, email: "test@example.com" } }}>
        <Header />
      </AppContext.Provider>
    );

    const logoutSection = screen.getByTestId('logout-section');
    expect(logoutSection).toBeInTheDocument();
    expect(logoutSection.textContent).toContain('Welcome test@example.com');
  });

  test('calls logOut when logout is clicked', () => {
    const mockLogOut = jest.fn();

    render(
      <AppContext.Provider value={{ user: { isLoggedIn: true, email: "test@example.com" }, logOut: mockLogOut }}>
        <Header />
      </AppContext.Provider>
    );

    const logoutSection = screen.getByTestId('logout-section');
    fireEvent.click(logoutSection);

    expect(mockLogOut).toHaveBeenCalled();
  });
});
