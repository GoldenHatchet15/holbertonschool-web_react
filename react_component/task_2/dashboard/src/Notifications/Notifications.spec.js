import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Notifications from './Notifications';

describe('Notifications Component', () => {
  const notifications = [
    { id: 1, type: 'default', value: 'New course available' },
    { id: 2, type: 'urgent', value: 'Payment required' },
  ];

  test('renders the title Your Notifications always', () => {
    render(<Notifications />);
    expect(screen.getByText('Your notifications')).toBeInTheDocument();
  });

  test('logs "Notification {id} has been marked as read" when a notification is clicked', () => {
    const consoleLogSpy = jest.spyOn(console, 'log');
    render(<Notifications displayDrawer={true} notifications={notifications} />);

    const item = screen.getByText('New course available');
    fireEvent.click(item);

    expect(consoleLogSpy).toHaveBeenCalledWith('Notification 1 has been marked as read');
    consoleLogSpy.mockRestore();
  });
});
