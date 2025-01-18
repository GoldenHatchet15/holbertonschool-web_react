import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

describe('App component', () => {
  beforeEach(() => {
    render(<App />);
  });

  test('renders the Header component with the Holberton logo and heading', () => {
    const logo = screen.getByAltText(/holberton logo/i);
    expect(logo).toBeInTheDocument();

    const heading = screen.getByRole('heading', { name: /school dashboard/i });
    expect(heading).toBeInTheDocument();
  });

  test('renders the Login component', () => {
    const loginText = screen.getByText(/login to access the full dashboard/i);
    expect(loginText).toBeInTheDocument();

    const inputs = screen.getAllByTestId('input-element');
    expect(inputs).toHaveLength(2);

    const button = screen.getByRole('button', { name: /ok/i });
    expect(button).toBeInTheDocument();
  });

  test('renders the Footer component with correct text', () => {
    const footerText = screen.getByText(/copyright/i);
    expect(footerText).toBeInTheDocument();
  });
});
