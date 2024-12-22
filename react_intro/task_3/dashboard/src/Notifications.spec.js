import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Notifications from './Notifications';

describe('Notifications Component', () => {
  beforeEach(() => {
    render(<Notifications />);
  });

  test('renders the notifications title', () => {
    const titleElement = screen.getByText(/here is the list of notifications/i);
    expect(titleElement).toBeInTheDocument();
  });

  test('contains a close button', () => {
    const buttonElement = screen.getByRole('button', {name: /close/i});  // Using role and name for better targeting
    expect(buttonElement).toBeInTheDocument();
  });

  test('renders three notification items', () => {
    const listItems = screen.getAllByRole('listitem');
    expect(listItems.length).toBe(3);
  });

  test('clicking the close button logs message', () => {
    console.log = jest.fn(); // Mock console.log

    const buttonElement = screen.getByRole('button', {name: /close/i});
    fireEvent.click(buttonElement);

    expect(console.log).toHaveBeenCalledWith('Close button has been clicked');
  });
});
