import React from 'react';
import { render, act } from '@testing-library/react';
import Login from './Login';

test('renders 2 labels, 2 inputs, and 1 button', () => {
  const { getAllByTestId, getByText } = render(<Login />);
  const inputs = getAllByTestId('input-element');
  const button = getByText('OK');

  expect(inputs).toHaveLength(2); // Check for 2 input elements
  expect(button).toBeInTheDocument(); // Check for button
});

test('input gets focused when label is clicked', () => {
  const { getByLabelText } = render(<Login />);
  const emailLabel = getByLabelText('Email:');
  const emailInput = getByLabelText('Email:');

  act(() => {
    emailLabel.click();
  });

  expect(emailInput).toHaveFocus();
});
