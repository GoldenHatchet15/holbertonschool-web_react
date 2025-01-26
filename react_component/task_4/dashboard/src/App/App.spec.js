import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

describe('<App />', () => {
  test('displays Course list title above CourseList component when isLoggedIn is true', () => {
    render(<App isLoggedIn={true} />);
    expect(screen.getByRole('heading', { name: /Course list/i })).toBeInTheDocument();
    expect(screen.getByText(/Available courses/i)).toBeInTheDocument();
  });

  test('displays Log in to continue title above Login component when isLoggedIn is false', () => {
    render(<App isLoggedIn={false} />);
    expect(screen.getByRole('heading', { name: /Log in to continue/i })).toBeInTheDocument();
    expect(screen.getByText(/Login to access the full dashboard/i)).toBeInTheDocument();
  });

  test('displays News from the School title and paragraph by default', () => {
    render(<App />);
    expect(screen.getByRole('heading', { name: /News from the School/i })).toBeInTheDocument();
    expect(screen.getByText(/Holberton School News goes here/i)).toBeInTheDocument();
  });
});
