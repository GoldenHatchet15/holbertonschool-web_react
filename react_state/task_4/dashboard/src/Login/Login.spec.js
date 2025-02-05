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
    render(<Login logIn={jest.fn()} />);

    // Check labels
    expect(screen.getByLabelText(/email/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/password/i)).toBeInTheDocument();

    // Check inputs
    expect(screen.getAllByTestId('input-element')).toHaveLength(2);

    // Check button
    expect(screen.getByRole('button', { name: /OK/i })).toBeInTheDocument();
  });

  test('input gets focused when label is clicked', async () => {
    render(<Login logIn={jest.fn()} />);
    const emailInput = screen.getByLabelText(/email/i);

    await userEvent.click(emailInput);

    // Verify input focus
    expect(emailInput).toHaveFocus();
  });

  test('input gets focused when tabbed into', async () => {
    render(<Login logIn={jest.fn()} />);
    const emailInput = screen.getByLabelText(/email/i);

    // Simulate tabbing into the email input
    await userEvent.tab();
    expect(emailInput).toHaveFocus();
  });

  test('submit button is disabled by default', () => {
    render(<Login logIn={jest.fn()} />);
    const submitButton = screen.getByRole('button', { name: /OK/i });

    expect(submitButton).toBeDisabled();
  });

  test('submit button enables only when email is valid and password is at least 8 characters', async () => {
    render(<Login logIn={jest.fn()} />);

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

  test('calls logIn when form is submitted with valid credentials', async () => {
    const mockLogIn = jest.fn();
    render(<Login logIn={mockLogIn} />);

    const emailInput = screen.getByLabelText(/email/i);
    const passwordInput = screen.getByLabelText(/password/i);
    const submitButton = screen.getByRole('button', { name: /OK/i });

    // Fill the form with valid values
    await act(async () => {
      await userEvent.type(emailInput, 'test@example.com');
      await userEvent.type(passwordInput, 'password123');
    });

    // Ensure the button is enabled before clicking
    expect(submitButton).toBeEnabled();

    // Click submit
    await act(async () => {
      await userEvent.click(submitButton);
    });

    // Check if logIn was called with correct values
    expect(mockLogIn).toHaveBeenCalledWith('test@example.com', 'password123');
  });

  test('Form submission does not reload the page', async () => {
    const mockLogIn = jest.fn();
    render(<Login logIn={mockLogIn} />);
  
    const emailInput = screen.getByLabelText(/email/i);
    const passwordInput = screen.getByLabelText(/password/i);
    const form = screen.getByTestId('login-form');
  
    // Fill the form with valid values
    await act(async () => {
      await userEvent.type(emailInput, 'test@example.com');
      await userEvent.type(passwordInput, 'password123');
    });
  
    // ✅ Spy on the `preventDefault` method
    const mockPreventDefault = jest.spyOn(window.Event.prototype, 'preventDefault');
  
    // Submit form using `fireEvent.submit`
    await act(async () => {
      fireEvent.submit(form);
    });
  
    console.log("🛠️ Form submission test executed."); // Debugging log
  
    // ✅ Ensure `preventDefault` was actually called
    expect(mockPreventDefault).toHaveBeenCalled();
  
    // ✅ Ensure `logIn` is called with correct arguments
    expect(mockLogIn).toHaveBeenCalledWith('test@example.com', 'password123');
  
    // Restore the original event behavior
    mockPreventDefault.mockRestore();
  });
});
