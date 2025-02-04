import React from 'react';
import { render, screen, fireEvent, act } from '@testing-library/react';
import App from './App';
import { StyleSheetTestUtils } from 'aphrodite';

beforeAll(() => {
  StyleSheetTestUtils.suppressStyleInjection();
});

afterAll(() => {
  StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
});

describe('<App />', () => {
  test('displays Course list title above CourseList component when user logs in', async () => {
    render(<App />);

    // Ensure initially "Log in to continue" is shown
    expect(screen.getByRole('heading', { name: /Log in to continue/i })).toBeInTheDocument();

    // Simulate login
    const emailInput = screen.getByLabelText(/email/i);
    const passwordInput = screen.getByLabelText(/password/i);
    const submitButton = screen.getByRole('button', { name: /OK/i });

    await act(async () => {
      await fireEvent.change(emailInput, { target: { value: 'test@example.com' } });
      await fireEvent.change(passwordInput, { target: { value: 'password123' } });
    });

    expect(submitButton).toBeEnabled();

    await act(async () => {
      fireEvent.click(submitButton);
    });

    // After login, "Course list" should be displayed
    expect(screen.getByRole('heading', { name: /Course list/i })).toBeInTheDocument();
  });

  test('displays News from the School title and paragraph by default', () => {
    render(<App />);
    expect(screen.getByRole('heading', { name: /News from the School/i })).toBeInTheDocument();
    expect(screen.getByText(/Holberton School News goes here/i)).toBeInTheDocument();
  });
});
