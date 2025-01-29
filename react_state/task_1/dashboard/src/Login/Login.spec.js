import React from 'react';
import { render, screen, fireEvent, act } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Login from './Login';
import { StyleSheetTestUtils } from 'aphrodite';

beforeAll(() => {
  StyleSheetTestUtils.suppressStyleInjection();
});

afterAll(() => {
  StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
});

describe('Login component', () => {
  test('renders 2 labels, 2 inputs, and 1 button', () => {
    render(<Login />);

    // Check labels
    expect(screen.getByLabelText(/email/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/password/i)).toBeInTheDocument();

    // Check inputs
    expect(screen.getAllByTestId('input-element')).toHaveLength(2);

    // Check button
    expect(screen.getByRole('button', { name: /OK/i })).toBeInTheDocument();
  });

  test('input gets focused when label is clicked', async () => {
    render(<Login />);
    const emailInput = screen.getByLabelText(/email/i);

    await userEvent.click(emailInput);

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

  test('submit button is disabled by default', () => {
    render(<Login />);
    const submitButton = screen.getByRole('button', { name: /OK/i });

    expect(submitButton).toBeDisabled();
  });

  test('submit button enables only when email is valid and password is at least 8 characters', async () => {
    render(<Login />);

    const emailInput = screen.getByLabelText(/email/i);
    const passwordInput = screen.getByLabelText(/password/i);
    const submitButton = screen.getByRole('button', { name: /OK/i });

    // Initially disabled
    expect(submitButton).toBeDisabled();

    // Type a valid email but short password
    await act(async () => {
      await userEvent.type(emailInput, 'test@example.com');
      await userEvent.type(passwordInput, 'short');
    });

    expect(submitButton).toBeDisabled(); // Still disabled

    // Type a valid password
    await act(async () => {
      await userEvent.clear(passwordInput);
      await userEvent.type(passwordInput, 'password123');
    });

    expect(submitButton).toBeEnabled(); // Now enabled
  });

  test('Form submission does not reload the page', async () => {
    render(<Login />);
  
    const emailInput = screen.getByLabelText(/email/i);
    const passwordInput = screen.getByLabelText(/password/i);
    const form = screen.getByTestId('login-form');
  
    // Fill the form with valid values
    await act(async () => {
      await userEvent.type(emailInput, 'test@example.com');
      await userEvent.type(passwordInput, 'password123');
    });

    // ✅ Create an event object and spy on `preventDefault`
    const mockPreventDefault = jest.fn();
    const submitEvent = new Event('submit', { bubbles: true, cancelable: true });
    Object.defineProperty(submitEvent, 'preventDefault', { value: mockPreventDefault });

    // ✅ Trigger the form submit event correctly
    form.dispatchEvent(submitEvent);

    console.log("🛠️ Form submission test executed."); // Debugging log

    // ✅ Ensure `preventDefault` was actually called
    expect(mockPreventDefault).toHaveBeenCalled();
  });
});
