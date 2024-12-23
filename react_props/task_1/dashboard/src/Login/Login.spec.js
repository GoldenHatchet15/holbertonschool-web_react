import React from 'react';
import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Login from './Login';

test('renders 2 labels, 2 inputs, and 1 button', () => {
  const { getAllByTestId, getByText } = render(<Login />);
  const inputs = getAllByTestId('input-element');
  const button = getByText('OK');

  expect(inputs).toHaveLength(2); // Check for 2 inputs
  expect(button).toBeInTheDocument(); // Check for button
});

test('input gets focused when label is clicked', async () => {
  const user = userEvent.setup(); // Create a user event simulation
  const { getByLabelText } = render(<Login />);
  const emailLabel = getByLabelText('Email:');
  const emailInput = getByLabelText('Email:');

  await user.click(emailLabel); // Simulate user clicking on the label

  expect(emailInput).toHaveFocus(); // Check if the input is focused
});
