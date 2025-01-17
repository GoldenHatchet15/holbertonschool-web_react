import React from 'react';
import { render, act } from '@testing-library/react';
import Login from './Login';

describe('Login component', () => {
  test('renders 2 labels, 2 inputs, and 1 button', () => {
    const { getAllByTestId, getByText, getByLabelText } = render(<Login />);
    
    // Verify the labels
    const emailLabel = getByLabelText(/email/i);
    const passwordLabel = getByLabelText(/password/i);
    expect(emailLabel).toBeInTheDocument();
    expect(passwordLabel).toBeInTheDocument();

    // Verify the inputs
    const inputs = getAllByTestId('input-element');
    expect(inputs).toHaveLength(2);

    // Verify the button
    const button = getByText('OK');
    expect(button).toBeInTheDocument();
  });

  test('input gets focused when label is clicked', () => {
    const { getByLabelText } = render(<Login />);
    const emailLabel = getByLabelText(/email/i);
    const emailInput = getByLabelText(/email/i);

    act(() => {
      emailLabel.click(); // Simulate clicking the label
    });

    // Verify the input gains focus
    expect(emailInput).toHaveFocus();
  });
});
