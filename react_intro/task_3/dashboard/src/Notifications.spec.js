import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Notifications from './Notifications';


describe('Notifications', () => {
    test('renders the notifications title', () => {
      render(<Notifications />);
      const titleElement = screen.getByText(/here is the list of notifications/i);
      expect(titleElement).toBeInTheDocument();
    });
  });

  test('contains a close button', () => {
    render(<Notifications />);
    const buttonElement = screen.getByRole('button');
    expect(buttonElement).toBeInTheDocument();
  });
  

  test('renders three notification items', () => {
    render(<Notifications />);
    const listItems = screen.getAllByRole('listitem');
    expect(listItems.length).toBe(3);
  });


  test('clicking the close button logs message', () => {
    console.log = jest.fn(); // Mock console.log
  
    render(<Notifications />);
    const buttonElement = screen.getByRole('button');
    fireEvent.click(buttonElement);
  
    expect(console.log).toHaveBeenCalledWith('Close button has been clicked');
  });
  