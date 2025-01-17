import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Login from './Login';

describe('Login component', () => {
  test('renders 2 labels, 2 inputs, and 1 button', () => {
    render(<Login />);

    // Check labels
    expect(screen.getByLabelText(/email/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/password/i)).toBeInTheDocument();

    // Check inputs
    expect(screen.getAllByTestId('input-element')).toHaveLength(2);

    // Check button
    expect(screen.getByText('OK')).toBeInTheDocument();
  });

  test('input gets focused when label is clicked', () => {
    render(<Login />);
    const emailLabel = screen.getByLabelText(/email/i);
    const emailInput = screen.getByLabelText(/email/i);

    userEvent.click(emailLabel);

    // Verify input focus
    expect(emailInput).toHaveFocus();
  });

  test('input gets focused when tabbed into', async () => {
    render(<Login />);
    const emailInput = screen.getByLabelText(/email/i);

    // Simulate tabbing into the email input
    await userEvent.tab();
    expect(emailInput).toHaveFocus();
  });
});
