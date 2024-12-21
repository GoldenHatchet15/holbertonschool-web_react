import { render, screen } from '@testing-library/react';
import App from './App';

describe('App component', () => {
    beforeEach(() => {
        document.body.innerHTML = '';  // Clear the body to ensure no leftover markup from previous tests
        render(<App />);
    });

    test('renders two input elements', () => {
        const inputElements = screen.getAllByTestId('input-element');
        expect(inputElements.length).toBe(2);  // There should be exactly two input fields
    });

    test('renders two label elements with the text "Email" and "Password"', () => {
        const emailLabel = screen.getByText(/email/i);  // Using regex for case-insensitive matching
        expect(emailLabel).toBeInTheDocument();
        const passwordLabel = screen.getByText(/password/i);  // Using regex for case-insensitive matching
        expect(passwordLabel).toBeInTheDocument();
    });

    test('renders a button with the text "OK"', () => {
        const button = screen.getByRole('button', { name: /ok/i });  // Using regex for case-insensitive matching
        expect(button).toBeInTheDocument();
    });
});

