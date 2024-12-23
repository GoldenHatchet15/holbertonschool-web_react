import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Login from './Login';

test('renders 2 labels, 2 inputs, and 1 button', () => {
  const { getAllByTestId, getByText } = render(<Login />);
  const labels = getAllByTestId('input-element');
  const button = getByText('OK');

  expect(labels).toHaveLength(2); // 2 inputs
  expect(button).toBeInTheDocument();
});

test('input gets focused when label is clicked', () => {
  const { getByLabelText } = render(<Login />);
  const emailInput = getByLabelText('Email:');
  const emailLabel = getByLabelText('Email:');

  fireEvent.click(emailLabel);
  expect(emailInput).toHaveFocus();
});
