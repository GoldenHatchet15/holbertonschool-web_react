import React from 'react';
import { render } from '@testing-library/react';
import Login from './Login';

test('renders Login component', () => {
  const { getByLabelText } = render(<Login />);
  expect(getByLabelText('Email:')).toBeInTheDocument();
  expect(getByLabelText('Password:')).toBeInTheDocument();
});
