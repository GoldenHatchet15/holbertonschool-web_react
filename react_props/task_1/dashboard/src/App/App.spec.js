import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

describe('App component', () => {
  beforeEach(() => {
    render(<App />);
  });

  test('renders the Header component with the Holberton logo and heading', () => {
    // Check for the Holberton logo
    const logo = screen.getByAltText(/holberton logo/i);
    expect(logo).toBeInTheDocument();

    // Check for the h1 element with the text "School dashboard"
    const heading = screen.getByRole('heading', { name: /school dashboard/i });
    expect(heading).toBeInTheDocument();
  });

  test('renders the Login component', () => {
    // Check for the text in the Login component
    const loginText = screen.getByText(/login to access the full dashboard/i);
    expect(loginText).toBeInTheDocument();

    // Check for two input elements in the Login component
    const inputs = screen.getAllByTestId('input-element');
    expect(inputs).toHaveLength(2);

    // Check for the button in the Login component
    const button = screen.getByRole('button', { name: /ok/i });
    expect(button).toBeInTheDocument();
  });

  test('renders the Footer component with correct text', () => {
    // Check for the Footer component text
    const footerText = screen.getByText(/copyright/i);
    expect(footerText).toBeInTheDocument();
  });
});
